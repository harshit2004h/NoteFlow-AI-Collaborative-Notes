import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-4 bg-gray-100 overflow-y-auto scrollbar-hide">
          {" "}
          {children}
        </div>
      </div>
    </>
  );
}
