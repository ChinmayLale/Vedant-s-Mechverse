import React from "react";
import {Card, CardBody} from "@heroui/card";
import { Chip } from "@heroui/chip";
import {Icon} from "@iconify/react";

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
  status?: string;
  user?: {
    name: string;
    avatar: string;
  };
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({items}) => {
  const getStatusColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "success";
      case "in-progress":
        return "primary";
      case "pending":
        return "warning";
      default:
        return "default";
    }
  };

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-default-100">
      {items.map((item) => (
        <div key={item.id} className="relative flex gap-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-default-100">
            {item.icon ? (
              <Icon icon={item.icon} className="h-5 w-5" />
            ) : (
              <Icon icon="lucide:circle" className="h-5 w-5" />
            )}
          </div>
          <Card className="w-full">
            <CardBody className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-medium font-medium">{item.title}</h3>
                  {item.status && (
                    <Chip
                      size="sm"
                      variant="flat"
                      color={getStatusColor(item.status)}
                    >
                      {item.status}
                    </Chip>
                  )}
                </div>
                <span className="text-small text-default-400">{item.date}</span>
              </div>
              <p className="text-small text-default-500">{item.description}</p>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
};
