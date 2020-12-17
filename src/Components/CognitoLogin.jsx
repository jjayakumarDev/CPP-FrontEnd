import React, {useState} from 'react';
import UserPool from './UserPool';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import { Form } from 'react-bootstrap';
import {GoogleLogin} from 'react-google-login';
import {useHistory} from "react-router-dom";

export default () => {
    let history = useHistory();
    const [email, setEmail] =   useState('');
    const [password, setPassword] = useState('');

    const responseGoogle=(response) => {
        if(response){
            if(response.hasOwnProperty("googleId")) {
                history.push('/')
            } else if(response.hasOwnProperty("error")){
                alert(response.error)
            }
        }
    }
    
    const onSubmit= event => {
        event.preventDefault();

        const user = new CognitoUser({
            Username:   email,
            Pool: UserPool
        });
    
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onsuccess:', data);
                history.push('/') 
            },
    
            onFailure: err => {
                console.log('error:', err);
                console.log('error:', err.message)
                alert('error: '+err.message)
            },
    
            newPasswordRequired: data => {
                console.log('newPasswordRequired:',data);
                alert('newPasswordRequired: '+ data.email)
            }
        });
    
    };

    return (
        <div class="form-signin">
            <div class="text-center mb-4">
                <h1 class="h3 mb-3 font-weight-normal">SignIn Page</h1>
            </div>
        <div class="">
        <Form onSubmit={onSubmit}>
            <div class="form-group">
                <label >Email Address</label>
                <input type="email" class="form-control" placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
            </div>

            <div class="form-group">
                <label >Password</label>
                <input type="password" class="form-control" placeholder=""
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
            </div>
            <button class="btn btn-secondary" type="submit">Enterprise SignIn
            </button>
        </Form>
        <br/>
        <p>or</p><br/>
        <div class="form-group">
            <GoogleLogin
                clientId="529134937712-vl75md1n55ih9hfa4c4g26l9nbhtuqd8.apps.googleusercontent.com"
                buttonText="SignIn with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        
        </div>
        <p class="mt-5 mb-3 text-muted text-center">© 2020-2021</p>
        </div>
    );
};