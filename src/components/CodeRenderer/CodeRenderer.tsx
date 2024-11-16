"use client";

import { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import ClipboardIcon from "@/icons/Clipboard";
import styles from "./CodeRenderer.module.scss";

interface Props {
    fileName: string;
    code: string;
    language: string;
}

const CodeRenderer = ({ fileName, code, language }: Props) => {
    const [copied, setCopied] = useState<boolean>(false);

    const onCopyCode = async () => {
        if (!code) return;
        await navigator.clipboard.writeText(code);
        setCopied(true);
    };

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p className={styles.fileName}>{fileName}</p>
                {copied ? (
                    <span className={styles.copyStatus}>copied!</span>
                ) : (
                    <button type="button" className={styles.copyBtn} onClick={onCopyCode}>
                        <ClipboardIcon />
                    </button>
                )}
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
