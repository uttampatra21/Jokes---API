const api = "https://api.quotable.io/random";

const getApi = async(url) =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.querySelector(".quotes").innerHTML = data.content;
    document.querySelector(".authors").innerHTML = data.author;
}
getApi(api);