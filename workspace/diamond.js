let who =['The dog',
    'Little Aliens',
    'A killer Robot',
    '5 Decepticons'
];

let what =['shot a pulsar at me',
            'destroyed everything',
            'hacked in to my computer and stole all of my files',
            'held the room hostage'
];

let when =['earlier today',
            'last night',
            'during the presidents speech',
            '2 hours ago'
             
    
];



let rrr = Math.floor(Math.random()* who.length);
let sss = Math.floor(Math.random()* what.length);
let ttt = Math.floor(Math.random()* when.length);

console.log(who[rrr] + ' ' + what[sss] + ' ' + when[ttt]);
let print=(who[rrr] + ' ' + what[sss] + ' ' + when[ttt]);
document.getElementById('print').innerHTML=print;