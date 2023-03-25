var $gXNCa$studiofreightlenis = require("@studio-freight/lenis");
var $gXNCa$gsap = require("gsap");
var $gXNCa$gsapScrollTrigger = require("gsap/ScrollTrigger");
require("splitting/dist/splitting.css");
require("splitting/dist/splitting-cells.css");
var $gXNCa$splitting = require("splitting");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}






(0, $gXNCa$gsap.gsap).registerPlugin((0, $gXNCa$gsapScrollTrigger.ScrollTrigger));
(0, ($parcel$interopDefault($gXNCa$splitting)))();
// Lenis smooth scrolling
let $4fa36e821943b400$var$lenis;
// Initialize Lenis smooth scrolling
const $4fa36e821943b400$var$initSmoothScrolling = ()=>{
    $4fa36e821943b400$var$lenis = new (0, ($parcel$interopDefault($gXNCa$studiofreightlenis)))({
        lerp: 0.2,
        smooth: true
    });
    $4fa36e821943b400$var$lenis.on("scroll", ()=>(0, $gXNCa$gsapScrollTrigger.ScrollTrigger).update());
    const scrollFn = (time)=>{
        $4fa36e821943b400$var$lenis.raf(time);
        requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
};
// Lenis (smooth scrolling)
$4fa36e821943b400$var$initSmoothScrolling();


//# sourceMappingURL=index.js.map
