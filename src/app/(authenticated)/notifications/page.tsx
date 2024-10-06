'use client'

import { Typography, List, Button, Space, Spin } from 'antd'
import { BellOutlined, CheckOutlined, UndoOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NotificationsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: notifications,
    isLoading,
    refetch,
  } = Api.notification.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: updateNotification } =
    Api.notification.update.useMutation()

  const handleMarkAsRead = async (notificationId: string, isRead: boolean) => {
    try {
      await updateNotification({
        where: { id: notificationId },
        data: { isRead: isRead },
      })
      await refetch()
      enqueueSnackbar(`Notification marked as ${isRead ? 'read' : 'unread'}`, {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update notification', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <BellOutlined /> Notifications
        </Title>
        <Text>View and manage your important notifications</Text>
        {isLoading ? (
          <Spin size="large" />
        ) : (
          <List
            itemLayout="horizontal"
            dataSource={notifications}
            renderItem={item => (
              <List.Item
                actions={[
                  <Button
                    key="read-unread"
                    type="link"
                    onClick={() => handleMarkAsRead(item.id, !item.isRead)}
                    icon={item.isRead ? <UndoOutlined /> : <CheckOutlined />}
                  >
                    {item.isRead ? 'Mark as Unread' : 'Mark as Read'}
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={<Text strong={!item.isRead}>{item.type}</Text>}
                  description={
                    <Space direction="vertical">
                      <Text>{item.content}</Text>
                      <Text type="secondary">
                        {dayjs(item.dateCreated).format('MMMM D, YYYY h:mm A')}
                      </Text>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        )}
      </Space>
    </PageLayout>
  )
}
