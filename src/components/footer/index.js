import React, {Component} from 'react';


class Footer extends React.Component {
    render() {
         return (      
                <div className="App-footer">
                    &copy; {new Date().getFullYear()} Copyright - AM DEV
                </div>        
         );
    }
}

export default Footer;