import React from 'react';

import styles from './UpcomingDaysForecastItem.module.css';

const imgUrlBase = 'https://www.metaweather.com/static/';

const UpcomingDaysForecastItem = ({imgUrl, temperature, weekday}) => (
    <li className={`${styles.weekday} d-flex flex-column justify-content-center align-items-center p-2`}>
        <img className="mb-2" width="30" src={`${imgUrlBase}img/weather/${imgUrl}.svg`} alt="upcoming day icon" />
        <span className="mb-2">{weekday}</span>
        <span className="font-weight-bold">{temperature}</span>
    </li>
);

export default UpcomingDaysForecastItem;
