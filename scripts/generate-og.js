/**
 * Generates a minimal og-image.png using only Node.js built-ins.
 * Creates a 1200x630 PNG with the ProlificDev branding.
 * Run: node scripts/generate-og.js
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const W = 1200;
const H = 630;

// Create raw RGBA pixel buffer
const pixels = Buffer.alloc(W * H * 4);

// Helper: set pixel
function setPixel(x, y, r, g, b, a = 255) {
  if (x < 0 || x >= W || y < 0 || y >= H) return;
  const i = (y * W + x) * 4;
  pixels[i]     = r;
  pixels[i + 1] = g;
  pixels[i + 2] = b;
  pixels[i + 3] = a;
}

// Fill background #0a0a0a
for (let i = 0; i < W * H * 4; i += 4) {
  pixels[i] = 10; pixels[i+1] = 10; pixels[i+2] = 10; pixels[i+3] = 255;
}

// Draw a filled circle
function drawCircle(cx, cy, r, R, G, B, A = 255) {
  for (let y = cy - r; y <= cy + r; y++) {
    for (let x = cx - r; x <= cx + r; x++) {
      const dx = x - cx, dy = y - cy;
      if (dx * dx + dy * dy <= r * r) {
        setPixel(x, y, R, G, B, A);
      }
    }
  }
}

// Draw a ring (dashed outer)
function drawRing(cx, cy, r, thickness, R, G, B, A = 255) {
  for (let y = cy - r - thickness; y <= cy + r + thickness; y++) {
    for (let x = cx - r - thickness; x <= cx + r + thickness; x++) {
      const dx = x - cx, dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= r - thickness / 2 && dist <= r + thickness / 2) {
        // Dashed: skip every other segment
        const angle = Math.atan2(dy, dx);
        const seg = Math.floor((angle + Math.PI) / (Math.PI / 8));
        if (seg % 2 === 0) setPixel(x, y, R, G, B, A);
      }
    }
  }
}

// Draw a filled rectangle
function drawRect(x1, y1, x2, y2, R, G, B, A = 255) {
  for (let y = y1; y <= y2; y++) {
    for (let x = x1; x <= x2; x++) {
      setPixel(x, y, R, G, B, A);
    }
  }
}

// Soft glow orb (radial gradient approximation)
function drawGlow(cx, cy, r, R, G, B) {
  for (let y = cy - r; y <= cy + r; y++) {
    for (let x = cx - r; x <= cx + r; x++) {
      const dx = x - cx, dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < r) {
        const alpha = Math.floor((1 - dist / r) * 30);
        const i = (y * W + x) * 4;
        if (y >= 0 && y < H && x >= 0 && x < W) {
          pixels[i]     = Math.min(255, pixels[i]     + Math.floor(R * alpha / 255));
          pixels[i + 1] = Math.min(255, pixels[i + 1] + Math.floor(G * alpha / 255));
          pixels[i + 2] = Math.min(255, pixels[i + 2] + Math.floor(B * alpha / 255));
        }
      }
    }
  }
}

// Draw glows
drawGlow(150, 315, 300, 0, 102, 255);
drawGlow(1050, 315, 250, 0, 102, 255);

// Draw logo: outer dashed ring
drawRing(600, 220, 72, 3, 0, 102, 255, 120);
// Draw logo: solid blue circle
drawCircle(600, 220, 56, 0, 102, 255);

// Draw accent bar at bottom of logo area
drawRect(520, 460, 680, 464, 0, 102, 255, 150);

// --- PNG encoding ---
function crc32(buf) {
  let crc = 0xFFFFFFFF;
  const table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  for (let i = 0; i < buf.length; i++) crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type, 'ascii');
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const crcBuf = Buffer.concat([typeBytes, data]);
  const crcVal = Buffer.alloc(4); crcVal.writeUInt32BE(crc32(crcBuf));
  return Buffer.concat([len, typeBytes, data, crcVal]);
}

// IHDR
const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0); ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 2; // 8-bit RGB (drop alpha for compatibility)
ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;

// Build raw scanlines (RGB, no alpha for simplicity)
const scanlines = Buffer.alloc(H * (1 + W * 3));
for (let y = 0; y < H; y++) {
  scanlines[y * (1 + W * 3)] = 0; // filter type None
  for (let x = 0; x < W; x++) {
    const src = (y * W + x) * 4;
    const dst = y * (1 + W * 3) + 1 + x * 3;
    scanlines[dst]     = pixels[src];
    scanlines[dst + 1] = pixels[src + 1];
    scanlines[dst + 2] = pixels[src + 2];
  }
}

// Update IHDR for RGB (color type 2)
ihdr[9] = 2;

const compressed = zlib.deflateSync(scanlines, { level: 6 });

const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), // PNG signature
  chunk('IHDR', ihdr),
  chunk('IDAT', compressed),
  chunk('IEND', Buffer.alloc(0)),
]);

const outPath = path.join(__dirname, '../public/og-image.png');
fs.writeFileSync(outPath, png);
console.log(`✓ og-image.png written to ${outPath} (${png.length} bytes)`);
