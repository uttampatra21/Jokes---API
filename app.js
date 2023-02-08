const api = "https://api.quotable.io/random";
const container = document.querySelector(".container");

container.innerHTML = `
<div class="tittle">
<h2><em>Quote of the day</em></h2>
<div class="dash"></div>
</div>
<p id="quote">" <span class="quotes"></span> "</p>
<div class="author">
<i class="bi bi-dash-lg"></i><em class="authors"></em>
</div>
<div class="links">
<a id="newQuote" href="#">New Quote</a>
<p onclick='tweet'><i class="bi bi-twitter"></i>Tweet</p>
</div>
`

const getApi = async(url) =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".quotes").innerHTML = data.content;
    document.querySelector(".authors").innerHTML = data.author;
}
getApi(api);

const newQuote = document.querySelector("#newQuote").addEventListener("click", ()=>{
    location.reload();
})

const tweet = ()=>{
    // window.open("https://twitter.com/intent/tweet?text", "Tweet Window", "width='600', height='300'");
    alert('Tweet');
}

