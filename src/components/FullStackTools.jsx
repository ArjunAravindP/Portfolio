import KnowledgeBlock from "./KnowledgeBlock"
import frontEndIcon from "../assets/images/Frontend.svg"
import backendIcon from "../assets/images/Backend.svg"
import techWriteIcon from "../assets/images/Writing.svg"

export default function FullStackTools() {
  return (
    <>
      <section className="min-h-screen bg-mainColor md:pt-0 snap-start flex flex-row items-center">
        <div className="w-full mx-10 text-center rounded-xl bg-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          <KnowledgeBlock icon={frontEndIcon} title="Front End Development" description="I like to code things from scratch, and enjoy bringing ideas to life in the browser." base="Languages I speak:" baseContent="HTML, JavaScript, TypeScript CSS, Sass, Git" tech="Tools & Frame Works" techContent={["React JS", "Tailwind CSS", "Bootstrap", "Framer", "Github"]} className="border-b md:border-b-0 md:border-r border-gray-300" />
          <KnowledgeBlock icon={backendIcon} title="Back End Development" description="I enjoy building applications turning ideas into functional and efficient backend systems." base="Languages I speak:" baseContent="JavaScript, Python, Git" tech="Tools & Frame Works" techContent={["Node.js", "Express.js", "MongoDB", "PostgreSQL"]} className="border-b md:border-b-0 md:border-r border-gray-300" />
          <KnowledgeBlock icon={techWriteIcon} title="Technical Writing" description="I enjoy creating clear, concise documentation and simplifying complex ideas." base="Writing Styles:" baseContent="Concise, Instructional, Persuasive" tech="Tools & Technologies" techContent={["Snagit", "Davinci Resolve", "ScreenFlow", "XML", "Markdown", "WordPress"]} className="border-gray-300" />
        </div>
      </section>
    </>
  )
}
