import { combineReducers } from 'redux';
import { RootState } from './state';
import { userInfoReducer } from './userInfo';
import { wizardStepReducer } from './wizardStep';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  userInfo: userInfoReducer,
  wizardStep: wizardStepReducer,
});
