function animalCount(miles){
    if(miles <= 10){
        // third animal density per miles 10
        const count = miles * 10;
        return count;
    }else if(miles <= 20){
        // third animal density per miles 50
        let animalDensity =50;
        let first10MilesAnimal = 10 * 10;
        let firstRestMiles = miles - 10;
        let second10Miles = first10MilesAnimal + firstRestMiles *animalDensity;
        return second10Miles; 
    }else{
        // third animal density per miles 100
        let first10MilesAnimal = 10*10; 
        let second10MilesAnimal = 10 *50; 
        let thirdRestMiles = miles - 20;
        let count = first10MilesAnimal +second10MilesAnimal + (thirdRestMiles* 100);
        return count;
    }
}
let firstJourney = animalCount(21);
console.log(firstJourney);