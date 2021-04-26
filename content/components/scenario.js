import React, { Component } from 'react';
import { Link } from 'gatsby';
const styles = {
  rect: {
    minWidth: 500,
    minHeight: 100,
    position: 'relative',
    top: 20,
    //right: 100,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 150, 200, 0.5)',
  },
  button: {
    minWidth: 80,
    height: 'auto',
    margin: 5,
    borderColor: '#d6d7da',
    borderWidth: 2,
    borderRadius: 8,
    //alignItems: 'left',
    textAlign: 'left',
    backgroundColor: '#AFEEEE',
  },
  txt: {
    marginLeft: 10,
    marginTop: 20,
    marginBot: 20,
    alignItems: 'center',
  },
  rows: {
    flexDirection: 'row',
  },
};

function getData() {
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
      readData.push(text);
    }
    return readData;
}
const data = getData();

class Scenario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: "A2"
    };
  }

  switchScene = (id) => {
    this.setState = {
        id: id
    };
  }

  getComponentByID(id) {
      for(i = 0; i < data.length; i++){
          if(data[i]["ID"]==id){
            return data[i]
          }
      }
  }

  restart = () => {
    this.setState({
        id: "A2"
    });
  };

  render() {
    comp = getComponentByID(this.id)
    let main = (
          <div>
            <button style={styles.button} onClick={this.restart}>
              Restart
            </button>
            <div style={styles.txt} id="text">
                  {comp["Question"].replace("\n","")}
            </div>

            <div style={styles.rows}>
              <button style={styles.button} onClick=switchScene(comp["Navigate"][0])>
                  {comp["Answers"][0]}
              </button>

              <button style={styles.button} onClick=switchScene(comp["Navigate"][1])>
                  {comp["Answers"][1]}
              </button>

              <button style={styles.button} onClick=switchScene(comp["Navigate"][2]})>
                  {comp["Answers"][2]}
              </button>

            </div>
          </div>
        );
    }

    return (
      <div style={styles.rect}>
        <header>
          <h1>Simulation</h1>
        </header>
        {main}
      </div>
    );
  }
}

export default Scenario;
