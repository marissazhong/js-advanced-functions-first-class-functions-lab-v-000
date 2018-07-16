// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {return drivers.slice(0,2)};
const returnLastTwoDrivers = function(drivers) {return drivers.slice(-2,drivers.length)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(fare) {return int*fare};
}

const fareDoubler(fare) = createFareMultiplier(2)