/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/*jshint esversion: 6 */
let dailyRate = 35; // Default rate for full day 
const halfDayRate = 20; 
const fullDayRate = 35; 
let selectedDays = new Set(); 
const daysOfWeek = document.querySelectorAll('.day-selector li'); 
const fullDayButton = document.getElementById('full'); 
const halfDayButton = document.getElementById('half'); 
const clearButton = document.getElementById('clear-button'); 
const calculatedCostElement = document.getElementById('calculated-cost');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
daysOfWeek.forEach(day => { 
    day.addEventListener('click', () => { 
        if (!day.classList.contains('clicked')) { 
            day.classList.add('clicked'); 
            selectedDays.add(day.id); 
        } else { 
            day.classList.remove('clicked'); 
            selectedDays.delete(day.id); 
        } 
        calculateTotalCost(); 
    }); 
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener('click', () => { 
    daysOfWeek.forEach(day => day.classList.remove('clicked')); 
    selectedDays.clear(); 
    calculatedCostElement.innerHTML = '0'; 
});





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
halfDayButton.addEventListener('click', () => { 
    dailyRate = halfDayRate; 
    halfDayButton.classList.add('clicked'); 
    fullDayButton.classList.remove('clicked'); 
    calculateTotalCost(); 
});



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
fullDayButton.addEventListener('click', () => { 
    dailyRate = fullDayRate; 
    fullDayButton.classList.add('clicked'); 
    halfDayButton.classList.remove('clicked'); 
    calculateTotalCost(); 
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculateTotalCost() { 
    const totalCost = dailyRate * selectedDays.size; 
    calculatedCostElement.innerHTML = totalCost; 
}

