import React from "react";
import ReactDOM from "react-dom";
import Chart from "react-google-charts";

const pieOptions = {
  title: "DL Suspension Chart",
  legend: {
    position: "bottom",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 15
    }
  },
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};
class Chart2 extends React.Component {
  state = {
    chartImageURI: ""
  };
  render() {
    return (
      <div className="App">
        <Chart
          chartType="PieChart"
          data={[
            ["Reason", "Weight"],
            ["Failure to Pay Forfeiture", 58.75],
            ["Driver Record", 13.87],
            ["Operating While Intoxicated", 6.3],
            ["Blood Alcohol Content", 4.36],
            ["Other", 16.32]
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"400px"}
          legend_toggle
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Chart2 />, rootElement);
