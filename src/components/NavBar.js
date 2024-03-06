import React from 'react'
import { FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash } from 'react-icons/fa'

const NavBar = () => (
    <footer className="d-flex justify-content-between bg-secondary py-3 px-3 fixed-bottom" id="mainFooter">
        <div className="btn-group">
            <a href="/#" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaListAlt className='fs-4' /></a>
            <a href="/#" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaCheckSquare className='fs-4' /></a>
            <a href="/#" className="btn btn-outline-dark bg-light d-flex align-items-center"><FaPlusSquare className='fs-4' /></a>
        </div>
        <button className="btn btn-outline-dark bg-light d-flex align-items-center"><FaTrash className='fs-4' /></button>
    </footer>
)

export default NavBar