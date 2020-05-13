import React from 'react';
import img1 from './img/1.png';
import img2 from './img/2.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import img5 from './img/5.png';
import img6 from './img/6.png';
import './index.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0,
            images: [
                img1,
                img2,
                img3,
                img4,
                img5,
                img6
            ]
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    prevSlide() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentImageIndex - 1;
        
        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const index = this.state.currentImageIndex;
        let firstFiveImages = this.state.images.slice(index, index + 5);
        if(firstFiveImages.length < 5) {
            firstFiveImages = firstFiveImages.concat(this.state.images.slice(0, 5 - firstFiveImages.length));
        }

        return (
            <div className={this.props.id + (this.props.dark ? " section-dark" : "")}>
                <div className="title">
                    <div id="triangle-topleft" />
                    <span>גלריית תמונות</span>
                    <div id="triangle-bottomright" />
                </div>
                <div className="images-display">
                    <i className="fas fa-chevron-left" onClick={this.prevSlide} id="prev"/>
                    {
                        firstFiveImages.map((image, index) => 
                        <img id="displayed-image" key={index} src={image} alt="" />
                    )}
                    <i className="fas fa-chevron-right" onClick={this.nextSlide} id="next"/>
                </div>
            </div>
        )
    }
}

