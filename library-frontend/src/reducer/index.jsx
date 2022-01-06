import { combineReducers } from 'redux';
import { CategoryInfo } from './categoryInfo'

const allReducers = combineReducers({
  CategoryInfo: CategoryInfo
})

export default allReducers;