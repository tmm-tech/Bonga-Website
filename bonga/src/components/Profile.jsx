import React from "react";

const Profile = ({setShowProfile}) =>{
    const handleClick = () => {
        setShowProfile(false);
    };
    return (
        <div className="profileoptions">
            

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

export default Profile;