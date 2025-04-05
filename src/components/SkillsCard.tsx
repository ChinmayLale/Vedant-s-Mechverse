import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import CodeBlock from "./CodeBlock";
import { Chip } from "@heroui/chip";

// Define TypeScript interface for skill objects
interface Skill {
  name: string;
  proficiency: string | number;
  image?: string;
}

interface SkillsCardProps {
  title?: string;
  skills: Skill[];
}

const SkillsCard: React.FC<SkillsCardProps> = ({ title = "Skills", skills  }) => {
  return (
      <>
        {skills.slice(0, 4).map((skill, index) => (
            <Card key={index} className="py-4 w-fit">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <CodeBlock text={title}/>
                <h4 className="font-bold text-large">{skill.name}</h4>
                <p className="text-sm text-gray-500">Proficiency: {skill.proficiency}</p>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                    alt="Skill background"
                    className="object-cover rounded-xl cursor-pointer"
                    src={skill.image || 'https://img.icons8.com/bubbles/200/services.png'}
                    width={270}
                    isBlurred
                    isZoomed
                />
              </CardBody>
            </Card>
        ))}
        <div className="w-full flex justify-end items-end cursor-pointer">
          <Chip color="default" variant="bordered">
            more here
          </Chip>
        </div>
      </>
  );
};

export default SkillsCard;
