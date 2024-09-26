import Hero from "../assets/images/Hero.png"
import Dots from "../assets/images/dots.svg"
import Curve from "../assets/images/curves.svg"
export default function HeroSection() {
  return (
    <>
      <section className="flex flex-row md:h-[650px]  flex-wrap  snap-start ">
        <div className="basis-full md:basis-2/3 bg-mainColor relative z-0">
          <div className="pl-24 pt-48 z-20">
            <h2 className="text-2xl text-white">Hi, I&lsquo;m</h2>
            <h1 className=" font-bold leading-none text-white text-[75px]">
              Arjun <br />
              Aravind
            </h1>
            <h2 className="text-2xl  text-white">a Full-Stack Developer</h2>
            <p className="w-3/4 pt-8 text-white">I specialize in developing dynamic web applications using the MERN stack, and I’m passionate about delivering seamless, efficient, and innovative digital experiences</p>
          </div>
          <div>
            <img src={Curve} alt="Dots" className="w-[650px] h-[650px] absolute bottom-0 translate-y-16 -z-10 opacity-60" />
          </div>
        </div>

        <div className="basis-full md:basis-1/3 h-[650px] bg-subColor flex flex-row justify-center items-center sm:justify-center sm:items-center md:justify-start md:items-end relative">
          <div
            className="w-[300px] h-[300px] bg-white absolute
            md:top-1/3 md:left-0 md:-translate-x-1/2 md:-translate-y-1/3 bg-cover bg-center z-10 "
            style={{ backgroundImage: `url(${Hero})` }}
          ></div>
          <div className="w-[300px] h-[300px] bg-transparent absolute border-2 border-white translate-x-12 translate-y-12  md:top-1/3 md:left-0 md:-translate-x-24 md:-translate-y-14"></div>

          <img src={Dots} alt="Dots" className="absolute top-24 -translate-x-36 md:top-16 md:-translate-x-56 w-[150px] h-[150px]" />
          <img
            src={Dots}
            alt="Dots"
            className="w-[150px] h-[150px] absolute 
          translate-y-36 translate-x-36  md:translate-x-20 md:-translate-y-36"
          />
          <img
            src={Dots}
            alt="Dots"
            className="w-[150px] h-[150px] absolute 
          translate-y-36 translate-x-36  md:right-56 md:-top-24"
          />
        </div>
      </section>
    </>
  )
}
