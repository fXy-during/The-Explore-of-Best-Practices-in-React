import * as actionType from './actionType'
import { TODO_All } from './constants'


const reducer = (state = TODO_All, action) => {
    switch (action.type) {
        case actionType.TODD_CHOSEFILTER: {
            return action.filterType
        }
        default: {
            return state
        }
    }
}
export default reducer;