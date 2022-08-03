import { House } from "../Models/House.js";



export function getHouseForm(house = new House({})) {
    let submitAction = 'app.housesController.createHouse()'
    if(house.id){
        submitAction = `app.housesController.editHouse('${house.id}')`
    }

    return `
    <form class="col-8 bg-white p-3 elevation-2" onsubmit="${submitAction}">
          <h3 class="text-primary">List Your House</h3>
          <div class="row">
            <div class="col-4">
              <label class="form-label" for="levels">Levels</label>
              <input class="form-control" type="number" id="levels" name="levels" value="${house.levels}">
            </div>
            <div class="col-4">
              <label class="form-label" for="bedrooms">Bedrooms</label>
              <input class="form-control" type="number" id="bedrooms" name="bedrooms" value="${house.bedrooms}">
            </div>
            <div class="col-4">
              <label class="form-label" for="yearbuilt">Year Built</label>
              <input class="form-control" type="number" id="yearbuilt" name="yearbuilt" value="${house.yearbuilt}">
            </div>
            <div class="col-6">
            <label class="form-label" for="bathrooms">Bathrooms</label>
            <input class="form-control" type="number" min="1" id="bathrooms" name="bathrooms" value="${house.bathrooms}">
            </div>
            <div class="col-6">
            <label class="form-label" for="price">Price</label>
            <input class="form-control" type="number" min="1" id="price" name="price" value="${house.price}">
            </div>
            <label class="form-label" for="img">Image</label>
            <input class="form-control" type="text" id="img" name="img" value="${house.img}">
            <label class="form-label" for="description">Description</label>
            <textarea class="w-100 form-control" name="description" id="description" rows="5" value="${house.description}"></textarea>
            <button type="submit" class="btn btn-primary w-100 p-2 mt-3 text-light">Submit</button>
          </div>
        </form>`
}