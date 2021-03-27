/* This does work */
/* Test 1-2-3 */
/* TEST ABC*/
/* 
  const nouns = ["minor celebrity", "girlfriend", "boy toy", "karen", "bad dog", "cute cat", "old lady", "lawyer", "goat", "parrot"]; 
  const adj = ["beautiful", "dumb", "professional", "lovely", "idiot", "hard", "soft-spoken", "lingering", "tired", "gross"]; 
  const phrase = ["tells me goodbye", "wakes up", "gives me a flower", "goes to bed", "dies", "sees their mother", "sees their father", "drinks a pint", "hears music", "ties their shoelaces"]; 
function joke() {   
    let rand1 = Math.floor(Math.random() * nouns.length);   
    let rand2 = Math.floor(Math.random() * adj.length);   
    let rand3 = Math.floor(Math.random() * phrase.length);    
    console.log("Question: " + "What does the " + adj[rand1] + " " + nouns[rand2] + " think when it " + phrase[rand3] + "?");  };
console.log(joke()); */

const punchClause1 = ["What goes up", "At the end of the day", "Janice feels", "If I find out", "When there's no money", "If it doesn't stink", "Your mother always says", "When we play games", "Drunks do drink", "When the mouse is at play", "Hanging from the ceiling", "He who stands still"];
const punchClause2 = ["must be stinky", "sets throw out with the bath water", "gets shared by coworkers", "burps their way to the top", "wins the clown", "floats to the top"]

function punchLine() {
    let rand1 = Math.floor(Math.random() * punchClause1.length);    
    let rand2 = Math.floor(Math.random() * punchClause2.length);   
    return punchClause1[rand1] + ' ' + punchClause2[rand2] + '?';
}
