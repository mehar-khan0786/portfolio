let apiId = "d404c132";
let button = document.querySelector("button");
let movieName = document.querySelector("#name");

button.addEventListener('click', async function get() {

     let star = document.querySelector("#star");
     let date = document.querySelector("#year");
     let min = document.querySelector("#min");
     let rate = document.querySelector("#rated");
     let poster = document.querySelector("#poster");
     let plot = document.querySelector("#plot");
     let cast = document.querySelector("#cast");
     let main = document.querySelector("#main");
     let genre1 = document.querySelector("#gen101");
     let genre2 = document.querySelector("#gen102");

     let movie = document.querySelector("input").value;
     let url = `https://www.omdbapi.com/?t=${movie}&apikey=d404c132`;
     let res = await fetch(url);
     let data = await res.json();


     if (data.Response == "True") {
          main.classList.add("visible");
          main.classList.remove("hidden");
          movieName.innerHTML = data.Title;
          star.innerHTML = "⭐" + data.imdbRating;
          date.innerHTML = data.Year;
          min.innerHTML = data.Runtime;
          rate.innerHTML = data.Rated;
          poster.src = data.Poster;
          plot.innerHTML = data.Plot;
          cast.innerHTML = data.Actors;

          let genres = data.Genre.split(", ");
          genre1.innerHTML = genres[0];
          genre2.innerHTML = genres[1] || "";
     }
     else {
          alert("Movie not found");
     }




});

// 3 Idiots
// Inception
// The Avengers