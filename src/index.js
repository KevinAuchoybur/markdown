// Ici on code notre App
import React from 'react';
import {render} from 'react-dom';
//CSS
import'./style/css/bootstrap.min.css';
import'./index.css';
//JS perso
import {sampleText} from'./sampleText';


class App extends React.Component{

    //Creation d'un state

    state = {
        text : sampleText
     };

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <textarea value= {this.state.text} rows="35" className="form-control"></textarea>
            </div>
                <div className="col-sm-6">
                <h1>Résultats</h1>
                <div>{this.state.text}</div>
            </div>
            </div>
            </div>
            )
    }
}

render(
<App />,
document.getElementById('root')
);