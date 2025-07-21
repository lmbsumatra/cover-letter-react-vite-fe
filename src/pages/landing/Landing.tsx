import EditorSection from "../../features/EditorSection";
import HeroSection from "../../features/HeroSection";
import NavBarSection from "../../features/NavBarSection";

export default function Landing() {
  return (
    <div className="bg-radial flex flex-col items-center justify-center overflow-hidden relative">
      <NavBarSection />

      <HeroSection />

      <EditorSection />
    </div>
  );
}
