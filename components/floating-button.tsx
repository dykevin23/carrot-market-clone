import Link from "next/link";

interface FloatingButton {
  href: string;
  children: React.ReactNode;
}
export default function FloatingButton({ href, children }: FloatingButton) {
  return (
    <Link
      href={href}
      className="fixed hover:bg-orange-500 transition-colors cursor-pointer bottom-24 right-5 shadow-xl bg-orange-400 rounded-full text-white border-0 aspect-square border-transparent w-14 flex items-center justify-center"
    >
      {children}
    </Link>
  );
}
