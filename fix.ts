import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

// Fix questions
content = content.replace(/Wie heben ich uns/g, 'Wie heben wir uns');
content = content.replace(/Wie schaffen ich es/g, 'Wie schaffen wir es');
content = content.replace(/Wie können ich meine/g, 'Wie können wir unsere');
content = content.replace(/Können ich uns/g, 'Können wir uns');
content = content.replace(/Können ich/g, 'Können wir');
content = content.replace(/Wie generieren ich/g, 'Wie generieren wir');
content = content.replace(/Wie überzeugen ich/g, 'Wie überzeugen wir');
content = content.replace(/Wie kommen ich/g, 'Wie kommen wir');
content = content.replace(/Wie zeigen ich/g, 'Wie zeigen wir');
content = content.replace(/Wie werden ich/g, 'Wie werden wir');
content = content.replace(/Wie präsentieren ich/g, 'Wie präsentieren wir');

// Fix verbs after "Ich"
content = content.replace(/Ich rücken/g, 'Ich rücke');
content = content.replace(/Ich setzen/g, 'Ich setze');
content = content.replace(/Ich integrieren/g, 'Ich integriere');
content = content.replace(/Ich implementieren/g, 'Ich implementiere');
content = content.replace(/Ich gestalten/g, 'Ich gestalte');
content = content.replace(/Ich nutzen/g, 'Ich nutze');
content = content.replace(/Ich binden/g, 'Ich binde');
content = content.replace(/Ich übersetzen/g, 'Ich übersetze');
content = content.replace(/Ich strukturieren/g, 'Ich strukturiere');
content = content.replace(/Ich bauen/g, 'Ich baue');
content = content.replace(/Ich achten/g, 'Ich achte');
content = content.replace(/Ich platzieren/g, 'Ich platziere');
content = content.replace(/Ich kreieren/g, 'Ich kreiere');
content = content.replace(/Ich optimieren/g, 'Ich optimiere');
content = content.replace(/Ich entwickeln/g, 'Ich entwickle');
content = content.replace(/Ich erstellen/g, 'Ich erstelle');
content = content.replace(/Ich richten/g, 'Ich richte');
content = content.replace(/Ich positionieren/g, 'Ich positioniere');
content = content.replace(/Ich präsentieren/g, 'Ich präsentiere');
content = content.replace(/Ich heben/g, 'Ich hebe');
content = content.replace(/Ich sorgen/g, 'Ich sorge');
content = content.replace(/Ich machen/g, 'Ich mache');
content = content.replace(/Ich verknüpfen/g, 'Ich verknüpfe');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done fixing niches.ts');
