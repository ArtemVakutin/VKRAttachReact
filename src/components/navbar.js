import React from "react";
import {NavLink as NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="Nav">
                <div className="NavMenu">
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/about">
                        About
                    </NavLink>
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/blogs">
                        Blogs
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default NavBar;
