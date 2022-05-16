import React from 'react';
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'react-bootstrap';
import CurrentDay from '../CurrentDay'
import CurrentDayDescription from '../CurrentDayDescription'
import UpcomingDaysForecast from '../UpcomingDaysForecast'
import styles from './Forecast.module.css';

const Forecast = ({forecastdata}) => (
    <Container className={styles.box}>
        <Row>
            <Col xs={12} md={4}>
                <div className={styles.card}>
                    <CurrentDay {...forecastdata.currentDay} />
                </div>
            </Col>
            <Col xs={12} md={8} className="d-flex flex-column justify-content-between">
                <CurrentDayDescription forecast={forecastdata.currentDayDetail} />
                <UpcomingDaysForecast days={forecastdata.upcomingDays} />
            </Col>
        </Row>
    </Container>
);

Forecast.propTypes = {
    forecastdata: PropTypes.shape({
        currentDay: PropTypes.object,
        currentDayDetail: PropTypes.array,
        upcomingDays: PropTypes.array,
    }),
}

export default Forecast;
