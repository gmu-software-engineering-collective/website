import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import animationUrl from "../assets/hero-animation.json?url";

// Decorative only: visitors who turn off motion in their OS settings get a still frame
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function HeroAnimation() {
  return (
    <div className="hero-animation" aria-hidden="true">
      <DotLottieReact src={animationUrl} loop autoplay={!prefersReducedMotion} />
    </div>
  );
}

export default HeroAnimation;
