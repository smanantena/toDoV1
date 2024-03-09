import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './components/ToDoList'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddTask from './components/AddTask'
import initialData from './initialData'
import Fetching from './components/Fetching'
class App extends React.Component {
    state = {
        tasks: [],
        fetching: true
    }
    counter = 0;
    componentDidMount = () => {
        console.log("Component did mount ",++this.counter, "state.tasks", this.state.tasks )
        
        setTimeout(
            () => {
                this.setState(
                    {
                        tasks: initialData,
                        fetching: false
                    }
                )
            }, Math.floor(Math.random() * 5000)
        )
    }

    onToggleCompleted = (taskId) => {
        let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
        taskToUpdate.completed = !taskToUpdate.completed

        this.setState(
            previousState => (
                previousState.tasks.map(
                    task => (task.id === taskId ? taskToUpdate : task)
                )
            )
        )
    }

    onAddTask = (newTaskName) => {
        let newTask = {
            id: crypto.randomUUID(),
            name: newTaskName,
            completed: false
        }

        this.setState(
            previousState => (
                {
                    tasks: [...previousState.tasks, newTask]
                }
            )
        )
        
    }

    onDeleteCompleted = () => {
        this.setState(
            previousState => ( {
                tasks: previousState.tasks.filter(task => !task.completed)
            } )
        )
    }

    render() {
        return (
            <section id="todo">
                { this.state.fetching && <Fetching /> }
                <BrowserRouter>
                    <Routes>
                        <Route path='/add-task' element={<AddTask onAddTask={this.onAddTask} />} />
                        <Route path='/:filter?' element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Routes>
                    <NavBar onDeleteCompleted={this.onDeleteCompleted} />
                </BrowserRouter>
            </section>
        )
    }
}

export default App