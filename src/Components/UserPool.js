import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-1_Jp6a12gGf',
    ClientId: '5ot0jmf9tmcq8i9uaajc6ilmcq'
};

export default new CognitoUserPool(poolData);