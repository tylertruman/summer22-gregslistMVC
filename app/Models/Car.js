


export class Car{
  constructor({id, make, model, year, price, imgUrl, description}){
    this.id = id
    this.make = make || ''
    this.model = model || ''
    this.year = year || 1968
    this.price = price || 1
    this.img = imgUrl || ''
    this.description = description || ''
  }

  get Template(){
    return `
    <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.make} <br> ${this.model} <br> ${this.year}</h4>
          <p>${this.description}</p>
          <p class="text-end text-success m-0">$<b>${this.price}</b></p>
          <button class="btn btn-info" onclick="app.carsController.adjustCar('${this.id}')">Adjust Car</button> 
          <button class="btn btn-danger" onclick="app.carsController.deleteCar('${this.id}')">Delete Me</button> 
        </div>
      </div>
    </div>
    `
  }
}