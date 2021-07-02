import Home from './home.vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const wrapper = shallowMountView(Home)
    const { element } = wrapper

    expect(wrapper.findAll('img').length).toBe(2)
    expect(element.textContent).toContain('Documentation')
    expect(element.textContent).toContain('Powered by')
  })
})
