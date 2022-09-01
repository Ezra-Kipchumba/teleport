const randomCity = "https://api.teleport.org/api/urban_areas/teleport%3A9q8yy/scores/";
const cities = document.getElementById("city").value;
fetch(randomCity)
.then((res) =>{res.json()})
.then((completeData) => {
    let inputCity= "";
    let towns = completeData.map((values)=>{
        inputCity += `${values}`
    });
    
    if(cities === values){
        return towns;
    }
})
.catch((error) =>{console.log(error)})

