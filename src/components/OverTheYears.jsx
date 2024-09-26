import Experinace from "../assets/images/experiance.svg"
export default function OverTheYears() {
  return (
    <>
      <section className="h-screen max-h-[900px] bg-mainColor md:pt-0 snap-start flex flex-row items-center ">
        <div className="grid md:grid-cols-2 grid-cols-1 w-full">
          <div className="md:pl-36 pl-10 pr-10 pt-24 md:pt-0 flex flex-col gap-5 max-w-full items-center">
            <h1 className="text-[50px] text-slate-300 leading-none font-bold self-start">
              Over the <br /> Years,
            </h1>
            <p className="text-slate-200 ">Following my graduation, I transitioned into technical content writing, taking on a role at Mozilor Technologies in early 2023. As a technical writer, I worked closely with developers to create user guides, how-to articles, and detailed API documentation. This experience not only taught me the value of clear communication but also exposed me to the inner workings of web applications.</p>
            <p className="text-slate-200">Now, I’m focused on creating fast, accessible, and user-friendly web experiences using React, Node.js, and MongoDB. I’m actively looking for opportunities to further develop my skills and contribute to impactful projects.</p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <img className="w-2/3 md:w-5/6 opacity-85 " src={Experinace} alt="Experinace" />
          </div>
        </div>
      </section>
    </>
  )
}
