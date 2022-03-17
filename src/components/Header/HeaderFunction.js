import React, {useState} from 'react';

const HeaderFunction = (props) => {
    const [message, setMessage] = useState("wharever you want to say");
    const [isAvailable, setIsAvailable] = useState(true);

    return (
        <header className="functional-component">
            <p>Header from <b>functional component</b></p>
            <h1>Welcome, { props.name }</h1>
            <p>message: { message }</p>
            <p>isAvailable: { isAvailable ? "yes" : "no" }</p>
            
        </header>
    );
};

export default HeaderFunction;
