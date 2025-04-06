import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import SharpCard from "../Components/BodyCard";

export default function BlankPage2() {
  useEffect(() => {
    initFlowbite();
  }, []);



  return (
    <SharpCard title="Test" Icon={""}>
      {/* Clerk state loading indicator */}
     

    </SharpCard>
  );
}
