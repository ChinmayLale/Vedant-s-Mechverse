import { title } from "../../components/primitives";
import SkillsCard from '../../components/SkillsCard';
import { siteConfig } from '../../config/site'

function SkillSection() {
    return (
        <section className="flex md:flex-col flex-col items-left md:justify-around justify-center gap-4 py-8 md:py-10 w-full">
            <div className="inline-block max-w-lg text-left justify-center mb-4">
                <span className={title()}> Skills &nbsp;</span>
            </div>
            <div className="w-ful flex flex-col md:flex-row gap-4 md:gap-8 md:gap-x-4 md:flex-wrap items-start justify-start py-8 md:py-4 ">
                {
                    siteConfig.skillCategories.slice(1,2).map((section) => (
                        <SkillsCard key={section.title} title={section.title} skills={section.skills} />
                    ))
                }

            </div>

        </section>
    )
}

export default SkillSection
