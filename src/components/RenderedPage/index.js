import React, { useState } from 'react';


function RenderedPage () {

    const [thisPage, setThisPage] = useState('NewsToday');

    const displayPage = () => {
        switch (thisPage) {
            case 'NewsToday':
                return <NewsToday />;
            case 'About':
                return <About />;
            // case 'NewsPast':
            //     return <NewsPast />
            case 'Admin':
                return <Admin />;
            default:
                return <NewsToday />
        }
    }

    return (
        <div>
            <Nav thisPage={thisPage}  setThisPage={setThisPage} />
            <div>{displayPage(thisPage)}</div>
        </div>
    )
}

export default RenderedPage