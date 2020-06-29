import React from 'react'
import { render, fireEvent } from 'react-native-testing-library'

import NativeColorPicker from '../src'

jest.mock('native-icons', () => 'Icon')
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper')

describe('NativeColorPicker', () => {
  const colors = ['#d73964', '#d23440', '#db643a', '#e88334']

  it('should render colors grid with default props', () => {
    const { toJSON } = render(<NativeColorPicker colors={colors} />)

    expect(toJSON()).toMatchSnapshot()
  })

  it('should render colors grid with custom props', () => {
    // jest.mock('Platform', () => {
    //   const Platform = require.requireActual('Platform');

    //   Platform.OS = 'android';

    //   return Platform;
    // });

    const customProps = {
      sort: true,
      gradient: true,
      shadow: true,
      columns: 4,
    }

    const { toJSON, getAllByTestId } = render(
      <NativeColorPicker colors={colors} {...customProps} />
    )

    expect(toJSON()).toMatchSnapshot()
    expect(getAllByTestId('item-gradient').length).toBe(4)
  })

  it('should render horizontal colors list with fade marker', () => {
    const customProps = {
      horizontal: true,
      // markerProps: {
      //   size: 10,
      //   // markerType: 'fade'
      //   // markerDisplay: 'adjust',
      // },
    }

    const { toJSON } = render(
      <NativeColorPicker colors={colors} {...customProps} />
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it.each([
    {
      markerProps: {
        // markerType: 'fade'
        markerDisplay: '#fff',
        animate: 'scale',
      },
    },
    {
      markerProps: {
        markerType: 'fade',
      },
    },
    {
      markerProps: {
        markerType: 'icon',
        markerDisplay: 'adjust',
        animate: 'rotate',
      },
    },
  ])('should select color items', (customProps) => {
    const onPress = jest.fn()

    const { getAllByTestId } = render(
      <NativeColorPicker
        colors={colors}
        onSelect={onPress}
        selectedColor={colors[0]}
        {...customProps}
      />
    )

    fireEvent.press(getAllByTestId('color-item')[1])
    fireEvent.press(getAllByTestId('color-item')[2])

    expect(onPress).toBeCalledWith(colors[1])
    expect(onPress).toBeCalledWith(colors[2])
  })

  // it('should select color items', () => {
  //   const onPress = jest.fn()

  //   const customProps = {
  //     markerProps: {
  //       markerType: 'fade'
  //     }
  //   }

  //   // const customProps = {
  //   //   markerProps: {
  //   //     markerType: 'icon'
  //   //   }
  //   // }

  //   const { getAllByTestId } = render(
  //     <NativeColorPicker
  //       colors={colors}
  //       onSelect={onPress}
  //       selectedColor={colors[0]}
  //       {...customProps}
  //     />
  //   )

  //   fireEvent.press(getAllByTestId('color-item')[1])
  //   fireEvent.press(getAllByTestId('color-item')[2])

  //   expect(onPress).toBeCalledWith(colors[1])
  //   expect(onPress).toBeCalledWith(colors[2])
  // })
})
