// import React from 'react';
import React, { Fragment } from 'react';

import classes from './Cockpit.css';
//import Auox from '../../hoc/Auox';

const cockpit = ( props ) => {
    const assignedClasses = [];
    // let btnClass = '';
    let btnClass = classes.Button;

    if (props.showPersons) {
        // btnClass = classes.Red;
        btnClass = [classes.Button, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red ); //classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold'];
    }

    return (
        // <div className={classes.Cockpit}>
        // <Auox>
        //     {/* <div> */}
        //         <h1>{ props.appTitle }</h1>
        //         <p className={assignedClasses.join(' ')}>This is really working</p>
        //         <button
        //             className={btnClass} 
        //             onClick={props.clicked}>Toogle Persons
        //         </button>
        //     {/* </div> */}
        // </Auox>
        <Fragment>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>
            <button
                className={btnClass} 
                onClick={props.clicked}>Toogle Persons
            </button>
        </Fragment>
    );
};

export default cockpit;