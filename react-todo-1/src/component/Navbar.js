import React from 'react'

const Navbar = (props) => {
    return(
        <nav>
            <div className="nav_wrapper">
            <a href="/" className="left brand-logo">Todo App</a>
            <u1 id="nav-mobile" className="right hide-on-med-and-down">
            <li>
                <a href="/">Todos</a>
            </li>
            <li>
                <a href="/">Completed Tasks</a>
            </li>
            </u1>

        </div>
        </nav>
    )
}
export default Navbar