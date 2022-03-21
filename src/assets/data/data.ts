import test from "../img/OOTD/landing-filter.gif";

export interface UserModel {
  id: string;
  value: string;
}

export interface CareerModel {
  id: string;
  value: string[];
}

export interface ProjectModel {
  title: string;
  intro: string;
  implement: string[];
  images: string[];
  skill: string[];
  desc: string[];
  github: string;
  demo: string;
}

export const Contact: Array<UserModel> = [
  { id: "Phone", value: "010-7354-5785" },
  { id: "E-mail", value: "rlagusehd45@naver.com" },
  { id: "Github", value: "https://github.com/gusehd66" },
  { id: "Blog", value: "https://gusehd66.tistory.com/" },
];

export const Profile: Array<UserModel> = [
  { id: "생년월일", value: "97.02.26" },
  { id: "고등학교", value: "부용고등학교 졸업 (2012.03 ~ 2015.02)" },
  { id: "대학교", value: "인덕대학교 졸업 (2015.03 ~ 2022.02 )" },
];

export const Certificate: Array<UserModel> = [
  { id: "정보처리 산업기사", value: "2020.11.12" },
  { id: "컴퓨터활용능력 2급", value: "2020.03.06" },
];

export const CareerData: Array<CareerModel> = [
  {
    id: "직무",
    value: [
      "네트워크 엔지니어로 입사하여 은행권으로 파견되어 전산 관리 및 PC 장애처리 등 전산실 업무",
    ],
  },
  {
    id: "배운 점",
    value: [
      "전산실 업무를 수행하며 다양한 부서의 사람들과 소통할 기회가 많았고, 그 과정에서 상대방의 입장을 고려한 커뮤니케이션 스킬을 길렀습니다.",
      "IT팀에서 근무하며 개발자들의 업무 환경, 분위기를 보며 개발에 관심이 깊어지게 되었습니다.",
    ],
  },
];

export const ProjectData: Array<ProjectModel> = [
  {
    title: "OOTD (Out fit of the day)",
    intro: "주변 지인들의 고충를 해결 해주기 위해 만든 옷장관리 서비스입니다.",
    implement: [
      "개인 소유의 옷을 등록하여 한 눈에 볼 수 있습니다.",
      "등록한 옷을 가격별, 카테고리 별 또는 검색으로 찾을 수 있습니다.",
      "옷을 고르기 어려울때 간단하게 정해주는 랜덤선택 기능이 있습니다.",
    ],
    images: [
      test,
      require("../img/OOTD/random-select-page.gif").default,
      require("../img/OOTD/complete.JPG"),
      require("../img/OOTD/detail-page.PNG"),
      require("../img/OOTD/landing.JPG"),
      require("../img/OOTD/select.JPG"),
    ],
    skill: [
      "React",
      "Redux",
      "Express",
      "MongoDB",
      "AWS S3",
      "styled-components",
    ],
    desc: [
      "초기에는 서버 없이 local 저장소에 있는 이미지를 직접 사용하여 데모를 구현하였으나 이미지를 추가하는데 있어 기능적 제한이 생겨 Express 서버와 Mongodb를 도입하였습니다.",
      "현재 heroku 를 사용하여 데모 버전을 배포하고 있으며, 사용자 피드백을 받아 아이템 삭제 기능, 수정 기능 등을 추가하며 꾸준히 업데이트하고 있습니다.",
      "실제로 자주 사용하고 있는 프로젝트 입니다.",
    ],
    github: "https://github.com/gusehd66/OOTD",
    demo: "https://ootd-dongit.herokuapp.com/",
  },
  {
    title: "연봉 계산기",
    intro: "나의 연봉과 스타들의 연봉을 비교해볼 수 있는 웹페이지 입니다.",
    implement: [
      "연봉입력란에 연봉을 입력하고 스타를 선택하면 스크롤이 자동으로 이동됩니다.",
      "초당 벌리는 금액을 실시간으로 확인할 수 있습니다.",
      "주급, 월급 등 다양한 비교를 할 수 있습니다.",
    ],
    images: [
      require("../img/SalaryCalc/click-move.gif"),
      require("../img/SalaryCalc/top.PNG"),
      require("../img/SalaryCalc/bottom.PNG"),
    ],
    skill: ["HTML", "CSS", "Vanilla JS"],
    desc: [
      "주변에 취업하는 친구들에게 보여주기 위해 만든 웹페이지 입니다.",
      "간단한 페이지 지만 누군가를 위해 만든 첫 페이지 였으며, 예상보다 좋은 반응을 얻을 수 있었습니다.",
      "그 결과 성취감을 느끼고, 더 재밌고 사용자친화적인 웹을 만들고 싶다는 마음을 가지게 되었습니다.",
    ],
    github: "https://github.com/gusehd66/salary-calc",
    demo: "https://gusehd66.github.io/salary-calc/",
  },
  {
    title: "TodoList",
    intro: "좋아 하는 가수의 노래를 곁들인 To-do List 입니다.",
    implement: [
      "인터랙티브한 MUSIC 플레이어를 구현하였습니다.",
      "음악 변경시 배경이 바뀝니다.",
      "To-do List 와 Complete List 가 구분되어 있습니다.",
    ],
    images: [
      require("../img/TodoList/hover.gif"),
      require("../img/TodoList/add-list.gif"),
      require("../img/TodoList/landing.PNG"),
      require("../img/TodoList/mobile.PNG"),
    ],
    skill: ["HTML", "CSS", "Vanilla JS"],
    desc: [
      "Javascript 입문 당시 여러 API를 사용해보고, 인터랙티브한 웹을 만들고 싶어서 만든  Todo-list 입니다.",
      "페이지가 새로고침 될때마다 Random Advice가 생성되는 API와 현재 위치의 날씨 정보를 알려주는 API를 사용하였습니다.",
      "시계는 순수 자바스크립트로 구현하였으며, 이름과 Todo는 localstorage로 관리하였습니다.",
      "이를 통해 API 사용과 Javascript 사용에 대한 자신감을 얻을 수 있었습니다.",
    ],
    github: "https://github.com/gusehd66/javascript-todo-list",
    demo: "https://gusehd66.github.io/javascript-todo-list/",
  },
  {
    title: "React Movie APP",
    intro: "YTS API를 사용하여 만든 영화 검색 웹앱입니다.",
    implement: [
      "다운로드순으로 한 페이지당 20개씩 카드 표시",
      "간단한 About 페이지",
      "반응형을 고려한 디자인",
    ],
    images: [
      require("../img/Movie/click-detail.gif"),
      require("../img/Movie/mobile.png"),
      require("../img/Movie/pc.png"),
    ],
    skill: ["React", "CSS"],
    desc: [
      "처음으로 React를 사용하여 만든 PC와 모바일에 최적화된 SPA 입니다. 이 과정에서 React 문법을 익히고 React-router-dom 을 경험했습니다.",
      "시계는 순수 자바스크립트로 구현하였으며, 이름과 Todo는 localstorage로 관리하였습니다.",
      "다른 프레임워크보다 React의 러닝커브가 높다는 얘기에 걱정하였지만, 완성을 하고 난 후 React에 대한 자신감과 흥미를 가지게 되었습니다.",
    ],
    github: "https://github.com/gusehd66/react-movie-app",
    demo: "https://pedantic-joliot-9c8246.netlify.app/#/",
  },
  {
    title: "TweetService",
    intro: "Tweeter를 모방한 Realtime 소셜 웹앱입니다.",
    implement: [
      "회원가입 기능과 구글 로그인, 깃허브 로그인 기능이 있습니다.",
      "Tweet 사진만 모아볼 수 있는 기능이 제공됩니다.",
      "Profile 사진과 닉네임을 설정할 수 있고, 자신이 쓴 트윗만 볼 수 있습니다.",
    ],
    images: [
      require("../img/Twitter/realtime.gif"),
      require("../img/Twitter/collect.gif"),
      require("../img/Twitter/profile.gif"),
      require("../img/Twitter/login.png"),
    ],
    skill: ["React", "Firebase"],
    desc: [
      "React 를 복습하고자 만든 프로젝트 입니다.",
      "다양한 기능이 들어있는 React 앱을 만들어 보고 싶어 Firebase를 사용하였습니다.",
      "이를 통해 데이터베이스를 사용하는 감을 익히고, React의 함수형 컴포넌트와 Hook 을 이해하는데 도움이 되었습니다.",
    ],
    github: "https://github.com/gusehd66/twitter",
    demo: "https://goofy-hypatia-257906.netlify.app/#/",
  },
];
