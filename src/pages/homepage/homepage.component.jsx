import React from 'react';
import Directory from './../../component/directory/directory.component';
import './homepage.styles.scss';

const HomePage = ({ history }) => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory />
    </div>
);

export default HomePage;
