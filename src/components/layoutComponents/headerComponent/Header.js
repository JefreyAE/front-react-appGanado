import React, { Component } from 'react';
import Title from '../titleComponent/Title';
import Navbar from '../navbarComponent/Navbar';

class Header extends Component {
    
    render(){
        const logued = sessionStorage.getItem('token');
        return(
            <React.Fragment>
                {logued != null &&
                    <Navbar /> 
                }
                {logued == null &&
                    <Title /> 
                }
            </React.Fragment>
        );  
    }
}

export default Header;