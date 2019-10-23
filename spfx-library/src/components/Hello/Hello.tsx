import * as React from 'react';
import styles from './Hello.module.scss';
//import * as strings from 'HelloStrings';
import { useEffect, useState } from 'react';

export interface IHelloProps {
    title: string;
}

export const Hello = (props: IHelloProps): JSX.Element => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });

    if (isLoading)
        return <span>{'strings.Loading'}</span>;
    else
        return (
            <fieldset>
                <legend>This is a Hello webpart from spfx-library</legend>
                <div className={styles.Hello} >
                    <span className={styles.Heading}>Hello {props.title}, with blue and yellow background.</span>
                </div>
            </fieldset>

        );
};