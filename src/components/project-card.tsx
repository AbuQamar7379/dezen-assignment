import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  cardData: {
    cardImage: string;
    label: string;
  };
}

export const ProjectCard = ({ cardData }: ProjectCardProps) => {
  return (
    <div className="w-[400px] h-[470px] relative">
      <img
        src={cardData.cardImage}
        alt={cardData.label}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute top-[85%] text-white text-xl font-semibold flex justify-between w-full px-10 items-center">
        <p>{cardData.label}</p>
        <div className="bg-[#DF573E] p-3 rounded-xl cursor-pointer hover:opacity-90 transition">
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
