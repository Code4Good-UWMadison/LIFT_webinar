var XLSX = require('xlsx')
var workbook = XLSX.readFile('./Questions.xlsx');
var sheet_name_list = workbook.SheetNames;
var jsonObjects = [];
var xlsxToJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list])
var readData = []
var two = false;
var three = false;
var step = 4;
for (i = 0; i < xlsxToJson.length; i += step) {
    ques = xlsxToJson[i]["QUESTIONS"]
    id = "A" + (i+2).toString()

    ans1 = xlsxToJson[i + 1]["ANSWERS"]
    nav1 = xlsxToJson[i + 1]["NAVIGATE"]
    step = 2;

    if (xlsxToJson[i + 2] != undefined) {
        if (xlsxToJson[i + 2]["QUESTIONS"] == undefined && xlsxToJson[i + 2]["ANSWERS"] != undefined) {
            two = true;
            step = 3;
            ans2 = xlsxToJson[i + 2]["ANSWERS"]
            nav2 = xlsxToJson[i + 2]["NAVIGATE"]
        }
    }

    if (two && xlsxToJson[i + 3]["ANSWERS"] != undefined && xlsxToJson[i + 3]["QUESTIONS"] == undefined) {
            three = true;
            step = 4;
            ans3 = xlsxToJson[i + 3]["ANSWERS"]
            nav3 = xlsxToJson[i + 3]["NAVIGATE"]
    }

    if (three) {
        var text = {
                    "ID": id,
                    "Question":  ques,
                    "Answers": [ans1, ans2, ans3],
                    "Navigate": [nav1, nav2, nav3]
                  }
    } else if (two) {
        var text = {
                  "ID": id,
                  "Question":  ques,
                  "Answers": [ans1, ans2],
                  "Navigate": [nav1, nav2]
                }
    } else {
        var text = {
                "ID": id,
                "Question":  ques,
                "Answers": [ans1],
                "Navigate": [nav1]
              }
    }

    two = false;
    three = false;
    readData.push(text)
}

for (i = 0; i < readData.length; i++)
  console.log(JSON.stringify(readData[i]))
  console.log("\n\n")
