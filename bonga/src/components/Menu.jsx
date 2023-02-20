import React from "react";

const Menu = ({ setShowOptions }) => {
    const handleClick = () => {
            setShowOptions(false);
        };

    return (
        <div className="menuoptions">
            <p>Account Settings</p>
            <p>General setting</p>
            <p>Help</p>
            <div className="closeIcon">
                <a href="button icon" onClick={handleClick}>
                    <i class="fa fa-window-close" ></i>
                </a>
            </div>
        </div>

    );
}

export default Menu;