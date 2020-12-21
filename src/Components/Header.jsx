import { Component } from 'react';
import StickyHeader from 'react-sticky-header';
import GoogleLogout from 'react-google-login'


class Header extends Component {
    constructor(props){
        super(props)
    }

    responseGoogle=(response) => {
        console.log(response)
        //console.log(response.profileObj);
        //console.log(response.error);
        //console.log(response.profileObj.email);
    }

    render(){
        return(
            <StickyHeader
            header={
                <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Enterprise Teams</a>
                    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
                
            }
            >
            </StickyHeader>
        );
    }
}

export default Header;