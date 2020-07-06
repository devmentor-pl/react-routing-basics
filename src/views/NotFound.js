// ./src/NotFound.js
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const NotFound = ({redirectToHome = false}) => {
    if(redirectToHome) {
        return <Redirect to='/'/>
    }
    
    return (
        <>
            <p>
                Podana strona nie istnieje! Wróć 
                do <Link to="/">strony głównej</Link>.
            </p>
        </>
    );
}

export default NotFound;