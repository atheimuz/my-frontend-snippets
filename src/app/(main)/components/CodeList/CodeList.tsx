import Link from "next/link";
import cx from "classnames";
import codeList from "@/db/codeList";
import styles from "./CodeList.module.scss";

interface Props {
    category?: string;
    codeName?: string;
}
const CodeList = ({ category, codeName }: Props) => {
    if (!category || !codeList[category]) return null;

    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {codeList[category].map((item) => (
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
