import React, {Component} from 'react';

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    incrementarAge = () => {
        this.setState((state) => ({ age: state.age + 1 }));
    }
    render(){
        const { firstName, lastName, hairColor } = this.props;
        const { age } = this.state;
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
                <button onClick={this.incrementarAge}>{firstName} Birthday button</button>
            </div>
        )
    }  
}

export default PersonCard;
