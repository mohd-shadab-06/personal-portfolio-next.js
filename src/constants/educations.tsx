import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const educations = [
  {
    href: "#",
    title: "Master of Computer Applications",
    description: "Completed the degree within the stipulated time of 2 years.",
    university:
      "Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh, Lucknow",
    thumbnail: sidefolioAceternity,

    stack: ["Passing Year: 2024", "C.G.P.A : 8.14"],
  },
  {
    href: "#",
    title: "Bachelor of Computer Applications",
    description:
      "Completed the degree within the stipulated time of 3 years. This was schedule to be complete in the year 2020 but due to the pandemic it got delayed.",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["Passing Year: 2021", "Percentage: 67.66%"],
  },
  {
    href: "#",
    title: "Intermediate",
    description:
      "Main subjects during the course were Mathematics, Physics, Chemistry, English and Hindi.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["Passing Year: 2017", "Percentage: 68.00%"],
  },
  {
    href: "#",
    title: "High School",
    description:
      "Main subjects during the course were Mathematics, Science, Computer Science, Social Science, English and Hindi.",
    thumbnail: sidefolioTailwindMasterKit,
    images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
    stack: ["Passing Year: 2015", "Percentage: 80.33%"],
  },
];
