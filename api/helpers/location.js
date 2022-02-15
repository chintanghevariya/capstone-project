function getLongitudeDifference(latitude) {
    const latitudeRadian = (latitude * Math.PI) / 180;
    return 1 / (111.32 * Math.cos(latitudeRadian));
}

// 1KM latitude degree
function getLatitudeDifference() {
    return 0.045;
}

module.exports = {
    getLongitudeDifference,
    getLatitudeDifference
}