/// <reference lib="webworker" />


function applyCoupon(value: any) {
  // let discountValue;
  let returnObj = {
    totalPrice: 0,
    couponCode: "",
    discountValue:0
  }

  if (value.discountPercentage === 10 && value.earringsCount >= 1) {
    returnObj.discountValue = (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "EAR00010";
    return returnObj;
  }
  else if (value.discountPercentage === 15 && value.ringsCount >= 1) {
    returnObj.discountValue = (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "RIN00015";
    return returnObj;
  }
  else if (value.discountPercentage === 20 && value.necklaceCount >= 1) {
    returnObj.discountValue = (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "NEC00020";
    return returnObj;
  }
  else if (value.discountPercentage === 20 && value.necklaceCount >= 1 && value.earringsCount >= 1) {
    returnObj.discountValue= (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "EARNEC20";
    return returnObj;
  }
  else if (value.discountPercentage === 20 && value.braceletsCount >= 1 && value.ringsCount >= 1) {
    returnObj.discountValue= (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "BRCRIN20";
    return returnObj;
  }
  else if (value.discountPercentage === 25 && value.braceletsCount >= 1) {
    returnObj.discountValue = (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue;
    returnObj.couponCode = "BRC00025";
    return returnObj;
  }
  else if (value.discountPercentage === 25 && value.necklaceCount >= 1 && value.ringsCount >= 1) {
    returnObj.discountValue = (value.discountPercentage / 100) * value.totalPrice;
    returnObj.totalPrice = value.totalPrice - returnObj.discountValue
    returnObj.couponCode = "NECRIN25";
    return returnObj;
  }
  else {
    return false
  }
}









addEventListener('message', ({ data }) => {
  const response = applyCoupon(data);
  postMessage(response);
});
