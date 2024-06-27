
document.querySelector('button').addEventListener('click',onClick)
document.querySelector('input').addEventListener('keydown',(event) => {
    if (event.key === 'Enter'){onClick()}})

function onClick(){
    let food=document.querySelector('input').value;
   
    const url=`https://themealdb.com/api/json/v1/1/search.php?s=${food}`
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
    let foodName=data.meals[0].strMeal
      let recipe=data.meals[0].strInstructions
      let vid=data.meals[0].strYoutube
      let vidarr=vid.split('=')
      let vid_id=vidarr[vidarr.length-1]
      document.querySelectorAll('h3').forEach((x)=>x.classList.remove('hidden'))
      document.querySelector('iframe').classList.remove('hidden')
      //.classList.remove("hidden")
      document.querySelector('span').innerText=foodName
      document.querySelector('p').textContent=recipe
      document.querySelector('iframe').src=`https://www.youtube.com/embed/${vid_id}`
      //document.querySelector('iframe').src=vid
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}