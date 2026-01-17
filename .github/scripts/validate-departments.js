const fs = require('fs');
const path = require('path');

console.log('🔍 Starting department data validation...\n');

const dataDir = path.join(__dirname, '../../data');
const files = fs.readdirSync(dataDir)
  .filter(f => f.endsWith('.js') && !f.startsWith('z_'));

let hasErrors = false;
let warnings = 0;

files.forEach(file => {
  console.log(`📄 Validating ${file}...`);
  const content = fs.readFileSync(path.join(dataDir, file), 'utf8');
  
  // Check 1: Has registerDepartment call
  if (!content.includes('registerDepartment')) {
    console.error(`  ❌ Missing registerDepartment() call`);
    hasErrors = true;
  } else {
    console.log(`  ✓ Has registerDepartment() call`);
  }
  
  // Check 2: Has curriculum array
  if (!content.includes('curriculum:')) {
    console.error(`  ❌ Missing curriculum definition`);
    hasErrors = true;
  } else {
    console.log(`  ✓ Has curriculum definition`);
  }
  
  // Check 3: Check for .sort() on elective pools
  const poolMatches = content.match(/const \w+(?:Pool|Electives)\d* = \[[\s\S]*?\]/g);
  if (poolMatches) {
    let unsortedPools = 0;
    poolMatches.forEach(pool => {
      // Check if .sort() appears within 50 characters after the closing bracket
      const poolWithContext = content.substring(
        content.indexOf(pool),
        content.indexOf(pool) + pool.length + 50
      );
      if (!poolWithContext.includes('.sort(')) {
        unsortedPools++;
      }
    });
    
    if (unsortedPools > 0) {
      console.warn(`  ⚠️  ${unsortedPools} elective pool(s) may not be sorted`);
      warnings++;
    } else {
      console.log(`  ✓ All elective pools are sorted`);
    }
  }
  
  // Check 4: Verify course structure (basic)
  const courseMatches = content.match(/\{\s*id:\s*"[^"]+"/g);
  if (courseMatches && courseMatches.length > 0) {
    console.log(`  ✓ Found ${courseMatches.length} course definitions`);
  } else {
    console.warn(`  ⚠️  No course definitions found`);
    warnings++;
  }
  
  // Check 5: Check for common mistakes
  if (content.includes('options: freeElectives') && !content.includes('window.freeElectives')) {
    console.warn(`  ⚠️  Uses 'freeElectives' but should use 'window.freeElectives'`);
    warnings++;
  }
  
  console.log('');
});

console.log('═══════════════════════════════════════');
console.log(`📊 Validation Summary:`);
console.log(`   Files checked: ${files.length}`);
console.log(`   Warnings: ${warnings}`);
console.log(`   Errors: ${hasErrors ? 'YES ❌' : 'NONE ✅'}`);
console.log('═══════════════════════════════════════\n');

if (hasErrors) {
  console.error('❌ Validation failed! Please fix the errors above.');
  process.exit(1);
} else if (warnings > 0) {
  console.warn('⚠️  Validation passed with warnings. Consider fixing them.');
  process.exit(0);
} else {
  console.log('✅ All validations passed successfully!');
  process.exit(0);
}
