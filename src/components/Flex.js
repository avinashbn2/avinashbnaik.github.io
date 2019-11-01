import styled from "styled-components"
const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.jc || "center"};
  align-items: ${props => props.ai || "center"};
  flex-direction: ${props => props.dir || "row"};
  height: ${props => props.height || undefined};
  max-width: ${props => props.mw || undefined};
  margin: 0 auto;
`
export default Flex
