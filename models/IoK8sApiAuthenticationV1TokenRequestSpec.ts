// tslint:disable
/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.17.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    IoK8sApiAuthenticationV1BoundObjectReference,
} from './';

/**
 * TokenRequestSpec contains client provided parameters of a token request.
 * @export
 * @interface IoK8sApiAuthenticationV1TokenRequestSpec
 */
export interface IoK8sApiAuthenticationV1TokenRequestSpec {
    /**
     * Audiences are the intendend audiences of the token. A recipient of a token must identitfy themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthenticationV1TokenRequestSpec
     */
    audiences: Array<string>;
    /**
     * @type {IoK8sApiAuthenticationV1BoundObjectReference}
     * @memberof IoK8sApiAuthenticationV1TokenRequestSpec
     */
    boundObjectRef?: IoK8sApiAuthenticationV1BoundObjectReference;
    /**
     * ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the \'expiration\' field in a response.
     * @type {number}
     * @memberof IoK8sApiAuthenticationV1TokenRequestSpec
     */
    expirationSeconds?: number;
}
