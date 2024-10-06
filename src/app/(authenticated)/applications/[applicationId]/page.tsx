'use client'

import {
  Typography,
  Card,
  Space,
  Button,
  Spin,
  Descriptions,
  Statistic,
} from 'antd'
import {
  AppstoreOutlined,
  CodeOutlined,
  BarChartOutlined,
} from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ApplicationDetailsPage() {
  const router = useRouter()
  const params = useParams<{ applicationId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [logs, setLogs] = useState<string[]>([])
  const [metrics, setMetrics] = useState<{ cpu: number; memory: number }>({
    cpu: 0,
    memory: 0,
  })

  const { data: application, isLoading } = Api.application.findUnique.useQuery({
    where: { id: params.applicationId },
    include: { user: true },
  })

  useEffect(() => {
    // Simulating real-time logs and metrics updates
    const logInterval = setInterval(() => {
      setLogs(prevLogs =>
        [...prevLogs, `Log entry at ${new Date().toISOString()}`].slice(-10),
      )
    }, 5000)

    const metricInterval = setInterval(() => {
      setMetrics({
        cpu: Math.random() * 100,
        memory: Math.random() * 1024,
      })
    }, 3000)

    return () => {
      clearInterval(logInterval)
      clearInterval(metricInterval)
    }
  }, [])

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!application) {
    enqueueSnackbar('Application not found', { variant: 'error' })
    router.push('/dashboard')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>
          <AppstoreOutlined /> Application Details
        </Title>
        <Paragraph>
          View and manage your application details, interact with the container,
          and monitor performance.
        </Paragraph>

        <Card>
          <Descriptions title="Application Information" bordered>
            <Descriptions.Item label="ID">{application.id}</Descriptions.Item>
            <Descriptions.Item label="Description">
              {application.description || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Status">
              {application.status || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Code Location">
              {application.codeLocationUrl ? (
                <a
                  href={application.codeLocationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              ) : (
                'N/A'
              )}
            </Descriptions.Item>
            <Descriptions.Item label="Container ID">
              {application.containerId || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Container Status">
              {application.containerStatus || 'N/A'}
            </Descriptions.Item>
            <Descriptions.Item label="Created At">
              {dayjs(application.dateCreated).format('YYYY-MM-DD HH:mm:ss')}
            </Descriptions.Item>
            <Descriptions.Item label="Updated At">
              {dayjs(application.dateUpdated).format('YYYY-MM-DD HH:mm:ss')}
            </Descriptions.Item>
          </Descriptions>
        </Card>

        <Card
          title={
            <>
              <CodeOutlined /> Container Interaction
            </>
          }
        >
          <Space>
            <Button
              type="primary"
              onClick={() =>
                enqueueSnackbar('Starting container...', { variant: 'info' })
              }
            >
              Start Container
            </Button>
            <Button
              danger
              onClick={() =>
                enqueueSnackbar('Stopping container...', { variant: 'info' })
              }
            >
              Stop Container
            </Button>
            <Button
              onClick={() =>
                enqueueSnackbar('Restarting container...', { variant: 'info' })
              }
            >
              Restart Container
            </Button>
          </Space>
        </Card>

        <Card
          title={
            <>
              <BarChartOutlined /> Performance Metrics
            </>
          }
        >
          <Space size="large">
            <Statistic
              title="CPU Usage"
              value={metrics.cpu.toFixed(2)}
              suffix="%"
            />
            <Statistic
              title="Memory Usage"
              value={metrics.memory.toFixed(2)}
              suffix="MB"
            />
          </Space>
        </Card>

        <Card title="Application Logs">
          <Space direction="vertical" style={{ width: '100%' }}>
            {logs.map((log, index) => (
              <Paragraph key={index} style={{ margin: 0 }}>
                {log}
              </Paragraph>
            ))}
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
