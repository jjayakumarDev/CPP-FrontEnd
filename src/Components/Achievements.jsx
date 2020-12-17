import { Component } from 'react';
import Services from './Services';

class Achievements extends Component {
    constructor(props){
        super(props)
        this.state = {
            achievementsData: []
        }
    }

    componentDidMount(){
        Services.getAchievement('1').then((res) => {
            this.setState({achievementsData:res.data.achievement})
            console.log(this.state.achievementsData)
        });
      }

    render(){
       const comments = Object.keys(this.state.achievementsData).map((key) => {
            return (
                    <li>
                         <a>{this.state.achievementsData[key].achievementName}</a>
                         <a class="float-right">{this.state.achievementsData[key].date}</a>
                         <p>{this.state.achievementsData[key].achievementContent}</p>
                    </li>
            )
        })
        return(
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h4>Achievements History</h4>
                        <ul class="timeline">
                        {comments}  
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;