import React from 'react'
import PropTypes from 'prop-types'

const TodoChk = ({onClick}) => (
    <div>
        <input type="checkbox" onClick={onClick}/>
    </div>
);

TodoChk.propTypes = {
    onClick: PropTypes.func.isRequired

};

export default TodoChk