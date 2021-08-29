export interface WizardStepStateInterface {
  steps: WizardStep[];
  activeStep: WizardStep["index"];
}

export interface WizardStep {
  index: number;
  name: string;
}
