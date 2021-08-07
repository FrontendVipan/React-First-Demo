import React from 'react';
import reactDom  from 'react-dom';
import Content from './Content';

class LifeCycle extends React.Component {
    constructor(Props){
        super(Props);

        this.state = {
            data: 0,
        }
        this.setNewValue = this.setNewValue.bind(this)
    };

    setNewValue(){
        this.setState({ data: this.state.data + 1})
    }

    render(){
        return(
            <>
                <div>
                <h3 className="btn btn-warning">{this.props.Number}</h3>
                <button 
                className="btn btn-info"
                onClick = {this.setNewValue}>Keep Adding</button>
                <Content Number = {this.state.data}></Content>
                </div>
            </>
        )
    }

}

export default LifeCycle;