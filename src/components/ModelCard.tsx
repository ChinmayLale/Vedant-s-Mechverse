
// import { siteConfig } from "@/config/site";
// import { Button } from "@heroui/button";
import { Card, CardBody } from '@heroui/card'
import { Image } from "@heroui/image";
// import { Icon } from "@iconify/react";

export default function Component({title="" , desc="" , img=null}) {
    return (
        <Card className="w-full max-w-[520px]">
            <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
                <Image
                    removeWrapper
                    isBlurred
                    alt="Acme Creators"
                    className="h-auto w-full flex-none object-cover object-top md:w-48"
                    src={img || "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"}
                />
                <div className="px-4 py-5">
                    <h3 className="text-large font-medium">{title}</h3>
                    <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
