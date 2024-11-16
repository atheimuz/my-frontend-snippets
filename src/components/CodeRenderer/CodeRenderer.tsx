"use client";

import { Highlight, themes } from "prism-react-renderer";
import ClipboardIcon from "@/icons/Clipboard";
import styles from "./CodeRenderer.module.scss";

interface Props {
    fileName: string;
    code: string;
    language: string;
}

const CodeRenderer = ({ fileName, code, language }: Props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.fileName}>{fileName}</p>
                <button className={styles.copyBtn}>
                    <ClipboardIcon />
                </button>
            </div>
            <div className={styles.editor}>
                <Highlight theme={themes.gruvboxMaterialDark} code={code} language={language}>
                    {({ style, tokens, getLineProps, getTokenProps }) => (
                        <pre style={style} className={styles.editorInner}>
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })}>
                                    {line.map((token, key) => (
                                        <span key={key} {...getTokenProps({ token })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    );
};

export default CodeRenderer;
