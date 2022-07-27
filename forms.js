

export function HouseFormTemplate(){
    return `
    <form class="col-8 bg-white p-3 elevation-2" onsubmit="app.housesController.createHouse()">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="sqfeet">Sq. Feet</label>
              <input class="form-control" type="number" id="sqfeet" name="sqfeet">
            </div>
            <div class="col-4">
              <label class="form-label" for="bedrooms">Bedrooms</label>
              <input class="form-control" type="number" id="bedrooms" name="bedrooms">
            </div>
            <div class="col-4">
              <label class="form-label" for="yearbuilt">Year Built</label>
              <input class="form-control" type="number" id="yearbuilt" name="yearbuilt">
            </div>
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price">
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}

export function CarFormTemplate(){
    return `
    <form class="col-8 bg-white p-3 elevation-2" onsubmit="app.carsController.createCar()">
          <h3 class="text-primary">List Your Car</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="make">Make</label>
              <input class="form-control" type="text" minlength="5" id="make" name="make">
            </div>
            <div class="col-4">
              <label class="form-label" for="model">Model</label>
              <input class="form-control" type="text" id="model" name="model">
            </div>
            <div class="col-4">
              <label class="form-label" for="year">Year</label>
              <input class="form-control" type="number" id="year" name="year">
            </div>
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price">
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}

export function JobFormTemplate(){
    return `
    <form class="col-8 bg-white p-3 elevation-2" onsubmit="app.jobsController.createJob()">
          <h3 class="text-primary">List Your Job</h3>
          <div class="row">
            <div class="col-12">
              <label class="form-label" for="title">Job Title</label>
              <input class="form-control" type="text" id="title" name="title">
            </div>
            <div class="col-12">
              <label class="form-label" for="pay">Hourly Pay</label>
              <input class="form-control" type="number" id="pay" name="pay">
            </div>
            <div class="col-12">
              <label class="form-label" for="img">Image</label>
              <input class="form-control" type="text" id="img" name="img">
            </div>
            <label class="form-label" for="description"> Job Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}
