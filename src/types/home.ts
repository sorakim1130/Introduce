import {toyProjects} from "@/data/toyProjects";

export interface IMyStory {
  title: string
  description: string
}

export interface ISection {
  title: string
  companies?: ICompany[]
  toyProjects?: IProject[]
}

export interface ICompany {
  name: string
  period: string
  projects: IProject[]
}

export interface IProject {
  title: string
  description: string
  thumbnail?: string
  percentage: string
  tags: string[]
  links: {
    title: string
    url: string
  }[]
}
