import Vue from 'vue'
import Portfolio from '@/components/portfolio'
import store from '@/store'

describe('Portfolio.vue', () => {
  it('should render correct portfolio section', () => {
    const vm = new Vue({
      render: h => h(Portfolio),
      store
    }).$mount()
    expect(vm.$el.querySelector('#works .row p').textContent).to.contain('Some projects that I have worked on')
  })
})
