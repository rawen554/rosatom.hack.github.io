import { UserInfo, WizardStepStateInterface } from 'app/models';

export interface RootState {
  userInfo: RootState.UserInfoState;
  wizardStep: RootState.WizardStepState;
  router?: any;
}

export namespace RootState {
  export type UserInfoState = UserInfo;
  export type WizardStepState = WizardStepStateInterface;
}
