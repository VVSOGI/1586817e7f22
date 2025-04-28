import styled from 'styled-components'
import { Table as AntTable, TableColumnsType, TableProps } from 'antd'

const TableContainer = styled.div``

interface Props<T> {
  columns: TableColumnsType<T> | undefined
  data: T[]
}

export function Table<T>({ columns, data }: Props<T>) {
  const rowSelection: TableProps<T>['rowSelection'] = {}

  return (
    <TableContainer>
      <AntTable rowSelection={{ ...rowSelection }} columns={columns} dataSource={data} />
    </TableContainer>
  )
}
