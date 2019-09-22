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
    IoK8sApiStorageV1VolumeAttachmentSpec,
    IoK8sApiStorageV1VolumeAttachmentStatus,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * VolumeAttachment captures the intent to attach or detach the specified volume to/from the specified node.  VolumeAttachment objects are non-namespaced.
 * @export
 * @interface IoK8sApiStorageV1VolumeAttachment
 */
export interface IoK8sApiStorageV1VolumeAttachment {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * @type {IoK8sApiStorageV1VolumeAttachmentSpec}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    spec: IoK8sApiStorageV1VolumeAttachmentSpec;
    /**
     * @type {IoK8sApiStorageV1VolumeAttachmentStatus}
     * @memberof IoK8sApiStorageV1VolumeAttachment
     */
    status?: IoK8sApiStorageV1VolumeAttachmentStatus;
}
