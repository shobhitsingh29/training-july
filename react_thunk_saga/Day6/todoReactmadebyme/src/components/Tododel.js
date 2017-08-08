import React from 'react'
import PropTypes from 'prop-types'

const Tododel = ({onClick}) => (
    <div>
        <input type="button" onClick={onClick} value="delete"/>
    </div>
);
Tododel.propTypes = {
    onClick: PropTypes.func.isRequired

};
export default Tododel