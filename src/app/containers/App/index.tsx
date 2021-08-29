import React from 'react';
import { Header, Footer } from 'app/components';

import { Content } from 'app/components/Content';
import { Wizard } from 'app/components/Wizard/Wizard';

import './style.css';

export const App = () => {
  return (
    <div>
      <Header />
      <Wizard />
      <Content />
      <Footer />
    </div>
  );
};
