import { FaTools, FaBriefcaseMedical, FaCogs } from "react-icons/fa";
import Cards from './Cards';

export default function Section3() {
  return (
    <div className="bg-[#050522] px-6 py-20 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards
          icon={<FaTools />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
        <Cards
          icon={<FaBriefcaseMedical />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
        <Cards
          icon={<FaCogs />}
          heading="Dummy Text"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem."
          subHeading="Dummy Text"
        />
      </div>
    </div>
  )
}