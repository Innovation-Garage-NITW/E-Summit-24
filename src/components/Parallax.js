import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Parallax() {

    const [background, setBackground] = useState(20)

    const parallaxRef = useRef(null);
    const mountain3 = useRef(null);
    const mountain2 = useRef(null);
    const mountain1 = useRef(null);
    const cloudsBottom = useRef(null);
    const cloudsLeft = useRef(null);
    const cloudsRight = useRef(null);
    const stars = useRef(null);
    const sun = useRef(null);
    const logo = useRef(null);
    const centerLogo = useRef(null);
    const copy = useRef(null);
    const btn = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            var tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: parallaxRef.current,
                    start: "top top",
                    end: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100 + 20))
                    },
                },
            });
            tl.to(
                mountain3.current,
                {
                    y: "-=80",
                },
                0
            );
            tl.to(
                mountain2.current,
                {
                    y: "-=30",
                },
                0
            );
            tl.to(
                mountain1.current,
                {
                    y: "+=50",
                },
                0
            );
            tl.to(
                centerLogo.current,
                {
                    y: "-=50",
                    scrollTrigger: {
                        trigger: ".parallax", // Adjust this to match your scroll trigger element
                        start: "top top", // Start the animation when the top of the trigger element hits the top of the viewport
                        end: "bottom bottom", // End the animation when the bottom of the trigger element hits the bottom of the viewport
                        scrub: true, // Smoothly adjust the position during scroll
                      },
                },
                
            );
            tl.to(
                sun.current,
                {
                    y: "+=210",
                },
                0
            );
            tl.to(
                stars.current,
                {
                    top: 0,
                },
                0.5
            );
            tl.to(
                cloudsBottom.current,
                {
                    opacity: 0,
                    duration: 0.5
                },
                0
            );
            tl.to(
                cloudsLeft.current,
                {
                    x: "-20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                cloudsRight.current,
                {
                    x: "20%",
                    opacity: 0,
                },
                0
            );
            tl.to(
                copy.current,
                {
                    y: "-250%",
                    opacity: 1
                },
                0
            );
            tl.to(
                btn.current,
                {
                    opacity: 1,
                },
                1.5
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
        
        <div className="parallax-outer">
            <div ref={parallaxRef} style={{ background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )` }} className='parallax'>
                <img ref={logo} className="logo" src="/parallax/logo.svg" />
                <img ref={centerLogo}
                    className='center-logo'
                    src="/parallax/center-logo.svg"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 4, 
                    }} 
                />
                <img ref={mountain3} className='mountain-3' src="/parallax/mountain-3.svg" />
                <img ref={mountain2} className='mountain-2' src="/parallax/mountain-2.svg" />
                <img ref={mountain1} className='mountain-1' src="/parallax/mountain-1.svg" />
                <img ref={cloudsBottom} className='clouds-bottom' src="/parallax/cloud-bottom.svg" />
                <img ref={cloudsLeft} className='clouds-left' src="/parallax/clouds-left.svg" />
                <img ref={sun} className='sun' src="/parallax/sun.svg" />
                <img ref={cloudsRight} className='clouds-right' src="/parallax/clouds-right.svg" />
                <img ref={stars} className='stars' src="/parallax/stars.svg" />
                <div ref={copy} className="copy">
                    <h5></h5>
                    <h1></h1>
                    <p></p>
                    <span ref={btn}>Enroll Now</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Parallax