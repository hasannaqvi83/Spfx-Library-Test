import * as React from 'react';
import { Client } from '@microsoft/microsoft-graph-client';
import { MSGraphClient } from "@microsoft/sp-http";
import { _User } from '../../services/core/ms-graph/_User';
import { useState, useEffect } from 'react';
import styles from './UserInfo.module.scss';
import { Button, PrimaryButton } from 'office-ui-fabric-react';

interface IUserInfoProps {
    client: Client | MSGraphClient;
}

export const UserInfo = (props: IUserInfoProps): JSX.Element => {
    const [fetchInfo, setFetchInfo] = useState<boolean>(true);
    const [email, setEmail] = useState<string>('hasan@webvine.com.au');
    const [user, setUserInfo] = useState<_User>(null);
    useEffect(() => {
        (async () => {
            let usr: _User = null;
            const response = await props.client.api(`users?$filter=mail eq '${email}'`).get();
            if (response && response.value && response.value.length > 0) {
                usr = response.value[0] as _User;
            }
            console.log(`info fetched for ${email}`);
            setUserInfo(usr);
            setFetchInfo(false);
        })();
    }, [fetchInfo]);

    return (
        <div className={styles.Main}>
            <div className={styles.Content}>
                <fieldset>
                    <legend>This is a User Info webpart (using hooks) from spfx-library</legend>
                    <input type='text' style={{ width: '300px' }} value={email} onChange={(event: any) => {
                        setEmail(event.target.value);
                        setUserInfo(null);
                    }} /><br />
                    <PrimaryButton onClick={(event: any) => {
                        setFetchInfo(true);
                    }} >Fetch Data</PrimaryButton><br />
                    {user && <span> User Info: {JSON.stringify(user)} </span>}
                </fieldset>
            </div>
        </div >);
};



