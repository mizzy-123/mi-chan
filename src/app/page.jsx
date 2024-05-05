import Content from "@/components/content";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="box-border min-h-screen p-0 m-0 no-underline border-none outline-none bg-background">
      <Header />
      <Content />
    </main>
  );
}
