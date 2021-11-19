function Passengers() {
    checkFlightCapacity = (capacity, passengersNumbers) => {
        passengersNumbers = 0
        passengersNumbers.forEach((number) => passengersNumbers += number)
        if (passengersNumbers < capacity) {
            return passengersNumbers
        } else throw new Error("The number of oassengers of the flight must be less than the capacity of the flight")
    }
    return checkFlightCapacity
}
module.exports = Passengers();
