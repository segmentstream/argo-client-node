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
 * Spec to control the desired behavior of daemon set rolling update.
 * @export
 * @interface IoK8sApiAppsV1beta2RollingUpdateDaemonSet
 */
export interface IoK8sApiAppsV1beta2RollingUpdateDaemonSet {
    /**
     * IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2RollingUpdateDaemonSet
     */
    maxUnavailable?: string;
}
