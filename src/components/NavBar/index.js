import React, { useEffect } from 'react';
import './style.css';

function Nav(props) {

    useEffect(() => {
        document.title = props.thisPage;
    })

    return (
        <header>
            <div>

            </div>
        </header>
    )
}

export default Nav;