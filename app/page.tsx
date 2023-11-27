import Image from "next/image";
import SimpleForm from "./components/SimpleForm";
import ReactHookForm from "./ReachHookForm";

export default function Home() {
  return (
    <section className="py-24">
      <div className="flex flex-col">
        <h1>React Hooks Forms</h1>
        {/* <SimpleForm /> */}
        <ReactHookForm />
      </div>
    </section>
  );
}
