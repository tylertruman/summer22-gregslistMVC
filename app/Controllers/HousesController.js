import { HouseFormTemplate } from "../../forms.js";
import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HousesService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";


function _drawHouses(){
  let template = ''
  let houses = ProxyState.houses
  houses.forEach(h => template += h.Template)
  document.getElementById('listings').innerHTML = template
}

// function _drawHousesForm(){
//   let template = ''
//   document.getElementById('form').innerHTML = FormTemplate
//   FormTemplate()
  
// }



export class HousesController{
  constructor(){
    ProxyState.on('houses', _drawHouses)
    ProxyState.on('houses', saveState)
    loadState()
    _drawHouses()
  }


  viewHouses(){
    _drawHouses()
    // swap out car form with house form
    document.getElementById('form').innerHTML = HouseFormTemplate()
  }

  createHouse(){
    console.log('house form submitted');
    window.event.preventDefault()
    let form = window.event.target
    console.log(form);

    let newHouse = {
      sqfeet: form.sqfeet.value,
      bedrooms: form.bedrooms.value,
      yearbuilt: form.yearbuilt.value,
      price: form.price.value,
      img: form.img.value,
      description: form.description.value,
    }
    housesService.createHouse(newHouse)
    form.reset()
  }

  deleteHouse(id){
    console.log('deleting', id);
    housesService.deleteHouse(id)
  }
}