import { Component } from 'react';
import SockJsClient from 'react-stomp';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NameComponent from "./NameComponent";

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: [],
            typedMessage: "",
            name: ""
        }
    }

    setName = (name) => {
        console.log(name);
        this.setState({name: name});
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.state.name,
            message: this.state.typedMessage
        }));
    };

    displayMessages = () => {
        return (
            <div>
                {this.state.messages.map(msg => {
                    return (
                        <div class="chat-list">
                            {this.state.name == msg.name ?
                                <div class="chat-body">
                                    <p className="">{msg.name} : </p>
                                    <p className="chat-message">{msg.message}</p>
                                </div> :
                                <div>
                                    <p className="">{msg.name} : </p>
                                    <p className="chat-message2">{msg.message}</p>
                                </div>
                            }
                        </div>)
                })}
            </div>
        );
    };

    render(){
        return(
            <div class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <NameComponent setName={this.setName}/>
                <div className="align-center">
                    {this.displayMessages()}
                </div>
                <SockJsClient url='http://cppchat-env.eba-tb8ts7kd.us-east-1.elasticbeanstalk.com/'
                              topics={['/topic/user']}
                              onConnect={() => {
                                  console.log("connected");
                              }}
                              onDisconnect={() => {
                                  console.log("Disconnected");
                              }}
                              onMessage={(msg) => {
                                  var jobs = this.state.messages;
                                  jobs.push(msg);
                                  this.setState({messages: jobs});
                                  console.log(this.state);
                              }}
                              ref={(client) => {
                                  this.clientRef = client
                              }}/>
            <div class="card gedf-card">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active show" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Send a Message: {this.state.name}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade active show" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                                <div class="form-group">
                                    <textarea class="form-control" id="message" 
                                    onChange={(event) => {
                                               this.setState({typedMessage: event.target.value});
                                           }} 
                                    rows="3" placeholder="Start typing your message."></textarea>
                                </div>
                            </div>        
                        </div>
                        <div class="btn-toolbar justify-content-between">
                            <div class="btn-group">
                                <button type="submit" onClick={this.sendMessage} class="btn btn-primary">Send</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div>
            </div>


        </div>

        );
    }
}

export default Chat;