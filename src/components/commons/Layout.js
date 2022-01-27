import React from 'react'
import { ModalContextProvider } from '../../contexts/modalContex';
import Header from './Header';
import Menu from './Menu';
const Layout = (props) => {
    return ( 
        <ModalContextProvider>
        <div>
            <Header/>
            <br/>
         <div className="container">
            <div className="columns">
                <div className="column is-one-quarter">
                    <Menu/>
                </div>
                <div className='column'>
                    {props.children}
                </div>
            </div>     
        </div>  
        </div>
        </ModalContextProvider>
    );
}
 
export default Layout;