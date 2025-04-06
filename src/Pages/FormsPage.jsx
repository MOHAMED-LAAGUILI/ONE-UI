import RegistrationForm from "@Components/FormSection/Form2";
import Form3 from "@Components/FormSection/Form3";
import MultiTabForm from "@Components/FormSection/MultiTabForm";
import { FormInput } from "lucide-react";
import SharpCard from "@Components/BodyCard";

export default function FormsPage() {
  return (
    <div className=" mx-auto  mt-10 ">
      <SharpCard title={"MultiTabForm"} Icon={FormInput} classes={""}>
        <MultiTabForm />
      </SharpCard>

      <SharpCard title={"MultiTabForm"} Icon={FormInput} classes={""}>
        <RegistrationForm />
      </SharpCard>

      <SharpCard title={"MultiTabForm"} Icon={FormInput} classes={""}>
        <Form3 />
      </SharpCard>
    </div>
  );
}
