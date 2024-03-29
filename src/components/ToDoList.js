import React from "react";
import ToDo from "./ToDo";
import { useParams } from 'react-router-dom'

const ToDoList = ({ tasks, onToggleCompleted }) => {
    const params = useParams()

    let filteredTasks = []

    switch (params.filter) {
        case 'completed':
            filteredTasks = tasks.filter(task => (task.completed))
            break;

        default:
            filteredTasks = tasks
            break;
    }

    if (filteredTasks.length === 0) {
        return (
            <>
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    <li className="list-group-item">Aucune tâche à afficher.</li>
                </ul>
            </>
        )
    }

    return (
        <>
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">
                {
                    filteredTasks.map(task => {
                        return <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />
                    })
                }
            </ul>
        </>
    )
}

export default ToDoList