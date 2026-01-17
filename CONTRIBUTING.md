# 🤝 Katkıda Bulunma Rehberi

Bu proje açık kaynaklıdır ve katkılarınızı memnuniyetle karşılıyoruz! Bu rehber, yeni bir bölüm eklemek veya mevcut bölümleri güncellemek isteyenler için adım adım talimatlar içerir.

## 📋 İçindekiler

- [Yeni Bölüm Ekleme](#-yeni-bölüm-ekleme)
- [Veri Yapısı Açıklaması](#-veri-yapısı-açıklaması)
- [Ön Koşul Türleri](#-ön-koşul-türleri)
- [Seçmeli Havuzları](#-seçmeli-havuzları)
- [Sıralama ve Formatlar](#-sıralama-ve-formatlar)
- [Test Etme](#-test-etme)

---

## 🎓 Yeni Bölüm Ekleme

### Adım 1: Bölüm Dosyası Oluşturma

`data/` klasörüne yeni bir `.js` dosyası ekleyin. Dosya adı bölüm kodu olmalıdır (örn: `me.js` için Makine Mühendisliği).

```javascript
// data/me.js

// 1. Bölüme özel seçmeli havuzlarını tanımlayın (isteğe bağlı)
const meRexxPool3 = [
  { id: "ME301", name: "Kısa Ders Adı", credits: 3 },
  { id: "ME302", name: "Başka Ders", credits: 3 },
].sort((a, b) => a.id.localeCompare(b.id));

// 2. Bölümü kaydedin
window.registerDepartment("ME", {
  name: "Mechanical Engineering",
  curriculum: [
    // Derslerinizi buraya ekleyin (aşağıda detaylı açıklama var)
  ],
});
```

### Adım 2: Müfredatı Tanımlama

Her ders için şu formatı kullanın:

```javascript
{
    id: "MATH131",           // Ders kodu (benzersiz olmalı)
    name: "Calculus I",      // Ders adı (kısa ve ingilizce, max 20 karakter önerilir
    credits: 4,              // Kredi sayısı (veya [3, 4, 2] gibi array)
    prereqs: ["MATH101"],    // Ön koşul dersleri (array)
    coreqs: ["PHYS101"],     // Eş koşul dersleri (isteğe bağlı)
    term: 1,                 // Dönem numarası (1-8 arası, 9 = ekstra)
    options: englishPool     // Seçmeli havuzu (isteğe bağlı)
}
```

**Örnek Tam Müfredat:**

```javascript
curriculum: [
  // FRESHMAN - TERM 1
  { id: "MATH131", name: "Calculus I", credits: 4, prereqs: [], term: 1 },
  { id: "PHYS101", name: "Physics I", credits: 4, prereqs: [], term: 1 },
  {
    id: "REXX1",
    name: "Restricted Elective",
    credits: 3,
    prereqs: [],
    term: 1,
    options: englishPool,
  },

  // FRESHMAN - TERM 2
  {
    id: "MATH132",
    name: "Calculus II",
    credits: 4,
    prereqs: ["MATH131"],
    term: 2,
  },
  {
    id: "PHYS102",
    name: "Physics II",
    credits: 4,
    prereqs: ["PHYS101"],
    term: 2,
    coreqs: ["PHYS103"],
  },
  {
    id: "PHYS103",
    name: "Physics Lab",
    credits: 2,
    prereqs: [],
    term: 2,
    coreqs: ["PHYS102"],
  },

  // ... diğer dönemler

  // EXTRA COURSES - TERM 9
  {
    id: "EXTRA-1",
    name: "Extra Course 1",
    credits: [3, 4, 2],
    prereqs: [],
    term: 9,
  },
  {
    id: "EXTRA-2",
    name: "Extra Course 2",
    credits: [3, 4, 2],
    prereqs: [],
    term: 9,
  },
];
```

---

## 📊 Veri Yapısı Açıklaması

### Zorunlu Alanlar

| Alan      | Tip          | Açıklama                                                  |
| --------- | ------------ | --------------------------------------------------------- |
| `id`      | String       | Benzersiz ders kodu (örn: "MATH131")                      |
| `name`    | String       | Ders adı (kısa ve öz)                                     |
| `credits` | Number/Array | Kredi sayısı (3, 4) veya değişken krediler için [3, 4, 2] |
| `prereqs` | Array        | Ön koşul ders kodları listesi                             |
| `term`    | Number       | Dönem numarası (1-8 normal, 9 ekstra)                     |

### İsteğe Bağlı Alanlar

| Alan      | Tip   | Açıklama                                  |
| --------- | ----- | ----------------------------------------- |
| `coreqs`  | Array | Eş koşul dersleri (aynı dönemde alınmalı) |
| `options` | Array | Seçmeli ders havuzu referansı             |

---

## 🔐 Ön Koşul Türleri

### 1. Basit Ön Koşul

Dersi geçmiş olmanız gerekir (DD veya üstü).

```javascript
prereqs: ["MATH131", "PHYS101"];
```

### 2. Zayıf Ön Koşul (Weak Prerequisite)

Dersi almış olmanız yeterlidir (FF bile olsa). Ders kodunun sonuna `!` ekleyin.

```javascript
prereqs: ["CHEM101!"]; // CHEM101'i almış olmak yeterli, geçmek şart değil
```

### 3. Eş Koşul (Co-requisite)

Aynı dönemde alınması gereken dersler.

```javascript
{
    id: "PHYS102",
    name: "Physics II",
    credits: 4,
    prereqs: ["PHYS101"],
    term: 2,
    coreqs: ["PHYS103"]  // PHYS103 ile birlikte alınmalı
}
```

### 4. Sayısal Ön Koşul (Count Pattern)

"En az X adet YYY kodlu ders" gibi esnek kurallar.

```javascript
prereqs: [
  "ME211",
  {
    type: "count_pattern",
    pattern: "^ME3", // ME3 ile başlayan dersler
    exclude: ["ME363"], // Hariç tutulanlar
    minCount: 5, // En az 5 adet
    message: "ME3XX", // Kullanıcıya gösterilecek mesaj
  },
];
```

**Örnek:** "ME363 ve en az 5 adet ME3XX dersi"

---

## 📚 Seçmeli Havuzları

### Mevcut Ortak Havuzlar (`z_common.js`)

Projenin merkezi havuz sistemi sayesinde, bu havuzları doğrudan kullanabilirsiniz:

```javascript
// İngilizce Seçmelileri (REXX1, REXX2)
options: englishPool;

// Programlama Seçmelileri (REXX3)
options: programmingPool;

// Türkçe Seçmelileri
options: turkishPool1; // veya turkishPool2

// Teknik Seçmeliler (Bölümler arası ortak)
options: window.commonTechnicalElectives;

// Serbest Seçmeliler (500+ ders)
options: freeElectives;
```

### Bölüme Özel Havuz Oluşturma

```javascript
// Dosyanın başında tanımlayın
const ieRexxPool4 = [
    { id: "IE401", name: "Operations Research", credits: 3 },
    { id: "IE402", name: "Supply Chain Mgmt", credits: 3 },
    { id: "IE403", name: "Quality Control", credits: 3 }
].sort((a, b) => a.id.localeCompare(b.id));  // ÖNEMLİ: Alfabetik sıralama

// Müfredatta kullanın
{ id: "REXX4", name: "Restricted Elective", credits: 3, prereqs: [], term: 4, options: ieRexxPool4 }
```

### Ortak Havuzdan Miras Alma (Spread Syntax)

Teknik seçmeliler için ortak havuzu kullanıp, bölüme özel dersleri ekleyin:

```javascript
const ieTechnicalElectives = [
  // Bölüme özel dersler
  { id: "IE450", name: "Simulation", credits: 3 },
  { id: "IE451", name: "Optimization", credits: 3 },

  // Ortak havuzdan miras al (tekrarları filtrele)
  ...window.commonTechnicalElectives.filter(
    (c) => !["IE450", "IE451"].includes(c.id), // Kendi derslerinizi hariç tutun
  ),
].sort((a, b) => a.id.localeCompare(b.id));
```

---

## 🔤 Sıralama ve Formatlar

### Ders Adı Kısaltmaları

Dropdown menülerde okunabilirlik için ders adlarını kısaltın:

```javascript
// ❌ KÖTÜ (çok uzun)
{ id: "ME211", name: "Thermodynamics and Heat Transfer I", credits: 3 }

// ✅ İYİ (kısa ve öz)
{ id: "ME211", name: "Thermo I", credits: 3 }
```

**Kısaltma Önerileri:**

- `Introduction to` → `Intro to` veya `Intro`
- `Engineering` → `Eng.`
- `Laboratory` → `Lab.`
- `Management` → `Mgmt.`
- `Mathematics` → `Math.`
- `Computer` → `Comp.`

### Alfabetik Sıralama

**Tüm seçmeli havuzları alfabetik olarak sıralayın:**

```javascript
const myPool = [
  { id: "CSE301", name: "...", credits: 3 },
  { id: "CSE302", name: "...", credits: 3 },
].sort((a, b) => a.id.localeCompare(b.id)); // ÖNEMLİ!
```

### Müfredat Sıralaması

Müfredattaki dersleri **dönem ve mantıksal sıraya** göre düzenleyin:

```javascript
curriculum: [
    // FRESHMAN - TERM 1
    { id: "MATH131", ... },
    { id: "PHYS101", ... },

    // FRESHMAN - TERM 2
    { id: "MATH132", ... },
    { id: "PHYS102", ... },

    // ... (Dönem yorumları ekleyin)
]
```

---

## 🧪 Test Etme

### 1. Dosyayı Kontrol Edin

Tarayıcı konsolunda hata var mı kontrol edin:

- `F12` → Console sekmesi
- Kırmızı hata mesajları olmamalı

### 2. Bölümü Seçin

Dropdown'dan yeni bölümünüzü seçin ve müfredatın doğru yüklendiğini kontrol edin.

### 3. Ön Koşulları Test Edin

- Bir dersin üzerine gelin, okların doğru çizildiğini kontrol edin
- Ön koşulu olmayan bir dersi seçmeye çalışın, kilit sistemi çalışmalı

### 4. Seçmeli Havuzlarını Test Edin

- REXX/FEXX slotlarına tıklayın
- Dropdown'da doğru dersler görünmeli
- Tekrar eden ders olmamalı

### 5. GPA Hesaplamasını Test Edin

- Birkaç ders seçip not verin
- CGPA'nın doğru hesaplandığını kontrol edin

---

## 📝 Commit Mesajı Formatı

Değişikliklerinizi commit ederken şu formatı kullanın:

```bash
git commit -m "feat: add Mechanical Engineering (ME) department

- Added ME curriculum with 8 terms
- Created meRexxPool3, meRexxPool4 elective pools
- Integrated with commonTechnicalElectives
- All courses tested and verified"
```

**Commit Türleri:**

- `feat:` - Yeni özellik (yeni bölüm, yeni havuz)
- `fix:` - Hata düzeltme
- `docs:` - Dokümantasyon
- `refactor:` - Kod iyileştirme

---

## 🆘 Yardım

Takıldığınız bir yer mi var?

1. **Mevcut bölümlere bakın:** `data/me.js`, `data/cse.js` gibi dosyalar iyi örneklerdir.
2. **Issue açın:** GitHub'da soru sorabilirsiniz.
3. **Pull Request gönderin:** Taslak PR açıp geri bildirim isteyebilirsiniz.

---

**Katkılarınız için teşekkürler! 🎉**
