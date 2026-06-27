import React, { useMemo } from "react";
import { Home, UserRound, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";

const FindPerfectSection = () => {
  const highlights = useMemo(
    () => [
      {
        id: 1,
        title: "2M Properties",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: Home,
      },
      {
        id: 2,
        title: "Top Rated Agents",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: UserRound,
        active: false,
      },
      {
        id: 3,
        title: "Legit Properties",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.",
        icon: ShieldCheck,
        active: false,
      },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { id: 1, value: 3298, label: "# of Buy Properties" },
      { id: 2, value: 2181, label: "# of Sell Properties" },
      { id: 3, value: 9316, label: "# of All Properties" },
      { id: 4, value: 7191, label: "# of Agents" },
    ],
    [],
  );

  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-[#F8F9FA]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section - Responsive text and spacing */}
        <div className="mx-auto mb-10 sm:mb-12 md:mb-14 text-center space-y-3 sm:space-y-4 max-w-full sm:max-w-[500px] md:max-w-[600px] px-4">
          <h1 className="text-secondary text-2xl sm:text-3xl md:text-[36px] font-medium leading-tight">
            Let's find home that's perfect for you
          </h1>
          <p className="text-sm sm:text-base text-[#787777]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            enim pariatur similique debitis vel nisi qui reprehenderit.
          </p>
        </div>

        {/* Main Content - Highlights and Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Highlights List */}
          <ul className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16">
            {highlights.map((el) => {
              const Icon = el.icon;
              return (
                <li
                  key={el.id}
                  className="flex items-start sm:items-center gap-3 sm:gap-4"
                >
                  <div className="bg-[#bababa] h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 flex items-center justify-center rounded-full flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-secondary text-base sm:text-lg font-medium mb-1">
                      {el.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#787777]">
                      {el.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Image - Responsive aspect ratio */}
          <div className="w-full h-64 sm:h-80 md:h-96 lg:h-auto">
            <img
              src="https://themewagon.github.io/property/images/hero_bg_3.jpg"
              alt="property"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Stats Section - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {stats.map((el) => (
            <div key={el.id} className="text-center sm:text-left">
              <h3 className="text-3xl sm:text-4xl md:text-[40px] text-secondary font-bold mb-1 sm:mb-2">
                <CountUp
                  end={el.value}
                  duration={2.5}
                  // separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
              </h3>
              <p className="text-xs sm:text-sm text-[#787777]">{el.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FindPerfectSection;
