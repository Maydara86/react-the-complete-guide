import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }

    return (
    <div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
        <input onChange={props.changed} value={props.name} />
        <p>{props.children}</p>
    </div>
    );
};

export default Radium(person);