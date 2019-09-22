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
    IoK8sApiAppsV1ReplicaSetCondition,
} from './';

/**
 * ReplicaSetStatus represents the current status of a ReplicaSet.
 * @export
 * @interface IoK8sApiAppsV1ReplicaSetStatus
 */
export interface IoK8sApiAppsV1ReplicaSetStatus {
    /**
     * The number of available replicas (ready for at least minReadySeconds) for this replica set.
     * @type {number}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    availableReplicas?: number;
    /**
     * Represents the latest available observations of a replica set\'s current state.
     * @type {Array<IoK8sApiAppsV1ReplicaSetCondition>}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    conditions?: Array<IoK8sApiAppsV1ReplicaSetCondition>;
    /**
     * The number of pods that have labels matching the labels of the pod template of the replicaset.
     * @type {number}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    fullyLabeledReplicas?: number;
    /**
     * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
     * @type {number}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    observedGeneration?: number;
    /**
     * The number of ready replicas for this replica set.
     * @type {number}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    readyReplicas?: number;
    /**
     * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
     * @type {number}
     * @memberof IoK8sApiAppsV1ReplicaSetStatus
     */
    replicas: number;
}
