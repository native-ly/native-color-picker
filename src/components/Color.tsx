import styled from 'styled-components'

export const Color = styled.TouchableOpacity`
  background-color: ${({ color }) => color};
  ${({ itemSize }) => `
    width: ${itemSize}px;
    height: ${itemSize}px;
    border-radius: ${itemSize / 2}px;
  `}
`
