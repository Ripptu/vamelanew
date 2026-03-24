import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

content = content.replace(/ich achten/g, 'ich achte');
content = content.replace(/ich strukturieren/g, 'ich strukturiere');
content = content.replace(/ich digitalisieren/g, 'ich digitalisiere');
content = content.replace(/ich legen/g, 'ich lege');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done fixing niches.ts final 2');
