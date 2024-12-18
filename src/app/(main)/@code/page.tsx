"use client";

import { useState, useEffect } from "react";
import { ICodeFile } from "@/models/code";
import CodeRenderer from "@/components/CodeRenderer";
import styles from "./page.module.scss";
import { useSearchParams } from "next/navigation";

export default function CodePage() {
    const searchParams = useSearchParams();
    const codeName = searchParams.get("codeName");
    const [dataList, setDataList] = useState<ICodeFile[] | null>(null);

    const loadData = async () => {
        if (!codeName) {
            return setDataList(null);
        }
        const data = (await import("@/db/code")).default;
        const newDataList = data[codeName];

        if (newDataList) {
            setDataList(newDataList);
        } else {
            setDataList(null);
        }
    };

    useEffect(() => {
        loadData();
    }, [codeName]);

    if (!dataList) return null;

    return (
        <div className={styles.page}>
            {dataList.map((item) => (
                <div className={styles.block} key={item.code}>
                    <CodeRenderer
                        fileName={item.fileName}
                        code={item.code}
                        language={item.language}
                    />
                </div>
            ))}
        </div>
    );
}
