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
 * volumeDevice describes a mapping of a raw block device within a container.
 * @export
 * @interface IoK8sApiCoreV1VolumeDevice
 */
export interface IoK8sApiCoreV1VolumeDevice {
    /**
     * devicePath is the path inside of the container that the device will be mapped to.
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeDevice
     */
    devicePath: string;
    /**
     * name must match the name of a persistentVolumeClaim in the pod
     * @type {string}
     * @memberof IoK8sApiCoreV1VolumeDevice
     */
    name: string;
}
