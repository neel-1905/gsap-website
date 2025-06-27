import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { About, Art, Hero, Navbar } from "./components";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </main>
  );
};

export default App;
