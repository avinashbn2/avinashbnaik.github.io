import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
const anim = keyframes`
    0% {
      opacity: 0;

    }
    100% {
      opacity: 1;
    }

`
const StyledDiv = styled.div`
  font-size: ${props => props.size || "1rem"};
  animation-duration: 2s;
  animation-name: ${anim};
`
function Text({ text, size, className }) {
  return (
    <StyledDiv className={className} size={size}>
      {text}
    </StyledDiv>
  )
}
Text.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
}
export default Text
