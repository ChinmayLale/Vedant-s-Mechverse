import { title } from '../../components/primitives'
import ModelCard from '../../components/ModelCard'
import { Chip } from '@heroui/chip'
import { siteConfig } from '../../config/site'
import { useState } from 'react'


function Workshop() {
    const [limit, setLimit] = useState(4);

    const onMoreClick = () => {
        setLimit((prevLimit) => prevLimit + 4);
    }

    return (
        <section className="flex md:flex-col flex-col items-left md:justify-around justify-center gap-4 py-8 md:py-10 w-full">
            <div className="inline-block max-w-lg text-left justify-center mb-4">
                <span className={title()}> Workshop &nbsp;</span>
            </div>
            <section className="flex flex-row gap-x-20 gap-y-10 py-8 md:py-10 w-full flex-wrap">
                {siteConfig.ModelInfo.slice(0, limit).map((model) => (
                    <ModelCard title={model.title} desc={model.desc} img={model.img || ""} />
                ))}
            </section>
            <div className="w-full flex justify-end items-end cursor-pointer">
                <Chip color="default" variant="bordered" onClick={onMoreClick} className="text-center">
                    See More
                </Chip>
            </div>
        </section>
    )
}

export default Workshop
