import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDoList from './components/ToDoList'
import NavBar from './components/NavBar'
class App extends React.Component {
    render() {
        return (
            <section id="todo">
                <ToDoList />
                <NavBar />
            </section>
        )
    }
}

export default App