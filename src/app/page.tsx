import { weddingData } from "@/data/weddingData";
import IntroSection from "@/components/IntroSection";
import TimerSection from "@/components/TimerSection";
import DetailsSection from "@/components/DetailsSection";
import GallerySection from "@/components/GallerySection";
import InfoSection from "@/components/InfoSection";
import GiftsSection from "@/components/GiftsSection";
import HashtagSection from "@/components/HashtagSection";
import FooterSection from "@/components/FooterSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <IntroSection data={weddingData} />
      <TimerSection data={weddingData} />
      <DetailsSection data={weddingData} />
      <GallerySection data={weddingData} />
      <InfoSection data={weddingData} />
      <GiftsSection data={weddingData} />
      <HashtagSection data={weddingData} />
      <FooterSection data={weddingData} />
    </main>
  );
}
