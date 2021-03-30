/*
Git Notes to Christian
You may want to start over with this project. 
1: git clone https://github.com/AaronOoooo/madjokes.git
2: git checkout <add name>
3: DO CODING
4: git add .
5: git commit -m 'your comment here'
6: git push
7: git pull

This is a rough guideline to git. I had to do some testing to figure this out. Hope this helps. See you on Discord.
*/

  const nouns = ["minor celebrity", "girlfriend", "boy toy", "karen", "bad dog", "cute cat", "old lady", "lawyer", "goat", "parrot"]; 
  const adj = ["beautiful", "dumb", "professional", "lovely", "idiot", "hard", "soft-spoken", "lingering", "tired", "gross"]; 
  const phrase = ["tells me goodbye", "wakes up", "gives me a flower", "goes to bed", "dies", "sees their mother", "sees their father", "drinks a pint", "hears music", "ties their shoelaces"];

  const punchClause1 = ["What goes up", "He who talks", "Janice's smile'", "The judge", "When there's no money, John", "If it doesn't stink, your mother", "Your mother always", "When we play games, the boss", "A drunks drink and", "The muscles", "Better when the bartender", "He who stands still", "It depends on who"];
  const punchClause2 = ["reeks of guilt", "lands in bath water", "belongs to coworkers", "burps their way to the top", "drives a clown car", "must be a big screen television", "is better known as Mother Hubbard", "needs you", "has money to give me", "has the biggest truck", "finished last, they said","fits the pants", "knows where to hide", "can reassemble the burnt dinner", "who knows", "who can hide in an open field", "plays dead", "can preach at school", "has to eat the biggest bug", "can bug the bugs","cares the least"];""

function joke() {   
    let rand1 = Math.floor(Math.random() * nouns.length);   
    let rand2 = Math.floor(Math.random() * adj.length);   
    let rand3 = Math.floor(Math.random() * phrase.length);
    return (`Joke: What does the ${adj[rand1]} ${nouns[rand2]} think when it ${phrase[rand3]}?`);
    return ("Joke: " + "What does the " + adj[rand1] + " " + nouns[rand2] + " think when it " + phrase[rand3] + "?");  
  };

function punchLine() {
    let rand1 = Math.floor(Math.random() * punchClause1.length);    
    let rand2 = Math.floor(Math.random() * punchClause2.length);   
    return(`Punchline: ${punchClause1[rand1]} ${punchClause2[rand2]}.`)
}

console.log(joke()); 
console.log(punchLine());