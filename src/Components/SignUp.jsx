import React, {useState} from 'react';
import UserPool from './UserPool';
import { Form } from 'react-bootstrap';
import {useHistory} from "react-router-dom";
import {GoogleLogin} from 'react-google-login';

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

        UserPool.signUp(email, password, [], null, (err, data) => {
            if(data){
                console.log(data);
                alert("Verification email has been sent to given email address.")
                history.push('/CognitoLogin') 
            } else if(err){
                console.log(err);
                alert(err.message)
            }
        });
    };

    return (
        <div class="form-signin">
            <Form onSubmit={onSubmit}>
            <div class="form-group">
                <label>Email Address</label>
                <input type="email" class="form-control" id="" placeholder="Enter email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}/>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="" placeholder=""
                    value={password}
                    onChange={event => setPassword(event.target.value)}/>
            </div>
            <button class="btn btn-secondary" type="submit">Enterprise SignUp
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
    );
};