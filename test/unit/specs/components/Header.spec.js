import Vue from 'vue'
import store from '@/store'
import VcHeader from '@/components/Header'

describe('Header.vue', () => {
  it('should render correct header section', () => {
    const vm = new Vue({
      store,
      render: h => h(VcHeader)
    }).$mount()
    expect(vm.$el.querySelector('h3').textContent).to.eql('My skills')
  })

  it('should render correct curriculum links', () => {
    const vm = new Vue({
      store,
      render: h => h(VcHeader)
    }).$mount()
    expect(vm.$el.querySelectorAll('.curriculum a')[0].textContent).to.contain('Curriculum EN')
    expect(vm.$el.querySelectorAll('.curriculum a')[0].href).to.contains('static/docs/curricula/curriculum-en.pdf')

    expect(vm.$el.querySelectorAll('.curriculum a')[1].textContent).to.contain('Certificates')
    expect(vm.$el.querySelectorAll('.curriculum a')[1].href).to.eql('https://github.com/mauri870/certificados')

    expect(vm.$el.querySelectorAll('.curriculum a')[2].textContent).to.contain('Curriculum PT-BR')
    expect(vm.$el.querySelectorAll('.curriculum a')[2].href).to.contains('static/docs/curricula/curriculum-pt.pdf')
  })
})
