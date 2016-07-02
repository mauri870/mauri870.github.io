import Vue from 'vue'
import VcFooter from 'src/components/Footer'
import store from 'src/store'

describe('Footer.vue', () => {
  it('Test footer phrase', () => {
    const vm = new Vue({
      template: '<div><vc-footer></vc-footer></div>',
      components: { VcFooter },
      store
    }).$mount()
    expect(vm.$el.querySelector('.container .row p b').textContent).to.eql((vm.$store.state.info.phrase).toUpperCase())
  })

  it('Test footer links', () => {
    const vm = new Vue({
      template: '<div><vc-footer></vc-footer></div>',
      components: { VcFooter },
      store
    }).$mount()
    expect(vm.$el.querySelector('.container .row p a').href).to.contain('mailto:' + vm.$store.state.info.email)
    expect(vm.$el.querySelector('.container .col-sm-12 p a').href).to.contain('http://github.com/mauri870/mauri870.github.io')
  })
})
