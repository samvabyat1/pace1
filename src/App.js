
import './App.css';
import Plx from "react-plx";
import a1 from './assets/a1.jpg'
import a0 from './assets/a0.jpg'
import a2 from './assets/a2.png'
import a3 from './assets/a3.png'
import a4 from './assets/a4.png'
// import { motion } from "framer-motion";
// import { fadeIn, fadeO } from "./variants";
// import { useInView } from "react-intersection-observer";

function App() {
  // const [ref, inView] = useInView({
  //   threshold: 0.5,
  // });

  return (
    <div className="App">
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 0.9,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100
        }}
      >
        <div className='bg-black h-screen w-screen'></div>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1200,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 1.5,
                property: "scale"
              }
            ]
          },
          {
            start: 1200,
            end: 1800,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 50
        }}
      >
        <img src={a0} className='h-screen w-screen object-cover'></img>
      </Plx>
      <Plx style={{  
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%"
        }}
 parallaxData={[
  {
    start: 600,
    end: 1200,
    properties: [
      {
        startValue: 1,
        endValue: 1.18,
        property: "scale",
      }
    ]
  },
        {
          start: 1200,
          end: 1800,
          properties: [
            {
              startValue: 1.18,
              endValue: 1,
              property: "scale",
            }
          ]
        }
      ]}>
        <img src={a1} className='h-screen w-screen object-cover'></img>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 1200,
            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "opacity"
              }
            ]
          },
          {
            start: 1200,
            end: 1800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "40%",
          width: "100%",
          height: "20%"
        }}
      >
        <img src={a2} className='w-full h-full object-contain'/>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 600,
            properties: [
              {
                startValue: 0,
                endValue: 0,
                property: "opacity"
              }
            ]
          },
          {
            start: 600,
            end: 900,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          },
          {
            start: 1100,
            end: 1200,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "40%",
          width: "100%",
          height: "20%",
          zIndex: "200"
        }}
      >
        <img src={a4} className='w-full h-full object-contain'/>
      </Plx>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 600,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: 0,
          top: "40%",
          width: "100%",
          height: "20%",
          zIndex: "200"
        }}
      >
        <img src={a3} className='w-full h-full object-contain'/>
      </Plx>


      {/* <div className='h-screen'>s</div> */}
      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%"
        }}
      >
        <div
          style={{
            height: "100%"
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;


















{/* <div className='h-screen relative'  ref={ref}>
        <img src={a1} className='h-full w-full object-cover' ></img>
        <motion.div
            variants={fadeO("", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-0 h-full w-full"
          >
            <div className='bg-black opacity-[50%] h-full w-full'>a</div>
          </motion.div>
        <motion.div
            variants={fadeIn("", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="absolute top-[40%] w-full h-[20%]"
          >
            <img src={a2} className='w-full h-full object-contain' ></img>
          </motion.div>
      </div>
      <div className='h-screen' ref={ref}>
        <p>screen</p>
      </div> */}