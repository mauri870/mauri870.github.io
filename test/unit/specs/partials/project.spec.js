import Vue from 'vue'
import Project from 'src/components/partials/project'

describe('project.vue', () => {
  it('should render correct single project', () => {
    const vm = new Vue({
      template: '<div><project :item="project"></project></div>',
      components: { Project },
      data: {
        project: {
          name: 'test/test',
          link: 'https://test.dev',
          description: 'A simple test',
          image: 'path/to/image'
        }
      }
    }).$mount()
    expect(vm.$el.querySelector('.gallery h3').textContent).to.contain('test/test')
    expect(vm.$el.querySelector('.gallery a').href).to.contain('https://test.dev')
    expect(vm.$el.querySelector('.gallery p.description').textContent).to.contain('A simple test')
  })
})
