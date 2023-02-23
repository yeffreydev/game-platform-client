import { Link } from "react-router-dom";
import styled from "styled-components";
const { div, nav, ul, li } = styled;

export const HeaderDiv = div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
`;

export const HeaderNav = nav`
    display: flex;
`;

export const HeaderNavUl = ul`
    display: flex;
    list-style: none;
`;

export const HeaderNavLi = li``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #dedede;
`;
