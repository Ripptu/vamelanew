import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

content = content.replace(/ich können/g, 'ich kann');
content = content.replace(/ich integrieren/g, 'ich integriere');
content = content.replace(/ich erstellen/g, 'ich erstelle');
content = content.replace(/sorgen ich/g, 'sorge ich');
content = content.replace(/ich legen/g, 'ich lege');
content = content.replace(/verknüpfen sie/g, 'verknüpfe sie');
content = content.replace(/bieten niedrigschwellige/g, 'biete niedrigschwellige');
content = content.replace(/integrieren klare/g, 'integriere klare');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done fixing niches.ts final');
