import styled from 'styled-components'
import { Table as AntTable, TableColumnsType, TableProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useUserManagement } from '@/hooks'
import { DefaultButton, TableContainer } from '@/components'
import { User } from '@/types'
import { getUserColumns } from '@/configs'
import { COLORS } from '@/styles'

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`

const HeaderTitle = styled.h1`
  width: 100%;
  padding: 12px 14px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  border-bottom: 1px solid ${COLORS.GRAY_300};
`

export default function App() {
  const { users } = useUserManagement()

  const dataSource = users.map((user) => {
    return {
      key: user.id,
      ...user
    }
  })

  const columns: TableColumnsType<User> = getUserColumns(users)
  const rowSelection: TableProps<User>['rowSelection'] = {}

  return (
    <div>
      <Header>
        <HeaderTitle>회원 목록</HeaderTitle>
        <DefaultButton type="primary">
          <PlusOutlined />
          <div>추가</div>
        </DefaultButton>
      </Header>
      <TableContainer>
        <AntTable rowSelection={{ ...rowSelection }} columns={columns} dataSource={dataSource} pagination={false} />
      </TableContainer>
    </div>
  )
}
