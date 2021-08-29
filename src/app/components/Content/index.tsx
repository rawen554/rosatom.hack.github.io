import { RootState } from 'app/reducers';
import React from 'react';
import { useSelector } from 'react-redux';

import { Goals } from "./Goals";
import { Audition } from "./Audition";
import { Channels } from "./Channels";
import { Expences } from "./Expences";

export const Content: React.FC = (): JSX.Element => {
  const { activeStep } = useSelector((state: RootState) => state.wizardStep);

  const getContent = () => {
    let content;

    switch (activeStep) {
      case 1:
        content = <Goals />;
        break;
      case 2:
        content = <Audition />;
        break;
      case 3:
        content = <Channels />;
        break;
      case 4:
        content = <Expences />;
        break;
    
      default:
        break;
    }

    return content;
  };

  return (
    <section>
      {getContent()}
    </section>
  );
};
