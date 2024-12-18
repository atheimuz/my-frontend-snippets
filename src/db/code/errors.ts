import { ICodeFile } from "@/models/code";
import ErrorBoundary, {
    terminal as ErrorBoundaryTerminal,
    example as ErrorBoundaryExample
} from "@/errors/ErrorBoundary";
import ErrorBoundaryWithReset, {
    terminal as ErrorBoundaryWithResetTerminal,
    example as ErrorBoundaryWithResetExample
} from "@/errors/ErrorBoundaryWithReset";

const errorCode: { [key: string]: ICodeFile[] } = {
    errorBoundary: [
        { fileName: "terminal", code: ErrorBoundaryTerminal, language: "shell" },
        { fileName: "ErrorBoundary.tsx", code: ErrorBoundary, language: "tsx" },
        { fileName: "Example.tsx", code: ErrorBoundaryExample, language: "tsx" }
    ],
    errorBoundaryWithReset: [
        { fileName: "terminal", code: ErrorBoundaryWithResetTerminal, language: "shell" },
        { fileName: "ErrorBoundaryWithReset.tsx", code: ErrorBoundaryWithReset, language: "tsx" },
        { fileName: "Example.tsx", code: ErrorBoundaryWithResetExample, language: "tsx" }
    ]
};

export default errorCode;
