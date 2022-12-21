import "./index.css";
import React, { useState, useEffect } from "react";

import Projects from "./pages/projects";
function App() {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((opacity) => {
        if (opacity > 0) {
          return opacity - 0.01;
        } else {
          setVisible(false);
          return 1;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="">
        <div className="">
          {visible == true && (
            <div style={{ opacity }}>
              VLADIMIR NABOKOV, “THE GIFT.” 96 WORDS. “As he crossed toward the
              pharmacy at the corner he involuntarily turned his head because of
              a burst of light that had ricocheted from his temple, and saw,
              with that quick smile with which we greet a rainbow or a rose, a
              blindingly white parallelogram of sky being unloaded from the
              van—a dresser with mirrors across which, as across a cinema
              screen, passed a flawlessly clear reflection of boughs sliding and
              swaying not arboreally, but with a human vacillation, produced by
              the nature of those who were carrying this sky, these boughs, this
              gliding façade.” JOSE SARAMAGO, “BLINDNESS.” 97 WORDS. “On
              offering to help the blind man, the man who then stole his car,
              had not, at that precise moment, had any evil intention, quite the
              contrary, what he did was nothing more than obey those feelings of
              generosity and altruism which, as everyone knows, are the two best
              traits of human nature and to be found in much more hardened
              criminals than this one, a simple car-thief without any hope of
              advancing in his profession, exploited by the real owners of this
              enterprise, for it is they who take advantage of the needs of the
              poor.”{" "}
            </div>
          )}
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
