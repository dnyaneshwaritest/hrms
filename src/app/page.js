import Image from "next/image";
import Sidebar from "@/components/dashboard/sidebar";
import NewEmployee from "@/components/employees/addemp/addnewemployee";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Sidebar/> 
      {/* <NewEmployee/>   */}
       </main>
  );
}
