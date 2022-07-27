import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { JobFormTemplate } from "../../forms.js";

function _drawJobs(){
    let template = ''
    let jobs = ProxyState.jobs
    jobs.forEach(j => template += j.Template)
    document.getElementById('listings').innerHTML = template
  }
  
  
  
  export class JobsController{
    constructor(){
      ProxyState.on('jobs', _drawJobs)
      ProxyState.on('jobs', saveState)
      loadState()
      _drawJobs()
    }
  
  
    viewJobs(){
      _drawJobs()
      document.getElementById('form').innerHTML = JobFormTemplate()
    }

    createJob(){
      window.event.preventDefault()
      let form = window.event.target

      let newJob ={
        title: form.title.value,
        pay: form.pay.value,
        img: form.img.value,
        description: form.description.value,
      }

      jobsService.createJob(newJob)
      form.reset()
    }

    deleteJob(id){
      jobsService.deleteJob(id)
    }
  }