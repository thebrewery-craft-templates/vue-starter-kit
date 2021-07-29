import PersonComponent from './person-component'

describe('@components/person-component', () => {
  it('exports a valid component', () => {
    expect(PersonComponent).toBeAComponent()
  })
})
