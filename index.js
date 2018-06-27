// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function (element) {
    console.log(element.name)
  });
};

function logDriversByHometown(drivers, location){
  drivers.forEach(function (obj){
    if (obj.hometown === location){
      console.log(obj.name)
    }
  })
};

const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
};

const driversByName  = function (drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  });
};

const totalRevenue = function (drivers) {
  totalRev = 0;
  drivers.forEach(function (driver){
    totalRev += driver.revenue
  })
  return totalRev
}

const averageRevenue = function (drivers) {
  totalRev = 0;
  drivers.forEach(function (driver){
    totalRev += driver.revenue
  })
  return (totalRev / drivers.length)
}
