const code: string = `import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";

const useCustomSearchParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const getParam = useCallback(
        (key: string) => searchParams.get(key) || undefined,
        [searchParams]
    );

    const updateParam = useCallback(
        ({
            updateKeys = [],
            deleteKeys = []
        }: {
            updateKeys?: { key: string; value: string }[];
            deleteKeys?: string[];
        }) => {
            const updatedSearchParams = new URLSearchParams(searchParams);

            updateKeys.forEach(({ key, value }) => {
                updatedSearchParams.set(key, value);
            });

            deleteKeys.forEach((deleteKey) => {
                updatedSearchParams.delete(deleteKey);
            });

            setSearchParams(updatedSearchParams, { replace: true });
        },
        [searchParams, setSearchParams]
    );

    return { getParam, updateParam };
};

export default useCustomSearchParams;`;

export default code;

export const example: string = `"use client"

import useSearchParams from "hooks/useSearchParams";

const Example = () => {
    const { getParam, updateParams } = useSearchParams();
    const keyword = getParam("keyword");

    const onSearch = () => {
        updateParams({
            updateKeys: [{ "update1" : 1 }, { "update2": 2 }],
            deleteKeys: ["delete1", "delete2"]
        });
    };
};

export default Example;`;
