function Passengers() {
    checkFlightCapacity = (capacity, passengersNumbers) => {
        passengersNumbers = 0
        passengersNumbers.forEach((number) => passengersNumbers += number)
        if (passengersNumbers > capacity) {
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        } return passengersNumber;
    }
    return {checkFlightCapacity}
}
module.exports = Passengers();
