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
            <div className="content">
                <p>
                    <div className="treatment-title" align="right" style={{'paddingRight': '250px'}}>
                        <b>טיפולי ספורטתרפיה</b>
                    </div>
                    טיפולי שיקום ומניעה מפציעות ספורט מרגע הפציעה ועד לחזרה מלאה לאימונים <br />
                    הטיפולים מתאימים לכל אוכלוסיות המתאמנים ובכל הגילאים<br />
                    <div className="treatment-title" align="right" style={{'paddingRight': '250px'}}>
                        <b>עיסוי רפואי</b>
                    </div>
                    מיועד למטופלים שסובלים מפציעות או משרירים תפוסים לאורך זמן<br />
                   ,העיסוי כולל טיפול בטכניקת "סטריין קונטר סטריין" להורדת רגישות וכאבים, טיפול בטריגר פוינט<br />
                   .וחבישות במידת הצורך  ,<b>STR</b> -ו <b>HR</b> שחרור לרקמות עמודות בטכניקות <br />   
                </p>
            </div>
        </div>
    );
};