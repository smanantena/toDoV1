import React from 'react'
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = ({ onDeleteCompleted }) => (
    <footer className="d-flex justify-content-between bg-secondary py-3 px-3 fixed-bottom" id="mainFooter">
        <div className="btn-group">
            <NavLink to="/" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaListAlt className='fs-4' /></NavLink>
            <NavLink to="/completed" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaCheckSquare className='fs-4' /></NavLink>
            <NavLink to="/add-task" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaPlusSquare className='fs-4' /></NavLink>
        </div>
        <button onClick={ onDeleteCompleted } className="btn btn-outline-dark bg-light d-flex align-items-center"><FaTrash className='fs-4' /></button>
    </footer>
)

export default NavBar