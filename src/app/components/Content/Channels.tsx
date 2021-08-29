import React, { useState } from "react";

import { Container } from "../Container";

import {
  ContentBlock,
  BlockHeader,
  BlockTitle,
  BlockButton,
  Tag,
  SwitcherHalf,
  Centered,
  Input,
  Textarea,
} from "./styled";
import PushImg from "./images/push.png";

export const Channels: React.FC = () => {
  const [title, setTitle] = useState<string>("Курсы английсого онлайн");
  const [description, setDescription] = useState<string>(
    "Взрослым английский для карьеры, путешествий и развлечений. Детям школьная программа и подготовка к экзаменам"
  );

  return (
    <>
      <Container>
        <ContentBlock>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Каналы
              </BlockTitle>
              <BlockButton>
                Добавить
              </BlockButton>
            </BlockHeader>
            <Tag>Push</Tag>
            <Tag>Email</Tag>
            <Tag>Партнеры</Tag>
          </div>
          <div style={{ width: "477px" }}>
            <BlockHeader>
              <BlockTitle>
                Метрики
              </BlockTitle>
              <BlockButton>
                Добавить
              </BlockButton>
            </BlockHeader>
            <Tag>CTR</Tag>
          </div>
        </ContentBlock>
      </Container>
      <Container>
        <ContentBlock>
          <BlockHeader>
            <BlockTitle>
              Анонс
            </BlockTitle>
          </BlockHeader>
        </ContentBlock>
        <div style={{ marginTop: "2px" }}>
          <SwitcherHalf $isActive>
            <Centered>
            Push
            </Centered>
          </SwitcherHalf>
          <SwitcherHalf>
            <Centered>
            Email
            </Centered>
          </SwitcherHalf>
          <SwitcherHalf>
            <Centered>
            Партнер
            </Centered>
          </SwitcherHalf>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ width: "477px", marginTop: "32px" }}>
              <BlockHeader>
                <BlockTitle>
                  Заголовок
                </BlockTitle>
              </BlockHeader>
              <Input value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </div>
            <div style={{ width: "477px", marginTop: "48px" }}>
              <BlockHeader>
                <BlockTitle>
                  Описание
                </BlockTitle>
              </BlockHeader>
              <Textarea value={description} rows={5} onChange={(e) => setDescription(e.currentTarget.value)} />
            </div>
          </div>
          <div style={{ padding: 66, backgroundColor: "#F5F5F5", borderRadius: "12px" }}>
            <img src={PushImg} />
          </div>
        </div>
      </Container>
    </>
  );
};
