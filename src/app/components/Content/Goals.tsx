import React from "react";

import { Container } from "../Container";

import { ContentBlock, BlockHeader, BlockTitle, BlockButton, Tag, Input, ProgramBlock, ProgramLine } from "./styled";

export const Goals: React.FC = () => {
  return (
    <>
      <Container>
        <ContentBlock>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Цель
              </BlockTitle>
              <BlockButton>
                Добавить
              </BlockButton>
            </BlockHeader>
            <Tag>Открытие нового бизнеса</Tag>
          </div>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Продукты
              </BlockTitle>
              <BlockButton>
                Добавить
              </BlockButton>
            </BlockHeader>
            <Tag>Обучение</Tag>
            <Tag>Для взрослых</Tag>
            <Tag>Для подростков</Tag>
          </div>
        </ContentBlock>
      </Container>
      <Container>
        <ContentBlock>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Название
              </BlockTitle>
            </BlockHeader>
            <Input placeholder="Языковая школа" />
          </div>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Город
              </BlockTitle>
              <BlockButton>
                Добавить
              </BlockButton>
            </BlockHeader>
            <Tag>Снежинск</Tag>
          </div>
        </ContentBlock>
      </Container>
      <Container>
        <ContentBlock>
          <BlockHeader>
            <BlockTitle>
              Подходящие программы
            </BlockTitle>
          </BlockHeader>
        </ContentBlock>
          <ProgramLine>
            <ProgramBlock>
              Субсидии на онлайн-продвижение товаров, работ и услуг
            </ProgramBlock>
            <ProgramBlock>
              Займы стартапам
            </ProgramBlock>
            <ProgramBlock>
              Инвестиционный налоговый вычет
            </ProgramBlock>
          </ProgramLine>
          <ProgramLine>
            <ProgramBlock>
              Отсрочка уплаты 30% платежей
            </ProgramBlock>
            <ProgramBlock>
              Субсидируемая процентная ставка по кредитам до 6% годовых
            </ProgramBlock>
            <ProgramBlock>
              Грантовая поддержка Фонда «Сколково»: Минигранты
            </ProgramBlock>
          </ProgramLine>
      </Container>
    </>
  );
};
