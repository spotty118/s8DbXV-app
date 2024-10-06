'use client'

import { Typography, List, Button, Space, Modal, Spin } from 'antd'
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  DeleteOutlined,
  CodeOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function DashboardPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const {
    data: applications,
    isLoading,
    refetch,
  } = Api.application.findMany.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()
  const { mutateAsync: deleteApplication } =
    Api.application.delete.useMutation()

  const handleStart = async (id: string) => {
    try {
      await updateApplication({
        where: { id },
        data: { containerStatus: 'running' },
      })
      enqueueSnackbar('Application started successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to start application', { variant: 'error' })
    }
  }

  const handleStop = async (id: string) => {
    try {
      await updateApplication({
        where: { id },
        data: { containerStatus: 'stopped' },
      })
      enqueueSnackbar('Application stopped successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to stop application', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteApplication({ where: { id } })
      enqueueSnackbar('Application deleted successfully', {
        variant: 'success',
      })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to delete application', { variant: 'error' })
    }
  }

  const handleViewCode = (id: string) => {
    setSelectedApp(id)
  }

  const handleCloseModal = () => {
    setSelectedApp(null)
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>My Applications</Title>
      <Text>Manage your generated applications and their statuses.</Text>

      {isLoading ? (
        <Spin size="large" />
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={applications}
          renderItem={app => (
            <List.Item
              actions={[
                <Button
                  icon={<PlayCircleOutlined />}
                  onClick={() => handleStart(app.id)}
                  disabled={app.containerStatus === 'running'}
                >
                  Start
                </Button>,
                <Button
                  icon={<PauseCircleOutlined />}
                  onClick={() => handleStop(app.id)}
                  disabled={app.containerStatus === 'stopped'}
                >
                  Stop
                </Button>,
                <Button
                  icon={<DeleteOutlined />}
                  onClick={() => handleDelete(app.id)}
                  danger
                >
                  Delete
                </Button>,
                <Button
                  icon={<CodeOutlined />}
                  onClick={() => handleViewCode(app.id)}
                >
                  View Code
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={app.description || 'Untitled Application'}
                description={
                  <Space direction="vertical">
                    <Text>Status: {app.status}</Text>
                    <Text>Container Status: {app.containerStatus}</Text>
                    <Text>
                      Created:{' '}
                      {dayjs(app.dateCreated).format('MMMM D, YYYY h:mm A')}
                    </Text>
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      )}

      <Modal
        title="Application Code"
        open={!!selectedApp}
        onCancel={handleCloseModal}
        footer={null}
        width={800}
      >
        {selectedApp && (
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {applications?.find(app => app.id === selectedApp)
              ?.codeLocationUrl || 'No code available'}
          </pre>
        )}
      </Modal>
    </PageLayout>
  )
}
