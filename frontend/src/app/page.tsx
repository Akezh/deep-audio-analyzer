
// import Image from "next/image";
// import ChatModel from "./components/ChatModel";
import TranscriptionForm from "./components/AssemblyAI";
// import TestText from "./components/TestText";

export default function Home() {
  return (
    <div className="flex flex-col px-16">
      <TranscriptionForm />
      {/* <TestText /> */}
      {/* <ChatModel /> */}
    </div>
  );
}
