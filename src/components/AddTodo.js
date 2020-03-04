import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: "",
        name:""
       
    };
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })

    };
    onSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({
            title:""
        })
    };
    render() {
        return (
            <form className="form-container" onSubmit={this.onSubmit}>
                <input type="text" name="title" placeholder="Add Todo..." className="input-text" value={this.state.title} onChange={this.onChange}/>
                <input type="text" name="name" placeholder="Add Name..." className="input-text" value={this.state.name} onChange={this.onChange}/>

                <input type="submit" value="Submit" className="input-submit"/>

            </form>
        )
    }
}

export default AddTodo
