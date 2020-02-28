import React from 'react';
import { withRouter, Link } from "react-router-dom";


const NavBar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
            <div className="container">
                <label className="navbar-brand">Fb Hechizo</label>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Feed</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">My Posts</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/newPost" className="nav-link">New Post</Link>
                        </li>
                        <li className="nav-item">
                            <Link to ="/login"onClick={
                                () => {
                                    localStorage.clear();
                                }
                            } className="nav-link">Log Out</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default withRouter(NavBar);