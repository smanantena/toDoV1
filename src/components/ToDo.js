import React from "react";

class ToDo extends React.Component {
    state = {
        completed: this.props.task.completed
    }

    shouldComponentUpdate = () => {
        // console.log("Should component update ? ");
        return true;
    }

    toggleCompleted = () => {
        this.setState(
            previousState => (
                {
                    completed: !previousState.completed
                }
            )
        )
        this.props.onToggleCompleted(this.props.task.id)
        
    }

    render() {
        return (
            <li className={"list-group-item d-flex align-items-center justify-content-between" + (this.state.completed ? " bg-success text-light" : '')}>
                {this.props.task.name}
                <button onClick={ () => { this.toggleCompleted() } } className={"btn btn-sm ml-auto" + ( this.state.completed ? " btn-light" : " btn-outline-danger")}>&#x2713; </button>
            </li>
        )
    }
}

export default ToDo