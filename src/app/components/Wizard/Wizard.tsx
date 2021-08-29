import React from "react";
import { RootState } from "app/reducers";
import { useSelector } from "react-redux";

import { Container } from "../Container";

import { WizardWrrapper, WizardItem, WizardIcon, WizardSpacer } from "./styled";

export const Wizard: React.FC = () => {
  const { activeStep, steps } = useSelector((state: RootState) => state.wizardStep);

  return (
    <Container>
      <WizardWrrapper>
        {steps.map((step, index) => (
          <WizardItem key={index}>
            <WizardIcon $isActive={step.index <= activeStep}>{step.index}</WizardIcon>
            {step.name}
            {index !== steps.length - 1 && <WizardSpacer />}
          </WizardItem>
        ))}
      </WizardWrrapper>
    </Container>
  );
};
