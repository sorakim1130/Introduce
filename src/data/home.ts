import {IMyStory, ISection} from "@/types/home";
import {companies} from "@/data/companies";
import {toyProjects} from "@/data/toyProjects";

export const myStory: IMyStory = {
  title: "안녕하세요.\n 어제와 다른 실력을 겸비하려 노력하는 프론트엔드 주니어 개발자 김소라입니다.",
  description: `안녕하세요. 3년 차 프론트엔드 개발자 김소라라고 합니다.

 저는 직전 회사에서 백엔드 개발자들과 함께 일을 하며 ui 개발을 해왔습니다.
 사용자 입장에 서서 사용자가 원하는 기대효과를 어떻게 구조화해서 잘 풀어나갈지 
 항상 고민하며 개발을 하고 있으며,
 동료들과 함께 프로젝트에 투입되어 협업을 해나가는 것에 대한 어려움보다는
 더 나은 방향에 대한 의견을 나누며 프로젝트를 함께 수행해 나가는 과정에서 성취감과 
 즐거움을 느끼고 함께 성장해 나가는 것에 행복감을 느낍니다.
  
  당장 뒤돌아 봤을 때는 눈에 보이지 않지만,
 나는 결코 제자리에 머물지 않고 꾸준한 성장 그래프를 잘 그리며 
 나아가고 있다고 자부할 수 있는 어제 보다 조금 더 발전된 개발자가 되고자 합니다.
 그러기 위해 항상 노력하고 배움을 부끄러워하지 않는 개발자로 성장할 준비가 되어있습니다. 
 
 감사합니다.
`
}

export const sections: ISection[] = [
  {
    title: "works",
    companies,
  },
  {
    title: "side project",
    toyProjects,
  }
]