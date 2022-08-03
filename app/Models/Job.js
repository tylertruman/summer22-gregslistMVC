export class Job{
    constructor({id, jobTitle, company, hours, rate, description}){
    this.id = id
    this.jobTitle = jobTitle || ''
    this.company = company || ''
    this.hours = hours || 0
    this.rate = rate || 0
    this.description = description || ''
    }

    get Template(){
        return `
        <div class="col-4 p-3">
      <div class="bg-white elevation-2">
        <h2 class="text-center">${this.jobTitle}</h2>
        <div class="p-2">
          <h4 class="text-center">Company: ${this.company} <br> Hours: ${this.hours} <br> Rate: $${this.rate}</h4>
          <p>${this.description}</p>
          <button class="btn btn-info" onclick="app.jobsController.adjustJob('${this.id}')">Adjust Job</button> 
          <button class="btn btn-danger" onclick="app.jobsController.deleteJob('${this.id}')">Delete Me</button> 
        </div>
      </div>
    </div>`

    }
}