import Image from "next/image";
import HeaderComponent from "@/layout/header/header.component";
import FooterComponent from "@/layout/footer/footer.component";
export default function Home() {
  return (
    <main className="">
      <HeaderComponent />
      <FooterComponent/>
    </main>
  );
}
