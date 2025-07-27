// script for sharp to compress images, made partly by mr chat.
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.resolve(__dirname, '../src/assets/img');
const outputDir = path.resolve(__dirname, '../public/assets/img');
const validExt = ['.jpg', '.jpeg', '.png'];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

function convert(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!validExt.includes(ext)) return;

  const relPath = path.relative(inputDir, filePath);
  const outputSubDir = path.join(outputDir, path.dirname(relPath));
  const baseName = path.basename(filePath, ext);

  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }

  const avifOut = path.join(outputSubDir, `${baseName}.avif`);
//   const webpOut = path.join(outputSubDir, `${baseName}.webp`);

  if (!fs.existsSync(avifOut)) {
    sharp(filePath)
      .toFormat('avif', { quality: 90 })
      .toFile(avifOut)
      .then(() => console.log(`✅ AVIF: ${relPath}`))
      .catch(console.error);
  }

//   if (!fs.existsSync(webpOut)) {
//     sharp(filePath)
//       .toFormat('webp', { quality: 75 })
//       .toFile(webpOut)
//       .then(() => console.log(`✅ WebP: ${relPath}`))
//       .catch(console.error);
//   }
}

walkDir(inputDir, convert);
