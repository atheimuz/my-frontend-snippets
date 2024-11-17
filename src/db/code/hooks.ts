import useScrollToEnd, { example as useScrollToEndExample } from "@/hooks/useScrollToEnd";
import useSearchParams, { example as useSearchParamsExample } from "@/hooks/useSearchParams";
import useCountdown, { example as useCountdownExample } from "@/hooks/useCountdown";

const hookCode: { [key: string]: { fileName: string; code: string; language: string }[] } = {
    useScrollToEnd: [
        { fileName: "useScrollToEnd.ts", code: useScrollToEnd, language: "ts" },
        {
            fileName: "Example.tsx",
            code: useScrollToEndExample,
            language: "tsx"
        }
    ],
    useSearchParams: [
        { fileName: "useSearchParams.ts", code: useSearchParams, language: "ts" },
        {
            fileName: "Example.tsx",
            code: useSearchParamsExample,
            language: "tsx"
        }
    ],
    useCountdown: [
        { fileName: "useCountdown.ts", code: useCountdown, language: "ts" },
        {
            fileName: "Example.tsx",
            code: useCountdownExample,
            language: "tsx"
        }
    ]
};

export default hookCode;
