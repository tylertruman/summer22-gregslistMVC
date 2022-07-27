import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({make:'Honda', model:'CRV3-XL PLUS', year:2023, price:100000, img:'https://static01.nyt.com/images/2020/05/22/business/21wheels3-print/merlin_9261190_cdd1e166-951d-4bd4-b4be-26f41a5dcd96-articleLarge.jpg?quality=75&auto=webp&disable=upscale', description: 'driven only once, car of the future'}),
    new Car({make:'Tesla', model:'Cyber truck', year:3000, price:5, img:'https://ogden_images.s3.amazonaws.com/www.motherearthnews.com/images/1975/09/22153103/al-yandacropped.jpg', description:'state of the art, nothing like it, this is also technically just a pre-order, you\'ll get it in the year 3056.'})
  ]

  /** @type {import('./Models/House').House[]} */
  houses = [
    new House({sqfeet:276, bedrooms:1, yearbuilt:2001, price:4999, img:'https://images.unsplash.com/photo-1604240729607-b6b0fec12d45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60', description: 'it\'s a house.'}),
    new House({sqfeet:2000, bedrooms:8, yearbuilt:2020, price:1000000, img:'https://images.unsplash.com/photo-1590693161871-e862fdcdaee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60', description: 'hobbits built this house, and they don\'t want to sell it.'})
  ]

  /** @type {import('./Models/Job').Job[]} */
  jobs = [
    new Job({title:'Software Engineer', pay:999, img:'https://images.unsplash.com/photo-1606606767399-01e271823a2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWF0cml4fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60', description: 'Make stuff, break stuff, fix stuff!'}),
    new Job({title:'Goose Farmer', pay:3, img:'https://images.unsplash.com/photo-1523211660062-ebab3e0a1c1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29vc2UlMjBmYXJtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60', description: 'You raise a single Goose from birth to full grown adult, very fulfilling!'})
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
