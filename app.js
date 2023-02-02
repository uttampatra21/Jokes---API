const api = "https://api.quotable.io/random";
const container = document.querySelector(".container");

container.innerHTML = `
<div class="tittle">
<h2><em>Quote of the day</em></h2>
<div class="dash"></div>
</div>
<p id="quote">" <span class="quotes">lorem ki ma ki c,vmsdkvvndsvksdvksdvnjdvdjvnvjdvn nvkd kvndnjv hut bhrnchod</span> "</p>
<div class="author">
<i class="bi bi-dash-lg"></i><em class="authors"></em>
</div>
<div class="links">
<a href="#">New Quote</a>
<a href="#"><i class="bi bi-twitter"></i>Tweet</a>
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