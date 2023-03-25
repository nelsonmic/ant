import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

Splitting();
// Lenis smooth scrolling
let lenis;

// Initialize Lenis smooth scrolling
const initSmoothScrolling = () => {

      lenis = new Lenis({
            lerp: 0.2,
            smooth: true
      });

      lenis.on('scroll', () => ScrollTrigger.update());

      const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
      };

      requestAnimationFrame(scrollFn);

};

// Lenis (smooth scrolling)
initSmoothScrolling();