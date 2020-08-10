import Chart from 'react-google-charts';
import React, { Component } from 'react';

class Chart1 extends Component {
  render() {
    return (
      <div>
        <h4>Driver’s license prevalence in 2016 </h4>
        <h5>by Employment and Training Institute at the University of Wisconsin-Milwaukee</h5>

        <div style={{ display: 'flex', maxWidth: 900 }}>
          <Chart
            width={'250px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['w/', 75],
              ['w/o', 25],
            ]}
            options={{
              title: 'White 18-year-olds',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <Chart
            width={'250px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['w/', 34],
              ['w/o', 66],
            ]}
            options={{
              title: 'Black 18-year-olds',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          <Chart
            width={'250px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['w/', 33],
              ['w/o', 67],
            ]}
            options={{
              title: 'Latinx 18-year-olds',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </div>
    );
  }
}

export default Chart1;
