import Image from "next/image";

export default function Home() {
  return (
    <main className="py-4">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-6">
          <div className="flex flex-col items-center gap-4">
            <div
              className="font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl p-4
                        md:writing-vertical md:text-orientation-upright"
            >
              イルハム
            </div>
            <div
              className="font-extrabold text-base sm:text-lg md:text-xl lg:text-2xl
                        md:writing-vertical md:text-orientation-upright"
            >
              11. 12. 2001
            </div>
          </div>
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/home.jpeg"
              alt="home"
              width={600}
              height={600}
              className="rounded-xl w-full h-auto"
            />
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg mt-4">
              https://itsnotallaboutme.shuttleapp.rs/
            </h4>
            <div className="border border-dashed border-[#1f1f1f] p-2 mt-4 rounded-xl shadow-xl">
              <div className="grid grid-cols-5 rounded-xl">
                <div className="bg-[#cccccc] h-10 flex items-center justify-center text-black font-semibold text-xs">
                  #cccccc
                </div>
                <div className="bg-[#e5e7eb] h-10 flex items-center justify-center text-black font-semibold text-xs">
                  #e5e7eb
                </div>
                <div className="bg-[#eae7de] h-10 flex items-center justify-center text-black font-semibold text-xs">
                  #eae7de
                </div>
                <div className="bg-[#9ca3af] h-10 flex items-center justify-center text-black font-semibold text-xs">
                  #9ca3af
                </div>
                <div className="bg-[#1f1f1f] h-10 flex items-center justify-center text-white font-semibold text-xs">
                  #1f1f1f
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 p-4">
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="font-extrabold text-lg sm:text-xl md:text-2xl">
              INTRO
            </div>
            <div className="font-extrabold text-lg sm:text-xl md:text-2xl">
              DUCE
            </div>
          </div>
          <div className="text-left max-w-4xl">
            <strong>こんにちは</strong>, You are in a place where all this is
            not who I really am. Because people I have met say I am
            <strong> a quiet person</strong> and maybe also
            <strong> an introvert</strong>, so I created this project to convey
            my complaints about my physical and mental life in living this life.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 border-dashed border-t-2 border-[#1f1f1f] w-full">
          <div className="flex flex-col items-center md:border-r-2 md:border-dashed md:border-[#1f1f1f] p-4">
            <div className="font-extrabold text-lg sm:text-xl md:text-2xl">
              ホビー
            </div>
          </div>
          <div className="text-left max-w-4xl p-4">
            I don&apos;t know why lately my curiosity about the
            <strong> universe</strong> with everything that I never thought of
            before, attracted my interest to know it. I started reading a lot of
            books, be it
            <strong> religion, philosophy, science, history</strong>, and
            others.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 w-full">
          <div className="flex flex-col items-center mb-4 md:mb-0">
            <div className="font-extrabold text-lg sm:text-xl md:text-2xl">
              Language
            </div>
          </div>
          <div className="text-left max-w-4xl p-4">
            <div className="flex flex-wrap justify-center gap-4">
              <p className="font-extrabold">Minang</p>
              <p className="font-bold">Indonesia</p>
              <p className="font-medium">English</p>
              <p className="font-thin">日本語</p>
            </div>
          </div>
        </div>
        <div className="p-2 mt-2 text-xl flex items-start w-full">
          <p>01101001 01101100 01101000 01100001 01101101</p>
        </div>
      </div>
    </main>
  );
}
