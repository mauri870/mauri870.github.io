import Vue from 'vue'
import VcFooter from '@/components/footer'
import store from '@/store'

describe('Footer.vue', () => {
  it('Test footer phrase', () => {
    const vm = new Vue({
      render: h => h(VcFooter),
      store
    }).$mount()
    expect(vm.$el.querySelector('.container .row .col-lg-4 p b').textContent).to.eql((vm.$store.state.info.phrase).toUpperCase())
  })

  it('Test footer links', () => {
    const vm = new Vue({
      render: h => h(VcFooter),
      store
    }).$mount()
    expect(vm.$el.querySelector('.container .row p a').href).to.contain('mailto:' + vm.$store.state.info.email)
    expect(vm.$el.querySelector('.container .col-sm-12 p a').href).to.contain('http://github.com/mauri870/mauri870.github.io')
  })
})
