import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";
import { google } from "googleapis";
import type { Profile } from "service/types";

type SaveParams = {
  data: Profile[];
  dir: string;
  fileName?: string;
  sheetName: string;
  spreadSheet: string;
};

const save = async ({
  data,
  dir,
  fileName,
  sheetName,
  spreadSheet,
}: SaveParams): Promise<void> => {
  try {
    const path = `${dir && `${dir}/`}${
      fileName || process.env.DEFAULT_FILENAME
    }`;
    const sheet = sheetName;
    saveToJson(data, path);
    await saveToCsv(data, path);
    await saveToGoogle(data, spreadSheet, sheet);
  } catch (err) {
    throw err;
  }
};

const saveToJson = (data: Profile[], path: string) => {
  try {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(`${path}.json`, jsonData);
  } catch (err) {
    throw err;
  }
};

const saveToCsv = async (data: Profile[], path: string) => {
  try {
    const csvWriter = createObjectCsvWriter({
      path: `${path}.csv`,
      header: Object.keys(data[0]).map((h) => ({ id: h, title: h })),
    });
    await csvWriter.writeRecords(data);
  } catch (err) {
    throw err;
  }
};

const saveToGoogle = async (
  data: Profile[],
  spreadsheetId: string,
  sheet: string
) => {
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: "google_credentials.json",
      scopes: "https://www.googleapis.com/auth/spreadsheets",
    });

    const googleSheets = google.sheets({ version: "v4" });

    const dataValues = data.map((profile) => [
      profile.name,
      profile.role,
      profile.image,
      profile.socialLinks.join(", "),
    ]);

    const values = [Object.keys(data[0]), ...dataValues];

    await googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range: `${sheet}!A1`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
  } catch (err) {
    throw err;
  }
};

export default { save };
