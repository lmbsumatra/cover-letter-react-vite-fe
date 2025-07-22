import EditorSection from "../../features/EditorSection";
import FooterSection from "../../features/FooterSection";
import HeroSection from "../../features/HeroSection";
import NavBarSection from "../../features/NavBarSection";

export default function Landing() {
  return (
    <div className="bg-radial flex flex-col items-center justify-center overflow-hidden relative gap-4">
      <NavBarSection />

      <HeroSection />

      <EditorSection />

      <FooterSection />
    </div>
  );
}
