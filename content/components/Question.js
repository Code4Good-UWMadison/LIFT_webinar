import React from 'react'

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currQues: "Q1",
        currAns: ["A2","A3","A4"],
        currNav: ["Q2","Q3","Q4"]
    }
  }

  componentDidMount(){
    var XLSX = require('xlsx')
    var workbook = XLSX.readFile('ExcelFile.xlsx');
    var sheet_name_list = workbook.SheetNames;
    var xlsxToJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list])
    this.setState({
        currQues: xlsxToJson[0]["Quesion"],
        currAns: xlsxToJson[0]["Answers"],
        currNav: xlsxToJson[0]["Navigate"]
    });
  }

  answerHandler(answerIndex){
    if (answerIndex==0) {
        this.setState({
            currQues: "Q1",
            currAns: ["A2","A3","A4"],
            currNav: ["Q2","Q3","Q4"]
        });
    }
    if (answerIndex==1) {
        this.setState({
            currQues: "Q1",
            currAns: ["A2","A3","A4"],
            currNav: ["Q2","Q3","Q4"]
        });
    }
    if (answerIndex==2) {
        this.setState({
            currQues: "Q1",
            currAns: ["A2","A3","A4"],
            currNav: ["Q2","Q3","Q4"]
        });
    }
  }

  render(){
    return (
        <div>
            <p>{{this.state.currQues}}</p>
            <button onClick={() => this.answerHandler(0)}>{{this.state.currAns[0]}}</button>
            <button onClick={() => this.answerHandler(1)}>{{this.state.currAns[1]}}</button>
            <button onClick={() => this.answerHandler(2)}>{{this.state.currAns[2]}}</button>
        </div>
    )
  }
}

export default Question
