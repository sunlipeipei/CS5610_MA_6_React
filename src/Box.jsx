// import { useState } from "react"
import './Box.css'
import PropTypes from 'prop-types';

export default function Box(props) {

    let className = 'defaultBox'

    if (props.select) {
        className = 'defaultBox blackBox'
    }

    return (
        <div className={className} onClick={props.onClick}></div>
    )

}

Box.propTypes = {
    select: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

Box.defaultProps = {
    select: false,
  };