import { Component } from 'react';

class Achievements extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="container mt-5 mb-5">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <h4>Achievements History</h4>
                        <ul class="timeline">
                            <li>
                                <a href="#">Cloud Architect</a>
                                <a href="#" class="float-right">21 March, 2025</a>
                                <p>Working as a Cloud Architect</p>
                            </li>
                            <li>
                                <a href="#">Senior Cloud Engineer</a>
                                <a href="#" class="float-right">21 March, 2020</a>
                                <p>Worked as a Senior Cloud Engineer</p>
                            </li>
                            <li>
                                <a href="#">Cloud Engineer</a>
                                <a href="#" class="float-right">4 March, 2019</a>
                                <p>Worked as a Cloud Engineer</p>
                            </li>
                            <li>
                                <a href="#">Cloud Practioner</a>
                                <a href="#" class="float-right">1 April, 2015</a>
                                <p>Worked as a cloud practioner</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Achievements;