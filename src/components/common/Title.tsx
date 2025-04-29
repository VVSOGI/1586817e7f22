import React, { HTMLAttributes, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { typography } from '@/styles'

const H1 = styled.h1`
  ${typography.h1}
`
const H2 = styled.h2`
  ${typography.h2}
`
const H3 = styled.h3`
  ${typography.h3}
`

/**
 * Head tag 표준 HTML 속성과 children 명시
 */
type HeadingProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>

/**
 * Typography가 일정하게 쓰이는 것 같아 Design system과 연관해서 export
 */
export const Typography = {
  h1: React.memo<HeadingProps>((props) => <H1 {...props} />),
  h2: React.memo<HeadingProps>((props) => <H2 {...props} />),
  h3: React.memo<HeadingProps>((props) => <H3 {...props} />)
}
