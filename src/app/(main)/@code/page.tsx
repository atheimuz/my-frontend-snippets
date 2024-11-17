import code from "@/db/code";
import CodeRenderer from "@/components/CodeRenderer";
import styles from "./page.module.scss";

export default function CodePage({ searchParams }: { searchParams: { codeName?: string } }) {
    const codeName = searchParams?.codeName;
    if (!codeName || !code[codeName]) return null;

    const dataList = code[codeName];

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
