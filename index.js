let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegistered=false;
let runnerAge=16;
if(runnerRegistered && runnerAge>18){
    raceNumber+=1000;
}
if(runnerAge>18 &&runnerRegistered){
    console.log(`Your race number is ${raceNumber}. 
    Your race will start at 9:30 am`);
}else if(runnerAge>18 && !runnerRegistered){
    console.log(`Your race number is ${raceNumber}. 
    Your race will start at 11:00 am `);
}else if(runnerAge<18){
    console.log(`Your race number is ${raceNumber}. Your race starts at 12:30 pm`);

}else{
    console.log('See the registration desk');
}