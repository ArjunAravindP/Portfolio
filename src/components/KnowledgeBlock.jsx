// eslint-disable-next-line react/prop-types
export default function KnowledgeBlock({ title, description, base, baseContent, icon, tech, techContent = [], className }) {
  return (
    <div className={`text-center flex flex-col items-center p-6 ${className}`}>
      {icon && <img className="w-16 h-16 mb-3" src={icon} alt={`${title} icon`} />}
      <h2 className="font-bold text-2xl">{title}</h2>
      <p className="px-12 my-6 font-light">{description}</p>
      <h3 className="font-semibold text-mainColor text-l my-3">{base}</h3>
      <p className="mb-6 font-light">{baseContent}</p>
      <h3 className="font-semibold text-mainColor text-l my-3">{tech}</h3>
      <ul>
        {techContent.map((element, index) => (
          <li className="my-3 font-light" key={index}>
            {element}
          </li>
        ))}
      </ul>
    </div>
  )
}
