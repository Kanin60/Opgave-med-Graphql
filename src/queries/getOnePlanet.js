export const OnePlanet = `query Planet($planetId: ID) {
  planet(id: $planetId) {
    name
    diameter
    population
    climates
    terrains
    filmConnection {
      films {
        title
      }
    }
  }
}`