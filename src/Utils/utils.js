// Debounce function to create closure around the function
const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};
// Greetings function to Greet the user
const greetingFunction = () => {
  var myDate = new Date();
  var hrs = myDate.getHours();

  let greet = "";

  if (hrs < 12){
     greet = 'Good Morning, ';
  }else if (hrs >= 12 && hrs <= 17){
    greet = 'Good Afternoon, ';
  }else if (hrs >= 17 && hrs <= 24){
   greet = 'Good Evening, ';
  }
  return greet
}


export const comminUtils = {
  debounce,
  greetingFunction
}
