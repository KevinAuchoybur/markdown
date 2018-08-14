// Ici on code notre App
import React from 'react';
import {render} from 'react-dom';
//CSS
import'./style/css/bootstrap.min.css';
import'./index.css';
//JS perso
import {sampleText} from'./sampleText';
//Import du Markdown
import marked from 'marked';


class App extends React.Component{

    //Creation d'un state
    state = {
        text : sampleText
     };

     //Fonction flechée pour éditer le text
     editText = (event) => {
        const text = event.target.value;
        /*console.log(text);*/
        //Mettre à jour un state
        this.setState({text});
     };

     //Fonction qui va creer la traduction
     renderText = (text) => {
        const renderText = marked(text,{sanitize:true});
        return {__html : renderText}
     }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                    <textarea 
                    value= {this.state.text} 
                    rows="35" 
                    className="form-control"
                    //Chaque changement, utiliser l'attribut on change
                    onChange= {(e) => this.editText(e)}
                    >
                    </textarea>
            </div>
                <div className="col-sm-6">
                <h1>Votre contenu</h1>
                <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>
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