import Link from "next/link";
import cx from "classnames";
import categoryList from "@/db/category";

import styles from "./CategoryList.module.scss";

interface Props {
    category?: string;
    codeName?: string;
}

const CategoryList = ({ category, codeName }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                <li className={cx(styles.item, { [styles.active]: !category })}>
                    <Link href="/" className={styles.link} replace>
                        <img src={`./home.png`} alt="아이콘" className={styles.icon} />
                        <p>홈</p>
                    </Link>
                </li>
                {categoryList.map((item) => (
                    <li
                        key={item.value}
                        className={cx(styles.item, { [styles.active]: item.value === category })}
                    >
                        <Link
                            href={`/?category=${item.value}${
                                codeName ? `&codeName=${codeName}` : ""
                            }`}
                            className={styles.link}
                            replace
                        >
                            <img src={`./${item.image}`} alt="아이콘" className={styles.icon} />
                            <p>{item.label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
