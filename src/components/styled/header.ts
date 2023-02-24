import { Link } from "react-router-dom";
import styled from "styled-components";
const { div, nav, ul, li, button } = styled;

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
    align-items: center;
    gap: 10px;
`;

export const HeaderNavLi = li``;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  color: #dedede;
`;

export const AppsButton = button`
    height: 40px;
    width: 40px;
    background: none;
    border: none;
    cursor: pointer;
    background: #000;
    font-size: 25px;
    display: grid;
    place-items: center;
    & svg path {
        color: #fff !important;
        stroke: #fff;
    }
  `;
