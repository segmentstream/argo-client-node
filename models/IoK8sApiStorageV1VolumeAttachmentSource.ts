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
    IoK8sApiCoreV1PersistentVolumeSpec,
} from './';

/**
 * VolumeAttachmentSource represents a volume that should be attached. Right now only PersistenVolumes can be attached via external attacher, in future we may allow also inline volumes in pods. Exactly one member can be set.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachmentSource
 */
export interface IoK8sApiStorageV1VolumeAttachmentSource {
    /**
     * @type {IoK8sApiCoreV1PersistentVolumeSpec}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSource
     */
    inlineVolumeSpec?: IoK8sApiCoreV1PersistentVolumeSpec;
    /**
     * Name of the persistent volume to attach.
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachmentSource
     */
    persistentVolumeName?: string;
}
