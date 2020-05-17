import React from 'react';
import Sliderr from './Slider.js';
import './sliders.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 200,
            height: 200,
            images: [
                '1.png',
                '2.png',
                '3.png',
                '4.png',
                '5.png',
                '6.png',
            ],
            currentIndex: 0
        }
    }

    slideLeft() {
        const lastIndex = this.state.images.length - 3;
        const resetIndex = this.state.currentIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentIndex + 3;
        this.setState({currentIndex: index});
    }

    slideRight() {
        const lastIndex = this.state.images.length - 3;
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 3  ;
        this.setState({currentIndex: index});
    }

    renderSliders() {
        console.log(this.props.dark)
        const index = this.state.currentIndex;
        let firstFiveImages = this.state.images.slice(index, index + 4);
        if(firstFiveImages.length < 4) {
            firstFiveImages = firstFiveImages.concat(this.state.images.slice(0, 4 - firstFiveImages.length));
        }
        return (
            <div className={this.props.id + (this.props.dark ? " section-dark" : "")}>
                <div className="slider-items">
                <a className="arrow left">
                    <i className="fas fa-chevron-left" id="prev" onClick={() => this.slideLeft()}/>  
                </a>
                    {
                        firstFiveImages.map((image, index) => {
                            return (
                                <Sliderr
                                    image={image}
                                    width={this.state.width}
                                    height={this.state.height}
                                    key={index}
                                />
                            )
                        })
                    }
                <a className="arrow right">
                    <i className="fas fa-chevron-right" id="next" onClick={() => this.slideRight()}/>
                </a>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="slider">
                {this.renderSliders()}
            </div>
        )
    }
}
