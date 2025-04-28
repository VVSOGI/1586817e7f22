import styled from 'styled-components'
import { COLORS } from '@/styles'

const StyledTable = styled.div`
  tbody > tr > td {
    &:last-child {
      padding: 0;
      &:hover {
        cursor: pointer;
        background-color: ${COLORS.GRAY_300} !important;
      }

      &:active {
        background-color: ${COLORS.GRAY_100} !important;
      }
    }
  }
`

interface Props {
  children: React.ReactNode
}

export function TableContainer({ children }: Props) {
  return <StyledTable>{children}</StyledTable>
}
