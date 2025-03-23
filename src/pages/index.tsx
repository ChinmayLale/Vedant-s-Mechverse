import { title, subtitle, } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/image";
// import p1 from '../assets/images/p5.jpg';
import p2 from '../assets/images/p2.jpg';
import ModelCard from '../components/ModelCard';
import { siteConfig } from "@/config/site";
import { Chip } from '@heroui/chip';
import Table from '../components/Table';
import { Timeline } from "@/components/TimeLine";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex md:flex-row flex-col items-center md:justify-around justify-center gap-4 py-8 md:py-6 w-full">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Hi There 👋&nbsp;</span>
          <span className={title({ color: "violet" })}>I'm Vedant &nbsp;</span>
          <br />
          <span className={title()}>
            Optimizing Motion, Engineering the Future.
          </span>
        </div>
        <section className="flex flex-row items-center justify-center gap-4 py-8 md:py-10 w-full">
          <Image
            isZoomed
            isBlurred
            alt="HeroUI Album Cover"
            className="m-5"
            src={p2}
            width={300}
          />
        </section>
      </section>
      <Divider className="my-4" />
      <section className="flex md:flex-col flex-col items-left md:justify-around justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-lg text-left justify-center mb-4">
          <span className={title()}> my workshop &nbsp;</span>
        </div>
        <section className="flex flex-row gap-x-20 gap-y-10 py-8 md:py-10 w-full flex-wrap">
          {siteConfig.ModelInfo.slice(0, 4).map((model) => (
            <ModelCard title={model.title} desc={model.desc} />
          ))}
        </section>
        <div className="w-full flex justify-end items-end cursor-pointer">
          <Chip color="default" variant="bordered">
            explore
          </Chip>
        </div>
      </section>
      <Divider className="my-4" />
      <section className="flex md:flex-col flex-col items-left md:justify-around justify-center gap-4 py-8 md:py-10 w-full">
        <div className="inline-block max-w-lg text-left justify-center mb-4">
          <span className={title()}> My Education &nbsp;</span>
        </div>
       <Timeline items={siteConfig.eduInfo} />
      </section>
    </DefaultLayout>
  );
}
