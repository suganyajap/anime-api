document.body.innerHTML=
`<div class="search_anime">
      <input type="text" placeholder="search anime series.." class="search_data" minlength="3">
      <button onclick="getAnime()" class="search_button btn btn-primary">search</button>
</div>
<section class="series_list"></section>`;


async function getAnime()
{
    
    const findAnime=document.querySelector(".search_data").value;
    if(findAnime.length<3)
    {
      alert("Enter minimum 3 characters");
    }
   
    const data= await fetch(`https://api.jikan.moe/v3/search/anime?q=${findAnime}`); 
    const Anime_series= await data.json();
    const animeContainer= document.querySelector(".series_list");
    animeContainer.innerHTML="";
    Anime_series.results.forEach(series=>
        animeContainer.innerHTML +=
`<div class="series_container">
<img src="${series.image_url}" alt="${series.title}" class="poster">
<div class="series_details">
 <p class="title">${series.title}</p> 
 <p class="type"><i>Series Type:</i>${series.type}</p>
 <p class="episodes"><i>Episodes:</i>${series.episodes}</p>
 <p class="score"><i>Score:</i> ${series.score}</p>
 <p class="startdate"><i>Date_Started:</i>${series.start_date}</p>
 <p class="enddate"><i>Date_Ended:</i>${series.end_date}</p>
 <p class="members"><i>Members:</i>${series.members}</p>
 </div>
      </div>
      </div>`  
        
 );
}
