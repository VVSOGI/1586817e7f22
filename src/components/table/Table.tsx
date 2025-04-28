import styled from 'styled-components'
import { Table as AntTable, TableColumnsType, TableProps } from 'antd'
import { COLORS } from '@/styles'

const TableContainer = styled.div`
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

interface Props<T> {
  columns: TableColumnsType<T> | undefined
  data: T[]
}

export function Table<T>({ columns, data }: Props<T>) {
  const rowSelection: TableProps<T>['rowSelection'] = {}

  return (
    <TableContainer>
      <AntTable rowSelection={{ ...rowSelection }} columns={columns} dataSource={data} pagination={false} />
    </TableContainer>
  )
}
