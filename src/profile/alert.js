import React from "react";
import PropTypes from "prop-types";

const Clickable = () => {
const HandleName = () => {
    alert("F. Abdelkabir");};

    return (
    <button><a href="/" onClick={HandleName} >Clickable</a></button>
    );};

Clickable.propTypes = {HandleName: PropTypes.func};

export default Clickable;