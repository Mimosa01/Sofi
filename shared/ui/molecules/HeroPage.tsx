import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

type Props = {
  header: string;
  text: string;
}

export default function HeroPage ({ header, text }: Props) {
  return (
    <div className="mb-12.5 pt-44">
      <Heading 
        level={2}
        className="mb-5 text-neutral-800 text-[26px] md:text-[50px] font-wix-display font-bold -tracking-[1px] leading-7.5 md:leading-13"
      >
        { header }
      </Heading>
      <Text
        className="text-neutral-700 font-normal font-wix-display text-lg leading-5.5"
      >
        { text }
      </Text>
    </div>
  )
}