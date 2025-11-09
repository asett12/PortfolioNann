// scripts/updatePdfTitle.js
const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

async function updatePdfTitle(inputPath, outputPath, newTitle) {
  // 1) Read the existing PDF
  const existingPdfBytes = fs.readFileSync(inputPath);

  // 2) Load it with pdf-lib
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // 3) Set document metadata
  const metadata = {
    title: newTitle || "", // if you want to "remove", pass empty string
  };

  pdfDoc.setTitle(metadata.title);

  // 4) Save the updated PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);

  console.log(`Updated PDF saved to: ${outputPath}`);
}

// --------- RUN HERE ----------

// Change these paths to match your project structure
const inputFile = path.resolve(
  __dirname,
  "../public/docs/Recommendation-Letter-2.pdf"
);

const outputFile = path.resolve(
  __dirname,
  "../public/docs/Recommendation-Letter-2-fixed.pdf"
);

// Whatever you want the tab title to show:
const newTitle = "Recommendation Letter – Buddy Up Co., Ltd.";

updatePdfTitle(inputFile, outputFile, newTitle).catch((err) => {
  console.error("Error updating PDF:", err);
});
