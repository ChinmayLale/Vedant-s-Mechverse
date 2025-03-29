import { title } from '../../components/primitives'
import { Timeline } from '../../components/TimeLine'
import { siteConfig } from '../../config/site'

function Education() {
    return (
        <section className="flex md:flex-col flex-col items-left md:justify-around justify-center gap-4 py-8 md:py-10 w-full">
            <div className="inline-block max-w-lg text-left justify-center mb-4">
                <span className={title()}> Education &nbsp;</span>
            </div>
            <Timeline items={siteConfig.eduInfo} />
        </section>
    )
}

export default Education
