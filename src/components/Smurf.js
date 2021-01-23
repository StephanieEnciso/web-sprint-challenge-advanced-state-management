import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;

        return(<div data-testid="smurf" className="card">
                {smurf.map((smur) => {
                return (
                    <div key = {smur.name}>
                        <h3>Name: {smur.name}</h3>
                        <p>Position: {smur.position}</p>
                        <p>Nickname: {smur.nickname}</p>
                        <p>Description: {smur.description}</p>
                    </div>
                )
            })}

        </div>);
    }
}



export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.