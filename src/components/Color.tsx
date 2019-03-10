import styled from 'styled-components'

export const Color = styled.TouchableOpacity`
  ${({ color, itemSize, shadow }) => `
    background-color: ${color};
    width: ${itemSize}px;
    height: ${itemSize}px;
    border-radius: ${itemSize / 2}px;
    margin: ${itemSize / 4}px;

    ${
      shadow
        ? `
        shadow-opacity: 0.75;
        shadow-radius: 5px;
        shadow-color: ${color};
        shadow-offset: 0px 0px;
      `
        : ``
    }
  `}
`
