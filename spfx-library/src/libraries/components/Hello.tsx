import * as React from 'react';
import styles from './Hello.module.scss';

export interface IHelloProps {
    name: string;
}

export const Hello = (props: IHelloProps): JSX.Element => {
    return (
        <div className={styles.Hello} >
            <span className={styles.heading}>Hello {props.name}</span>
        </div>);
};