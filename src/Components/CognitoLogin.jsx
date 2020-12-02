import React, {useState} from 'react';
import UserPool from './UserPool';
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js';
import { Form } from 'react-bootstrap';

export default () => {
    const [email, setEmail] =   useState('');
    const [password, setPassword] = useState('');
    
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
            },
    
            onFailure: err => {
                console.log('error:', err);
            },
    
            newPasswordRequired: data => {
                console.log('newPasswordRequired:',data);
            }
        });
    
    };

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <input 
                value={email}
                onChange={event => setEmail(event.target.value)}/>

                <input 
                value={password}
                onChange={event => setPassword(event.target.value)}/>
                <button type="submit">Login
                </button>
            </Form>
        </div>
    );
};