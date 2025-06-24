import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { Hero, Navbar } from "./components";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <div className="h-dvh bg-black"></div>
    </main>
  );
};

export default App;
