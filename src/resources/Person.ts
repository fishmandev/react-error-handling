import GetPerson from '../services/Person'
import { Resouce } from './Resource'

export const PersonResource = () => Resouce(GetPerson())
