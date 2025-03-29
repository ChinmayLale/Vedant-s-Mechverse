import { Code } from "@heroui/code";

interface CodeBlockProps {
  text?: string;
}

export default function CodeBlock({ text = "Engineering" }: CodeBlockProps) {
  let color: "default" | "primary" | "secondary" | "success" | "warning" | "danger";

  if (text === "Engineering") {
    color = "warning";
  } else if (text === "Software") {
    color = "primary";
  } else if (text === "Coding") {
    color = "success";
  } else {
    color = "default"; // Fallback color
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Code color={color}>{text}</Code>
    </div>
  );
}
