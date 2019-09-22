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
    IoK8sApiCoreV1PersistentVolumeClaimCondition,
} from './';

/**
 * PersistentVolumeClaimStatus is the current status of a persistent volume claim.
 * @export
 * @interface IoK8sApiCoreV1PersistentVolumeClaimStatus
 */
export interface IoK8sApiCoreV1PersistentVolumeClaimStatus {
    /**
     * AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
     * @type {Array<string>}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    accessModes?: Array<string>;
    /**
     * Represents the actual resources of the underlying volume.
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    capacity?: { [key: string]: string; };
    /**
     * Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to \'ResizeStarted\'.
     * @type {Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    conditions?: Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>;
    /**
     * Phase represents the current phase of PersistentVolumeClaim.
     * @type {string}
     * @memberof IoK8sApiCoreV1PersistentVolumeClaimStatus
     */
    phase?: string;
}
