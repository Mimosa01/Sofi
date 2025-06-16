import Ticker from "../../ticker/Ticker";
import FooterBottomSection from "../organisms/FooterBottomSection";
import FooterTopSection from "../organisms/FooterTopSection";

export default function Footer () {
  return (
    <footer>
      <Ticker 
        leftText="Этим сайтом пользуется больше 30.000 человек каждый месяц"
        rightText="Сайт был сделан джунами с нашего карьерного трека"
      />

      <div className="px-4 py-5 md:px-27.5 md:py-15 bg-radial-gradient">
        <FooterTopSection />
        <FooterBottomSection />
      </div>
    </footer>
  )
}