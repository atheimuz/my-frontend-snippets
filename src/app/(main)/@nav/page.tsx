import cx from "classnames";
import CategoryList from "@/app/(main)/components/CategoryList";
import CodeList from "@/app/(main)/components/CodeList";
import styles from "./page.module.scss";

const Nav = ({ searchParams }: { searchParams: { category?: string; codeName?: string } }) => {
    const category = searchParams?.category;
    const codeName = searchParams?.codeName;

    return (
        <nav className={cx(styles.nav, { [styles.stretch]: !!category })}>
            <div className={styles.menus}>
                <CategoryList category={category} codeName={codeName} />
                <CodeList category={category} codeName={codeName} />
            </div>
        </nav>
    );
};

export default Nav;
