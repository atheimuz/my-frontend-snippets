export const terminal: string = `npm install @tanstack/react-query`;

const code: string = `const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 1,
            retry: 0
        }
    }
});`;

export default code;
