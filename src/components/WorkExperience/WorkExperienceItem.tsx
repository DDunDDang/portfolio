import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { WorkExperienceProps } from "@/types";

const WorkExperienceItem = ({ name, markdown, imgSrc }: WorkExperienceProps) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      <div className="flex items-center gap-6 mr-4 md:flex-col md:items-start">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="200"
            height="200"
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-24 h-24 bg-white"
          />
        )}
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
          </div>
        </div>
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown ?? ""}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WorkExperienceItem;