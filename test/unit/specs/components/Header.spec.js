import Vue from 'vue'
import Header from 'src/components/Header'

describe('Header.vue', () => {
  it('should render correct header section', () => {
    const vm = new Vue({
      template: '<div><vc-header></vc-header></div>',
      components: { VcHeader: Header }
    }).$mount()
    expect(vm.$el.querySelector('h3').textContent).to.eql('My skills')
  })
})
