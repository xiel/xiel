import styled from '@emotion/styled'
import { useEffect, useState } from 'react'

import { Gravity } from '../components/Gravity/Gravity'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: darkblue;
`

export default function GravityTestPage() {
  const [display, setDisplay] = useState(false)
  useEffect(() => setDisplay(true), [])
  return <Wrapper>{display && <Gravity />}</Wrapper>
}
