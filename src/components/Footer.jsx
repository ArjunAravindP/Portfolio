import Profile from "../assets/images/Hero.png"
import SocialMedia from "./SocialMedai"
export default function Footer() {
  return (
    <section className="h-[400px] bg-mainColor snap-start flex flex-row justify-center pt-20 ">
      <div className="flex flex-col gap-5 align-middle items-center text-center">
        <img src={Profile} alt="Profile" className="w-16 rounded-xl" />
        <p className="text-xl text-slate-200 opacity-85">
          Living, learning, & leveling up <br /> one day at a time.
        </p>
        <SocialMedia />
      </div>
    </section>
  )
}
