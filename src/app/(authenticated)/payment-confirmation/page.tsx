'use client'

import { Typography, Card, Space, Button, Result } from 'antd'
import { CheckCircleOutlined, WarningOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function PaymentConfirmationPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [paymentStatus, setPaymentStatus] = useState<
    'success' | 'error' | null
  >(null)

  const { data: latestPayment, isLoading } = Api.payment.findFirst.useQuery({
    where: { userId: user?.id },
    orderBy: { dateCreated: 'desc' },
  })

  useEffect(() => {
    if (latestPayment) {
      if (latestPayment.status === 'succeeded') {
        setPaymentStatus('success')
        enqueueSnackbar('Payment successful!', { variant: 'success' })
      } else {
        setPaymentStatus('error')
        enqueueSnackbar('Payment failed. Please check the details below.', {
          variant: 'error',
        })
      }
    }
  }, [latestPayment])

  const handleReturnToDashboard = () => {
    router.push('/dashboard')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Payment Confirmation</Title>
        {isLoading ? (
          <Text>Loading payment information...</Text>
        ) : paymentStatus === 'success' ? (
          <Result
            icon={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
            title="Payment Successful"
            subTitle="Your subscription has been activated successfully."
            extra={[
              <Button
                type="primary"
                key="dashboard"
                onClick={handleReturnToDashboard}
              >
                Return to Dashboard
              </Button>,
            ]}
          />
        ) : paymentStatus === 'error' ? (
          <Result
            icon={<WarningOutlined style={{ color: '#faad14' }} />}
            title="Payment Failed"
            subTitle="There was an issue processing your payment. Please review the details below."
            extra={[
              <Button
                type="primary"
                key="retry"
                onClick={() => router.push('/dashboard')}
              >
                Retry Payment
              </Button>,
            ]}
          />
        ) : null}
        {latestPayment && (
          <Card title="Payment Details" style={{ width: '100%' }}>
            <Space direction="vertical">
              <Text>
                <strong>Amount:</strong> {latestPayment.amount}{' '}
                {latestPayment.currency}
              </Text>
              <Text>
                <strong>Date:</strong> {latestPayment.date}
              </Text>
              <Text>
                <strong>Status:</strong> {latestPayment.status}
              </Text>
              <Text>
                <strong>Transaction ID:</strong> {latestPayment.transactionId}
              </Text>
            </Space>
          </Card>
        )}
        {paymentStatus === 'error' && (
          <Card title="Payment Issue Resolution" style={{ width: '100%' }}>
            <Space direction="vertical">
              <Text>
                To resolve the payment issue, please try the following:
              </Text>
              <ul>
                <li>
                  Check your payment method and ensure it has sufficient funds.
                </li>
                <li>Verify that your billing information is correct.</li>
                <li>Try using a different payment method.</li>
                <li>
                  If the issue persists, please contact our support team for
                  assistance.
                </li>
              </ul>
            </Space>
          </Card>
        )}
      </Space>
    </PageLayout>
  )
}
