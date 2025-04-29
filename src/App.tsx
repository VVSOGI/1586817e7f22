import { useState } from 'react'
import { Table as AntTable, TableColumnsType, TableProps } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useStorageManagement } from '@/hooks'
import { DefaultButton, Header, TableContainer, Typography, UserModal } from '@/components'
import { PreprocessedUser, User, UserFormFields } from '@/types'
import { getUserColumns } from '@/configs'

export default function App() {
  const { users, handleAdd } = useStorageManagement()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleSubmit = (formdata: UserFormFields) => {
    const result: PreprocessedUser = {
      name: formdata.name.value,
      address: formdata.address.value,
      memo: formdata.memo.value,
      createdAt: formdata.createdAt.value,
      job: formdata.job.value,
      emailConsent: formdata.emailConsent.value
    }

    handleAdd(result)
  }

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
        <Typography.h1>회원 목록</Typography.h1>
        <DefaultButton style={{ padding: '0 12px' }} onClick={handleModalOpen} type="primary">
          <PlusOutlined style={{ fontSize: '16px' }} />
          <Typography.h2>추가</Typography.h2>
        </DefaultButton>
      </Header>
      <UserModal isModalOpen={isModalOpen} handleModalClose={handleModalClose} handleSubmit={handleSubmit} />
      <TableContainer>
        <AntTable rowSelection={{ ...rowSelection }} columns={columns} dataSource={dataSource} pagination={false} />
      </TableContainer>
    </div>
  )
}
