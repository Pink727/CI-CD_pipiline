import db from "../config/connection.js";
import Question from "../models/Question.js";
import cleanDB from "./cleanDb.js";
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pythonQuestionsPath = path.resolve(__dirname, './pythonQuestions.json');

db.once('open', async () => {
  await cleanDB('Question', 'questions');

  const pythonQuestions = JSON.parse(await fs.readFile(pythonQuestionsPath, 'utf-8'));
  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});