const randomCity = "https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/";
const cities = document.getElementById("btn").addEventListener("click",getCity);
const cityIwant = document.getElementById("port-1");


function getCity(){
    return document.getElementById("city").value;
}

fetch("https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/")
.then(response =>response.json())
.then(cityDom)
.catch((error) =>(error))

function cityDom(data){
    cityIwant.textContent = data.alternate_names[1].name
}




    // let inputCity= "";
    // let towns = completeData?.map((values)=>{
    //     inputCity += `${values}`
    // });
    
    // if(cities === city){
    //     return towns;
    // }