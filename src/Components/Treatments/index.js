import React from 'react';
import './index.css';

export default function Treatments(props) {
    return (
        <div className={props.id + (props.dark ? " section-dark" : "")}>
            <div className="title">
                <div id="triangle-topleft" />
                <span>הטיפולים שלנו</span>
                <div id="triangle-bottomright" />
            </div>
            <div className="container">
            <div className="card">
                    <div className="face face1">
                        <div className="content-init">
                            <div className="icon">
                                <h3>
                                    ספורטתרפיה
                                </h3>
                                <i className="fa fa-heartbeat" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <p>
                            טיפולי שיקום ומניעה מפציעות ספורט מרגע הפציעה ועד לחזרה מלאה לאימונים <br /><br />
                            הטיפולים מתאימים לכל אוכלוסיות המתאמנים ובכל הגילאים<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content-init">
                            <div className="icon">
                                <h3>
                                    עיסוי רפואי
                                </h3>
                                <i className="fa fa-hot-tub" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <p>
                            מיועד למטופלים שסובלים מפציעות או משרירים תפוסים לאורך זמן<br /><br />
                            העיסוי כולל טיפול בטכניקת "סטריין קונטר סטריין" להורדת רגישות וכאבים<br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content-init">
                            <div className="icon">
                                <h3>    
                                    עיסוי שוודי
                                </h3>
                                <i className="fa fa-hand-holding-medical" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <p>
                            נועד לשיפור הזרמת הדם בגוף על-ידי הנעת המפרקים והשרירים בגוף<br /><br />
                            גורם לשחרור לחצים ומתחים נפשיים <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="face face1">
                        <div className="content-init">
                            <div className="icon">
                                <h3>    
                                    עיסוי ספורטאים
                                </h3>
                                <i className="fa fa-dumbbell" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <p>
                            מיועד למתאמנים וספורטאים שמבצעים אימונים בתדירות גבוהה<br /><br />
                            <b>STR</b> -ו <b>HR</b> במהלך העיסוי עובדים יותר על הפאסיה השרירית ועל הגמישות שלה בטכניקות<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};