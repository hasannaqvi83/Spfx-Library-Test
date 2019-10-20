import * as React from 'react';
import styles from './Hello.module.scss';

export interface IHelloProps {
    name: string;
}

export const Hello = (props: IHelloProps): JSX.Element => {
    return (

        <fieldset>
            <legend>This is a Hello webpart from spfx-library</legend>
            <div className={styles.Hello} >
                <span className={styles.Heading}>Hello {props.name} from SPFx Library component with black and white background.</span>
            </div>
        </fieldset>

    );
};