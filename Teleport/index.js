const randomCity = "(https://api.teleport.org/api/";
const cities = document.getElementById("btn").addEventListener("click",getCity);


function getCity(){
    return document.getElementById("city").value;
}
fetch("(https://api.teleport.org/api/")
.then((res) =>{res.json()})
.then((completeData) => {completeData._embedded["city:search-results"]
    let inputCity= "";
    let towns = completeData?.map((values)=>{
        inputCity += `${values}`
    });
    
    if(cities === values){
        return towns;
    }
})
.catch((error) =>{console.log(error)})

