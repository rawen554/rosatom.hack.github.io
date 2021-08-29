import React from 'react';
import { RootState } from 'app/reducers';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../Container';
import { useWizardActions } from 'app/actions';

import { Footer as FooterStyled, FooterContent, Button } from './styled';

export const Footer: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const wizardActions = useWizardActions(dispatch);
  const { steps, activeStep } = useSelector((state: RootState) => state.wizardStep);
  const isFirstStep = activeStep === 1;
  const isPreLastStep = activeStep === steps.length - 1;
  const isLastStep = activeStep === steps.length;

  return (
    <FooterStyled>
      <Container>
        <FooterContent $firstStep={isFirstStep}>
          {!isFirstStep && <Button onClick={wizardActions.goToPrevStep}>Назад</Button>}
          {!isLastStep && (
            <Button
              $isNext
              onClick={wizardActions.goToNextStep}
            >
              {isPreLastStep ? "Запустить тест" : "Далее"}
            </Button>
          )}
        </FooterContent>
      </Container>
    </FooterStyled>
  );
};
