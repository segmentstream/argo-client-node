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
    IoK8sApiAdmissionregistrationV1ValidatingWebhook,
    IoK8sApimachineryPkgApisMetaV1ObjectMeta,
} from './';

/**
 * ValidatingWebhookConfiguration describes the configuration of and admission webhook that accept or reject and object without changing it.
 * @export
 * @interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
 */
export interface IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ObjectMeta}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    /**
     * Webhooks is a list of webhooks and the affected resources and operations.
     * @type {Array<IoK8sApiAdmissionregistrationV1ValidatingWebhook>}
     * @memberof IoK8sApiAdmissionregistrationV1ValidatingWebhookConfiguration
     */
    webhooks?: Array<IoK8sApiAdmissionregistrationV1ValidatingWebhook>;
}
