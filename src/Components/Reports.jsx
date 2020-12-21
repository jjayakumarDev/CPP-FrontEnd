import {Component} from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import Service from './Services';
import Cookies from 'universal-cookie';

class Reports extends Component {

  constructor(props){
    super(props)
    this.state = {
        feedback: ''
    }
}

  componentDidMount(){
    const cookies = new Cookies();
    let id = cookies.get('id');
    id = id.replace('%40','@');
    Service.getFeedback(id).then((res) => {
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