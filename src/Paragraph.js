import React, { Component } from 'react';
class Paragraphs extends React.Component{
    render(){
        return(
            <React.Fragment>
                {this.props.phrases.map 
                    (phrase => <p>{phrase}</p>)
                }
            </React.Fragment>
        );
    }
}
export default Paragraphs;


/*class Paragraph extends Component{
    render(){
        return(
            <p className="App5-intro">
                To get started, edit <code>src/App.js</code>and save to reload
                <button onClick={()=>this.props.showMsg('Hello')}>Click here!</button>
            </p>
        );
    }

}
export default Paragraph;
export default function Paragraph({showMsg}){
    return(
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <button onClick={()=>showMsg ('Hello')}>click here</button>
        </p>
    );
}*/