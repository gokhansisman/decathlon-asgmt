import React from "react";
import {
    Link
} from "react-router-dom";
import '../App.css'
export default function Header() {


    return (
            <header className="header">
                <div> <Link to="/">Posts</Link></div>

                <div><Link to="/users">Users</Link></div>
            </header>
    )

}