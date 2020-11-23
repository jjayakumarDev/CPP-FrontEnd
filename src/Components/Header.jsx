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
                    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
                    <ul class="navbar-nav px-3">
                        <li class="nav-item text-nowrap">
                        <GoogleLogout
                            clientId="529134937712-vl75md1n55ih9hfa4c4g26l9nbhtuqd8.apps.googleusercontent.com"
                            buttonText="Logout"
                            onLogoutSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        </li>
                    </ul>
                </nav>
                
            }
            >
            </StickyHeader>
        );
    }
}

export default Header;