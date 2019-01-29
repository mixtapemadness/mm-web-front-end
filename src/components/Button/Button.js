import React from 'react';

const Button = ({ children, onClick }) => (<button className="btn" type="button" onClick={onClick}>{children}</button>);

export default Button;
