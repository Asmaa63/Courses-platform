import Footer from "../../../components/common/Footer";
import Navbar from "../../../components/common/Navbar";

// app/[locale]/user/layout.tsx
export default function UserLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">{children}</main>
      <Footer/>
    </div>
  );
}