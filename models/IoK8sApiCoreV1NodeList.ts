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
    IoK8sApiCoreV1Node,
    IoK8sApimachineryPkgApisMetaV1ListMeta,
} from './';

/**
 * NodeList is the whole list of all Nodes which have been registered with master.
 * @export
 * @interface IoK8sApiCoreV1NodeList
 */
export interface IoK8sApiCoreV1NodeList {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeList
     */
    apiVersion?: string;
    /**
     * List of nodes
     * @type {Array<IoK8sApiCoreV1Node>}
     * @memberof IoK8sApiCoreV1NodeList
     */
    items: Array<IoK8sApiCoreV1Node>;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiCoreV1NodeList
     */
    kind?: string;
    /**
     * @type {IoK8sApimachineryPkgApisMetaV1ListMeta}
     * @memberof IoK8sApiCoreV1NodeList
     */
    metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
