import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace WizardActions {
  export enum Type {
    NEXT_STEP = 'NEXT_STEP',
    PREV_STEP = 'PREV_STEP',
  }

  export const goToNextStep = createAction(Type.NEXT_STEP);
  export const goToPrevStep = createAction(Type.PREV_STEP);
}

export type WizardActions = Omit<typeof WizardActions, 'Type'>;
export const useWizardActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = WizardActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as WizardActions;
};
