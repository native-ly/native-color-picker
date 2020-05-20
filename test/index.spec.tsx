import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react-native'

import NativeColorPicker from '../src'

describe('', () => {
  const colors = ['#fff', '#000']

  const { baseElement } = render(<NativeColorPicker colors={colors} />)

  it('should', () => {
    expect(baseElement).toBe(true)
  })
})
