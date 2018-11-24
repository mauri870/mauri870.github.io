import Vue from 'vue'
import Social from '@/components/social'
import store from '@/store'

describe('Social.vue', () => {
  it('should render correct social section', () => {
    const vm = new Vue({
      render: h => h(Social),
      store
    }).$mount()
    expect(vm.$el.querySelectorAll('#social .row .col-lg-3').length).to.eql(4)
  })

  it('should render correct networks section', () => {
    const vm = new Vue({
      render: h => h(Social),
      store
    }).$mount()
    expect(vm.$el.querySelector('#social .row .col-lg-12 h2').textContent).to.eql('Stay connected!')
    const networks = vm.$el.querySelectorAll('#social .row .col-lg-3 a')
    expect(networks[0].href).to.contain('github')
    expect(networks[1].href).to.contain('linkedin')
    expect(networks[2].href).to.contain('gitlab')
    expect(networks[3].href).to.contain('steam')
  })
})
