import React, { useEffect } from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request... can be done
    setTimeout(() => {
      alert('Saved or fetched data to cloud!');
    }, 1000);
  }, []);// only to be in use when rendered first time, empty array,  not all time when rerendered
  //}, [props.persons]);// only to be in use when persons change, not all time when rerendered

  // useEffect(); can use more then once

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if ( props.persons.length <= 2 ) {
    assignedClasses.push( classes.red ); // classes = ['red']
  }
  if ( props.persons.length <= 1 ) {
    assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join( ' ' )}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
    </div>
  );

};

export default cockpit;