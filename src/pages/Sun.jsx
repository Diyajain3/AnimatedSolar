import React, { useEffect,useRef } from 'react'
import gsap from 'gsap'
const Sun = () => {
      const sunRef=useRef(null);

      useEffect(()=>  
      {
          const tl=gsap.timeline()

          tl.fromTo(
            sunRef.current,
            {
              y:-300,
              opacity:0,
              scale:0.2
            },
            {
              y:0,//center
              scale:2,
              opacity:1,
              duration:2,
              ease:"power2.out"
            }
          )
          .to(sunRef.current,{
            scale:1.5,
            duration:0.2,
            ease:"bounce.out"
          })
          .to(sunRef.current,{
            boxShadow:"0 0 20px #fde047, 0 0 60px #f59e0b, 0 0 120px #f97316",
            duration:0.2
          })

      },[])
  return (
 <div className="h-screen w-full flex items-center justify-center bg-black overflow-hidden">

  {/* 🌞 SUN */}
  <div
    ref={sunRef}
    className="w-32 h-32 rounded-full relative"
    style={{
      background:
        "radial-gradient(circle at 30% 30%, #fff7b2, #fde047 40%, #f59e0b 70%, #b45309)",
      boxShadow:
        "0 0 20px #fde047, 0 0 60px #f59e0b, 0 0 120px #f97316",
    }}
  >
    {/* ✨ inner shine */}
    <div className="absolute inset-0 rounded-full bg-white/10 blur-sm" />
  </div>

</div>
  )
}

export default Sun
