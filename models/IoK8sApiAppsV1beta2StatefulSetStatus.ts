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
    IoK8sApiAppsV1beta2StatefulSetCondition,
} from './';

/**
 * StatefulSetStatus represents the current state of a StatefulSet.
 * @export
 * @interface IoK8sApiAppsV1beta2StatefulSetStatus
 */
export interface IoK8sApiAppsV1beta2StatefulSetStatus {
    /**
     * collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    collisionCount?: number;
    /**
     * Represents the latest available observations of a statefulset\'s current state.
     * @type {Array<IoK8sApiAppsV1beta2StatefulSetCondition>}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    conditions?: Array<IoK8sApiAppsV1beta2StatefulSetCondition>;
    /**
     * currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    currentReplicas?: number;
    /**
     * currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas).
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    currentRevision?: string;
    /**
     * observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\'s generation, which is updated on mutation by the API Server.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    observedGeneration?: number;
    /**
     * readyReplicas is the number of Pods created by the StatefulSet controller that have a Ready Condition.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    readyReplicas?: number;
    /**
     * replicas is the number of Pods created by the StatefulSet controller.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    replicas: number;
    /**
     * updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas)
     * @type {string}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    updateRevision?: string;
    /**
     * updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision.
     * @type {number}
     * @memberof IoK8sApiAppsV1beta2StatefulSetStatus
     */
    updatedReplicas?: number;
}
