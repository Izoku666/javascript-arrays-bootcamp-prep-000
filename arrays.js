var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  //done
  
  // note to self:  arrays are NOT indexed
  
  // access element
function accessElementInArray(array , index)
{
    return array[index];  //done
}

  // add element to beginning
function addElementToBeginningOfArray(array , element)
{
  return [element , ...array];  //done
}

// add element to end
function addElementToEndOfArray(array , element)
{
  return [...array , element] //done
}

// U remove element from beginning
function removeElementFromBeginningOfArray(array)
{
  // shift?
}

// destructively ADD an element to the BEGINNING
function destructivelyAddElementToBeginningOfArray(array , element)
{
  //return array.shift(element);
  return array.unshift(element)
}

// destructively ADD an element to the END
function destructivelyAddElementToEndOfArray(array , element)
{
  return array.push(element)
} // ended up putting this in twice at one point

// destructively REMOVE an element from the BEGINNING
function destructivelyRemoveElementFromBeginningOfArray(array)
{
  return array.shift();
}

// destrutively REMOVE an element from the END
function destructivelyRemoveElementFromEndOfArray(array)
{
  return array.pop();
}

// U REMOVE element from the END of an array
function removeElementFromEndOfArray(array)
{
    var newArray = array
    newArray = newArray.slice(0 , newArray.length-1)
    return newArray // done
}

// grabbing dinner, 5:57 3/12/19
// returning at 6:55
// brb 7:38