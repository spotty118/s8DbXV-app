'use client'

import { Typography, Input, Button, Progress, Space } from 'antd'
import {
  SendOutlined,
  CodeOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [description, setDescription] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [progress, setProgress] = useState(0)

  const { mutateAsync: createApplication } =
    Api.application.create.useMutation()
  const { mutateAsync: updateApplication } =
    Api.application.update.useMutation()

  const handleSubmit = async () => {
    if (!description.trim()) {
      enqueueSnackbar('Please enter a description for your application.', {
        variant: 'error',
      })
      return
    }

    setIsGenerating(true)
    setProgress(0)

    try {
      // Create the application
      const application = await createApplication({
        data: {
          description,
          status: 'GENERATING',
          userId: user?.id || '',
        },
      })

      // Simulate code generation process
      await simulateCodeGeneration(application.id)

      // Update application status
      await updateApplication({
        where: { id: application.id },
        data: {
          status: 'COMPLETED',
          codeLocationUrl: 'https://example.com/code',
        },
      })

      enqueueSnackbar('Application generated successfully!', {
        variant: 'success',
      })
      router.push(`/applications/${application.id}`)
    } catch (error) {
      enqueueSnackbar('Error generating application. Please try again.', {
        variant: 'error',
      })
    } finally {
      setIsGenerating(false)
    }
  }

  const simulateCodeGeneration = async (applicationId: string) => {
    for (let i = 0; i <= 100; i += 10) {
      setProgress(i)
      await new Promise(resolve => setTimeout(resolve, 500))

      if (i % 30 === 0) {
        await updateApplication({
          where: { id: applicationId },
          data: {
            status: i === 30 ? 'GENERATING_CODE' : 'DEPLOYING_CONTAINER',
          },
        })
      }
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Generate Your Application</Title>
        <Paragraph>
          Enter a description of the application you want to create, and our
          system will generate the corresponding code using GPT.
        </Paragraph>

        <Input.TextArea
          rows={4}
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Describe your application..."
          disabled={isGenerating}
        />

        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSubmit}
          loading={isGenerating}
          disabled={isGenerating}
        >
          Generate Application
        </Button>

        {isGenerating && (
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Progress percent={progress} status="active" />
            <Space>
              {progress < 30 && <CodeOutlined />}
              {progress >= 30 && progress < 60 && <CloudUploadOutlined />}
              {progress >= 60 && <SendOutlined />}
              <span>
                {progress < 30 && 'Generating code...'}
                {progress >= 30 && progress < 60 && 'Deploying container...'}
                {progress >= 60 && 'Finalizing application...'}
              </span>
            </Space>
          </Space>
        )}
      </Space>
    </PageLayout>
  )
}
