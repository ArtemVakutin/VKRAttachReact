import React from "react";
import {NavLink as NavLink} from "react-router-dom";

const UserRegisterBar = () => {
    return (
        <>
            <div className="Nav">
                <div className="NavMenu">
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/authorization">
                        Войти
                    </NavLink>
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/registration">
                        Зарегистрироваться
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default UserRegisterBar;
