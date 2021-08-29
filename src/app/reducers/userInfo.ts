import { handleActions } from 'redux-actions';
import { RootState } from './state';

const initialState: RootState.UserInfoState = {
  id: "example",
  name: "ИП Константинопольский К. К.",
  avatarSrc: "https://cdn.fishki.net/upload/post/201508/28/vote/165/question/muzhchina_2.jpg",
};

export const userInfoReducer = handleActions<RootState.UserInfoState>(
  {},
  initialState
);
