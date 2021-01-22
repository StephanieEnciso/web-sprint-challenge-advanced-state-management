import React from 'react';
import { fetchSmurf } from '../actions';

export class SmurfDisplay extends React.Component {

    componentDidMount() {
       fetchSmurf()
    }

    //if app is loading this will render loading text
    if (isFetching) {
        return <p>Loading...</p>
    }

    render() {
        return(
        <div>
            {this.props.smurfs.map((smurf) => {
                return (
                    <div key = {smurf.name}>
                        <h3>Name: {smurf.name}</h3>
                        <p>Position: {smurf.position}</p>
                        <p>Nickname: {smurf.nickname}</p>
                        <p>Description {smurf.description}</p>
                    </div>
                )
            })}
        </div>)
    }
}

export default SmurfDisplay;

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.