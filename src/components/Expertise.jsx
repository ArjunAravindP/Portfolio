export default function Expertise() {
  return (
    <>
      <section className="h-screen max-h-[900px] bg-slate-50 snap-start grid md:grid-cols-2 grid-cols-1">
        <div>
          <div className="md:pl-28 pr-10 pl-10 pt-5 md:pt-36 max-w-[650px] h-[250px]">
            <h1 className="text-mainColor text-[50px] font-bold leading-none ">Full Stack Developer</h1>
            <p className="mt-8 text-tadBlue">With expertise across the entire development lifecycle, I build full-stack applications that provide seamless user experiences from frontend to backend. My proficiency in the MERN stack allows me to create performant and scalable web applications.</p>
            <button className="border-[1px] font-bold text-sm border-mainColor w-[300px] py-4 mt-10 text-mainColor">
              SEE MY WORK <span>&#8594;</span>
            </button>
          </div>
        </div>
        <div className="hidden md:block">The</div>
        <div className="hidden md:block">The</div>
        <div>
          <div className="pl-10 md:pl-24 pr-10 pt-4 max-w-[650px] h-[250px]">
            <h1 className="text-mainColor text-[50px] font-bold leading-none">Technical Content Writer</h1>
            <p className="mt-8 text-tadBlue">With expertise across the entire development lifecycle, I build full-stack applications that provide seamless user experiences from frontend to backend. My proficiency in the MERN stack allows me to create performant and scalable web applications.</p>
            <button className="border-[1px] font-bold text-sm border-mainColor w-[300px] py-4 mt-10 text-mainColor">
              READ MY ARTICLES <span>&#8594;</span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
