interface UserModel {
  id: string;
  value: string;
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
