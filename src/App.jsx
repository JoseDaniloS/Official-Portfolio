import { MotionConfig } from "framer-motion";
import ClickSpark from "./components/Global/ClickSpark";
import Home from "./pages/Home";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <Home />
      </ClickSpark>
    </MotionConfig>
  );
}
