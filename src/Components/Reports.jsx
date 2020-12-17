import {Component} from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Service from './Services';

class Reports extends Component {

  constructor(props){
    super(props)
    this.state = {
        feedback: ''
    }
}

  /*state = {
    dataBar: {
      labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4", "Sprint 5", "Sprint 6"],
      datasets: [
        { 
          label: "% of performance",
          data: [5, 18, 13, 15, 10, 22],
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 2,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }
  */

  componentDidMount(){
    Service.getFeedback('1').then((res) => {
        this.setState({feedback:res.data})
        console.log(this.state.feedback)
    });
}

  render() {
    return (
        <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h5 class="border-bottom border-gray pb-2 mb-0">Feedback</h5>
    <div class="media text-muted pt-3">
      <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">Project Manager:</strong>
        {this.state.feedback.manager}
      </p>
    </div>
    <div class="media text-muted pt-3">
      <p class="media-body pb-3 mb-0 lh-125 border-bottom border-gray">
        <strong class="d-block text-gray-dark">Team lead</strong>
        {this.state.feedback.lead}
      </p>
    </div>
    <small class="d-block text-right mt-3">
    </small>
    <MDBContainer>
        <h3 className="mt-5">Performance Chart</h3>
        <Bar data={this.state.feedback.dataBar} options={this.state.feedback.barChartOptions} />
      </MDBContainer>
  </div>
      
    );
  }
}

export default Reports;