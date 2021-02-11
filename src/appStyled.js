import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  margin-top: 20px;
  margin-right: 30px;
  text-decoration: none;
  color: green;
  font-size: 1rem;
  letter-spacing: 2px;
  outline: none;
  &:hover {
    color: red;
  }
  `;