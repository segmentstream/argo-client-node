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

/**
 * UserInfo holds the information about the user needed to implement the user.Info interface.
 * @export
 * @interface IoK8sApiAuthenticationV1UserInfo
 */
export interface IoK8sApiAuthenticationV1UserInfo {
    /**
     * Any additional information provided by the authenticator.
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    extra?: { [key: string]: Array<string>; };
    /**
     * The names of groups this user is a part of.
     * @type {Array<string>}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    groups?: Array<string>;
    /**
     * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    uid?: string;
    /**
     * The name that uniquely identifies this user among all active users.
     * @type {string}
     * @memberof IoK8sApiAuthenticationV1UserInfo
     */
    username?: string;
}
