import fs from 'fs';

let content = fs.readFileSync('src/data/niches.ts', 'utf-8');

// Replace "wir" -> "ich" (case insensitive, but keeping case for first letter)
content = content.replace(/\bWir\b/g, 'Ich');
content = content.replace(/\bwir\b/g, 'ich');

// Replace "uns" -> "mich" / "mir" depending on context.
// "mit uns" -> "mit mir"
content = content.replace(/\bmit uns\b/g, 'mit mir');
// "helfen wir" -> "helfe ich"
content = content.replace(/\bhelfen wir\b/g, 'helfe ich');
// "für uns" -> "für mich"
content = content.replace(/\bfür uns\b/g, 'für mich');
// "von uns" -> "von mir"
content = content.replace(/\bvon uns\b/g, 'von mir');
// "bei uns" -> "bei mir"
content = content.replace(/\bbei uns\b/g, 'bei mir');
// "unsere" -> "meine"
content = content.replace(/\bUnsere\b/g, 'Meine');
content = content.replace(/\bunsere\b/g, 'meine');
// "unser" -> "mein"
content = content.replace(/\bUnser\b/g, 'Mein');
content = content.replace(/\bunser\b/g, 'mein');
// "unseren" -> "meinen"
content = content.replace(/\bUnseren\b/g, 'Meinen');
content = content.replace(/\bunseren\b/g, 'meinen');
// "unserem" -> "meinem"
content = content.replace(/\bUnserem\b/g, 'Meinem');
content = content.replace(/\bunserem\b/g, 'meinem');
// "unserer" -> "meiner"
content = content.replace(/\bUnserer\b/g, 'Meiner');
content = content.replace(/\bunserer\b/g, 'meiner');

// specific fixes
content = content.replace(/deren digitale Bühne ich gebaut haben/g, 'deren digitale Bühne ich gebaut habe');
content = content.replace(/deren digitalen Vertrieb ich optimiert haben/g, 'deren digitalen Vertrieb ich optimiert habe');

fs.writeFileSync('src/data/niches.ts', content);
console.log('Done replacing in niches.ts');
