import {IMyStory, ISection} from "@/types/home";
import {companies} from "@/data/companies";

export const myStory: IMyStory = {
  title: "안녕하세요\n프론트엔드 개발자 푸 입니다.",
  description: `안녕 안녕 나는야 개발자 안녕 안녕 나는야 개발자 
  안녕 안녕 나는야 개발자 안녕 안녕 나는야 개발자 
  안녕 안녕 나는야 개발자 안녕 안녕 나는야 개발자 
  안녕 안녕 나는야 개발자 안녕 안녕 나는야 개발자 안녕 
  안녕 나는야 개발자`
}

export const sections: ISection[] = [
  {
    title: "works",
    companies,
  }
]