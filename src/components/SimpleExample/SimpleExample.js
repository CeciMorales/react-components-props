import React from 'react';

import SimpleExampleClass from './SimpleExampleClass';
import SimpleExampleFunction from './SimpleExampleFunction';

const SimpleExample = () => {
    return (
        <>
            { /* Simple example func vs class components */}
            <SimpleExampleClass></SimpleExampleClass>
            <SimpleExampleFunction></SimpleExampleFunction>
        </>
    );

};

export default SimpleExample;
