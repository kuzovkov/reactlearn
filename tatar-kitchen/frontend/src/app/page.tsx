import Image from "next/image";

export default function Home() {
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Image
          src="/tatar-kitchen.png"
          alt="Tatar Kitchen"
          width={100}
          height={100}
          className="animate-pulse"
        />
      </main>
   
  );
}
