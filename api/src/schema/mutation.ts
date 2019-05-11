const Mutation = `
type Mutation {
  ping: String
  createGithubNonce: String!
  createGithubAuthToken(state: String!, code: String!): AccessToken
  trackScmLead(deploymentPreference: String!, emailAddress: String!, scmProvider: String!): String
  refreshGithubTokenMetadata: String
  logout: String

  createShipOpsCluster(title: String!): Cluster
  createGitOpsCluster(title: String!, installationId: Int, gitOpsRef: GitOpsRefInput): Cluster
  updateCluster(clusterId: String!, clusterName: String!, gitOpsRef: GitOpsRefInput): Cluster
  deleteCluster(clusterId: String!): Boolean

  createWatch(stateJSON: String!, owner: String!, clusterID: String, githubPath: String): WatchItem
  updateWatch(watchId: String!, watchName: String, iconUri: String): WatchItem
  deleteWatch(watchId: String!, childWatchIds: [String]): Boolean
  updateStateJSON(slug: String!, stateJSON: String!): WatchItem
  deployWatchVersion(watchId: String!, sequence: Int): Boolean
  saveWatchContributors(id: String!, contributors: [ContributorItemInput]!): [ContributorItem]

  createNotification(watchId: String!, webhook: WebhookNotificationInput, email: EmailNotificationInput): Notification
  updateNotification(watchId: String!, notificationId: String!, webhook: WebhookNotificationInput, email: EmailNotificationInput): Notification
  enableNotification(watchId: String!, notificationId: String!, enabled: Int!): Notification
  deleteNotification(id: String!, isPending: Boolean): Boolean

  createInitSession(upstreamUri: String!, clusterID: String, githubPath: String): InitSession!
  createUnforkSession(upstreamUri: String!, forkUri: String!): UnforkSession!
  createUpdateSession(watchId: ID!): UpdateSession!

  uploadImageWatchBatch(imageList: String!): String

  createFirstPullRequest(watchId: String! notificationId: String, pullRequest: PullRequestNotificationInput): Int
  updatePullRequestHistory(notificationId: String!): [PullRequestHistoryItem]
}
`;

export const all = [Mutation];
