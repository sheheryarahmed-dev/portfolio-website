import type { Achievement, Education } from "@/types";

export const education = [
  {
    institution: "Foundation University Islamabad (FUI)",
    degree: "Bachelor of Science in Computer Science",
    achievements: [{ title: "CGPA: 3.72" }],
  },
  {
    institution: "Scholar Cantt Group Of Colleges",
    degree: "Intermediate",
    achievements: [{ title: "Grade: A" }],
  },
] satisfies Education[];

export const achievements = [
  {
    title: "Academic Merit Certificate",
    description: "Foundation University Islamabad (FUI)",
    date: "2020",
  },
  {
    title: "Scholarship Holder",
    description: "Foundation University Islamabad (FUI)",
    date: "2016 – 2020",
  },
] satisfies Achievement[];
