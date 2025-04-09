import AnimeJS1 from "@Components/Animation/AnimeJS1";
import SharpCard from "@Components/BodyCard";
import { MdAnimation } from "react-icons/md";

export default function AnimationPage() {
  return (
    <>
      <SharpCard
        title="AnimeJS 1"
        Icon={MdAnimation}
        actionButton={
          <a
            className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            href="https://animejs.com/"
          >
            AnimeJs
          </a>
        }
      >
        <AnimeJS1 />
      </SharpCard>
    </>
  );
}
