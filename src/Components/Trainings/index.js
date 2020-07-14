import React from 'react';
import calisthenics from './Calisthenics.png';
import './index.css';

export default function Trainings(props) {
    return (
        <div className={props.id + (props.dark ? " section-dark" : "")}>
            <div className="title">
                <div id="triangle-topleft" />
                <span>אימונים</span>
                <div id="triangle-bottomright" />
            </div>
            <div className="content">
                <div className="center">
                    <div className="property-card">
                        <div className="property-image" style={{backgroundImage:`url(${calisthenics})`}}></div>
                        <div className="property-description">
                            <h5><center>Calisthenics</center></h5>
                            <p>
                                שיטת אימון שברובה מתמקדמת בפיתוח <br />
                                הגוף על-ידי משקל גוף, ומביא את הגוף <br />
                                להישגים מרשימים מבחינת כוח ועיצוב הגוף
                            </p>
                        </div>
                        <div className="property-social-icons">

                        </div>
                    </div>
                </div>
                <div className="center">
                    <div className="property-card">
                        <div className="property-image">
                            <div className="property-image-title"></div>
                        </div>
                        <div className="property-description">
                            <h5>HIIT</h5>
                            <p>
                                שיטת אימון אינטרוולים פונקציונאלית בעצימות <br />
                                גבוהה שגורמת לשריפת קלוריות מהירה <br />
                                 ומשפרת כח שריר וסיבולת
                                
                            </p>
                        </div>
                        <div className="property-social-icons">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};