
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_MAPS_API_KEY } from '../../api/keys';

const LocationMap = (props) => {

    const {cords} = props;
    const mapStyles = {
        width: "100%",
        height: "100$"
    };

    return (
        <>
            <Map
                google={props.google}
                initialCenter={{
                    lat: cords.latitude,
                    lng: cords.longitude
                }}
                center={{
                    lat: cords.latitude,
                    lng: cords.longitude
                }}
                zoom={13}
                style={mapStyles}
            />
        </>
    )
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY
})(LocationMap);