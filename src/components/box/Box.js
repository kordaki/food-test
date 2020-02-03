import React from 'react';
import PropTypes from 'prop-types';
import "./Box.scss"

const Box = props => {
    const {
        title,
        description,
        address,
        logo,
    } = props;
    return (
        <div className="box">
            <div className="main-data">
                <div className="image-container">
                    <div className="img" style={{backgroundImage: `url(${logo})`}}></div>
                </div>
                <div className="text-container">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <div className="address">{address}</div>
                </div>
            </div>
            <div className="footer-data">

            </div>
        </div>
    );
};

Box.propTypes = {

};

export default Box;