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
                                <i className="fa fa-heartbeat" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <h3>
                                <a href="/#">ספורטתרפיה</a>
                            </h3>
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
                                <i className="fa fa-hot-tub" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <h3>
                                <a href="/#">עיסוי רפואי</a>
                            </h3>
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
                                <i className="fa fa-hand-holding-medical" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <h3>
                                <a href="/#">עיסוי שוודי</a>
                            </h3>
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
                                <i className="fa fa-dumbbell" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content-init">
                            <h3>
                                <a href="/#">עיסוי ספורטאים</a>
                            </h3>
                            <p>
                            מיועד למתאמנים וספורטאים שמבצעים אימונים בתדירות גבוהה<br /><br />
                            <b>STR</b> -ו <b>HR</b> במהלך העיסוי עובדים יותר על הפאסיה השרירית ועל הגמישות שלה בטכניקות<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="content">
                <p>
                    <div className="treatment-title" align="right" style={{'paddingRight': '200px'}}>
                        <ul className="list-style" style={{'direction': 'rtl'}}>
                            <li><b>טיפולי ספורטתרפיה</b></li>
                        </ul>
                    </div>
                    טיפולי שיקום ומניעה מפציעות ספורט מרגע הפציעה ועד לחזרה מלאה לאימונים <br />
                    הטיפולים מתאימים לכל אוכלוסיות המתאמנים ובכל הגילאים<br />
                    <div className="treatment-title" align="right" style={{'paddingRight': '200px'}}>
                        <ul className="list-style" style={{'direction': 'rtl'}}>
                            <li><b>עיסוי רפואי</b></li>
                        </ul>
                    </div>
                    מיועד למטופלים שסובלים מפציעות או משרירים תפוסים לאורך זמן<br />
                   ,העיסוי כולל טיפול בטכניקת "סטריין קונטר סטריין" להורדת רגישות וכאבים, טיפול בטריגר פוינט<br />
                   .וחבישות במידת הצורך  ,<b>STR</b> -ו <b>HR</b> שחרור לרקמות עמודות בטכניקות <br />
                    <div className="treatment-title" align="right" style={{'paddingRight': '200px'}}>
                        <ul className="list-style" style={{'direction': 'rtl'}}>
                            <li><b>עיסוי שוודי</b></li>
                        </ul>
                    </div>   
                   , נועד לשיפור הזרמת הדם בגוף על-ידי הנעת המפרקים והשרירים בגוף<br />
                   גורם לשחרור לחצים ומתחים נפשיים <br />
                   <div className="treatment-title" align="right" style={{'paddingRight': '200px'}}>
                     <ul className="list-style" style={{'direction': 'rtl'}}>
                            <li><b>עיסוי ספורטאים</b></li>
                        </ul>
                    </div> 
                    .מיועד למתאמנים וספורטאים שמבצעים אימונים בתדירות גבוהה<br />
                    .<b>STR</b> -ו <b>HR</b> במהלך העיסוי עובדים יותר על הפאסיה השרירית ועל הגמישות שלה בטכניקות<br />
                </p>
            </div> */}
        </div>
    );
};