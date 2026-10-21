import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = ['services', 'solutions', 'locations', 'hero', 'founder'];
const base = path.join(process.cwd(), 'public', 'images');

async function processDir(dir) {
  const fullPath = path.join(base, dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.png'));
  for (const file of files) {
    const input = path.join(fullPath, file);
    const output = path.join(fullPath, file.replace('.png', '.webp'));
    if (fs.existsSync(output)) continue;
    console.log(`    Compressing ${dir}/${file}...`);
    await sharp(input).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
  }
}

async function main() {
  for (const dir of dirs) await processDir(dir);
  console.log('    Images compressed!');
}
main();
