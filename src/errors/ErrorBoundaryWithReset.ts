export const terminal = `npm install @tanstack/react-query
npm install react-error-boundary`;

const code = `import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

const ErrorBoundaryWithReset = ({
    children,
    fallback: Fallback
}: {
    children: React.ReactNode;
    fallback: React.ComponentType<FallbackProps>;
}) => {
    return (
        <QueryErrorResetBoundary>
            {({ reset }) => (
                <ErrorBoundary
                    onReset={reset}
                    fallbackRender={(fallbackProps) => (
                        <Fallback {...fallbackProps} />
                    )}
                >
                    {children}
                </ErrorBoundary>
            )}
        </QueryErrorResetBoundary>
    );
};

export default ErrorBoundaryWithReset;`;

export default code;

export const example: string = `import { Suspense } from "react";
import ErrorBoundaryWithReset from "../ErrorBoundaryWithReset";
import ChildComponent, { ChildSuspense, ChildError } from "../ChildComponent";

const Example = () => {
    return (
        <ErrorBoundaryWithReset fallback={<ChildError />}>
            <Suspense fallback={<ChildSuspense />}>
                <ChildComponent />
            </Suspense>
        </ErrorBoundaryWithReset>
    )
};

export default Example;`;
