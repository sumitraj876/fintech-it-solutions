const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'images');
const dirs = ['services', 'solutions', 'locations', 'hero', 'founder'];

async function processDir(dir) {
  const fullPath = path.join(publicDir, dir);
  if (!fs.existsSync(fullPath)) return;
  
  const files = fs.readdirSync(fullPath).filter(f => f.endsWith('.png'));
  
  for (const file of files) {
    const input = path.join(fullPath, file);
    const output = path.join(fullPath, file.replace('.png', '.webp'));
    
    // Skip if webp already exists
    if (fs.existsSync(output)) continue;

    console.log(`Compressing ${dir}/${file}...`);
    await sharp(input)
      .resize({ width: 1200, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
  }
}

async function main() {
  for (const dir of dirs) {
    await processDir(dir);
  }
  console.log('All images compressed to .webp!');
}
main();
