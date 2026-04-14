import fs from "node:fs";
import path from "node:path";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

const A4_WIDTH = 595.28;
const A4_HEIGHT = 841.89;
const PAGE_MARGIN = 42;

const colors = {
  black: rgb(0.04, 0.04, 0.04),
  navy: rgb(0.08, 0.13, 0.2),
  ink: rgb(0.1, 0.11, 0.14),
  white: rgb(1, 1, 1),
  soft: rgb(0.95, 0.96, 0.98),
  gray: rgb(0.62, 0.66, 0.72),
  line: rgb(0.22, 0.27, 0.36),
};

const sourceDir = path.join(process.cwd(), "public", "catalog", "tavan-lambirileri");
const outputPath = path.join(process.cwd(), "public", "catalog", "artiplast-premium-catalog.pdf");

function drawWrappedText(page, text, options) {
  const {
    font,
    size,
    color,
    x,
    y,
    maxWidth,
    lineHeight = size * 1.35,
  } = options;

  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }

  if (current) lines.push(current);

  lines.forEach((line, index) => {
    page.drawText(line, {
      x,
      y: y - index * lineHeight,
      size,
      font,
      color,
    });
  });

  return y - lines.length * lineHeight;
}

function fitImage(image, boxWidth, boxHeight) {
  const scale = Math.min(boxWidth / image.width, boxHeight / image.height);

  return {
    width: image.width * scale,
    height: image.height * scale,
  };
}

async function embedImages(pdfDoc) {
  const files = fs
    .readdirSync(sourceDir)
    .filter((file) => file.toLowerCase().endsWith(".jpg"))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  const images = [];
  for (const file of files) {
    const bytes = fs.readFileSync(path.join(sourceDir, file));
    const image = await pdfDoc.embedJpg(bytes);
    images.push({ file, image });
  }

  return images;
}

function drawTopRule(page, color = colors.line) {
  page.drawRectangle({
    x: PAGE_MARGIN,
    y: A4_HEIGHT - PAGE_MARGIN - 2,
    width: 88,
    height: 2,
    color,
  });
}

function addCover(pdfDoc, fonts, coverImage) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  const coverFit = fitImage(coverImage, A4_WIDTH, A4_HEIGHT);

  page.drawImage(coverImage, {
    x: (A4_WIDTH - coverFit.width) / 2,
    y: (A4_HEIGHT - coverFit.height) / 2,
    width: coverFit.width,
    height: coverFit.height,
  });

  page.drawRectangle({
    x: 0,
    y: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    color: colors.black,
    opacity: 0.56,
  });

  page.drawRectangle({
    x: 0,
    y: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT * 0.42,
    color: colors.navy,
    opacity: 0.28,
  });

  const centerX = A4_WIDTH / 2;
  page.drawText("ArtıPLAST", {
    x: centerX - fonts.display.widthOfTextAtSize("ArtıPLAST", 34) / 2,
    y: 430,
    size: 34,
    font: fonts.display,
    color: colors.white,
  });

  page.drawText("Ceiling Panel Collection", {
    x: centerX - fonts.display.widthOfTextAtSize("Ceiling Panel Collection", 22) / 2,
    y: 392,
    size: 22,
    font: fonts.display,
    color: colors.white,
  });

  page.drawText("Premium Interior Surface Solutions", {
    x: centerX - fonts.body.widthOfTextAtSize("Premium Interior Surface Solutions", 14) / 2,
    y: 360,
    size: 14,
    font: fonts.body,
    color: rgb(0.9, 0.92, 0.96),
  });
}

function addBrandPage(pdfDoc, fonts, image) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  page.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: colors.soft });
  drawTopRule(page);

  page.drawText("ArtıPLAST", {
    x: PAGE_MARGIN,
    y: 725,
    size: 34,
    font: fonts.display,
    color: colors.black,
  });

  const bodyText =
    "ArtıPLAST is a manufacturer of high-quality interior surface solutions, specializing in ceiling panel systems designed for modern living spaces. Our products combine durability, precision manufacturing, and refined aesthetics for both residential and commercial environments.";

  drawWrappedText(page, bodyText, {
    font: fonts.body,
    size: 15,
    color: colors.ink,
    x: PAGE_MARGIN,
    y: 655,
    maxWidth: 235,
    lineHeight: 24,
  });

  page.drawText("Manufacturer based in Türkiye", {
    x: PAGE_MARGIN,
    y: 170,
    size: 11,
    font: fonts.body,
    color: colors.gray,
  });

  page.drawRectangle({
    x: 312,
    y: 118,
    width: 228,
    height: 588,
    color: colors.white,
    borderColor: rgb(0.86, 0.88, 0.91),
    borderWidth: 1,
  });

  const fitted = fitImage(image, 196, 520);
  page.drawImage(image, {
    x: 328 + (196 - fitted.width) / 2,
    y: 152 + (520 - fitted.height) / 2,
    width: fitted.width,
    height: fitted.height,
  });
}

function addFeaturePage(pdfDoc, fonts) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  page.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: colors.black });
  drawTopRule(page, rgb(0.28, 0.34, 0.46));

  page.drawText("Why Choose ArtıPLAST?", {
    x: PAGE_MARGIN,
    y: 734,
    size: 28,
    font: fonts.display,
    color: colors.white,
  });

  const features = [
    "High-quality manufacturing standards",
    "Durable and long-lasting materials",
    "Modern and aesthetic surface designs",
    "Suitable for residential and commercial use",
    "Flexible production and customization options",
    "Export-ready production infrastructure",
  ];

  const leftColumn = features.slice(0, 3);
  const rightColumn = features.slice(3);

  const drawFeatureColumn = (items, x) => {
    let y = 635;
    for (const item of items) {
      page.drawRectangle({
        x,
        y: y - 10,
        width: 10,
        height: 10,
        color: rgb(0.79, 0.85, 0.98),
      });
      drawWrappedText(page, item, {
        font: fonts.body,
        size: 15,
        color: colors.white,
        x: x + 22,
        y,
        maxWidth: 200,
        lineHeight: 24,
      });
      y -= 98;
    }
  };

  drawFeatureColumn(leftColumn, PAGE_MARGIN);
  drawFeatureColumn(rightColumn, 306);
}

function addTechnicalPage(pdfDoc, fonts, image) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  page.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: colors.soft });
  drawTopRule(page);

  page.drawText("Technical Specifications", {
    x: PAGE_MARGIN,
    y: 726,
    size: 28,
    font: fonts.display,
    color: colors.black,
  });

  const specs = [
    ["Thickness", "8 mm"],
    ["Width", "20 mm"],
    ["Length Options", "4 m / 5 m / 6 m"],
    ["Custom Production", "Available upon request"],
  ];

  let y = 612;
  for (const [label, value] of specs) {
    page.drawRectangle({
      x: PAGE_MARGIN,
      y: y - 20,
      width: 238,
      height: 72,
      color: colors.white,
      borderColor: rgb(0.87, 0.89, 0.92),
      borderWidth: 1,
    });
    page.drawText(label, {
      x: PAGE_MARGIN + 18,
      y: y + 16,
      size: 11,
      font: fonts.body,
      color: colors.gray,
    });
    page.drawText(value, {
      x: PAGE_MARGIN + 18,
      y,
      size: 18,
      font: fonts.display,
      color: colors.black,
    });
    y -= 96;
  }

  const fitted = fitImage(image, 220, 420);
  page.drawRectangle({
    x: 328,
    y: 162,
    width: 220,
    height: 420,
    color: rgb(0.98, 0.99, 1),
    borderColor: rgb(0.87, 0.89, 0.92),
    borderWidth: 1,
  });
  page.drawImage(image, {
    x: 328 + (220 - fitted.width) / 2,
    y: 162 + (420 - fitted.height) / 2,
    width: fitted.width,
    height: fitted.height,
  });
}

function addProductPage(pdfDoc, fonts, image, index) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  const darkMode = index % 2 === 0;

  page.drawRectangle({
    x: 0,
    y: 0,
    width: A4_WIDTH,
    height: A4_HEIGHT,
    color: darkMode ? colors.black : colors.soft,
  });

  if (darkMode) {
    page.drawRectangle({
      x: 0,
      y: 0,
      width: A4_WIDTH,
      height: A4_HEIGHT * 0.38,
      color: colors.navy,
      opacity: 0.2,
    });
  }

  drawTopRule(page, darkMode ? rgb(0.24, 0.31, 0.44) : colors.line);

  const imageBox = darkMode
    ? { x: 42, y: 220, width: 511.28, height: 475 }
    : { x: 74, y: 248, width: 447.28, height: 435 };

  const fitted = fitImage(image, imageBox.width - 28, imageBox.height - 28);

  page.drawRectangle({
    x: imageBox.x,
    y: imageBox.y,
    width: imageBox.width,
    height: imageBox.height,
    color: colors.white,
    borderColor: darkMode ? rgb(0.22, 0.27, 0.36) : rgb(0.87, 0.89, 0.92),
    borderWidth: 1,
  });

  page.drawImage(image, {
    x: imageBox.x + (imageBox.width - fitted.width) / 2,
    y: imageBox.y + (imageBox.height - fitted.height) / 2,
    width: fitted.width,
    height: fitted.height,
  });

  const textColor = darkMode ? colors.white : colors.black;
  const mutedColor = darkMode ? rgb(0.76, 0.8, 0.86) : colors.gray;

  page.drawText(`Ceiling Panel Model ${String(index + 1).padStart(2, "0")}`, {
    x: PAGE_MARGIN,
    y: 170,
    size: 24,
    font: fonts.display,
    color: textColor,
  });

  page.drawText("ArtıPLAST Premium Surface", {
    x: PAGE_MARGIN,
    y: 140,
    size: 13,
    font: fonts.body,
    color: mutedColor,
  });

  drawWrappedText(page, "Modern, durable, and visually refined surface solution.", {
    font: fonts.body,
    size: 12,
    color: mutedColor,
    x: PAGE_MARGIN,
    y: 112,
    maxWidth: 320,
    lineHeight: 18,
  });
}

function addClosingPage(pdfDoc, fonts, image) {
  const page = pdfDoc.addPage([A4_WIDTH, A4_HEIGHT]);
  page.drawRectangle({ x: 0, y: 0, width: A4_WIDTH, height: A4_HEIGHT, color: colors.black });

  const fitted = fitImage(image, A4_WIDTH * 0.7, A4_HEIGHT * 0.42);
  page.drawImage(image, {
    x: (A4_WIDTH - fitted.width) / 2,
    y: 404,
    width: fitted.width,
    height: fitted.height,
    opacity: 0.24,
  });

  page.drawText("ArtıPLAST", {
    x: A4_WIDTH / 2 - fonts.display.widthOfTextAtSize("ArtıPLAST", 30) / 2,
    y: 310,
    size: 30,
    font: fonts.display,
    color: colors.white,
  });

  page.drawText("Manufacturer | Türkiye", {
    x: A4_WIDTH / 2 - fonts.body.widthOfTextAtSize("Manufacturer | Türkiye", 12) / 2,
    y: 276,
    size: 12,
    font: fonts.body,
    color: rgb(0.78, 0.82, 0.88),
  });

  page.drawText("Premium Interior Solutions", {
    x: A4_WIDTH / 2 - fonts.display.widthOfTextAtSize("Premium Interior Solutions", 18) / 2,
    y: 220,
    size: 18,
    font: fonts.display,
    color: colors.white,
  });

  page.drawText("Designed for Modern Spaces", {
    x: A4_WIDTH / 2 - fonts.body.widthOfTextAtSize("Designed for Modern Spaces", 13) / 2,
    y: 192,
    size: 13,
    font: fonts.body,
    color: rgb(0.78, 0.82, 0.88),
  });

  drawWrappedText(page, "Contact us for detailed information and international partnerships.", {
    font: fonts.body,
    size: 12,
    color: rgb(0.78, 0.82, 0.88),
    x: 134,
    y: 126,
    maxWidth: 328,
    lineHeight: 18,
  });
}

async function main() {
  const pdfDoc = await PDFDocument.create();
  pdfDoc.registerFontkit(fontkit);
  pdfDoc.setTitle("ArtıPLAST Premium Catalog");
  pdfDoc.setAuthor("ArtıPLAST");
  pdfDoc.setSubject("Ceiling Panel Collection");
  pdfDoc.setKeywords(["ArtıPLAST", "Ceiling Panel", "Catalog", "Interior Surface", "Manufacturer"]);
  pdfDoc.setLanguage("en");
  pdfDoc.setProducer("OpenAI Codex");
  pdfDoc.setCreator("OpenAI Codex");

  const fontsDir = path.join(process.env.WINDIR ?? "C:\\Windows", "Fonts");
  const bodyFontBytes = fs.readFileSync(path.join(fontsDir, "arial.ttf"));
  const displayFontBytes = fs.readFileSync(path.join(fontsDir, "arialbd.ttf"));

  const fonts = {
    body: await pdfDoc.embedFont(bodyFontBytes, { subset: true }),
    display: await pdfDoc.embedFont(displayFontBytes, { subset: true }),
    fallback: await pdfDoc.embedFont(StandardFonts.Helvetica),
  };

  const images = await embedImages(pdfDoc);
  if (images.length !== 22) {
    throw new Error(`Expected 22 images in ${sourceDir}, found ${images.length}`);
  }

  addCover(pdfDoc, fonts, images[0].image);
  addBrandPage(pdfDoc, fonts, images[1].image);

  images.forEach(({ image }, index) => {
    addProductPage(pdfDoc, fonts, image, index);
  });

  addFeaturePage(pdfDoc, fonts);
  addTechnicalPage(pdfDoc, fonts, images[10].image);
  addClosingPage(pdfDoc, fonts, images[21].image);

  const bytes = await pdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
  });

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, bytes);
  console.log(`Saved premium catalog to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
