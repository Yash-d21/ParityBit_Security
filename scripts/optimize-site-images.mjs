import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../public');

const jobs = [
  {
    input: 'assets/images/hero-visual.png',
    output: 'assets/images/hero-visual.webp',
    width: 1400,
    quality: 74,
  },
  {
    input: 'assets/images/service-card-corner-bg.png',
    output: 'assets/images/service-card-corner-bg.webp',
    width: 900,
    quality: 70,
  },
  {
    input: 'assets/images/service-card-corner-bg-purple.png',
    output: 'assets/images/service-card-corner-bg-purple.webp',
    width: 900,
    quality: 70,
  },
  {
    input: 'assets/images/faq-cyber-isometric.png',
    output: 'assets/images/faq-cyber-isometric.webp',
    width: 1200,
    quality: 74,
  },
  {
    input: 'assets/images/products/atlas.png',
    output: 'assets/images/products/atlas.webp',
    width: 900,
    quality: 74,
  },
  {
    input: 'assets/images/products/vector.png',
    output: 'assets/images/products/vector.webp',
    width: 900,
    quality: 74,
  },
  {
    input: 'assets/images/products/trace.png',
    output: 'assets/images/products/trace.webp',
    width: 900,
    quality: 74,
  },
  {
    input: 'assets/images/products/zeroxphish.png',
    output: 'assets/images/products/zeroxphish.webp',
    width: 900,
    quality: 74,
  },
];

let before = 0;
let after = 0;

for (const job of jobs) {
  const input = path.join(root, job.input);
  const output = path.join(root, job.output);
  const srcBuf = await fs.readFile(input);
  before += srcBuf.length;
  const outBuf = await sharp(srcBuf)
    .resize({ width: job.width, withoutEnlargement: true })
    .webp({ quality: job.quality, effort: 5 })
    .toBuffer();
  await fs.writeFile(output, outBuf);
  after += outBuf.length;
  console.log(
    `${job.input} -> ${job.output} (${Math.round(srcBuf.length / 1024)}KB -> ${Math.round(outBuf.length / 1024)}KB)`,
  );
}

console.log(
  `\nDone: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
);
