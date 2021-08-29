import React from "react";
import styled from "styled-components";
import { UserInfo as UserInfoModel } from "app/models";

import { Avatar } from "../Avatar";

import { UserInfo as UserInfoStyled } from "./styled";

export const UserInfo = styled(UserInfoStyled).attrs<UserInfoModel>(({ name, avatarSrc }) => {
  const nextChildren = (
    <>
      <span>{name}</span>
      <Avatar $src={avatarSrc} />
    </>
  );

  return { children: nextChildren };
})({});
