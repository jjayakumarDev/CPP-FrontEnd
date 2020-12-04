import { Component } from 'react';
import Services from './Services';
    
class Notification extends Component {
    constructor(props){
        super(props)

        this.state = {
            rootNotifications: [],
            notifications: []
        }
    }

    componentDidMount(){
        Services.getNotification("1").then((res) => {
            this.setState({rootNotifications:res.data})
            this.setState({notifications: res.data.notifications})
        });
    }

    render(){
        const notifications = Object.keys(this.state.notifications).map((key) => {
            return (
                <div id={this.state.rootNotifications.notificationId}class="fade toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="holder.js/20x20?text=%20" class="rounded mr-2" alt=""/>
                        <strong class="mr-auto">{this.state.notifications[key].title}</strong>
                        <small>{this.state.notifications[key].time}</small>
                        <button type="button" class="close ml-2 mb-1" data-dismiss="toast">
                            <span aria-hidden="true">×</span><span class="sr-only">Close</span>
                            </button>
                    </div>
                    <div class="toast-body">{this.state.notifications[key].contentText}</div>
                </div>
            )
        })
        return(
            
            <div>
                {notifications}
            </div>
        )
    }
}

export default Notification