import Navbar from "@/app/components/navbar";

export default function Header() {
    return (
      <header className="sticky inset-2 z-50 flex flex-col justify-between gap-2 items-center p-4">
        <Navbar />
      </header>
    );
}