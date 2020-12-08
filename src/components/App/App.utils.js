export const getCords = (locationInfo) => {
    const { latitude, longitude } = locationInfo;
    if(latitude !== undefined && longitude !== undefined) {
        return {
            latitude,
            longitude
        }
    } else {
        return {
            latitude: 0,
            longitude: 0
        }
    }
}
