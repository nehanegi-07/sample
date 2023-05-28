


export const gasInEthConversion=(gasUsed,gasPrice)=>{
    const gasInEth = (gasUsed * gasPrice)/ Math.pow(10, 18);
   return gasInEth
}

// Txn Fee:  (gasUsed from JSON)
// gasInUSD = gasUsed * gasPrice * ethToUSD
// (Assuming ethToUSD = $2000) (Need to use the following JS to get real-time $ value)
// gasInUSD = 60570 * 5000000000 * 2000 / 10^18
// = 0.6057

export const txnFeeConversion=(gasUsed,gasPrice,ethToUSD)=>{
   const gasInUSD = gasUsed * gasPrice * ethToUSD / Math.pow(10, 18)

   return gasInUSD
}


// Value (value from JSON)
// ETH = value / 10^18

export const valueConversionForInternalTransaction=(value)=>{
const convertedValue=value / Math.pow(10, 18)
return convertedValue
}

