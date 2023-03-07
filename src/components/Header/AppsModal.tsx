import { useContext } from "react";
import styled from "styled-components";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 50px;
  display: flex;
  right: 10px;
  min-width: 200px;
  min-height: 50px;
  background: #000;
`;
const AppLink = styled(Link)``;
export default function AppsModal() {
  const { conditionalViews } = useContext(AppContext);
  return (
    <>
      {conditionalViews["AppsModal"].isOn && (
        <Container>
          <AppLink to="/paint">Paint</AppLink>
        </Container>
      )}
    </>
  );
}
