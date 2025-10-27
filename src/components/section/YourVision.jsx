import Container from "../layout/container"
import Badge from "../ui/Badge"
import PrimaryButton from "../ui/PrimaryButton"

export default function YourVision() {
  return (
    <section
      className="relative py-[120px]"
      style={{
        backgroundColor: '#F0F6FB',
        backgroundImage: "url('/home/your-vision/bg-lines.png'), url('/home/your-vision/bg.png')",
        backgroundRepeat: 'repeat-y, no-repeat',
        backgroundPosition: 'center top, center center',
        backgroundSize: '100% auto, cover',
        backgroundBlendMode: 'normal',
      }}
    >
        <Container className="flex flex-col items-center gap-[26px] text-white !max-w-[966px]">
            <Badge fire={true}>Your Vision, Our Code</Badge>
          <h2 className="font-semibold text-[64px] leading-[110%] tracking-[0] text-center">Let’s Create a High-Performance Website Together</h2>
          <p className=" text-base leading-[140%] tracking-[0] text-center">Whether you’re launching a new business or upgrading an existing brand, we design and develop websites that perform beautifully and deliver real results. Let’s turn your idea into a digital experience that stands out.</p>
          <div className="flex gap-4">
            <PrimaryButton text="Get Started" href="/contact" />
          </div>
        </Container>
    </section>
  )
}
