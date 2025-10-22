import Section from "../layout/Section";
import Badge from "../ui/Badge";

export default function Hero() {
  return (
    <Section className="min-h-screen flex items-center justify-between">
      <div className="max-w-[532px] gap-[46px] flex flex-col">
        <div className="flex flex-col gap-26px">
          <Badge>Available For Project</Badge>
        </div>
        <div></div>
      </div>

      <div className="max-w-[616px]"></div>
    </Section>
  );
}
