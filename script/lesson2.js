let priceValue;
let parsedVal,discountValue,finalvalue;

priceValue = prompt("Please enter your price:");
let cleanedValue = priceValue.replace(/[^0-9.]/g, "");
parsedVal = parseFloat(cleanedValue);
discountValue = parsedVal * 0.1;
finalvalue = parsedVal-discountValue;
console.log(`New Price after Discount is ${finalvalue}`);

