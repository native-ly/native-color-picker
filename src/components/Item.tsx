import styled from 'styled-components/native'

import { ItemProps } from '../interfaces/Props'

export const Item = styled.TouchableOpacity`
  ${({ color, itemSize, shadow }: ItemProps) => `
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
        shadow-offset: 0 0;
      `
        : ``
    }
  `}
`
