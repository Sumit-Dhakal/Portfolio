import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout className={" col-span-full lg:col-span-8 row-span-2 flex-col items-start"}>
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Game Developer in the Making
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            I am Sumit Kumar Dhakal, an aspiring game developer passionate about creating immersive experiences using Unreal Engine. 
            My expertise includes C++ and Blueprints, with a strong focus on game mechanics, AI, and optimization. 
            My journey so far has been filled with exciting projects where I explore new technologies and push the limits of game design. 
            Join me as I continue to build engaging and dynamic games for players worldwide!
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+ <sub className="font-semibold text-base">projects completed</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}>
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Learning <sub className="font-semibold text-base">Unreal Engine & C++</sub>
          </p>
        </ItemLayout>

        {/* GitHub Stats */}
        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Sumit-Dhakal&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>


        {/* Tech Stack Icons */}
        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=unreal,cpp,cs,blender,github"
            alt="Tech Stack"
            loading="lazy"
          />
        </ItemLayout>
  {/* GitHub Streak and Monster Shooter Repo with Video */}
    <ItemLayout className={"col-span-full md:col-span-8 flex flex-col md:flex-row gap-4"}>
      {/* Left Side: GitHub Streak */}
      <div className="flex-1">
        <img
          className="w-full h-auto"
          src="https://github-readme-streak-stats.herokuapp.com?user=Sumit-Dhakal&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B"
          alt="GitHub Streak"
          loading="lazy"
        />
      </div>

      {/* Right Side: Monster Shooter Repo with Video */}
      <div className="flex-1">
        <Link
          href="https://github.com/Sumit-Dhakal/Monster_Shooter"
          target="_blank"
          className="w-full"
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/pin/?username=Sumit-Dhakal&repo=Monster_Shooter&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
            alt="Monster Shooter Game"
            loading="lazy"
          />
        </Link>

        {/* Video inside Monster Shooter Repo */}
        <div className="mt-4">
          <video controls width="100%" height="315">
            <source
              src="https://drive.google.com/uc?export=download&id=1CwxlmaZJY1mvZ6Zw7-AJWeU13Ad6EhYR"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </ItemLayout>
  </div>
</section>
  );
};

export default AboutDetails;
