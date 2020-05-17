import React from 'react';
import './index.css';

export default function About(props) {
    return (
        <div className={props.id}>
            <div className="section-content" id={props.id}>
                <div className="title">
                    <div id="triangle-topleft" />
                    <span>מי אני</span>
                    <div id="triangle-bottomright" />
                </div>
                <div className="content">
                    <p>
                   .שמי הוא אור ארץ-קדושה, ספורטתרפיסט ומעשה רופאי מתמחה <br />
                    .התמחותי היא בשיקום מפציעות ספורט, ואני מאמין כושר אישי וקבוצתי מוסמך מכון וינגייט <br />
                   .Street Workout-ו Calisthenics  הנני בעל התמחות באימוני <br />
                   <b> :תעודות הסמכה </b><br />
                     ספורטתרפיסט - <br />
                     מאמן כושר אישי, לקבוצות ולילדים - <br />
                     מעסה רפואי, שוודי ומעסה ספורטאים - <br />
                    </p>
                </div>
            </div>
        </div>
    );
};