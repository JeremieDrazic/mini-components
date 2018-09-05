import Core from './Core/index'
import get from './get'
import set from './set'

const Whale = Object.assign(Core, { get, set })
export default Whale