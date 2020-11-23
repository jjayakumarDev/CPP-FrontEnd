import { Component } from 'react';

class NewsFeeds extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
          <div class="container-fluid">
            <div class="row">
              <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4"><div class="chartjs-size-monitor dashboard-position" >
                <div class="chartjs-size-monitor-expand dashboard-position"><div class="dashboard-position-h-w{"></div></div><div class="chartjs-size-monitor-shrink dashboard-position"><div class="dashboard-position-h-w-200"></div></div></div>
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 class="h2">News Feed</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                  </div>
                </div>
                <div class="card gedf-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active show" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Post a Comment</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade active show" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <label class="sr-only" for="message">post</label>
                                    <textarea class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                </div>

                            </div>
                            
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">share</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
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
              </main>
            </div>
          </div>
          </div>

        );
    }
}

export default NewsFeeds;