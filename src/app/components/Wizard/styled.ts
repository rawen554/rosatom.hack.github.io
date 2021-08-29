import styled from "styled-components";

import { WizardIconProps } from "./types";

export const WizardIcon = styled("div")<WizardIconProps>(({ $isActive }) => ({
  width: 32,
  height: 32,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  marginRight: 16,
  color: "#FDFDFD",
  backgroundColor: $isActive ? "#18AA58" : "#A9AAAA",
}));

export const WizardSpacer = styled("div")({
  height: 2,
  width: 40,
  backgroundColor: "#A9AAAA",
});

export const WizardItem = styled("div")({
  display: "flex",
  alignItems: "center",
  "> * + *": {
    marginLeft: 16,
  },
  ":last-child": {
    [WizardSpacer]: {
      display: "none",
    }
  }
});

export const WizardWrrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  marginTop: 32,
  "> * + *": {
    marginLeft: 16,
  },
});
