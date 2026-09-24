import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '../public/assets/images/services-marquee');

const files = (await fs.readdir(dir)).filter((f) => f.endsWith('.png') && f.startsWith('service-'));

let before = 0;
let after = 0;

for (const file of files) {
  const input = path.join(dir, file);
  const output = path.join(dir, file.replace(/\.png$/i, '.webp'));
  const srcBuf = await fs.readFile(input);
  before += srcBuf.length;

  const outBuf = await sharp(srcBuf)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 72, effort: 5 })
    .toBuffer();

  await fs.writeFile(output, outBuf);
  after += outBuf.length;
  console.log(`${file} -> ${path.basename(output)} (${Math.round(srcBuf.length / 1024)}KB -> ${Math.round(outBuf.length / 1024)}KB)`);
}

console.log(
  `\nDone: ${files.length} images, ${(before / 1024 / 1024).toFixed(2)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`,
);
