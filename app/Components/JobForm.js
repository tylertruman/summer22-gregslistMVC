import { Job } from "../Models/Job.js";


export function getJobForm(job = new Job({})) {
    let submitAction = 'app.jobsController.createJob()'
    if(job.id){
        submitAction = `app.jobsController.editJob('${job.id}')`
    }

    return `
    <form class="col-8 bg-white p-3 elevation-2" onsubmit="${submitAction}">
          <h3 class="text-primary">List Your Job</h3>
          <div class="row">
            <div class="col-6">
              <label class="form-label" for="jobTitle">Job Title</label>
              <input class="form-control" type="text" id="jobTitle" name="jobTitle" value="${job.jobTitle}">
            </div>
            <div class="col-6">
              <label class="form-label" for="company">Company</label>
              <input class="form-control" type="text" id="company" name="company" value="${job.company}">
            </div>
            <div class="col-6">
              <label class="form-label" for="hours">Hours</label>
              <input class="form-control" type="number" id="hours" name="hours" value="${job.hours}">
            </div>
            <div class="col-6">
              <label class="form-label" for="rate">Hourly Rate</label>
              <input class="form-control" type="number" id="rate" name="rate" value="${job.rate}">
            </div>
            <label class="form-label" for="description"> Job Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${job.description}"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}