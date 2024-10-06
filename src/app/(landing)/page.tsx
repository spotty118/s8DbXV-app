'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  RocketOutlined,
  CodeOutlined,
  CloudOutlined,
  TeamOutlined,
  LockOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `AI-Powered Code Generation`,
      description: `Transform your ideas into functional code with our cutting-edge GPT technology.`,
      icon: <CodeOutlined />,
    },
    {
      heading: `Secure Containerization`,
      description: `Deploy your applications in scalable, secure Docker containers managed by AWS Fargate.`,
      icon: <CloudOutlined />,
    },
    {
      heading: `Real-Time Dashboard`,
      description: `Monitor and manage your projects with ease through our intuitive, real-time dashboard.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Collaborative Development`,
      description: `Foster teamwork and innovation with our built-in collaboration tools.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Rapid Prototyping`,
      description: `Bring your ideas to life quickly with our streamlined development process.`,
      icon: <EditOutlined />,
    },
    {
      heading: `Enterprise-Grade Security`,
      description: `Rest easy knowing your intellectual property is protected by state-of-the-art security measures.`,
      icon: <LockOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Startup Founder`,
      content: `This platform turned our startup idea into a working prototype in days, not months. It's a game-changer for non-technical founders like me.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `CTO, TechInnovate`,
      content: `The AI-driven code generation is impressive. It's like having an army of developers at your fingertips. Our team's productivity has skyrocketed.`,
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Product Manager`,
      content: `The real-time dashboard and collaboration features have revolutionized our development process. We're shipping features faster than ever before.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Patel`,
      designation: `Solo Entrepreneur`,
      content: `As a non-coder, I never thought I could build my own app. This platform made it possible and affordable. It's truly democratizing app development.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Thompson`,
      designation: `IT Director`,
      content: `The security features and AWS integration give us peace of mind. We can innovate rapidly without compromising on enterprise-grade security.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Alex Novak`,
      designation: `Serial Entrepreneur`,
      content: `I've launched three successful apps using this platform. The speed and cost-efficiency are unmatched. It's my secret weapon for staying ahead in the market.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Starter`,
      description: `Perfect for individuals and small projects`,
      monthly: 49,
      yearly: 490,
      features: [
        `Up to 3 active projects`,
        `Basic AI code generation`,
        `Community support`,
      ],
    },
    {
      title: `Pro`,
      description: `Ideal for growing businesses and teams`,
      monthly: 99,
      yearly: 990,
      features: [
        `Unlimited projects`,
        `Advanced AI capabilities`,
        `Priority support`,
        `Team collaboration tools`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large organizations`,
      monthly: 499,
      yearly: 4990,
      features: [
        `Custom integrations`,
        `Dedicated account manager`,
        `24/7 premium support`,
        `Advanced security features`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI-powered code generation work?`,
      answer: `Our platform uses advanced GPT technology to interpret your app description and generate functional code. It understands context, best practices, and can create complex applications based on your specifications.`,
    },
    {
      question: `Is coding experience necessary to use this platform?`,
      answer: `Not at all! Our platform is designed to be user-friendly for both non-technical users and experienced developers. You can create applications by simply describing what you want, no coding required.`,
    },
    {
      question: `How secure is the platform for my intellectual property?`,
      answer: `We take security seriously. All generated code and data are protected with enterprise-grade encryption. Our use of AWS Fargate ensures that your applications run in isolated environments, safeguarding your intellectual property.`,
    },
    {
      question: `Can I integrate existing systems or databases with apps created on your platform?`,
      answer: `Absolutely! Our platform supports various integrations, especially at the Enterprise level. You can connect to existing databases, APIs, and third-party services to create comprehensive, interconnected applications.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Describe Your Vision`,
      description: `Simply tell us about the app you want to create. No technical jargon needed - just your ideas.`,
    },
    {
      heading: `AI Generates Code`,
      description: `Our advanced AI interprets your description and generates functional, high-quality code.`,
    },
    {
      heading: `Review and Customize`,
      description: `Use our intuitive dashboard to review the generated code and make any desired adjustments.`,
    },
    {
      heading: `Deploy and Scale`,
      description: `With one click, deploy your app to secure, scalable containers managed by AWS Fargate.`,
    },
  ]

  const painPoints = [
    {
      emoji: `💰`,
      title: `High development costs draining your budget`,
    },
    {
      emoji: `⏳`,
      title: `Months of waiting for your app to be built`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelmed by technical complexities`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Turn Your App Ideas into Reality, No Coding Required`}
        subtitle={`Harness the power of AI to build, deploy, and scale your dream applications in record time. From concept to launch, we've got you covered.`}
        buttonText={`Start Building Now`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/s8DbXV-app-S2Ip`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`innovators already building their dreams`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Trusted by Industry Leaders`} />
      <LandingPainPoints
        title={`The App Development Struggle is Real: 64% of Businesses Face a Developer Shortage`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`From Idea to App in 4 Simple Steps`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Innovation Journey`}
        subtitle={`Discover how our AI-driven platform revolutionizes app development, making it faster, easier, and more accessible than ever before.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How Our Platform is Changing the Game`}
        subtitle={`Join the ranks of innovators who've transformed their ideas into thriving applications.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Flexible Plans for Every Innovator`}
        subtitle={`Choose the perfect plan to bring your app ideas to life, whether you're a solo entrepreneur or an enterprise leader.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Learn more about how our platform can accelerate your app development journey.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Build Your Dream App?`}
        subtitle={`Join thousands of innovators who are already bringing their ideas to life. Start your journey today!`}
        buttonText={`Begin Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
