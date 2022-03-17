import React from 'react';

import Profile from './Profile';

const ProfileExample = () => {
    
    const name = "Erick";

    const sayHi = () => {
        console.log('Hello from App component');
    }
    return (
        <>
            <h2>Sending props to Profile component</h2>
            <Profile
                fullname={{firstName: 'Erick', lastName: 'Perez'}}  // objects
                age={29}                                            // numbers
                isAvailable={true}                                  // boolean
                sayHi={sayHi}                                       // functions
                icon={<span>:)</span>}                              // elements 
            ></Profile>

            <h2>Not sending any props to Profile component</h2>
            <Profile></Profile>
           
                <h2>Not sending the correct type of props</h2>
                <Profile fullname="Ceci"></Profile>
            
            
        </>
    );
};

export default ProfileExample;
