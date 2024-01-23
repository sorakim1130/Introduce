import { IMyStory, ISection } from "@/types/home";
import { companies } from "@/data/companies";
import { toyProjects } from "@/data/toyProjects";

export const myStory: IMyStory = {
  title: "안녕하세요.\n 항상 노력하는 프론트엔드 주니어 개발자 김소라입니다.",
  description: `
 동료들과 협업하며 더 나은 방향에 대한 의견을 나누고 프로젝트를 수행해 나가는 과정에서
 즐거움을 느끼고 함께 성장해 나가는 것에 큰 성취감을 느낍니다.
 
 태도가 성과와 연결된다고 믿기에 긍정적인 태도로 열심히 노력하고 있습니다.
 어제보다 더 나은 개발자가 될 것 입니다. 
 
 감사합니다.
`,
};

export const sections: ISection[] = [
  {
    title: "works",
    companies,
  },
  {
    title: "side project",
    toyProjects,
  },
];
