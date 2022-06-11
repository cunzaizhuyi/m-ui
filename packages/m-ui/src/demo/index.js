import Demo from './Demo.vue'

Demo.install = function (app) {
  app.component(Demo.name, Demo)
}

export const Demo = Demo

export default Demo