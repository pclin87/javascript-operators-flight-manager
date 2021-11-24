function Prices() {
    calculateFinalPrice = (basePrice, variationPassengerType, variationFlightType) => {
        var finalPrice = 0
        passengerPercent = basePrice * (1 + variationPassengerType/100)
        finalPrice = passengerPercent * (1 + variationFlightType/100)
        return finalPrice.toFixed(2)
    }

    return {calculateFinalPrice}

}

module.exports = Prices();