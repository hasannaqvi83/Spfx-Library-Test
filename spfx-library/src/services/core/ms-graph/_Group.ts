export interface _Group {
    id: string;
    classification?: any;
    createdDateTime: Date;
    creationOptions: string[];
    description: string;
    displayName: string;
    groupTypes: string[];
    mail: string;
    mailEnabled: boolean;
    mailNickname: string;
    onPremisesLastSyncDateTime?: any;
    onPremisesSecurityIdentifier?: any;
    onPremisesSyncEnabled?: any;
    preferredDataLocation?: any;
    proxyAddresses: string[];
    renewedDateTime: Date;
    resourceBehaviorOptions: string[];
    resourceProvisioningOptions: string[];
    securityEnabled: boolean;
    visibility: string;
    onPremisesProvisioningErrors: any[];
}

export interface _GroupResult {
    '@odata.context'?: string;
    value?: _Group[];
}

