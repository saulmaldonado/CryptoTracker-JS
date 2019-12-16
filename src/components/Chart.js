import React, { Component } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
 
export default class Charts extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      // To avoid unnecessary update keep all options in the state.
      chartOptions: {
        xAxis: {
          categories: ['A', 'B', 'C'],
        },
        series: [
          { data: [1,2,3] }
        ],
        plotOptions: {
          series: {
            point: {
              events: {
                mouseOver: this.setHoverData.bind(this)
              }
            }
          }
        }
      },
      hoverData: null
    };
  }
 
  setHoverData = (e) => {
    // The chart is not updated because `chartOptions` has not changed.
    this.setState({ hoverData: e.target.category })
  }
 
  updateSeries = () => {
    // The chart is updated only with new options.
    this.setState({
        chartOptions: {
        xAxis: {
            categories: ['X', 'Y', 'Z'],
          },
        series: [
          { data: this.props.coinBuyPrice}
        ]
      }
    })
    

  }

 
  render() {
    const { chartOptions, hoverData } = this.state;

 
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      <h3>Hovering over {hoverData}</h3>
      <button onClick={this.updateSeries.bind(this)}>Update Series</button>
      </div>
    )
  }
}
 
