import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
import { sizes } from '../utils/styles';

const paddingLeft = sizes.appNarBarLeftWidth

export const ProjectPage = styled.div`
padding-left: ${paddingLeft}px;
  background-color: yellow;
  /* @media (max-width: 1100px) {
    padding: 25px 20px 50px ${paddingLeft - 20}px;
  } */
`



