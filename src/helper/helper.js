import * as xlsx from "xlsx";

const convertExcelToJson = (file_name) => {
  const reader = new FileReader();

  const file = xlsx.readFile(file_name);

  const sheetNames = file.SheetNames;
  const totalSheets = sheetNames.length;

  let parsedData = [];

  for (let i = 0; i < totalSheets; i++) {
    const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]);

    tempData.shift();

    parsedData.push(...tempData);
  }

  console.log(parsedData);
};

export { convertExcelToJson };
