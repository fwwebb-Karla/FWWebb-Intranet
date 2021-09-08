import React from 'react';

import './home.css';

export const home = ({ bio }) => {
    return (
        <div className="home-container">
            <p>{bio}</p>
        </div>
    )
}