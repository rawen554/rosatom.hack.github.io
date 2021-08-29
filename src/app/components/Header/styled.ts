import styled from "styled-components";

export const Header = styled("header")({
  height: 56,
  backgroundColor: "#F5F5F5",
});

export const HeaderContent = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
});

export const Title = styled("div")({
  fontSize: 24,
  lineHeight: "28px",
});

export const UserInfo = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  width: 400,
  color: "#333333",
  fontWeight: "bold",
  height: "100%",
  fontSize: 20,
  lineHeight: "30px",
  "> * + *": {
    marginLeft: 12,
  },
});
