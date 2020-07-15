import React from 'react';
import './index.css';

export default function Contact(props) {
    return (
        <div className={props.id}>
            <div className="section-content" id={props.id}>
                <div className="title">
                    <div id="triangle-topleft" />
                    <span>צור קשר</span>
                    <div id="triangle-bottomright" />
                </div>
                <div className="content">
                    <div className="contact-form">
                            <div className="personal-info">
                                <i className="fa fa-map-marker"></i><span className="form-info">ראשון לציון</span><br/>
                                <i className="fa fa-phone"></i><span className="form-info">0546252204</span><br/>
                                <i className="fa fa-envelope"></i><span className="form-info">kdosha47@gmail.com</span><br/>
                            </div>
                            <div>
                                <form>
                                    <input type="text" placeholder="שם מלא" required/>
                                    <input type="text" placeholder="טלפון" required/>
                                    <input type="text" placeholder="אימייל" required/>
                                    <textarea name="message" placeholder="תוכן ההודעה" rows="5" required />
                                    {/* <button className="submit">שלח</button> */}
                                    <center>
                                        <div className="summarySubmitBtn">
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