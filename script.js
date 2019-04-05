const quotes [
    {
        name: 'author 1',
            quote: 'text 1'
    },

    {
        name: 'john kennedy',
            quote: 'those who....'
    },

    {
        name: 'author 3',
            quote: 'text 3'
    },

    {
        name: 'author 4',
            quote: 'text 4'
    },

    {
        name: 'author 5',
            quote: 'text 5'
    },
    
    {
        name: 'author 6',
            quote: 'text 6'
    }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {

    let number = Math.floor(Math.random()*quotes.length);

    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}