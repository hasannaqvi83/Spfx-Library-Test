import * as React from 'react';
import styles from './Hello.module.scss';
import strings from './loc';
import { useState } from 'react';
import { DefaultButton } from 'office-ui-fabric-react';

export interface IHelloProps {
    title: string;
}

export class Hello extends React.Component<IHelloProps, { lang: string }> {
    constructor(props) {
        super(props);
        this.state = {
            lang: 'en'
        };
    }

    public render() {
        strings.setLanguage(this.state.lang);

        const { props } = this;
        const isLoading = false;

        if (isLoading)
            return <span>{strings.Loading}</span>;
        else
            return (<div>
                <DefaultButton onClick={() => {
                    this.setState({ lang: 'fr' });
                }} text="Change Language"></DefaultButton>
                <fieldset>
                    <legend>This is a Hello webpart from spfx-library</legend>
                    <div className={styles.Hello} >
                        <span className={styles.Heading}> {strings.Loading} : Hello {props.title}, with blue and yellow background.</span>
                    </div>
                </fieldset>
            </div>
            );
    }
}