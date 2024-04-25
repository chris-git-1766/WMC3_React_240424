import React from 'react';
import styles from "../config/myCSS"

interface IText {
    text: string
}

function AppText({text}:IText) {
    return (
        <span>
            <p style={styles.colorCard}>{text}</p>
        </span>
    );
}

export default AppText;