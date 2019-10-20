import * as React from 'react';
import styles from './Hello.module.scss';

export interface IHelloProps {
    title: string;
}

export const Hello = (props: IHelloProps): JSX.Element => {
    return (

        <fieldset>
            <legend>This is a Hello webpart from spfx-library</legend>
            <div className={styles.Hello} >
                <span className={styles.Heading}>Hello {props.title}, with blue and yellow background.</span>
            </div>
        </fieldset>

    );
};