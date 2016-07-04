import Vue from 'vue'
import Social from 'src/components/Social'
import store from 'src/store'

describe('Social.vue', () => {
  it('should render correct social section', () => {
    const vm = new Vue({
      template: '<div><social></social></div>',
      components: { Social },
      store
    }).$mount()
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3').length).to.eql(4)
  })

  it('should render correct networks section', () => {
    const vm = new Vue({
      template: '<div><social></social></div>',
      components: { Social },
      store
    }).$mount()
    expect(vm.$el.querySelector('#social .row .col-lg-12 h2').textContent).to.eql('Stay connected!')
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3 a')[0].href).to.contain('facebook')
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3 a')[1].href).to.contain('github')
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3 a')[2].href).to.contain('linkedin')
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3 a')[3].href).to.contain('steam')
  })
})
