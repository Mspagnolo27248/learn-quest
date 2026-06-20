import marieCurie from './topics/marie-curie.json'
import cocoChanel from './topics/coco-chanel.json'
import waltDisney from './topics/walt-disney.json'
import theodoreRoosevelt from './topics/theodore-roosevelt.json'
import nikolaTesla from './topics/nikola-tesla.json'
import eleanorRoosevelt from './topics/eleanor-roosevelt.json'
import severeWeather from './topics/severe-weather.json'
import spaceTravel from './topics/space-travel.json'
import solarSystem from './topics/solar-system.json'

export const topics = [marieCurie, cocoChanel, waltDisney, theodoreRoosevelt, nikolaTesla, eleanorRoosevelt, severeWeather, spaceTravel, solarSystem]

export function getTopicById(id) {
  return topics.find(t => t.id === id) || null
}
