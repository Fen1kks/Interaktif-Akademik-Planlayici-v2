import * as pdfjsLib from 'pdfjs-dist';
// @ts-ignore
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

pdfjsLib.GlobalWorkerOptions.workerSrc = workerUrl;

export interface ParsedCourse {
  id: string;
  grade: string;
}

/**
 * Normalizes text by converting Greek characters to Latin equivalents
 * and handling other common issues.
 */
function normalizeText(text: string): string {
    return text
        .replace(/Α/g, "A")
        .replace(/Β/g, "B")
        .replace(/Γ/g, "G")
        .replace(/Δ/g, "D")
        .replace(/Ε/g, "E")
        .replace(/Ζ/g, "Z")
        .replace(/Η/g, "H")
        .replace(/Θ/g, "TH")
        .replace(/Ι/g, "I")
        .replace(/Κ/g, "K")
        .replace(/Λ/g, "L")
        .replace(/Μ/g, "M")
        .replace(/Ν/g, "N")
        .replace(/Ξ/g, "X")
        .replace(/Ο/g, "O")
        .replace(/Π/g, "P")
        .replace(/Ρ/g, "R")
        .replace(/Σ/g, "S")
        .replace(/Τ/g, "T")
        .replace(/Υ/g, "Y")
        .replace(/Φ/g, "F")
        .replace(/Χ/g, "X")
        .replace(/Ψ/g, "PS")
        .replace(/Ω/g, "O");
}

/**
 * Extracts all text content from a PDF file.
 */
async function extractTextFromPDF(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    
    let fullText = "";
    
    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
            .map((item: any) => item.str)
            .join(" "); // Join with space to keep lines separated somewhat logically
        fullText += pageText + "\n";
    }
    
    return fullText;
}

/**
 * Parses e-Devlet (YÖK) format transcript.
 * Looks for lines starting with Course Code and ending with Grade.
 */
function parseEDevletFormat(text: string): ParsedCourse[] {
    const results: ParsedCourse[] = [];
    const normalized = normalizeText(text);
    
    // Regex for e-Devlet format
    const regex = /\b([A-Z]{2,4}\s*\d{3})\b.*?\b(AA|BA|BB|CB|CC|DC|DD|FD|FF)(?:\([A-Z,\s]+\))?/g;
    
    let match;
    while ((match = regex.exec(normalized)) !== null) {
        let courseId = match[1].replace(/\s+/g, " ").trim();
        let grade = match[2];
        const matchText = match[0];
        
        // --- SWALLOW PROTECTION ---
        const idLength = match[1].length; 
        const contentAfterId = matchText.substring(matchText.indexOf(match[1]) + idLength);
        const nestedIdMatch = contentAfterId.match(/\b([A-Z]{2,4}\s*\d{3})\b/);
        
        if (nestedIdMatch) {
            console.warn(`⚠️ E-DEVLET SWALLOW DETECTED: "${courseId}" swallowed "${nestedIdMatch[1]}" with grade "${grade}". Recovering...`);
            
            const nestedIdOffset = contentAfterId.indexOf(nestedIdMatch[0]);
            const contentAfterIdStartIndex = matchText.indexOf(match[1]) + idLength;
            const newIndex = match.index + contentAfterIdStartIndex + nestedIdOffset;
            
            regex.lastIndex = newIndex;
            continue;
        }
        // ---------------------------

        results.push({ id: courseId, grade });
    }
    
    return results;
}

/**
 * Parses School/OBS format transcript.
 * More loose strategy looking for Course Code followed eventually by a Grade.
 */
function parseSchoolFormat(text: string): ParsedCourse[] {
    const results: ParsedCourse[] = [];
    const normalized = normalizeText(text);
    
    // Regex for School/OBS format (word boundary removed at the end)
    const regex = /\b([A-Z]{2,4}\s*\d{3})\b.*?\b(AA|BA|BB|CB|CC|DC|DD|FD|FF)(?:\([A-Z,\s]+\))?/g;
    
    let match;
    while ((match = regex.exec(normalized)) !== null) {
        let courseId = match[1].replace(/\s+/g, " ").trim();
        let grade = match[2];
        const matchText = match[0];
        
        // --- SWALLOW PROTECTION ---
        // Check if there is another course code INSIDE the matched text (between ID and Grade)
        const idLength = match[1].length; 
        const contentAfterId = matchText.substring(matchText.indexOf(match[1]) + idLength);
        const nestedIdMatch = contentAfterId.match(/\b([A-Z]{2,4}\s*\d{3})\b/);
        
        if (nestedIdMatch) {
            console.warn(`⚠️ Transcript Parser: "${courseId}" swallowed "${nestedIdMatch[1]}" with grade "${grade}". Recovering...`);
            
            const nestedIdOffset = contentAfterId.indexOf(nestedIdMatch[0]);
            const contentAfterIdStartIndex = matchText.indexOf(match[1]) + idLength;
            const newIndex = match.index + contentAfterIdStartIndex + nestedIdOffset;
            
            regex.lastIndex = newIndex;
            continue;
        }
        // ---------------------------
        
        results.push({
            id: courseId,
            grade: grade 
        });
    }

    return results;
}

export async function parseTranscript(file: File): Promise<ParsedCourse[]> {
    try {
        const text = await extractTextFromPDF(file);
        
        // E-Devlet check (Barcode presence)
        if (text.includes("YOKTR") || text.includes("e-Devlet")) { // "YOKTR" logic as requested
            console.log("Detected e-Devlet format");
            return parseEDevletFormat(text);
        } else {
            console.log("Detected School/OBS format");
            return parseSchoolFormat(text);
        }
    } catch (error) {
        console.error("Error parsing transcript:", error);
        throw new Error("Failed to parse PDF file.");
    }
}
