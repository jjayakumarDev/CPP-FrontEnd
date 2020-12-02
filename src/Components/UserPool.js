import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_HZ3CYmDH7',
    ClientId: '4morb2qka40eh1q8jomfuhiguk'
};

export default new CognitoUserPool(poolData);