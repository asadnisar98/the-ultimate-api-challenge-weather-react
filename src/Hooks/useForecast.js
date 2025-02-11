import { useState } from "react"
import axios from "axios";
import getCurrentDayForecast from '../helpers/getCurrentDayForecast';
import getCurrentDayDetailForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from '../helpers/getUpcomingDaysForecast';

const BASE_URL = 'https://www.metaweather.com/api/location'
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com'
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`

const useForecast = () => {
        const [isError, setError] = useState(false);
        const [isLoading, setLoading] = useState(false);
        const [Forecast, setForecast] = useState(null);


        const getWoeid = async (Location) => {
            const { data } =  await axios(`${REQUEST_URL}/search`, { params: {query: Location} });
  
            if(!data || data.length === 0){
              setError('There is no such Locatiion');
              setLoading(false);
              return;
            }
           
            return data[0];
        }


        const getForecastData = async (woeid) => {
            const {data} = await axios(`${REQUEST_URL}/${woeid}`);
            if(!data || data.length === 0){
                setError('Something Went Wrong! Try Again');
                setLoading(false);
                return;
            }

            return data;

        }

        const gatherForecastData = (data) => {
            const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title);
            const currentDayDetail = getCurrentDayDetailForecast(data.consolidated_weather[0])
            const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

            setForecast({currentDay, currentDayDetail, upcomingDays});
            setLoading(false);
            
        }

        const submitRequest = async Location => {
            setLoading(true);
            setError(false);
            const response = await getWoeid(Location);
            if(!response?.woeid) return;
            const data = await getForecastData(response.woeid);
            if(!data) return;
 

            gatherForecastData(data);
         

        }
        return{
            isError,
            isLoading,
            Forecast,
            submitRequest,
        }
}

export default useForecast
