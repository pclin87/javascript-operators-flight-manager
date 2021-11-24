function Util() {
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        let totalDistributedPassengers = 0
        Object.keys(distributedPassengers).forEach((k) => totalDistributedPassengers += distributedPassengers[k])
        return totalDistributedPassengers
    }

    calculateTotalNumberOfPassengers = (passengersArray) => {
        totalNumberOfPassengers = 0
        passengersArray.forEach((p) => totalNumberOfPassengers += p)
        return totalNumberOfPassengers
    }

    
    checkInput = (input) => {
        if(!input || isNaN(input)) throw new Error ('input is not a number')
    }

    calculateTotalDistance = (distancesArray) => {
        totalDistance = 0
        distancesArray.forEach((d) => {
            if (d > 0 ) {
                totalDistance += d
            }
        })
        return totalDistance
    }

    calculateBonusPoints = (businessDistancesArray, economyDistancesArray, businessBonus, economyBonus) => {
        totalBonus = calculateTotalDistance(businessDistancesArray) * businessBonus + calculateTotalDistance(economyDistancesArray) * economyBonus
        return totalBonus
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints}
}

module.exports = Util();