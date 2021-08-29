import React, { useState } from "react";

import { Container } from "../Container";

import {
  BlockHeader,
  ContentBlock,
  Input,
  InfoPanelCenterd,
  Expences as ExpencesStyled,
  ExpencesBlock,
  ExpencesTitle,
  SwitcherHalf,
  Centered,
} from "./styled";

export const Expences: React.FC = () => {
  const [days, setDays] = useState<number>(30);

  return (
    <>
      <Container>
        <ExpencesStyled>
          <ExpencesBlock>
            <ContentBlock>
              <BlockHeader>
                <ExpencesTitle>
                  Срок, дни
                </ExpencesTitle>
              </BlockHeader>
            </ContentBlock>
            <Input value={days} onChange={(e) => setDays(Number(e.currentTarget.value))} />
            <ContentBlock>
              <BlockHeader>
                <ExpencesTitle>
                Тариф, за клик
                </ExpencesTitle>
              </BlockHeader>
            </ContentBlock>
            <div style={{ marginTop: "16px" }}>
              <SwitcherHalf $width="93px" $isActive>
                <Centered>
                5 руб
                </Centered>
              </SwitcherHalf>
              <SwitcherHalf $width="93px">
                <Centered>
                15 руб
                </Centered>
              </SwitcherHalf>
              <SwitcherHalf $width="93px">
                <Centered>
                25 руб
                </Centered>
              </SwitcherHalf>
            </div>
          </ExpencesBlock>
          <ExpencesBlock>
            <ContentBlock>
              <BlockHeader>
                <ExpencesTitle>
                Возможный отклик
                </ExpencesTitle>
              </BlockHeader>
            </ContentBlock>
            <ExpencesTitle>
            5  000 чел.
            </ExpencesTitle>
            <ContentBlock>
              <BlockHeader>
                <ExpencesTitle>
                Стоимость, план
                </ExpencesTitle>
              </BlockHeader>
            </ContentBlock>
            <ExpencesTitle>
            22 500 руб 
            </ExpencesTitle>
          </ExpencesBlock>
          <InfoPanelCenterd>
          Запуск на первых 500 человек не включен в стоимость и производится бесплатно для демонстарции
          </InfoPanelCenterd>
        </ExpencesStyled>
      </Container>
    </>
  );
};
