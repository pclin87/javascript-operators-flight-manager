function Util() {
    calculateTotalDistributedPassengers = (distributedPassengers) => {
        let totalDistributedPassengers = 0
        distributedPassengers.forEach((o) => totalDistributedPassengers += Object.values(o))
        return totalDistributedPassengers
    }
    return {calculateTotalDistributedPassengers}
}

module.exports = Util();