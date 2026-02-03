import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'public/images/ag1.jpg',
    'public/images/ag2.jpg',
    'public/images/ag3.jpg',
    'public/images/ag4.jpg',
    'public/images/ag5.jpg',
    'public/images/ag6.jpg',
    'public/images/ag7.jpg',
    'public/images/ag8.jpg',
    'public/images/ag9.jpg',
    'public/images/ag10.jpg'
  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -125%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem)=>{
          const imageIndex = Math.floor(elem.progress * (imageArray.length - 1))
          console.log(imageIndex)
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div>
      <div className="section1 py-1">
        <div ref={imageDivRef} className=" absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-50 left-[30vw]">
          <img ref={imageRef}
            src="public/images/ag1.jpg"    alt=""
            className="rounded-4xl object-cover h-full w-full"
          />
        </div>
        <div className="font-[font2] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              SEVEN7Y
              <br />
              TWO
            </h1>
            <div className="pl-[40%] mt-10">
              <p className="text-6xl">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                We’re inquisitive and open-minded, and we make sure creativity
                crowds out ego from every corner. A brand is a living thing,
                with values, a personality and a story. If we ignore that, we
                can achieve short-term success, but not influence that goes the
                distance. We bring that perspective to every brand story we help
                tell.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Agence;
