import React from 'react';
import classes from './CockPit.module.css';

const cockPit = (props) => {
    
    let btn = '';
    let assignedClasses = [];
    
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    if(props.show) {
        btn = classes.Red;
    }

    return (
        <div className={classes.CockPit}>
            <h1>Hi I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button 
            className={btn} 
            onClick={props.clicked}
            >Show Names
            </button>
        </div>
    );
};

export default cockPit;