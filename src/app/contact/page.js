import Container from '@/components/layout/container'

export default function ContactPage() {
  return (
     <Container className="py-20 min-h-screen flex flex-col justify-center text-center">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 text-lg text-muted-gray">
        Get in touch with us — contact details and a form will appear here.
      </p>
    </Container>
  )
}
