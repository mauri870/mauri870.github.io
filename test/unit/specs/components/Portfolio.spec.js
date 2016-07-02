import Vue from 'vue'
import Portfolio from 'src/components/Portfolio'
import store from 'src/store'

describe('Portfolio.vue', () => {
  it('should render correct portfolio section', () => {
    const vm = new Vue({
      template: '<div><portfolio></portfolio></div>',
      components: { Portfolio },
      store
    }).$mount()
    expect(vm.$el.querySelector('#works .row p').textContent).to.contain('Some projects that I have worked on')
  })
})
