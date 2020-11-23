import { Component } from 'react';

class Events extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div class="card gedf-card">
                    <div class="card-header">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="mr-2">
                                    <img class="rounded-circle" width="45" src="" alt="profile icon"/>
                                </div>
                                <div class="ml-2">
                                    <div class="h5 m-0">Anonymous Name</div>
                                    <div class="h7 text-muted">Director of the Company</div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div class="card-body">
                        <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a class="card-link" href="#">
                            <h5 class="card-title">Content Heading</h5>
                        </a>

                        <p class="card-text">
                            content
                        </p>
                    </div>
                    <div class="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                    </div>
        </div>
        </div>
        );
    }
}

export default Events;