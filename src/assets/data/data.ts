export interface UserModel {
  id: string;
  value: string;
}

export interface CareerModel {
  id: string;
  value: string[];
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
