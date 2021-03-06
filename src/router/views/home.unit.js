import Home from './home.vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const wrapper = shallowMountView(Home)
    expect(wrapper.findAll('img').length).toBe(3)
  })
})
