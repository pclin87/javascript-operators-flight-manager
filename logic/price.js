function Prices() {
    calculateFinalPrice = (basePrice, variationPassengerType, variationFlightType) => {
        var finalPrice = 0
        passengerPercent = basePrice * (1 + variationPassengerType/100)
        finalPrice = passengerPercent * (1 + variationFlightType/100)
        return finalPrice.toFixed(2)
    }

    calculateDefaultFinalPrice = (basePrice, passengerType, flightType) => {
        finalPrice = basePrice
        switch (passengerType.toLowerCase()){
            case 'regular': finalPrice *= .95;
            break;
            case 'vip': finalPrice *= 1.05;
            break;
        }
        switch(flightType.toLowerCase()){
            case 'economy': finalPrice *= .97;
            break;
            case 'business': finalPrice *= 1.10;
            break; 
        }
        return finalPrice.toFixed(2)
    }

    return {calculateFinalPrice, calculateDefaultFinalPrice}

}

module.exports = Prices();