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
    IoK8sApiAppsV1beta1RollbackConfig,
} from './';

/**
 * DEPRECATED. DeploymentRollback stores the information required to rollback a deployment.
 * @export
 * @interface IoK8sApiAppsV1beta1DeploymentRollback
 */
export interface IoK8sApiAppsV1beta1DeploymentRollback {
    /**
     * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1DeploymentRollback
     */
    apiVersion?: string;
    /**
     * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1DeploymentRollback
     */
    kind?: string;
    /**
     * Required: This must match the Name of a deployment.
     * @type {string}
     * @memberof IoK8sApiAppsV1beta1DeploymentRollback
     */
    name: string;
    /**
     * @type {IoK8sApiAppsV1beta1RollbackConfig}
     * @memberof IoK8sApiAppsV1beta1DeploymentRollback
     */
    rollbackTo: IoK8sApiAppsV1beta1RollbackConfig;
    /**
     * The annotations to be updated to a deployment
     * @type {{ [key: string]: string; }}
     * @memberof IoK8sApiAppsV1beta1DeploymentRollback
     */
    updatedAnnotations?: { [key: string]: string; };
}
