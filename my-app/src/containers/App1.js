import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Ollie', age: 33 },
            { name: 'Lisa', age: 34 }
        ],
        otherState: 'some other value'
    }

    switchNameHandler = (newName) => {
        // console.log('Was clicked');
        // DON'T DO THIS this.state.persons[0].name = 'Joan';
        this.setState({
            persons: [
                { name: 'Manda', age: 28 },
                { name: 'Ollie', age: 33 },
                { name: 'Lisa', age: 19 }
            ]
        }   )
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons: [
                { name: 'newName', age: 28 },
                { name: event.target.value, age: 33 },
                { name: 'Lisa', age: 21 }
            ]
        }   )
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is really working</p>
                <button
                    style={style} 
                    onClick={() => this.switchNameHandler('Kajsa!!')}>Switch Name</button>
                <Person
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Nelli')}
                    changed={this.nameChangedHandler}>Hobbies: racing</Person>
                <Person
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/>
            </div>
        );
        //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Doeas this work now?'));
    }
}

export default App;
