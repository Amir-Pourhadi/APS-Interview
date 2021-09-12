import styled from "styled-components";

export const Container = styled.div({
  width: "100vw",
  minHeight: "100vh",
});

export const Rect = styled.div.attrs(({ isDragging }) => ({
  style: { transition: isDragging ? "none" : "all 500ms" },
}))({
  width: 300,
  height: 80,
  background: "#fff",
  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.15)",
  userSelect: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: ({ top }) => 100 + top + "px",
  left: "calc(50vw - 150px)",
  fontSize: 20,
  color: "#777",
});
