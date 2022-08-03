import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";
import { getJobForm } from "../Components/JobForm.js";
import { Pop } from "../Utils/Pop.js";

function _drawJobs(){
    let template = ''
    let jobs = ProxyState.jobs
    jobs.forEach(j => template += j.Template)
    document.getElementById('listings').innerHTML = template
    document.getElementById('form').innerHTML = getJobForm()
  }
  
  
  
  export class JobsController{
    constructor(){
      ProxyState.on('jobs', _drawJobs)
      this.getJobs()
    }
  
  
    viewJobs(){
      _drawJobs()
      this.getJobs()
    }

    async getJobs() {
      try {
        await jobsService.getJobs()
      } catch (error) {
        console.error('[Get Jobs]', error)
        Pop.error(error)
      }
    }

    async createJob(){
      try {
        window.event.preventDefault()
        let form = window.event.target
        let newJob ={
          jobTitle: form.jobTitle.value,
          company: form.company.value,
          hours: form.hours.value,
          rate: form.rate.value,
          description: form.description.value,
        }
        await jobsService.createJob(newJob)
        form.reset()
      } catch (error) {
        console.error('[Create Job]', error)
        Pop.error(error)
      }
    }

    async deleteJob(jobId){
      try {
        await jobsService.deleteJob(jobId)
      } catch (error) {
        console.error('[Delete Job]', error)
        Pop.error(error)
      }
    }

    adjustJob(jobId) {
      let job = ProxyState.jobs.find(j => j.id == jobId)
      document.getElementById('form').innerHTML = getJobForm(job)
    }

    async editJob(jobId) {
      try {
        window.event.preventDefault()
        let form = window.event.target
        let jobData = {
          id: jobId,
          jobTitle: form.jobTitle.value,
          company: form.company.value,
          hours: form.hours.value,
          rate: form.rate.value,
          description: form.description.value,
        }
        await jobsService.editJob(jobData)
      } catch (error) {
        console.error('[Edit Job]', error)
        Pop.error(error)
      }
    }
  }