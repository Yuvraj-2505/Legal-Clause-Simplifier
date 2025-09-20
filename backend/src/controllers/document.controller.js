// backend/src/controllers/document.controller.js

import path from "path";
import fs from "fs";
import { extractTextFromFile } from "../services/file.service.js";
import { simplifyClauses } from "../services/ai.service.js";
import { extractClauses, classifyDocument, extractEntities } from "../services/nlp.service.js";

// Upload & process a document
export const processDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = req.file.path;

    // 1️⃣ Extract raw text from PDF/DOCX
    const rawText = await extractTextFromFile(filePath);

    // 2️⃣ Clause Extraction
    const clauses = extractClauses(rawText);

    // 3️⃣ Simplify clauses using AI
    const simplifiedClauses = await simplifyClauses(clauses);

    // 4️⃣ Document Classification
    const docType = classifyDocument(rawText);

    // 5️⃣ Named Entity Recognition
    const entities = extractEntities(rawText);

    // Optionally delete file after processing
    fs.unlinkSync(filePath);

    // Send response
    res.json({
      documentType: docType,
      clauses: clauses.map((clause, i) => ({
        original: clause,
        simplified: simplifiedClauses[i],
      })),
      entities,
    });
  } catch (err) {
    console.error("Error processing document:", err);
    res.status(500).json({ message: "Failed to process document", error: err.message });
  }
};
