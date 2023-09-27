const quotes = document.getElementById('Quotes');
const author = document.getElementById('Author');
const nextTw = document.getElementById('nextTw');
const tweet = document.getElementById('Tw');

let tempData = "";
let realData = "";

const tweetNow = () => {
    let Tw_post = `https://twitter.com/intent/tweet?text=${tempData.text} :- ${tempData.author}`;
    window.open(Tw_post);
}

const getNewQuots = () => {
    const r_num = Math.floor(Math.random()*50);

    tempData = realData[r_num];
    quotes.innerText = `${tempData.text}`;
    author.innerText = `${tempData.author}`;

    realData[r_num].author == null
    ? (author.innerText = "Unknow")
    : (author.innerText = `Author :- ${author.innerText}`);

}

const getQuotes = async () =>{
    const api_q = "https://type.fit/api/quotes";

    try{
        let q_data = await fetch(api_q);
        realData = await q_data.json();

        getNewQuots();

    }catch (err) { }
        
}

tweet.addEventListener('click',tweetNow);
nextTw.addEventListener('click',getNewQuots);

getQuotes();