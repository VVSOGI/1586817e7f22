import { Table as AntTable, TableColumnsType, TableProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useStorageManagement, useUserFormHandler } from '@/hooks'
import { DefaultButton, Header, TableContainer, Typography, UserFormModal } from '@/components'
import { User } from '@/types'
import { getUserColumns } from '@/configs'

export default function App() {
  const { users, handleAdd, handleUpdate, handleDelete } = useStorageManagement()
  const { isModalOpen, initialUserData, handleModalOpen, handleModalClose, handleSubmit, handleUpdateModalOpen } = useUserFormHandler()

  const dataSource = users.map((user) => {
    return {
      key: user.id,
      ...user
    }
  })
  const columns: TableColumnsType<User> = getUserColumns({ users, handleDelete, handleUpdateModalOpen })
  const rowSelection: TableProps<User>['rowSelection'] = {}

  return (
    <div>
      <Header>
        <Typography.h1>회원 목록</Typography.h1>
        <DefaultButton style={{ padding: '0 12px' }} onClick={handleModalOpen} type="primary">
          <PlusOutlined style={{ fontSize: '16px' }} />
          <Typography.h2>추가</Typography.h2>
        </DefaultButton>
      </Header>
      <UserFormModal
        isModalOpen={isModalOpen}
        initialUserData={initialUserData}
        handleAdd={handleAdd}
        handleUpdate={handleUpdate}
        handleSubmit={handleSubmit}
        handleModalClose={handleModalClose}
      />
      <TableContainer>
        <AntTable rowSelection={{ ...rowSelection }} columns={columns} dataSource={dataSource} pagination={false} />
      </TableContainer>
    </div>
  )
}
