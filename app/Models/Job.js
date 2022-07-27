import { generateId } from '../Utils/generateId.js'

export class Job{
    constructor({title, pay, img, description}){
    this.id = generateId()
    this.title = title,
    this.pay = pay,
    this.img = img,
    this.description = description
    }

    get Template(){
        return `
        <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <img class="img-fluid" src="${this.img}" alt="">
        <div class="p-2">
          <h4 class="text-center">${this.title} <br> Hourly: $${this.pay}</h4>
          <p>${this.description}</p>
          <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">delete me</button> 
        </div>
      </div>
    </div>`

    }
}