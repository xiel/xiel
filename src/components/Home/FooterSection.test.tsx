import React from 'react'
import FooterSection from './FooterSection'
import { render } from '@testing-library/react'

describe('FooterSection', () => {
  it('should render footer', function() {
    const { getByText } = render(<FooterSection />)
    expect(getByText('Projekt- und Kooperationsanfragen an:'))
  })
})
