function Util() {
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        let totalDistributedPassengers = 0
        Object.keys(distributedPassengers).forEach((k) => totalDistributedPassengers += distributedPassengers[k])
        return totalDistributedPassengers
    }
    return {calculateTotalDistributedPassengers}
}

module.exports = Util();