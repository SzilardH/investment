
export function Calculate(indc,inMonthc,inHufc,growthc,maxInvc,premiumc)
{
  var M = Number(inMonthc);
  var H = Number(inHufc);
  // only user given variables are checked
  if( isNaN(H))
  {
    //Error
    return -1;
  }
  if(isNaN(M))
  {
    //Error
    return -1;
  }


  var totalc;
  if (indc < inMonthc) {      
    totalc = inHufc * growthc ** indc;
  } else {
    if(maxInvc)
    {
      //R7 -> If the customer selects the highest categories of amount and period then they can have an extra 3% growth at the end of the investment.
      totalc = inHufc * (premiumc + 0.03) * growthc ** indc;
    }
    else
    {
      totalc = inHufc * premiumc * growthc ** indc;
    }     
    
  }

  return totalc;
}
export default Calculate;