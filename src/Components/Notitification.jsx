import { Component } from 'react';
    
class Notification extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div class="fade toast show" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="holder.js/20x20?text=%20" class="rounded mr-2" alt=""/>
                        <strong class="mr-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" class="close ml-2 mb-1" data-dismiss="toast">
                            <span aria-hidden="true">×</span><span class="sr-only">Close</span>
                            </button>
                            </div>
                            <div class="toast-body">Hello, world! This is a toast message.</div>
                            </div>
            </div>
        )
    }
}

export default Notification