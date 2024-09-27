import React from "react";

const Button = ({ onclick, children, type = 'button', ...props }) => {
    return (
        <button type={type} onClick={onclick} {...props} className="btn">
            {children}
        </button>
    );
};

export default Button;