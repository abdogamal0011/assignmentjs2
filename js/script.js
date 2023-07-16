var myButton = document.getElementById("myButton");
var myCaption = document.getElementById("myCaption");



var cartona =[`“Be yourself; everyone else is already taken.”
― Oscar Wilde `,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein `,
` “So many books, so little time.”
― Frank Zappa `,
`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero `,
`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
― Dr. Seuss `
];



function addCaption(){


myCaption.innerHTML = cartona[Math.floor(Math.random() * cartona.length)]
}
