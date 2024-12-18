import { ICodeFile } from "@/models/code";
import numberWithCommas from "@/utils/numberWithCommas";
import validateEmail from "@/utils/validateEmail";
import validateURL from "@/utils/validateURL";
import throttle from "@/utils/throttle";
import shuffleArray from "@/utils/shuffleArray";

const utilCode: { [key: string]: ICodeFile[] } = {
    numberWithCommas: [{ fileName: "utils.ts", code: numberWithCommas, language: "ts" }],
    validateEmail: [{ fileName: "utils.ts", code: validateEmail, language: "ts" }],
    validateURL: [{ fileName: "utils.ts", code: validateURL, language: "ts" }],
    throttle: [{ fileName: "utils.ts", code: throttle, language: "ts" }],
    shuffleArray: [{ fileName: "utils.ts", code: shuffleArray, language: "ts" }]
};

export default utilCode;
