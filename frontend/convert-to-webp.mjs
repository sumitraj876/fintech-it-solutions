import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
const dirs = ['services', 'solutions', 'locations', 'hero', 'founder'];
const base = path.join(process.cwd(), 'public', 'images');
let count = 0;
async function processDir(dir) {
  const fullPath = path.join(base, dir);
  if (!fs.existsSync(fullPath)) return;
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  for (const file of files) {
    const input = path.join(fullPath, file);
    const output = path.join(fullPath, file.replace(/\.(png|jpg)$/, '.webp'));
    if (fs.existsSync(output)) continue;
    await sharp(input).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 80 }).toFile(output);
    count++;
  }
}
async function main() {
  for (const dir of dirs) await processDir(dir);
  console.log(`   Done! Converted ${count} images.`);
}
main();
