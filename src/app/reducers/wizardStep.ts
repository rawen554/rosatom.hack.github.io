import { WizardActions } from 'app/actions';
import { handleActions } from 'redux-actions';
import { RootState } from './state';

const initialState: RootState.WizardStepState = {
  activeStep: 1,
  steps: [
    {
      index: 1,
      name: "Цели",
    },
    {
      index: 2,
      name: "Аудитория",
    },
    {
      index: 3,
      name: "Каналы",
    },
    {
      index: 4,
      name: "Затраты",
    },
  ],
};

export const wizardStepReducer = handleActions<RootState.WizardStepState>(
  {
    [WizardActions.Type.PREV_STEP]: (state) => {
      return {
        ...state,
        activeStep: state.activeStep - 1,
      };
    },
    [WizardActions.Type.NEXT_STEP]: (state) => {
      return {
        ...state,
        activeStep: state.activeStep + 1,
      };
    },
  },
  initialState
);
