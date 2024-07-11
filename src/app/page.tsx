import Image from "next/image";
import Example from "./component/example";
import Header from "./component/header";

export default function Home() {
  return (
    <>
      <Header />
      <Example />
    </>
  );
}