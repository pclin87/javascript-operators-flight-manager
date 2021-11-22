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
    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers}


}

module.exports = Util();