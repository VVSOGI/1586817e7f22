import { TableColumnsType } from 'antd'
import { useUserManagement } from '@/hooks'
import { Table } from '@/components'
import { User } from '@/types'
import { getUserColumns } from '@/configs'

export default function App() {
  const { users, addUser } = useUserManagement()

  const dataSource = users.map((user) => {
    return {
      key: user.id,
      ...user
    }
  })

  const columns: TableColumnsType<User> = getUserColumns(users)

  return (
    <div>
      <button
        onClick={() =>
          addUser({
            name: 'John doe',
            address: 'Seoul',
            memo: '외국인',
            createdAt: '2024-12-12',
            updatedAt: '2024-12-12',
            job: '개발자',
            emailConsent: false
          })
        }
      >
        Add Mockdata
      </button>
      <Table columns={columns} data={dataSource} />
    </div>
  )
}
