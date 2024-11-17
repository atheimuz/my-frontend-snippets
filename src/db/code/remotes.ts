import reactQueryOptions, {
    terminal as reactQueryOptionsTerminal
} from "@/remotes/reactQueryOptions";
import axiosOptions, { terminal as axiosOptionsTerminal } from "@/remotes/axiosOptions";

const remoteCode: { [key: string]: { fileName: string; code: string; language: string }[] } = {
    reactQueryOptions: [
        { fileName: "terminal", code: reactQueryOptionsTerminal, language: "shell" },
        { fileName: "App.tsx", code: reactQueryOptions, language: "tsx" }
    ],
    axiosOptions: [
        { fileName: "terminal", code: axiosOptionsTerminal, language: "shell" },
        { fileName: "client.ts", code: axiosOptions, language: "ts" }
    ]
};

export default remoteCode;
