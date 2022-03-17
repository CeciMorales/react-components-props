import React from 'react';

import HeaderClass from './HeaderClass';
import HeaderFunction from './HeaderFunction';

const HeaderExample = () => {
    const name = "Erick";
    return (
        <>
            { /** Example props and state with func vs class components */}
            <HeaderClass name="Erick"></HeaderClass>
            <HeaderFunction name={name}></HeaderFunction> 
        </>
    );
};

export default HeaderExample;
