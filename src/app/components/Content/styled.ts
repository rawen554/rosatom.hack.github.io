import styled from "styled-components";

export const Content = styled("section")({
  paddingTop: 32,
});

export const BlockTitle = styled("div")({
  fontSize: 24,
  lineHeight: "28px",
  fontWeight: 500,
  color: "#323333",
});

export const BlockButton = styled("div")({
  fontSize: 16,
  lineHeight: "18px",
  fontWeight: 700,
  color: "#19bb4f",
  cursor: "pointer",
});

export const BlockHeader = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 14,
});

export const ContentBlock = styled("div")({
  paddingTop: 48,
  display: "flex",
  justifyContent: "space-between",
});

export const ProgramBlock = styled("div")({
  minHeight: 100,
  width: "30%",
  backgroundColor: "#F5F5F5",
  borderRadius: "12px",
  fontSize: 18,
  lineHeight: "21px",
  fontWeight: 400,
  padding: 24,
  "& + &": {
    marginLeft: 18,
  }
});

export const ProgramLine = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& + &": {
    marginTop: 18,
  }
})

export const Tag = styled("div")({
  display: "inline-block",
  position: "relative",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "19px",
  borderRadius: 4,
  padding: "10px 38px 10px 10px",
  backgroundColor: "#f5f5f5",
  "& + &": {
    marginLeft: 16,
  },
  ":after": {
    position: "absolute",
    cursor: "pointer",
    content: "''",
    top: "50%",
    right: 14,
    width: 12,
    height: 13,
    transform: "translateY(-50%)",
    backgroundImage: 'url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2213%22%20viewBox%3D%220%200%2012%2013%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M0.685643%200C0.510488%200%200.332953%200.0697983%200.199653%200.206546C-0.066551%200.479634%20-0.066551%200.930576%200.199653%201.20346L5.02802%206.1567L0.199653%2011.1099C-0.066551%2011.383%20-0.066551%2011.834%200.199653%2012.1069C0.328589%2012.2391%200.508703%2012.3134%200.685643%2012.3134C0.862584%2012.3134%201.0425%2012.2393%201.17163%2012.1069L6%207.15382L10.8284%2012.1069C10.9573%2012.2391%2011.1374%2012.3134%2011.3144%2012.3134C11.4883%2012.3134%2011.6629%2012.2479%2011.8003%2012.1069C12.0666%2011.8338%2012.0666%2011.3828%2011.8003%2011.1099L6.97218%206.1567L11.8003%201.20346C12.0666%200.930373%2012.0666%200.479431%2011.8003%200.206546C11.5341%20-0.0663389%2011.0946%20-0.0665424%2010.8286%200.206546L6.0002%205.15978L1.17183%200.206546C1.03873%200.0700018%200.861195%200%200.685842%200H0.685643Z%22%20fill%3D%22%23A9AAAA%22%2F%3E%0A%3C%2Fsvg%3E%0A")',
  }
});

export const Input = styled("input")({
  height: 40,
  width: "100%",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "18px",
  border: "3px solid #DDDDDD",
  boxSizing: "border-box",
  borderRadius: 4,
});

export const Textarea = styled("textarea")({
  width: "100%",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "18px",
  border: "3px solid #DDDDDD",
  boxSizing: "border-box",
  borderRadius: 4,
});

export const SwitcherHalf = styled("div")<{ $isActive?: boolean; $width?: string }>(({ $isActive, $width }) => ({
  display: "inline-block",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "19px",
  height: 40,
  width: $width ? $width : 235,
  backgroundColor: $isActive ? "#DFF2E7" : "#F5F5F5",
  cursor: $isActive ? "default" : "pointer",
  ":first-child": {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  ":last-child": {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
}));

export const Centered = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});

export const Info = styled("div")({
  width: 320,
  padding: 18,
  borderRadius: 12,
  backgroundColor: "#E7F4FD",
});

export const InfoMetrics = styled("div")({
  marginTop: 32,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const MetricBlock = styled("div")({
  fontSize: 20,
  lineHeight: "23px",
  fontWeight: 500,
  "> *:nth-child(1)": {
    marginBottom: 18,
  }
});

export const Description = styled("div")({
  color: "#A9AAAA",
  fontSize: 16,
});

export const MetricItem = styled("div")<{ $color: string }>(({ $color }) => ({
  display: "block",
  position: "relative",
  fontWeight: 400,
  fontSize: 16,
  lineHeight: "19px",
  borderRadius: 4,
  padding: "10px 38px 10px 10px",
  color: "#000",
  borderLeft: `4px solid ${$color}`,
  backgroundColor: "#f5f5f5",
  "& + &": {
    marginTop: 9,
  },
  ":after": {
    position: "absolute",
    cursor: "pointer",
    content: "''",
    top: "50%",
    right: 14,
    width: 20,
    height: 20,
    transform: "translateY(-50%)",
    backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFfSURBVHgBpdSxK4RhHAfw72GwyI2ieMnGZLBJDAaTQpncYLAwKBtSyh9gs3Flk5RMhFhEKRkMChGLgYFBRPf93fO73ufe3rv3nue+9emee+7ue+/7Pu/7ACYDdEL/Hn5og9qkKEXDtE93tEvfcEtAI/RBPTJxTg+Uhn969WiXoINluGcWepqaW9qpgV9maI2uaVTnvijtUxjQio4bqcH+0Kcwi/B6X9FmNYVz1KdjOcWx6BdcCgNatd7Lij5VUtiP4tUrZI/qdXwMsyhIKszAPDGn1GHNL1C3juUGnkKZ2PfhGcJH6pk6YU71z5qfLtFzSUfRwnZ6tH78QvfW+22UTr4wespSNojwYjfrn0heaR4JiVuUaGkhizFzFRXGlWZVYuroE/E7jZTKPjlB60hOC13I4JDeqQv+kZtcFi0jG2wAc6PK6w39wi1yZE20RZMpnWylcRqiWrjljQ6gm0QObOFZpPddtX8AAAAASUVORK5CYII=")',
  }
}));

export const InfoPanelCenterd = styled(Info)({
  textAlign: "center",
  verticalAlign: "center",
  height: "100%",
  fontSize: 20,
  fontWeight: 400,
  lineHeight: "23px",
});

export const ExpencesTitle = styled("div")({
  fontWeight: 500,
  fontSize: 24,
  lineHeight: "28px",
  color: "#333232",
  flexBasis: "454px",
  marginBottom: 16,
});

export const ExpencesBlock = styled("div")({
  flexBasis: 280,
  flexShrink: 0,
});

export const Expences = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
