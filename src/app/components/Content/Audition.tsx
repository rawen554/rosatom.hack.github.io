import React, { useState } from "react";

import { Container } from "../Container";

import {
  ContentBlock,
  BlockHeader,
  BlockTitle,
  SwitcherHalf,
  Centered,
  Description,
  InfoMetrics,
  MetricBlock,
  Info,
  MetricItem,
} from "./styled";
import { AuditionKind } from "./types";
import ProfileImg from "./images/profile.png";
import MapImg from "./images/map.png";

export const Audition: React.FC = () => {
  const [kind, setKind] = useState<AuditionKind>("profile");

  return (
    <>
      <Container>
        <ContentBlock>
          <BlockHeader>
            <BlockTitle>
              Потенциальная аудитория
            </BlockTitle>
          </BlockHeader>
        </ContentBlock>
        <div style={{ marginTop: "16px" }}>
          <SwitcherHalf onClick={() => setKind("profile")} $isActive={kind === "profile"}>
            <Centered>
              Профиль
            </Centered>
          </SwitcherHalf>
          <SwitcherHalf onClick={() => setKind("map")} $isActive={kind === "map"}>
            <Centered>
              Карты
            </Centered>
          </SwitcherHalf>
        </div>
        <InfoMetrics>
          <MetricBlock>
            <div>Размер аудитории</div>
            <div>5 000</div>
            <Description>чел в месяц</Description>
          </MetricBlock>
          <MetricBlock>
            <div>Отклик</div>
            <div>85 %</div>
            <Description>вероятность</Description>
          </MetricBlock>
          <MetricBlock>
            <div>Жен. / муж.</div>
            <div>65 / 35 %</div>
            <Description>соотношение</Description>
          </MetricBlock>
          <MetricBlock>
            <div>Конкуренты</div>
            <div>3</div>
            <Description>о которых известно</Description>
          </MetricBlock>
          <Info>
            Данные собраны из открытых источников, прогноз носит ознакомительный характер и не гарантирует результата
          </Info>
        </InfoMetrics>
        <div style={{ display: "flex", marginTop: "65px" }}>
          <div style={{ flexShrink: 0, flexBasis: "280px" }}>
            <MetricItem $color="#F6CE3D">Англия</MetricItem>
            <MetricItem $color="#F63D96">Путешествует</MetricItem>
            <MetricItem $color="#2CA763">Общение</MetricItem>
            <MetricItem $color="#48AEC4">Семья</MetricItem>
          </div>
          <div style={{ margin: "0 auto" }}>
            <img src={kind === "profile" ? ProfileImg : MapImg} />
          </div>
        </div>
      </Container>
    </>
  );
};
