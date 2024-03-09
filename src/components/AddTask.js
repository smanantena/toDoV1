import React from "react";
import {Navigate} from "react-router-dom"


class AddTask extends React.Component {
    
    state = {
        submit: false
    }
    handleOnSubmit = (event) => {
        event.preventDefault()
        this.props.onAddTask(this.newTask.value)
        this.setState(
            {
                submit: true
            }
        )
    }

    render() {
        return (
            <section>
                {
                    this.state.submit && <Navigate to ="/"/>
                }
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form onSubmit={this.handleOnSubmit} className="card-body">
                        <div className="form-group pb-3">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control mt-3" name="taskName" id="taskName" required ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddTask