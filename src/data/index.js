import solarSystem from './topics/solar-system.json'
import americanRevolution from './topics/american-revolution.json'
import marieCurie from './topics/marie-curie.json'

export const topics = [solarSystem, americanRevolution, marieCurie]

export function getTopicById(id) {
  return topics.find(t => t.id === id) || null
}
