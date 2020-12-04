import { Component } from 'react';
import Services from './Services';

class NewsFeeds extends Component {
    constructor(props){
        super(props)
        this.state = {
            feed: [],
            comments: []
        }
    }

    componentDidMount(){
        
        Services.getNewsfeed().then((res) => {
            console.log(res.data);
            this.setState({feed:res.data})
        });
    }

    render(){
        
        const newsFeed = Object.keys(this.state.feed).map((key) => {
            const comments = Object.keys(this.state.feed[key].comments).map((ckey) => {
                return (
                    <ul href="#" class="card-link">
                                <li class="fa fa-comment">{this.state.feed[key].comments[ckey].commentContent}</li>
                        </ul>
                )
            })
            return <div class="card gedf-card">
                        <div class="card-header">
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="ml-2">
                                    <div class="h5 m-0">{this.state.feed[key].name}</div>
                                        <div class="h7 text-muted">{this.state.feed[key].role}</div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>

                        </div>
                        <div class="card-body">
                            <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>{this.state.feed[key].time}</div>
                            <a class="card-link" href="#">
                                <h5 class="card-title">{this.state.feed[key].topic}</h5>
                            </a>

                            <p class="card-text">
                            {this.state.feed[key].message}
                            </p>
                        </div>
                        <div class="card-footer">
                            <a href="#" class="card-link"><i class="fa fa-gittip"></i> {this.state.feed[key].likesCount} Likes</a>
                            {comments}
                        </div>
                    </div>
        })
        
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
                {newsFeed}
              </main>
            </div>
          </div>
          </div>

        );
    }
}

export default NewsFeeds;