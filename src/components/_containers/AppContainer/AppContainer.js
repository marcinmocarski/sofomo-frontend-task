import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { IP_ADDRESS_GEOLOCATION_API_URL, IP_ADDRESS_API_URL } from '../../../api/endpoints';
import Snackbar  from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import App from '../../App/App'

const { REACT_APP_IP_ADDRESS_GEOLOCATION_API_KEY } = process.env;

const AppContainer = () => {
    const [isErrorAlertOpen, setIsErrorAlertOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchPublicIPAddress();
    }, [])

    const fetchPublicIPAddress = () => {
        fetch(IP_ADDRESS_API_URL)
            .then(response => response.json())
            .then(data => {
                if (data.ip) {
                    fetchLocation(data.ip, true);
                } else {
                    setIsErrorAlertOpen(true);
                }
            })
    }
    const fetchLocation = (value, isUserLocationInfo = false) => {
        fetch(`${IP_ADDRESS_GEOLOCATION_API_URL}/${value}?access_key=${REACT_APP_IP_ADDRESS_GEOLOCATION_API_KEY}&output=json`)
            .then(response => response.json())
            .then(data => {
                if (data && data.latitude && data.longitude) {
                    if(isUserLocationInfo) {
                        dispatch({
                            type: 'userLocationInfo/set',
                            payload: data
                        });
                    } else {
                        dispatch({
                            type: 'searchList/added',
                            payload: data
                        });
                        dispatch({
                            type: 'currentLocationInfo/set',
                            payload: data
                        });
                    }
                } else {
                    setIsErrorAlertOpen(true);
                }
            })
            .catch(error => {
                setIsErrorAlertOpen(true);
            });
    };

    return (
        <>
            <App searchHandler={fetchLocation} />
            <Snackbar open={isErrorAlertOpen} anchorOrigin={{vertical: 'top', horizontal: 'center'}}>
                <MuiAlert  variant="filled" severity="error" onClose={() => setIsErrorAlertOpen(false)}>
                    Error while fetching location. Please make sure you provide valid IP address or url.
                </MuiAlert>
            </Snackbar>
        </>)
}

export default AppContainer;