import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { About, Hero, Navbar } from "./components";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </main>
  );
};

export default App;
