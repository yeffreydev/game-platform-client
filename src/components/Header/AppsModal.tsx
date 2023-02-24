import { useContext, useEffect } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";

const Container = styled.div`
  position: fixed;
  top: 50px;
  display: flex;
  right: 10px;
  min-width: 200px;
  min-height: 50px;
  background: #000;
`;
export default function AppsModal() {
  const { conditionalViews } = useContext(AppContext);
  return (
    <>
      {conditionalViews["AppsModal"].isOn && (
        <Container>
          <span>hola</span>
        </Container>
      )}
    </>
  );
}
