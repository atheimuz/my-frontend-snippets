import cx from "classnames";
import CategoryList from "@/app/(main)/components/CategoryList";
import PostList from "@/app/(main)/components/PostList";
import styles from "./page.module.scss";

const Nav = ({ searchParams }: { searchParams: { category?: string; postCode?: string } }) => {
    const category = searchParams?.category;
    const postCode = searchParams?.postCode;

    return (
        <nav className={cx(styles.nav, { [styles.stretch]: !!category })}>
            <div className={styles.menus}>
                <CategoryList category={category} postCode={postCode} />
                <PostList category={category} postCode={postCode} />
            </div>
        </nav>
    );
};

export default Nav;
