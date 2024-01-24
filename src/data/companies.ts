export const companies = [
  {
    name: "밸류맵",
    period: "2021.06.01 - 2023.10.05",
    projects: [
      {
        title: "밸류맵",
        description: `
        밸류맵의 모든 ui개발을 담당하고 있었으며, 디자인 시스템, html, css에 대한 이해도가 높고,
        또한 javascript, jquery의 기존 지식을 가지고 있습니다.
        자사 서비스 리뉴얼을 진행하면서 기존의 레거시 코드를 제거하고 백엔드와 프론트엔드를 
        분리하는 과정에서 next.js를 도입하여 리뉴얼 프로젝트를 진행하였고, Typescript, tailwind에 대한 경험과 이해도를 높일 수 있었습니다.
         `,
        percentage: "100%",
        tags: [
          "html",
          "css",
          "javascript",
          "jquery",
          "반응형",
          "React",
          "Next.js",
          "styled-components",
          "tailwind",
          "typescript",
          "recoil",
          "react-query",
        ],
        links: [
          {
            title: "밸류맵 홈페이지",
            url: "https://valueupmap.com",
          },
        ],
      },
      // {
      //   title: "메타포트",
      //   description: '가상 3D 플랫폼 서비스를 소개하는 랜딩 페이지입니다.',
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript", "jquery"],
      //   links: [{
      //     title: "메타포트 페이지",
      //     url: 'https://plus.valueupmap.com/web/home'
      //   }]
      // },
      // {
      //   title: "밸류맵 스토어 PC, Mobile",
      //   description: `밸류맵의 유료 서비스를 오픈하고자 작업하였던 페이지로, 소유주 매물 등록, 건축설계권 등 유료서비스를 이용하기 위해 상품을 구매할 수 있는 페이지입니다.`,
      //   thumbnail: "/images/store.png",
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript", "jquery"],
      //   links: [{
      //     title: "스토어 바로가기",
      //     url: 'https://product.valueupmap.com/web/product'
      //   }]
      // },
      // {
      //   title: "회사소개 페이지 PC, Mobile",
      //   description: '기존의 회사소개 페이지를 리뉴얼 하면서 새롭게 작업된 밸류맵 서비스를 소개하는 페이지 입니다.',
      //   thumbnail: "/images/introduce.png",
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript", "Jquery", "반응형"],
      //   links: [{
      //     title: "회사소개 바로가기",
      //     url: 'https://www.valueupmap.com/introduce'
      //   }]
      // },
      // {
      //   title: "ONLY - 현재 서비스 중단된 페이지",
      //   description: '밸류맵 투자금융부에서 내놓은 매물을 판매하고하자 하는 페이지로, 오직 밸류맵에서 매물을 소개하며 항공촬영과 Youtube를 통해 매물을 소개하였던 페이지입니다. ',
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript", "jquery", "반응형"],
      //   links: [{
      //     title: "ONLY 영상 바로가기",
      //     url: 'https://www.youtube.com/watch?v=J4KONoXxlpE&list=PLyoQ8id1Nu4y0FHpOKNrOJp90Kjv7kHHP&index=2'
      //   }]
      // },
      // {
      //   title: "AI 건축설계 PC, Mobile",
      //   description: '내가 선택한 필지를 AI설계를 통하여 미리 확인해 볼 수 있는 서비스로, 리액트로 진행되었던 첫 프로젝트였으며, PC, Mobile 각각의 UI개발을 진행하였습니다.',
      //   thumbnail: "/images/buildit.png",
      //   percentage: "100%",
      //   tags: ["react", "css"],
      //   links: [{
      //     title: "AI 건축설계 바로가기",
      //     url: 'https://www.valueupmap.com/buildit/landing'
      //   }]
      // },
      // {
      //   title: "나의 자산관리 PC , Mobile",
      //   description: '밸류맵에 가입한 회원 중 부동산 소유자 혹은 그에 준하는 권한을 가진 사람이 플랫폼에 등록하는 서비스로 허위매물로 부터 소비자를 보호하고자 하는 서비스로 PC, Mobile 각각의 UI개발을 진행하였습니다.',
      //   thumbnail: "/images/owners.png",
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript"],
      //   links: [{
      //     title: "나의 자산관리 바로가기(로그인필요 서비스)",
      //     url: 'https://www.valueupmap.com/me/owners'
      //   }]
      // },
      // {
      //   title: "고객센터 PC, Mobile",
      //   description: '다양한 서비스들의 오픈과 업데이트 소식 등을 알리고자 고객센터를 개발하여 사용자의 편리성을 확대한 프로젝트입니다.',
      //   thumbnail: "/images/cs.png",
      //   percentage: "100%",
      //   tags: ["html", "css", "javascript"],
      //   links: [{
      //     title: "고객센터 바로가기",
      //     url: 'https://www.valueupmap.com/operations'
      //   }]
      // },
      // {
      //   title: "AI 건축설계 - 설계조건 직접설정 기능 추가 개발 PC, Mobile",
      //   description: '기본에 서비스 하던 건축설계의 경우 AI자동추천 설계로만 대지를 분석하여 건축에 최적화된 설계결과를 보여주며 서비스 하며 사용자의 니즈를 파악하여 설계조건을 직접설정하여 결과를 얻을 수 있도록 추가 기능 개발을 하였습니다.',
      //   thumbnail: "/images/buildit-setting.png",
      //   percentage: "80%",
      //   tags: ["react", "redux", "styled-components", "tailwinds"],
      //   links: [{
      //     title: "AI 건축설계 바로가기",
      //     url: 'https://www.valueupmap.com/buildit/landing'
      //   }]
      // },
      // {
      //   title: "사업성 검토 랜딩, 상세페이지",
      //   description: '밸류맵 사업성검토는 건축계획에서 부동산 가치평가까지 분야별 전문가들이 체계적으로 분석한 가장 실효적인 비즈니스 컨설팅 서비스입니다. 상세페이지의 비니지스 로직을 제외한 모든 UI와 랜딩페이지를 작업하였습니다.',
      //   thumbnail: "/images/solution.png",
      //   percentage: "80%",
      //   tags: ["Next.js", "styled-components","tailwind", "react-query", "반응형"],
      //   links: [
      //       {
      //     title: "사업성검토 바로가기",
      //     url: 'https://solution.valueupmap.com/'
      //   },
      //   {
      //     title: "상세 바로가기",
      //     url: 'https://solution.valueupmap.com/setting/land'
      //   }],
      //
      // },
      // {
      //   title: "밸류맵 리뉴얼 1.5ver - PC",
      //   description: '밸류맵의 기술 부채를 덜고, 프론트와 백엔드의 분리를 위해 기존의 html, css, javascript, jquery로 뒤죽박죽 엉켜있어 유지보수 하기 어려웠던 레거시 코드들을 next.js로 새롭게 세팅하여 리뉴얼 1.5버전으로 진행하였고, 디자인 시스템에 맞춰 공통요소들을 만들어 적용하여 진행했던 23년 최대 큰 목표였던 프로젝트 였으며, 그 중에서 팝업들과 나의 자산관리 페이지를 담당하여 작업하였습니다.',
      //   thumbnail: "/images/home.png",
      //   percentage: "100%",
      //   tags: ["next.js", "recoil","typescript", "styled-components", "tailwind", "react-query", "반응형"],
      //   links: [{
      //     title: "밸류맵 바로가기",
      //     url: 'https://www.valueupmap.com'
      //   }]
      // },
    ],
  },
];
