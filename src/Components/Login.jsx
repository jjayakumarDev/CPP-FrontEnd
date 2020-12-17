import { Component } from 'react';
import {GoogleLogin} from 'react-google-login';

class Login extends Component {
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
        <div class="text-center">
        <form class="form-signin">
        <div class="text-center mb-4">
            <h1 class="h3 mb-3 font-weight-normal">Sign in with Google</h1>
        </div>
        <div class="">
        <GoogleLogin
                clientId="529134937712-vl75md1n55ih9hfa4c4g26l9nbhtuqd8.apps.googleusercontent.com"
                buttonText="SignIn"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        <p class="mt-5 mb-3 text-muted text-center">© 2020-2021</p>
        </form>
        </div>
        );
    }
}

export default Login;