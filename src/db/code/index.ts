import { ICodeFile } from "@/models/code";
import utilCode from "@/db/code/utils";
import errorCode from "@/db/code/errors";
import remoteCode from "@/db/code/remotes";
import hookCode from "@/db/code/hooks";
import styleCode from "@/db/code/styles";

const code: { [key: string]: ICodeFile[] } = {
    ...styleCode,
    ...remoteCode,
    ...utilCode,
    ...hookCode,
    ...errorCode
};

export default code;
