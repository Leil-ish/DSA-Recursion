let countSheep = numOfSheep => {

    if (numOfSheep === 0) {
      return `${numOfSheep} - All sheep jumped over the fence`;
    }

    return `${numOfSheep} - Another sheep jumps over the fence
  ${countSheep(numOfSheep - 1)}`; 
  };
  
  console.log(countSheep(3));