import styled from '@emotion/styled'
import { contentContainerMax, screenMdMax } from '../../styles/theme'

export default styled.div`
  padding: 0 4rem;
  width: 100%;
  max-width: ${contentContainerMax}px;
  margin: 2rem auto;

  @media (max-width: ${screenMdMax}px) {
    padding: 0 2rem;
  }
`
