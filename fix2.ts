import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

content = content.replace(/Ich verzichten/g, 'Ich verzichte');
content = content.replace(/Ich kombinieren/g, 'Ich kombiniere');
content = content.replace(/Ich können/g, 'Ich kann');
content = content.replace(/Ich kommunizieren/g, 'Ich kommuniziere');
content = content.replace(/Ich berücksichtigen/g, 'Ich berücksichtige');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done fixing niches.ts again');
