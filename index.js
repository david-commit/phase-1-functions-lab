function distanceFromHqInBlocks(pickUpLocation){
    if (pickUpLocation >= 42){
        return pickUpLocation - 42;
    } else {
        return 42 - pickUpLocation;
    }
}

function distanceFromHqInFeet(pickUpLocation){
  return distanceFromHqInBlocks(pickUpLocation) * 264;
}

function distanceTravelledInFeet(start, destination){
  if (start > destination){
    return (start - destination) * 264;
  } else {
    return (destination - start) *264
  }
}

function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination)
    if (distance > 2500){
      return 'cannot travel that far'
    } else if (distance > 2000) {
      return 25;
    } else if (distance > 400){
      return 2.56;
    } else {
      return 0;
    }
  
}


