import React from 'react';
import './index.css';

export default class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullName: '',
            phoneNum: '',
            email: '',
            messageContent: ''
        }
    }
    render(){
        console.log(this.state)
        return (
            <div className={this.props.id}>
                <div className="section-content" id={this.props.id}>
                    <div className="title">
                        <div id="triangle-topleft" />
                        <span>צור קשר</span>
                        <div id="triangle-bottomright" />
                    </div>
                    <div className="content">
                        <div className="contact-form">
                                <div className="personal-info">
                                    <div className="portfolio-img"/>
                                    <div className="icons">
                                        <i className="fa fa-map-marker"><span className="form-info">קרל נטר 16, ראשון לציון</span></i>
                                        <a className="whatsapp" href="https://wa.me/972526899504?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A8,%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A2%D7%9C%20%D7%90%D7%99%D7%9E%D7%95%D7%9F%20%D7%90%D7%99%D7%A9%D7%99" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-phone"><span className="form-info">052-6899504</span></i>
                                        </a>
                                        <i className="fa fa-envelope"><span className="form-info">kdosha47@gmail.com</span></i>
                                    </div>
                                </div>
                                <div>
                                    <form>
                                        <input type="text" placeholder="שם מלא" required onChange={(e) => this.setState({fullName: e.target.value})}/>
                                        <input type="text" placeholder="טלפון" required onChange={(e) => this.setState({phoneNum: e.target.value})}/>
                                        <input type="text" placeholder="אימייל" required onChange={(e) => this.setState({email: e.target.value})}/>
                                        <textarea name="message" placeholder="תוכן ההודעה" rows="5" required onChange={(e) => this.setState({messageContent: e.target.value})}/>
                                        <center>
                                            <div className="submit">
                                                <span>שלח הודעה</span>
                                            </div>
                                        </center>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
}