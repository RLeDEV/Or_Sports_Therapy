import React from 'react';
import Sliderr from './Slider.js';
import './sliders.css';

export default class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 500,
            height: 200,
            images: [
                '11.jpg',
                '22.jpg',
                '33.jpg',
                '44.jpg',
                '55.jpg',
                '66.jpg',
                '77.jpg',
                '88.jpg',
                '99.jpg',
                '100.jpg'
            ],
            currentIndex: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.slideRight(), 5000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    
    slideLeft() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentIndex === lastIndex;
        const index = resetIndex ? 0 : this.state.currentIndex + 1;
        this.setState({currentIndex: index});
    }

    slideRight() {
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentIndex === 0;
        const index = resetIndex ? lastIndex : this.state.currentIndex - 1;
        this.setState({currentIndex: index});
    }

    renderSliders() {
        const index = this.state.currentIndex;
        let firstFiveImages = this.state.images.slice(index, index + 3);
        if(firstFiveImages.length < 3) {
            firstFiveImages = firstFiveImages.concat(this.state.images.slice(0, 3 - firstFiveImages.length));
        }
        return (
            <div className={this.props.id + (this.props.dark ? " section-dark" : "")}>
                <div className="slider-items">
                    <div className="arrow left">
                        <i className="fas fa-chevron-left" id="prev" onClick={() => this.slideLeft()}/>  
                    </div>
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
                    <div className="arrow right">
                        <i className="fas fa-chevron-right" id="next" onClick={() => this.slideRight()}/>
                    </div>
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
