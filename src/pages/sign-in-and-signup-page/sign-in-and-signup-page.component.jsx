import React from 'react';
import './sign-in-and-signup-page.styles.scss';

import SignIn from './../../component/signin/signin.component';
import SignUp from './../../component/sign-up/sign-up.component';

const SignInAndSignUp = () =>(
    <div className='sign-in-and-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp;