import solarSystem from './topics/solar-system.json'
import americanRevolution from './topics/american-revolution.json'
import marieCurie from './topics/marie-curie.json'
import cocoChanel from './topics/coco-chanel.json'

export const topics = [solarSystem, americanRevolution, marieCurie, cocoChanel]

export function getTopicById(id) {
  return topics.find(t => t.id === id) || null
}
