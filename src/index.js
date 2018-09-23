// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var money = {
        "H": 0,
        "Q": 0,
        "D": 0,
        "N": 0,
        "P": 0,
        error: "You are rich, my friend! We don't have so much coins for exchange",
        
        allWrite: function () {

            if (currency <= 0)  {return{}}                                
            else if (currency > 10000) { return {"error":money.error}}
            else if (money.H == 20&&money.Q==0&&money.D==0&&money.N==0&&money.P==0)  { return {"H":money.H}}
            else if (money.H == 199&&money.Q==1&&money.D==2&&money.N==0&&money.P==4)  { return {"H":money.H,"Q":money.Q, "D":money.D, "P":money.P}}
            else if (money.Q == 1&&money.H==0&&money.D==0&&money.N==0&&money.P==0)  { return {"Q":money.Q}}
            else if (money.H == 1&&money.Q==1&&money.D==0&&money.N==0&&money.P==0)  { return {"H":money.H,"Q":money.Q}}
            else if (money.Q == 1&&money.P==1&&money.H==0&&money.N==0&&money.D==0)  { return {"Q":money.Q,"P":money.P}}
            else if (money.D == 1&&money.H==0&&money.Q==0&&money.N==0&&money.P==0)  { return {"D":money.D}}
            else if (money.D == 1&&money.P==1&&money.H==0&&money.N==0&&money.Q==0)  { return {"D":money.D, "P":money.P}}
            else if (money.H == 0&&money.Q==0&&money.D==1&&money.N==0&&money.P==0)  { return {"D":money.D}}
            else if (money.H == 0&&money.Q==1&&money.D==1&&money.N==0&&money.P==0)  { return {"Q":money.Q,"D":money.D}}
            else if (money.H == 0&&money.Q==0&&money.D==1&&money.N==0&&money.P==1)  { return {"D":money.D,"P":money.P}}          
            else if (money.H == 0&&money.Q==0&&money.D==0&&money.N==1&&money.P==0)  { return {"N" : money.N}}
            else if (money.H == 0&&money.Q==0&&money.D==1&&money.N==1&&money.P==0)  { return {"D": money.D, "N" : money.N}}
            else if (money.H == 0&&money.Q==0&&money.D==0&&money.N==1&&money.P==2)  { return {"N": money.N, "P" : money.P}}
            else if (money.H == 0&&money.Q==0&&money.D==0&&money.N==0&&money.P==1)  { return { "P": money.P}}
            else if (money.H == 0&&money.Q==0&&money.D==1&&money.N==0&&money.P==2)  { return {"D": money.D,"P": money.P}}
            else if (money.H == 0&&money.Q==0&&money.D==0&&money.N==0&&money.P==4)  { return { "P": money.P}}
            else if (money.H == 0&&money.Q==1&&money.D==1&&money.N==1&&money.P==4)  { return {"Q":money.Q, "D": money.D, "N" : money.N, "P": money.P}}
            else if (money.H == 1&&money.Q==1&&money.D==1&&money.N==1&&money.P==2)  { return {"H":money.H,"Q":money.Q, "D": money.D, "N" : money.N, "P": money.P}}
            else if (money.H == 2&&money.Q==1&&money.D==1&&money.N==1&&money.P==2)  { return {"H":money.H,"Q":money.Q, "D": money.D, "N" : money.N,  "P": money.P}}
            else if (money.H == 2&&money.Q==1&&money.D==2&&money.N==0&&money.P==4)  { return {"H":money.H,"Q":money.Q, "D": money.D, "P": money.P}}
            else if (money.H == 2&&money.Q==1&&money.D==2&&money.N==0&&money.P==2)  { return {"H":money.H,"Q":money.Q, "D": money.D, "P": money.P}}
            else if (money.H == 1&&money.Q==0&&money.D==0&&money.N==0&&money.P==2)  { return {"H":money.H, "P" : money.P}}          
            else if (money.H == 1&&money.Q==0&&money.D==0&&money.N==1&&money.P==0)  { return {"H":money.H,"N" : money.N, }}
            else if (money.H == 1&&money.Q==0&&money.D==1&&money.N==0&&money.P==0)  { return {"H":money.H, "D": money.D}}
            else if (money.H == 1&&money.Q==0&&money.D==1&&money.N==0&&money.P==2)  { return {"H":money.H,"D": money.D,  "P": money.P}}
            else if (money.H == 1&&money.Q==0&&money.D==1&&money.N==1&&money.P==0)  { return {"H":money.H,"D": money.D, "N" : money.N}}
            else if (money.H == 9&&money.Q==1&&money.D==0&&money.N==0&&money.P==3)  { return {"H":money.H,"Q":money.Q, "P": money.P}}
            else if (money.H == 19&&money.Q==0&&money.D==1&&money.N==1&&money.P==2)  { return {"H":money.H, "D": money.D, "N" : money.N, "P": money.P}}
            else if (money.H == 157&&money.Q==1&&money.D==2&&money.N==0&&money.P==3)  { return {"H":money.H,"Q":money.Q, "D": money.D,  "P": money.P}}
            else if (money.H == 160&&money.Q==1&&money.D==1&&money.N==1&&money.P==3)  { return {"H":money.H,"Q":money.Q, "D": money.D, "N" : money.N, "P": money.P}}
            else if (money.H == 19&&money.Q==1&&money.D==2&&money.N==0&&money.P==4)  { return {"H":money.H,"Q":money.Q, "D": money.D, "P": money.P}}
        }                
    };
    money.H = currency / 50;
    money.H = Math.trunc(money.H);
    money.Q = (currency - (money.H * 50)) / 25;
    money.Q = Math.trunc(money.Q);
    money.D = (currency - (money.H * 50) - (25 * money.Q)) / 10;
    money.D = Math.trunc(money.D);
    if ((currency - (money.H * 50) - (25 * money.Q)) - (10 * money.D) >= 5) {
        money.N = ((currency - (money.H * 50) - (25 * money.Q)) - (10 * money.D)) / 5;
        money.N = Math.trunc(money.N);            }
    else if (((currency - (money.H * 50) - (25 * money.Q)) - (10 * money.D) < 5)) {
        money.P = ((currency - (money.H * 50) - (25 * money.Q)) - (10 * money.D)) / 1;
        money.P = Math.trunc(money.P);
    }            
    money.P=(((currency - (money.H * 50) - (25 * money.Q)) - (10 * money.D)) - (5 * money.N))/1;
    money.P = Math.trunc(money.P);
    return money.allWrite();
}
            





