import fs from 'fs';
import path from 'path';

const postsDir = path.resolve(process.cwd(), './src/data/journals');
const tempDir = path.resolve(process.cwd(), './temp');
const outputFile = path.join(tempDir, 'journals.ts');

function generateJournals() {
    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
    }

    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
    const data = files.map(filename => {
        const fullPath = path.join(postsDir, filename);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const title = filename.replace(/\.md$/, '');
        return { title, note: content };
    });

    const contentTS = `export default ${JSON.stringify(data, null, 2)};`;
    fs.writeFileSync(outputFile, contentTS);
    console.log(`journals.ts generated in temp with ${data.length} items`);
}

generateJournals();
