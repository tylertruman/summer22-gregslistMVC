


export class House{
    constructor({id, levels, bedrooms, bathrooms, year, price, imgUrl, description}){
        this.id = id 
        this.levels = levels || 0
        this.bedrooms = bedrooms || 0
        this.bathrooms = bathrooms || 0
        this.yearbuilt = year || 0
        this.price = price || 0
        this.img = imgUrl || ''
        this.description = description || ''
    }
    get Template(){
      return `
      <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.levels} Levels <br> ${this.bedrooms} Beds <br>${this.bathrooms} Bathrooms<br> Built: ${this.yearbuilt}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-info" onclick="app.housesController.adjustHouse('${this.id}')">Adjust House</button> 
          <button class="btn btn-danger" onclick="app.housesController.deleteHouse('${this.id}')">Delete Me</button> 
        </div>
      </div>
    </div>`

  }
}