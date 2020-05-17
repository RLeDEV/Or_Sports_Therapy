import React from 'react';
import PropTypes from 'prop-types';

const Slider = ({image, width, height}) => {
    const backgroundImage = require(`./img/${image}`);
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'fixed',
        float: 'left',
        width: `${width}px`,
        height: `${height}px`,
        marginRight: '10px',
        marginLeft: '10px',
        flex: 1
    }
    return (
        <div className="slide" style={styles}></div>
    )
}

Slider.defaultProps = {
    width: 300,
    height: 600
}

export default Slider;