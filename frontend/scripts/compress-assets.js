// script for sharp to compress images, tuned for PNGs vs JPGs
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const inputDir = path.resolve(__dirname, "../src/assets/img");
const outputDir = path.resolve(__dirname, "../public/assets/img");

// keep validExt in lowercase — we'll compare against a lowercased ext
const validExt = [".jpg", ".jpeg", ".png"];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
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
  const extRaw = path.extname(filePath);
  const ext = extRaw.toLowerCase();

  if (!validExt.includes(ext)) return;

  const relPath = path.relative(inputDir, filePath);
  const outputSubDir = path.join(outputDir, path.dirname(relPath));

  const baseName = path.parse(filePath).name;

  if (!fs.existsSync(outputSubDir)) {
    fs.mkdirSync(outputSubDir, { recursive: true });
  }

  const avifOut = path.join(outputSubDir, `${baseName}.avif`);

  if (!fs.existsSync(avifOut)) {
    let options;

    if (ext === ".png") {
      // For PNGs (logos, graphics, transparency)
      options = {
        quality: 60, // keep edges clean
        effort: 4,
        chromaSubsampling: "4:4:4", // no color loss
      };
    } else {
      // For JPGs (photos)
      options = {
        quality: 40, // smaller but visually good
        effort: 4,
        chromaSubsampling: "4:2:0", // standard photo subsampling
      };
    }

    sharp(filePath)
      .toFormat("avif", options)
      .toFile(avifOut)
      .then(() => console.log(`✅ AVIF: ${relPath} -> ${baseName}.avif`))
      .catch(console.error);
  }
}

walkDir(inputDir, convert);
