import React from "react";
import PropTypes from 'prop-types';

const Profileling = ({image,fullName,prof,bio}) => {
    return (
    <div >
        <img src={image} alt="error"style={{ width: "300px", height: "300px"}}/>
        <h2>{fullName}</h2>
        <p>I am a {prof}</p>
        <p>Bio : {bio}</p>
    </div>
    );
};
Profileling.defaultProps = {image :'error' , fullName :'error', prof:'error',bio:'error'}
Profileling.propTypes = {fullName : PropTypes.string,prof : PropTypes.string}

export default Profileling;