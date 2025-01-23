/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function SystemInfo({ title, message }) {
    return (
        <div className="system-info">
            <h4>{title}</h4>
            <p>{message}</p>
        </div>
    )
}

export default SystemInfo;