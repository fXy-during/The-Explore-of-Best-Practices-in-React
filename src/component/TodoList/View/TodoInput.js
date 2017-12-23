import React, { Component } from 'react';
import { connect } from "react-redux";
import actions from "../action";
console.log("actions", actions);

class TodoInput extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: ''
        }
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onHandleAdd = this.onHandleAdd.bind(this);
    }
    onHandleChange(e) {
        this.setState({
            value: e.target.value,
        })
    }
    onHandleAdd() {
        this.props.onAdd(this.state.value);
        this.setState({
            value: ''
        })
    }
    render(){
        return (
            <div>
                <input value={this.state.value} onChange={this.onHandleChange}/>
                <button onClick={this.onHandleAdd}>ADD</button>
            </div>
        )
    }
}

function mapDispatch(dispatch) {
    return {
        onAdd:(text)=>{
            dispatch(actions.todoAdd(text));
        }
    }
}

export default connect(null, mapDispatch)(TodoInput);