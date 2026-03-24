import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

content = content.replace(/Atmosphäre legen/g, 'Atmosphäre lege');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done fixing niches.ts final 3');
