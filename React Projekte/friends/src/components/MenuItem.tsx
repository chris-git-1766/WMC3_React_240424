import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

MenuItem.propTypes = {
    title:PropTypes.string.isRequired,
    path:PropTypes.string.isRequired
};

function MenuItem({title, path}:any) {
    return (
        <div>
            <Link to={path}>{title}</Link>
        </div>
    );
}

export default MenuItem;