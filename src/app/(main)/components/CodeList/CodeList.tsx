"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import cx from "classnames";
import styles from "./CodeList.module.scss";
import { ICode } from "@/models/code";

interface Props {
    category?: string;
    codeName?: string;
}
const CodeList = ({ category, codeName }: Props) => {
    const [codeList, setCodeList] = useState<ICode[] | null>(null);

    const loadData = async () => {
        if (!category) {
            return setCodeList(null);
        }
        const data = (await import("@/db/codeList")).default;
        const newCodeList = data[category];

        if (newCodeList) {
            setCodeList(newCodeList);
        } else {
            setCodeList(null);
        }
    };

    useEffect(() => {
        loadData();
    }, [category, codeName]);

    if (!codeList) return null;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {codeList.map((item) => (
                    <li
                        className={cx(styles.item, { [styles.active]: item.value === codeName })}
                        key={item.value}
                    >
                        <Link
                            href={`/?category=${category}&codeName=${item.value}`}
                            className={styles.link}
                            replace
                        >
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.desc}>{item.desc}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CodeList;
