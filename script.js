// dom element query selectors
let jokeBtn = document.querySelector('#joke-button');
let punchBtn = document.querySelector('#punch-button');
let punchText = document.querySelector('#punch-text');
let jokeText = document.querySelector('#joke-text');
// event listeners
jokeBtn.addEventListener('click', () => (jokeText.innerHTML) = joke());
punchBtn.addEventListener('click', () => (punchText.innerHTML) = punchLine());
// punch arrays
const punchClause1 = ["What goes up", "He who talks", "Janice's smile'", "The judge", "When there's no money, John", "If it doesn't stink, your mother", "Your mother always", "When we play games, the boss", "A drunks drink and", "The muscles", "Better when the bartender", "He who stands still"];
const punchClause2 = ["reeks of guilt", "lands in bath water", "belongs to coworkers", "burps their way to the top", "drives a clown car", "must be a big screen television", "is better known as Mother Hubbard"];
// joke arrays
const nouns = ["minor celebrity", "girlfriend", "boy toy", "karen", "bad dog", "cute cat", "old lady", "lawyer", "goat", "parrot"]; 
const adj = ["beautiful", "dumb", "professional", "lovely", "idiot", "hard", "soft-spoken", "lingering", "tired", "gross"]; 
const phrase = ["tells me goodbye", "wakes up", "gives me a flower", "goes to bed", "dies", "sees their mother", "sees their father", "drinks a pint", "hears music", "ties their shoelaces"];
// joke generator function
const joke = () => {   
    let rand1 = Math.floor(Math.random() * nouns.length);   
    let rand2 = Math.floor(Math.random() * adj.length);   
    let rand3 = Math.floor(Math.random() * phrase.length);
    return (`Joke: What does the ${adj[rand1]} ${nouns[rand2]} think when it ${phrase[rand3]}?`);
  };
// punchline generator function
const punchLine = () => {
    let rand1 = Math.floor(Math.random() * punchClause1.length);    
    let rand2 = Math.floor(Math.random() * punchClause2.length);  
    return `Punchline: ${punchClause1[rand1]} ${punchClause2[rand2]}.`
  }; 
// function punchLine() {
//   let rand1 = Math.floor(Math.random() * punchClause1.length);    
//   let rand2 = Math.floor(Math.random() * punchClause2.length);   
//   return(`Punchline: ${punchClause1[rand1]} ${punchClause2[rand2]}.`)
// }

console.log(joke()); 
console.log(punchLine());