function Passengers() {
    checkFlightCapacity = (capacity, passengersArray) => {
        passengersNumber = 0
        passengersArray.forEach((number) => passengersNumber += number)
        if (passengersNumber > capacity) {
            throw new Error("Flight capacity (" + capacity + ") exceeded. You have " + passengersNumber + " passengers.");
        } return passengersNumber;
    }
    return {checkFlightCapacity}
}
module.exports = Passengers();
