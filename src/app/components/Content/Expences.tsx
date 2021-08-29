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
  const [tariff, setTariff] = useState<number>(5);

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
              <SwitcherHalf $width="93px" onClick={() => setTariff(5)} $isActive={tariff === 5}>
                <Centered>
                5 руб
                </Centered>
              </SwitcherHalf>
              <SwitcherHalf $width="93px" onClick={() => setTariff(15)} $isActive={tariff === 15}>
                <Centered>
                15 руб
                </Centered>
              </SwitcherHalf>
              <SwitcherHalf $width="93px" onClick={() => setTariff(25)} $isActive={tariff === 25}>
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
                Стоимость, план (85% отклик)
                </ExpencesTitle>
              </BlockHeader>
            </ContentBlock>
            <ExpencesTitle>
            {Math.floor(0.85 * 5000 * tariff * (days / 30))} руб. / мес.
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
