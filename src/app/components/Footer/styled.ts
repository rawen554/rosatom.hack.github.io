import styled from "styled-components";

export const Footer = styled("footer")({
  position: "fixed",
  bottom: 40,
  height: 40,
  width: "100%",
});

export const FooterContent = styled("div")<{ $firstStep?: boolean }>(({ $firstStep }) => ({
  display: "flex",
  justifyContent: $firstStep ? "flex-end" : "space-between",
}));

export const Button = styled("button")<{ $isNext?: boolean; }>(({ $isNext }) => ({
  padding: "10px 30px",
  borderRadius: 8,
  fontSize: 14,
  fontWeight: 700,
  cursor: "pointer",
  color: $isNext ? "#FFFFFF" : "#19BB4F",
  backgroundColor: $isNext ? "#19BB4F" : "#FFFFFF",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: $isNext ? "#FFFFFF" : "#19BB4F",
}));
