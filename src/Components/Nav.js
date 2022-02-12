import React from "react";
import NotesApp from "./NotesApp";
import Calculator from "./Calculator"
import { Link } from "react-router-dom";

function Nav() {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h1>2 in 1 App</h1>
            <ul className="nav-links">
                <Link style={navStyle} to='/home'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/notesapp'>
                    <li>Notes</li>
                </Link>
                <Link style={navStyle} to='/calculator'>
                <li>Calculator</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;