import React from "react";
import {Link, Outlet} from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav>

                <ul>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/">Utku</Link>
                    </li>
                </ul>
            </nav>
            < Outlet/>
        </div>
    )
}

export default Navbar;