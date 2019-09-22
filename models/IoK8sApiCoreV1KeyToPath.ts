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
 * Maps a string key to a path within a volume.
 * @export
 * @interface IoK8sApiCoreV1KeyToPath
 */
export interface IoK8sApiCoreV1KeyToPath {
    /**
     * The key to project.
     * @type {string}
     * @memberof IoK8sApiCoreV1KeyToPath
     */
    key: string;
    /**
     * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
     * @type {number}
     * @memberof IoK8sApiCoreV1KeyToPath
     */
    mode?: number;
    /**
     * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element \'..\'. May not start with the string \'..\'.
     * @type {string}
     * @memberof IoK8sApiCoreV1KeyToPath
     */
    path: string;
}
