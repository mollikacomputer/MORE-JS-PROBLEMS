/*
chairWood = 3cft/chair;
tableWood = 10cft/table;
bedWood = 50cft/bed;
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // chair wood calculation
    const chairWoodQuantity = perChairWood * chairQuantity;
    // table wood calculation
    const tableWoodQuantity = perTableWood * tableQuantity;
    // bed wood calculation
    const bedWoodQuantity = perBedWood * bedQuantity;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
// const firstWoodCalculate = woodCalculator(1, 1, 1);
const firstWoodCalculate = woodCalculator(10, 5, 2);
console.log('Your need total Wood:', firstWoodCalculate, 'cft');