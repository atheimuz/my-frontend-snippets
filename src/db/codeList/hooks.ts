import { ICode } from "@/models/code";

const hookList: ICode[] = [
    {
        value: "useScrollToEnd",
        title: "useScrollToEnd",
        desc: "스크롤이 하단에 위치하는지 검사"
    },
    {
        value: "useSearchParams",
        title: "useSearchParams",
        desc: "search params 간편하게 업데이트"
    },
    {
        value: "useCountdown",
        title: "useCountdown",
        desc: "지정된 날짜까지 남은 시간(시, 분, 초) 반환"
    }
];

export default hookList;
