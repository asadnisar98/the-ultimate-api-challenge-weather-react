import React, { Fragment } from 'react';
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import ForeCast from '../Forecast';
import Loader from '../Loader';
import useForecast from '../../Hooks/useForecast';
import styles from './Page.module.css'


const Page = () => {
   const {isError, isLoading, Forecast, submitRequest} = useForecast();
   const onSubmit = (value) => {
        submitRequest(value);
   }
   console.log(Forecast);

    return (
        <Fragment>
            <Header />
            {!Forecast && (
                <div className={`${styles.box} position-relative`}>
                    {!isLoading && <Form onSubmitSearch={onSubmit} />}
                    {isLoading && <Loader />}
                    {isError && <Error message={isError} />}
            </div>

            )}
    

            {Forecast && <ForeCast forecastdata={Forecast} />}
        </Fragment>
    );
};




export default Page;
