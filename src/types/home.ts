export interface IMyStory {
  title: string
  description: string
}

export interface ISection {
  title: string
  companies: ICompany[]
}

export interface ICompany {
  name: string
  period: string
  projects: ICompanyProject[]
}

export interface ICompanyProject {
  title: string
  description: string
  thumbnail: string
  percentage: string
  tags: string[]
  links: {
    title: string
    url: string
  }[]
}