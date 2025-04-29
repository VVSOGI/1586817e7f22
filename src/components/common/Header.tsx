import React from 'react'
import { styled } from 'styled-components'
import { COLORS } from '@/styles'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLORS.GRAY_300};
  padding: 8px 14px;
`

interface Props {
  children: React.ReactNode
}

export function Header({ children }: Props) {
  return <HeaderContainer>{children}</HeaderContainer>
}
