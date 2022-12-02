import React from "react";
import {NavLink as NavLink} from "react-router-dom";

const UserNavBar = () => {
    return (
        <>
            <div className="Nav">
                <div className="NavMenu">
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/order">
                        Заявления
                    </NavLink>
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/docs">
                        Документы по ВКР
                    </NavLink>
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/modify">
                        Уточнить данные пользователя
                    </NavLink>
                    <NavLink className={({isActive}) =>
                        isActive ? "NavLinkActive" : "NavLink"
                    } to="/userlogout">
                        Выйти из системы
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default UserNavBar;
