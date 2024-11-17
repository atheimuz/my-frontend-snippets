export const terminal = `npm install react-error-boundary`;

const code = `import { ErrorBoundary } from "react-error-boundary";

const CustomErrorBoundary = ({
    children,
    fallback: Fallback
}: {
    children: React.ReactNode;
    fallback: React.ComponentType<FallbackProps>;
}) => {
    return (
        <ErrorBoundary
            fallbackRender={(fallbackProps) => (
                <Fallback {...fallbackProps} />
            )}
        >
            {children}
        </ErrorBoundary>
    );
};

export default CustomErrorBoundary;`;

export default code;

export const example: string = `import { Suspense } from "react";
import ErrorBoundary from "../ErrorBoundary";
import ChildComponent, { ChildSuspense, ChildError } from "../ChildComponent";

const Example = () => {
    return (
        <ErrorBoundary fallback={<ChildError />}>
            <Suspense fallback={<ChildSuspense />}>
                <ChildComponent />
            </Suspense>
        </ErrorBoundary>
    )
};

export default Example;`;
