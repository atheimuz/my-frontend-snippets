import styleList from "@/db/codeList/styles";
import remoteList from "@/db/codeList/remotes";
import utilList from "@/db/codeList/utils";
import hookList from "@/db/codeList/hooks";
import errorList from "@/db/codeList/errors";

const codeList: { [key: string]: { value: string; title: string; desc: string }[] } = {
    style: styleList,
    remote: remoteList,
    util: utilList,
    hook: hookList,
    error: errorList
};

export default codeList;
