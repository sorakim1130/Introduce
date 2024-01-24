export const toyProjects = [
  {
    title: "Unsplash",
    description: `Unsplash 데모사이트 입니다.`,
    thumbnail: "/images/unsplash.png",
    percentage: "100%",
    tags: ["react", "styled-components", "react-query", "zustand"],
    links: [
      {
        title: "Demo",
        url: "https://unsplash-olive.vercel.app",
      },
      {
        title: "Source",
        url: "https://github.com/ssra91/unsplash",
      },
    ],
    skills: [
      "검색 : 검색 api를 통하여 검색 기능을 구현하며 검색 로직에 대한 이해도를 높였습니다.",
      "무한 스크롤 : IntersectionObserver를 이용하여 무한스크롤을 구현하였습니다. IntersectionObserver hook을 이용하여 infinite scroll 컴포넌트를 구현함으로써 재사용이 가능하도록 구현하였습니다.",
      "상세페이지 : 상세페이지를 구현하며 라우팅에 대한 이해도를 높였습니다.",
      "ReactQuery : 기존의 redux나 zustand에서 모두 관리해야 했던 서버상태를 편하게 관리함으로써 상태관리의 복잡도를 낮출 수 있었고,  필요한 부분에서 실시간 싱크가 필요하지 않는 서버상태들은 캐시를 이용함으로써 불필요한 네트워크 호출을 줄이고, 데이터가 빠르게 노출되도록 ux를 개선을 하였습니다. ",
      "zustand : redux, recoil처럼 쉽게 provider를 제공해야 하는 불편함 없이 글로벌 상태관리가 가능해서 좋았습니다.",
      "Masonry layout : 이미지 사이즈를 체크하여 Masonry 타일 그리드를 직접 구현하였습니다.",
      "dialog, modal, toast를 함수형으로 어디서나 편하게 사용 가능하고 사용될때만 렌더링 되도록 구현하였습니다.",
      "Api intersector와 try catch을 통하여 공통 예외처리를 하고 다이얼로그를 제공함으로서 ux 및 dx 개선하였고, 해당 에러는 sentry를 통하여 레포트 함으로써 에러처리를 좀 더 유연하게 할 수 있었습니다.",
    ],
  },
  {
    title: "Youtube",
    description: "Youtube 데모사이트 입니다.",
    thumbnail: "/images/kimtube.png",
    percentage: "100%",
    tags: ["react", "redux", "styled-components", "react-query"],
    links: [
      {
        title: "Demo",
        url: "https://kimtube-teal.vercel.app",
      },
      {
        title: "Source",
        url: "https://github.com/ssra91/kimtube",
      },
    ],
    skills: [
      "ReactQuery : invalidation, refetch를 사용하여 원하는 타이핑에 쉽게 서버상태와 싱크를 맞출 수 있습니다.",
      "타이포 : 디자인에 사용된 폰트 사이즈, 폰트 컬러, 폰트 굵기, 라인하이트 등을 지원하는 타이포 컴포넌트를 개발하여, 개발경험을 향상시키도록 하였습니다.",
      "Flex: 레이아웃에 사용되는 flex 단위의 컴포넌트를 구현하여 레이아웃과 간격등의 속성을 불필요한 className , 인라인스타일 없이 쉽게 처리할 수 있도록 dx 개선하였습니다.",
      "무한 스크롤 : Intersection Observer를 이용하여 무한스크롤을 구현하였습니다. IntersectionObserver hook을 이용하여 infinite scroll 컴포넌트를 구현함으로써 재사용이 가능하도록 구현하였습니다.",
      "redux : redux를 사용하여 상태관리를 하였습니다.",
    ],
  },
];
