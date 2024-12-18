import { ICodeFile } from "@/models/code";
import multiline from "@/styles/multiline";

const styleCode: { [key: string]: ICodeFile[] } = {
    multiline: [{ fileName: "style.css", code: multiline, language: "css" }]
};

export default styleCode;
