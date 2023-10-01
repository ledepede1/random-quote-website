const quotesJson = `
        {
          "0": "A program is like a poem: You cannot write a poem without writing it.",
          "1": "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure “programmer productivity“ in terms of “number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to “the number of lines of code spent“.",
          "2": "It’s not a bug it’s an undocumented feature.",
          "3": "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
          "4": "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
          "5": "Programming is the art of algorithm design and the craft of debugging errant code.",
          "6": "Experience is the name everyone gives to their mistakes.",
          "7": "Confusion is part of programming.",
          "8": "Everybody should learn to program a computer because it teaches you how to think.",
          "9": "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
          "10": "Programmer: A machine that turns coffee into code.",
          "11": "When I wrote this code, only God and I understood what I did. Now only God knows.",
          "12": "Programming is learned by writing programs.",
          "13": "If, at first, you do not succeed, call it version 1.0.",
          "14": "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?",
          "15": "Software and cathedrals are much the same — first we build them, then we pray.",
          "16": "First, solve the problem. Then, write the code.",
          "17": "Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
          "18": "Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
          "19": "Debugging becomes significantly easier if you first admit that you are the problem",
          "20": "It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive",
          "21": "One of my most productive days was throwing away 1000 lines of code",
          "22": "Everyday life is like programming, I guess. If you love something, you can put beauty into it",
          "23": "Fix the cause, not the symptom",
          "24": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
          "25": "Your most unhappy customers are your greatest source of learning",
          "26": "It is far, far easier to make a correct program fast than to make a fast program correct",
          "27": "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it",
          "28": "Truth can only be found in one place: the code"
        }
`;
    

// God i hate Javascript

const quotes = JSON.parse(quotesJson);

const keys = Object.keys(quotes)
const randIndex = Math.floor(Math.random() * keys.length)
const randKey = keys[randIndex]
const name = quotes[randKey]


const tag = document.createElement("p");
const node = document.createTextNode(name);
tag.appendChild(node);

const element = document.getElementById("quotes");
const child = document.getElementById("p");
element.insertBefore(tag, child);

