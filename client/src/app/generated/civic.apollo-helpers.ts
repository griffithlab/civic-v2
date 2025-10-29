import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AcceptRevisionsActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'revisions' | 'subject' | 'supersededRevisions' | 'user' | 'verbiage' | AcceptRevisionsActivityKeySpecifier)[];
export type AcceptRevisionsActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	supersededRevisions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AcceptRevisionsPayloadKeySpecifier = ('clientMutationId' | 'revisions' | 'supersededRevisions' | AcceptRevisionsPayloadKeySpecifier)[];
export type AcceptRevisionsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	supersededRevisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AcmgCodeKeySpecifier = ('code' | 'description' | 'id' | 'name' | 'tooltip' | AcmgCodeKeySpecifier)[];
export type AcmgCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tooltip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityInterfaceKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | ActivityInterfaceKeySpecifier)[];
export type ActivityInterfaceFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityInterfaceConnectionKeySpecifier = ('activityTypes' | 'edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'participatingOrganizations' | 'subjectTypes' | 'totalCount' | 'unfilteredCount' | 'uniqueParticipants' | ActivityInterfaceConnectionKeySpecifier)[];
export type ActivityInterfaceConnectionFieldPolicy = {
	activityTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	participatingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	subjectTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unfilteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueParticipants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityInterfaceEdgeKeySpecifier = ('cursor' | 'node' | ActivityInterfaceEdgeKeySpecifier)[];
export type ActivityInterfaceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | AddCommentPayloadKeySpecifier)[];
export type AddCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddDiseasePayloadKeySpecifier = ('clientMutationId' | 'disease' | 'new' | AddDiseasePayloadKeySpecifier)[];
export type AddDiseasePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddRemoteCitationPayloadKeySpecifier = ('clientMutationId' | 'newSource' | AddRemoteCitationPayloadKeySpecifier)[];
export type AddRemoteCitationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	newSource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddTherapyPayloadKeySpecifier = ('clientMutationId' | 'new' | 'therapy' | AddTherapyPayloadKeySpecifier)[];
export type AddTherapyPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	therapy?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvancedSearchResultKeySpecifier = ('originalQuery' | 'permalinkId' | 'resultIds' | 'searchEndpoint' | AdvancedSearchResultKeySpecifier)[];
export type AdvancedSearchResultFieldPolicy = {
	originalQuery?: FieldPolicy<any> | FieldReadFunction<any>,
	permalinkId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultIds?: FieldPolicy<any> | FieldReadFunction<any>,
	searchEndpoint?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApiKeyKeySpecifier = ('createdAt' | 'id' | 'reminder' | 'token' | ApiKeyKeySpecifier)[];
export type ApiKeyFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	reminder?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssertionKeySpecifier = ('acceptanceEvent' | 'acmgCodes' | 'ampLevel' | 'assertionDirection' | 'assertionType' | 'clingenCodes' | 'comments' | 'description' | 'disease' | 'endorsements' | 'events' | 'evidenceItems' | 'evidenceItemsCount' | 'fdaCompanionTest' | 'fdaCompanionTestLastUpdated' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfile' | 'name' | 'nccnGuideline' | 'nccnGuidelineVersion' | 'openRevisionCount' | 'phenotypes' | 'regulatoryApproval' | 'regulatoryApprovalLastUpdated' | 'rejectionEvent' | 'revisions' | 'significance' | 'status' | 'submissionActivity' | 'submissionEvent' | 'summary' | 'therapies' | 'therapyInteractionType' | 'variantOrigin' | AssertionKeySpecifier)[];
export type AssertionFieldPolicy = {
	acceptanceEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	acmgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	ampLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionType?: FieldPolicy<any> | FieldReadFunction<any>,
	clingenCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	endorsements?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemsCount?: FieldPolicy<any> | FieldReadFunction<any>,
	fdaCompanionTest?: FieldPolicy<any> | FieldReadFunction<any>,
	fdaCompanionTestLastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nccnGuideline?: FieldPolicy<any> | FieldReadFunction<any>,
	nccnGuidelineVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	regulatoryApproval?: FieldPolicy<any> | FieldReadFunction<any>,
	regulatoryApprovalLastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	significance?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyInteractionType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOrigin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssertionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | AssertionConnectionKeySpecifier)[];
export type AssertionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssertionEdgeKeySpecifier = ('cursor' | 'node' | AssertionEdgeKeySpecifier)[];
export type AssertionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseClinicalTrialKeySpecifier = ('evidenceCount' | 'id' | 'link' | 'name' | 'nctId' | 'sourceCount' | 'url' | BrowseClinicalTrialKeySpecifier)[];
export type BrowseClinicalTrialFieldPolicy = {
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nctId?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseClinicalTrialConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseClinicalTrialConnectionKeySpecifier)[];
export type BrowseClinicalTrialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseClinicalTrialEdgeKeySpecifier = ('cursor' | 'node' | BrowseClinicalTrialEdgeKeySpecifier)[];
export type BrowseClinicalTrialEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDiseaseKeySpecifier = ('assertionCount' | 'deprecated' | 'diseaseAliases' | 'diseaseUrl' | 'displayName' | 'doid' | 'evidenceItemCount' | 'featureCount' | 'features' | 'id' | 'link' | 'name' | 'variantCount' | BrowseDiseaseKeySpecifier)[];
export type BrowseDiseaseFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	doid?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	featureCount?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDiseaseConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseDiseaseConnectionKeySpecifier)[];
export type BrowseDiseaseConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDiseaseEdgeKeySpecifier = ('cursor' | 'node' | BrowseDiseaseEdgeKeySpecifier)[];
export type BrowseDiseaseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseFeatureKeySpecifier = ('assertionCount' | 'deprecated' | 'description' | 'diseases' | 'evidenceItemCount' | 'featureAliases' | 'featureInstanceId' | 'featureInstanceType' | 'flagged' | 'flags' | 'fullName' | 'id' | 'link' | 'molecularProfileCount' | 'name' | 'therapies' | 'variantCount' | BrowseFeatureKeySpecifier)[];
export type BrowseFeatureFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	featureAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstanceId?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstanceType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileCount?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseFeatureConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseFeatureConnectionKeySpecifier)[];
export type BrowseFeatureConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseFeatureEdgeKeySpecifier = ('cursor' | 'node' | BrowseFeatureEdgeKeySpecifier)[];
export type BrowseFeatureEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseMolecularProfileKeySpecifier = ('aliases' | 'assertionCount' | 'deprecated' | 'diseases' | 'evidenceItemCount' | 'id' | 'link' | 'molecularProfileScore' | 'name' | 'therapies' | 'variantCount' | 'variants' | BrowseMolecularProfileKeySpecifier)[];
export type BrowseMolecularProfileFieldPolicy = {
	aliases?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileScore?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseMolecularProfileConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseMolecularProfileConnectionKeySpecifier)[];
export type BrowseMolecularProfileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseMolecularProfileEdgeKeySpecifier = ('cursor' | 'node' | BrowseMolecularProfileEdgeKeySpecifier)[];
export type BrowseMolecularProfileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseOrganizationKeySpecifier = ('activityCount' | 'childOrganizations' | 'createdAt' | 'description' | 'id' | 'memberCount' | 'mostRecentActivityTimestamp' | 'name' | 'parentId' | 'updatedAt' | 'url' | BrowseOrganizationKeySpecifier)[];
export type BrowseOrganizationFieldPolicy = {
	activityCount?: FieldPolicy<any> | FieldReadFunction<any>,
	childOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	memberCount?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseOrganizationConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseOrganizationConnectionKeySpecifier)[];
export type BrowseOrganizationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseOrganizationEdgeKeySpecifier = ('cursor' | 'node' | BrowseOrganizationEdgeKeySpecifier)[];
export type BrowseOrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowsePhenotypeKeySpecifier = ('assertionCount' | 'evidenceCount' | 'hpoId' | 'id' | 'link' | 'name' | 'url' | BrowsePhenotypeKeySpecifier)[];
export type BrowsePhenotypeFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowsePhenotypeConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowsePhenotypeConnectionKeySpecifier)[];
export type BrowsePhenotypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowsePhenotypeEdgeKeySpecifier = ('cursor' | 'node' | BrowsePhenotypeEdgeKeySpecifier)[];
export type BrowsePhenotypeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseSourceKeySpecifier = ('authors' | 'citation' | 'citationId' | 'clinicalTrials' | 'deprecated' | 'displayType' | 'evidenceItemCount' | 'id' | 'journal' | 'link' | 'name' | 'openAccess' | 'publicationYear' | 'retractionNature' | 'sourceSuggestionCount' | 'sourceType' | 'sourceUrl' | BrowseSourceKeySpecifier)[];
export type BrowseSourceFieldPolicy = {
	authors?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionNature?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseSourceConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseSourceConnectionKeySpecifier)[];
export type BrowseSourceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseSourceEdgeKeySpecifier = ('cursor' | 'node' | BrowseSourceEdgeKeySpecifier)[];
export type BrowseSourceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseTherapyKeySpecifier = ('assertionCount' | 'deprecated' | 'evidenceCount' | 'id' | 'link' | 'name' | 'ncitId' | 'therapyAliases' | 'therapyUrl' | BrowseTherapyKeySpecifier)[];
export type BrowseTherapyFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseTherapyConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseTherapyConnectionKeySpecifier)[];
export type BrowseTherapyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseTherapyEdgeKeySpecifier = ('cursor' | 'node' | BrowseTherapyEdgeKeySpecifier)[];
export type BrowseTherapyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseUserKeySpecifier = ('apiKeys' | 'areaOfExpertise' | 'bio' | 'country' | 'displayName' | 'email' | 'events' | 'evidenceCount' | 'facebookProfile' | 'id' | 'joinDate' | 'linkedinProfile' | 'mostRecentActivityTimestamp' | 'mostRecentConflictOfInterestStatement' | 'mostRecentEvent' | 'mostRecentOrganizationId' | 'name' | 'notifications' | 'orcid' | 'organizations' | 'organizationsWithEndorsementPrivileges' | 'profileImagePath' | 'ranks' | 'revisionCount' | 'role' | 'statsHash' | 'twitterHandle' | 'url' | 'username' | BrowseUserKeySpecifier)[];
export type BrowseUserFieldPolicy = {
	apiKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	areaOfExpertise?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	joinDate?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedinProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentConflictOfInterestStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentOrganizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	orcid?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationsWithEndorsementPrivileges?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	ranks?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	statsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseUserConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseUserConnectionKeySpecifier)[];
export type BrowseUserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseUserEdgeKeySpecifier = ('cursor' | 'node' | BrowseUserEdgeKeySpecifier)[];
export type BrowseUserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantKeySpecifier = ('aliases' | 'category' | 'deprecated' | 'diseases' | 'evidenceItemCount' | 'featureDeprecated' | 'featureFlagged' | 'featureId' | 'featureLink' | 'featureName' | 'flagged' | 'id' | 'link' | 'name' | 'therapies' | 'variantTypes' | BrowseVariantKeySpecifier)[];
export type BrowseVariantFieldPolicy = {
	aliases?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	featureDeprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	featureFlagged?: FieldPolicy<any> | FieldReadFunction<any>,
	featureId?: FieldPolicy<any> | FieldReadFunction<any>,
	featureLink?: FieldPolicy<any> | FieldReadFunction<any>,
	featureName?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantConnectionKeySpecifier)[];
export type BrowseVariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantEdgeKeySpecifier = ('cursor' | 'node' | BrowseVariantEdgeKeySpecifier)[];
export type BrowseVariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantGroupKeySpecifier = ('evidenceItemCount' | 'featureNames' | 'id' | 'link' | 'name' | 'variantCount' | 'variantNames' | BrowseVariantGroupKeySpecifier)[];
export type BrowseVariantGroupFieldPolicy = {
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	featureNames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>,
	variantNames?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantGroupConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantGroupConnectionKeySpecifier)[];
export type BrowseVariantGroupConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantGroupEdgeKeySpecifier = ('cursor' | 'node' | BrowseVariantGroupEdgeKeySpecifier)[];
export type BrowseVariantGroupEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantTypeKeySpecifier = ('id' | 'link' | 'name' | 'soid' | 'url' | 'variantCount' | BrowseVariantTypeKeySpecifier)[];
export type BrowseVariantTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	soid?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantTypeConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantTypeConnectionKeySpecifier)[];
export type BrowseVariantTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantTypeEdgeKeySpecifier = ('cursor' | 'node' | BrowseVariantTypeEdgeKeySpecifier)[];
export type BrowseVariantTypeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CivicTimepointStatsKeySpecifier = ('assertions' | 'comments' | 'diseases' | 'evidenceItems' | 'features' | 'molecularProfiles' | 'revisions' | 'sources' | 'therapies' | 'users' | 'variants' | CivicTimepointStatsKeySpecifier)[];
export type CivicTimepointStatsFieldPolicy = {
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	features?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClingenCodeKeySpecifier = ('code' | 'description' | 'exclusive' | 'id' | 'name' | 'tooltip' | ClingenCodeKeySpecifier)[];
export type ClingenCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	exclusive?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	tooltip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClinicalTrialKeySpecifier = ('description' | 'id' | 'link' | 'name' | 'nctId' | 'url' | ClinicalTrialKeySpecifier)[];
export type ClinicalTrialFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nctId?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoiKeySpecifier = ('coiPresent' | 'coiStatement' | 'coiStatus' | 'createdAt' | 'expiresAt' | 'id' | CoiKeySpecifier)[];
export type CoiFieldPolicy = {
	coiPresent?: FieldPolicy<any> | FieldReadFunction<any>,
	coiStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	coiStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('comment' | 'commentable' | 'commenter' | 'createdAt' | 'creationEvent' | 'deleted' | 'deletedAt' | 'events' | 'id' | 'link' | 'name' | 'parsedComment' | 'title' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commentable?: FieldPolicy<any> | FieldReadFunction<any>,
	commenter?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedComment?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentActivityKeySpecifier = ('comment' | 'createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | CommentActivityKeySpecifier)[];
export type CommentActivityFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'mentionedEntities' | 'mentionedRoles' | 'mentionedUsers' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | 'unfilteredCountForSubject' | 'uniqueCommenters' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	mentionedEntities?: FieldPolicy<any> | FieldReadFunction<any>,
	mentionedRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	mentionedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unfilteredCountForSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueCommenters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTagSegmentKeySpecifier = ('displayName' | 'entityId' | 'feature' | 'link' | 'revisionSetId' | 'tagType' | CommentTagSegmentKeySpecifier)[];
export type CommentTagSegmentFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	entityId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>,
	tagType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTagSegmentFlaggedKeySpecifier = ('displayName' | 'entityId' | 'feature' | 'flagged' | 'link' | 'revisionSetId' | 'tagType' | CommentTagSegmentFlaggedKeySpecifier)[];
export type CommentTagSegmentFlaggedFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	entityId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>,
	tagType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTagSegmentFlaggedAndDeprecatedKeySpecifier = ('deprecated' | 'displayName' | 'entityId' | 'feature' | 'flagged' | 'link' | 'revisionSetId' | 'tagType' | CommentTagSegmentFlaggedAndDeprecatedKeySpecifier)[];
export type CommentTagSegmentFlaggedAndDeprecatedFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	entityId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>,
	tagType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTagSegmentFlaggedAndWithStatusKeySpecifier = ('displayName' | 'entityId' | 'feature' | 'flagged' | 'link' | 'revisionSetId' | 'status' | 'tagType' | CommentTagSegmentFlaggedAndWithStatusKeySpecifier)[];
export type CommentTagSegmentFlaggedAndWithStatusFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	entityId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tagType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentTextSegmentKeySpecifier = ('text' | CommentTextSegmentKeySpecifier)[];
export type CommentTextSegmentFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentableKeySpecifier = ('comments' | 'id' | 'lastCommentEvent' | 'link' | 'name' | CommentableKeySpecifier)[];
export type CommentableFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributingUserKeySpecifier = ('lastActionDate' | 'totalActionCount' | 'uniqueActions' | 'user' | ContributingUserKeySpecifier)[];
export type ContributingUserFieldPolicy = {
	lastActionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	totalActionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueActions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributingUsersSummaryKeySpecifier = ('curators' | 'editors' | ContributingUsersSummaryKeySpecifier)[];
export type ContributingUsersSummaryFieldPolicy = {
	curators?: FieldPolicy<any> | FieldReadFunction<any>,
	editors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributionKeySpecifier = ('action' | 'count' | ContributionKeySpecifier)[];
export type ContributionFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('id' | 'iso' | 'name' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	iso?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateComplexMolecularProfileActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | CreateComplexMolecularProfileActivityKeySpecifier)[];
export type CreateComplexMolecularProfileActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFeatureActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | CreateFeatureActivityKeySpecifier)[];
export type CreateFeatureActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFeaturePayloadKeySpecifier = ('clientMutationId' | 'feature' | 'new' | CreateFeaturePayloadKeySpecifier)[];
export type CreateFeaturePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFusionFeaturePayloadKeySpecifier = ('clientMutationId' | 'feature' | 'new' | CreateFusionFeaturePayloadKeySpecifier)[];
export type CreateFusionFeaturePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateFusionVariantPayloadKeySpecifier = ('clientMutationId' | 'molecularProfile' | 'new' | 'variant' | CreateFusionVariantPayloadKeySpecifier)[];
export type CreateFusionVariantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMolecularProfilePayloadKeySpecifier = ('clientMutationId' | 'molecularProfile' | CreateMolecularProfilePayloadKeySpecifier)[];
export type CreateMolecularProfilePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVariantActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'molecularProfile' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | CreateVariantActivityKeySpecifier)[];
export type CreateVariantActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateVariantPayloadKeySpecifier = ('clientMutationId' | 'molecularProfile' | 'new' | 'variant' | CreateVariantPayloadKeySpecifier)[];
export type CreateVariantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	new?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DataReleaseKeySpecifier = ('acceptedAndSubmittedVariantsVcf' | 'acceptedVariantsVcf' | 'assertionTsv' | 'evidenceTsv' | 'featureTsv' | 'molecularProfileTsv' | 'name' | 'variantGroupTsv' | 'variantTsv' | DataReleaseKeySpecifier)[];
export type DataReleaseFieldPolicy = {
	acceptedAndSubmittedVariantsVcf?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptedVariantsVcf?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionTsv?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceTsv?: FieldPolicy<any> | FieldReadFunction<any>,
	featureTsv?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileTsv?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantGroupTsv?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTsv?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCommentActivityKeySpecifier = ('comment' | 'createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | DeleteCommentActivityKeySpecifier)[];
export type DeleteCommentActivityFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | DeleteCommentPayloadKeySpecifier)[];
export type DeleteCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateComplexMolecularProfileActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | DeprecateComplexMolecularProfileActivityKeySpecifier)[];
export type DeprecateComplexMolecularProfileActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateComplexMolecularProfilePayloadKeySpecifier = ('clientMutationId' | 'molecularProfile' | DeprecateComplexMolecularProfilePayloadKeySpecifier)[];
export type DeprecateComplexMolecularProfilePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateFeatureActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'molecularProfiles' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'variants' | 'verbiage' | DeprecateFeatureActivityKeySpecifier)[];
export type DeprecateFeatureActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateFeaturePayloadKeySpecifier = ('clientMutationId' | 'feature' | 'newlyDeprecatedMolecularProfiles' | 'newlyDeprecatedVariants' | DeprecateFeaturePayloadKeySpecifier)[];
export type DeprecateFeaturePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	newlyDeprecatedMolecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	newlyDeprecatedVariants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateVariantActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'molecularProfiles' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | DeprecateVariantActivityKeySpecifier)[];
export type DeprecateVariantActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeprecateVariantPayloadKeySpecifier = ('clientMutationId' | 'newlyDeprecatedMolecularProfiles' | 'variant' | DeprecateVariantPayloadKeySpecifier)[];
export type DeprecateVariantPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	newlyDeprecatedMolecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiseaseKeySpecifier = ('deprecated' | 'diseaseAliases' | 'diseaseUrl' | 'displayName' | 'doid' | 'id' | 'link' | 'myDiseaseInfo' | 'name' | DiseaseKeySpecifier)[];
export type DiseaseFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	doid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	myDiseaseInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiseaseConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | DiseaseConnectionKeySpecifier)[];
export type DiseaseConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiseaseEdgeKeySpecifier = ('cursor' | 'node' | DiseaseEdgeKeySpecifier)[];
export type DiseaseEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiseasePopoverKeySpecifier = ('assertionCount' | 'deprecated' | 'diseaseAliases' | 'diseaseUrl' | 'displayName' | 'doid' | 'evidenceItemCount' | 'id' | 'link' | 'molecularProfileCount' | 'myDiseaseInfo' | 'name' | DiseasePopoverKeySpecifier)[];
export type DiseasePopoverFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	doid?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileCount?: FieldPolicy<any> | FieldReadFunction<any>,
	myDiseaseInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DownloadableFileKeySpecifier = ('filename' | 'path' | DownloadableFileKeySpecifier)[];
export type DownloadableFileFieldPolicy = {
	filename?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EditUserPayloadKeySpecifier = ('clientMutationId' | 'user' | EditUserPayloadKeySpecifier)[];
export type EditUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EndorseAssertionActivityKeySpecifier = ('assertion' | 'createdAt' | 'endorsement' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | EndorseAssertionActivityKeySpecifier)[];
export type EndorseAssertionActivityFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endorsement?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EndorseAssertionPayloadKeySpecifier = ('assertion' | 'clientMutationId' | EndorseAssertionPayloadKeySpecifier)[];
export type EndorseAssertionPayloadFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EndorsementKeySpecifier = ('assertion' | 'createdAt' | 'endorsementActivity' | 'id' | 'lastReviewed' | 'organization' | 'readyForClinvarSubmission' | 'revocationActivity' | 'status' | 'updatedAt' | 'user' | EndorsementKeySpecifier)[];
export type EndorsementFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endorsementActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastReviewed?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	readyForClinvarSubmission?: FieldPolicy<any> | FieldReadFunction<any>,
	revocationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EndorsementConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | EndorsementConnectionKeySpecifier)[];
export type EndorsementConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EndorsementEdgeKeySpecifier = ('cursor' | 'node' | EndorsementEdgeKeySpecifier)[];
export type EndorsementEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('action' | 'createdAt' | 'id' | 'organization' | 'originatingObject' | 'originatingUser' | 'subject' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	originatingObject?: FieldPolicy<any> | FieldReadFunction<any>,
	originatingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventConnectionKeySpecifier = ('edges' | 'eventTypes' | 'nodes' | 'pageCount' | 'pageInfo' | 'participatingOrganizations' | 'totalCount' | 'unfilteredCount' | 'uniqueParticipants' | EventConnectionKeySpecifier)[];
export type EventConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	participatingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unfilteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueParticipants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventEdgeKeySpecifier = ('cursor' | 'node' | EventEdgeKeySpecifier)[];
export type EventEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventOriginObjectKeySpecifier = ('id' | 'link' | 'name' | EventOriginObjectKeySpecifier)[];
export type EventOriginObjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventSubjectKeySpecifier = ('events' | 'id' | 'link' | 'name' | EventSubjectKeySpecifier)[];
export type EventSubjectFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventSubjectWithCountKeySpecifier = ('occuranceCount' | 'subject' | EventSubjectWithCountKeySpecifier)[];
export type EventSubjectWithCountFieldPolicy = {
	occuranceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemKeySpecifier = ('acceptanceEvent' | 'assertions' | 'comments' | 'description' | 'disease' | 'events' | 'evidenceDirection' | 'evidenceLevel' | 'evidenceRating' | 'evidenceType' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfile' | 'name' | 'openRevisionCount' | 'phenotypes' | 'rejectionEvent' | 'revisions' | 'significance' | 'source' | 'status' | 'submissionActivity' | 'submissionEvent' | 'therapies' | 'therapyInteractionType' | 'variantHgvs' | 'variantOrigin' | EvidenceItemKeySpecifier)[];
export type EvidenceItemFieldPolicy = {
	acceptanceEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceRating?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	significance?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyInteractionType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantHgvs?: FieldPolicy<any> | FieldReadFunction<any>,
	variantOrigin?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | EvidenceItemConnectionKeySpecifier)[];
export type EvidenceItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemEdgeKeySpecifier = ('cursor' | 'node' | EvidenceItemEdgeKeySpecifier)[];
export type EvidenceItemEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemsByStatusKeySpecifier = ('acceptedCount' | 'molecularProfileId' | 'rejectedCount' | 'submittedCount' | EvidenceItemsByStatusKeySpecifier)[];
export type EvidenceItemsByStatusFieldPolicy = {
	acceptedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectedCount?: FieldPolicy<any> | FieldReadFunction<any>,
	submittedCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemsByTypeKeySpecifier = ('diagnosticCount' | 'functionalCount' | 'molecularProfileId' | 'oncogenicCount' | 'predictiveCount' | 'predisposingCount' | 'prognosticCount' | EvidenceItemsByTypeKeySpecifier)[];
export type EvidenceItemsByTypeFieldPolicy = {
	diagnosticCount?: FieldPolicy<any> | FieldReadFunction<any>,
	functionalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	oncogenicCount?: FieldPolicy<any> | FieldReadFunction<any>,
	predictiveCount?: FieldPolicy<any> | FieldReadFunction<any>,
	predisposingCount?: FieldPolicy<any> | FieldReadFunction<any>,
	prognosticCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ExonCoordinateKeySpecifier = ('chromosome' | 'coordinateType' | 'ensemblId' | 'ensemblVersion' | 'events' | 'exon' | 'exonOffset' | 'exonOffsetDirection' | 'id' | 'lastAcceptedRevisionEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'openRevisionCount' | 'referenceBuild' | 'representativeTranscript' | 'revisions' | 'start' | 'stop' | 'strand' | ExonCoordinateKeySpecifier)[];
export type ExonCoordinateFieldPolicy = {
	chromosome?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinateType?: FieldPolicy<any> | FieldReadFunction<any>,
	ensemblId?: FieldPolicy<any> | FieldReadFunction<any>,
	ensemblVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	exon?: FieldPolicy<any> | FieldReadFunction<any>,
	exonOffset?: FieldPolicy<any> | FieldReadFunction<any>,
	exonOffsetDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceBuild?: FieldPolicy<any> | FieldReadFunction<any>,
	representativeTranscript?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>,
	strand?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'description' | 'events' | 'featureAliases' | 'featureInstance' | 'featureType' | 'flagged' | 'flags' | 'fullName' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'ncitDetails' | 'ncitId' | 'openRevisionCount' | 'revisions' | 'sources' | 'variants' | FactorKeySpecifier)[];
export type FactorFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	featureAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstance?: FieldPolicy<any> | FieldReadFunction<any>,
	featureType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | FactorConnectionKeySpecifier)[];
export type FactorConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorEdgeKeySpecifier = ('cursor' | 'node' | FactorEdgeKeySpecifier)[];
export type FactorEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorVariantKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'events' | 'feature' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfiles' | 'name' | 'ncitDetails' | 'ncitId' | 'openRevisionCount' | 'revisions' | 'singleVariantMolecularProfile' | 'singleVariantMolecularProfileId' | 'variantAliases' | 'variantTypes' | FactorVariantKeySpecifier)[];
export type FactorVariantFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorVariantConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | FactorVariantConnectionKeySpecifier)[];
export type FactorVariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FactorVariantEdgeKeySpecifier = ('cursor' | 'node' | FactorVariantEdgeKeySpecifier)[];
export type FactorVariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FdaCodeKeySpecifier = ('code' | 'description' | FdaCodeKeySpecifier)[];
export type FdaCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeatureKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'description' | 'events' | 'featureAliases' | 'featureInstance' | 'featureType' | 'flagged' | 'flags' | 'fullName' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'openRevisionCount' | 'revisions' | 'sources' | 'variants' | FeatureKeySpecifier)[];
export type FeatureFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	featureAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstance?: FieldPolicy<any> | FieldReadFunction<any>,
	featureType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldNameKeySpecifier = ('displayName' | 'name' | FieldNameKeySpecifier)[];
export type FieldNameFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldValidationErrorKeySpecifier = ('error' | 'fieldName' | FieldValidationErrorKeySpecifier)[];
export type FieldValidationErrorFieldPolicy = {
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagKeySpecifier = ('comments' | 'createdAt' | 'events' | 'flaggable' | 'flaggingUser' | 'id' | 'lastCommentEvent' | 'link' | 'name' | 'openActivity' | 'resolutionActivity' | 'resolvingUser' | 'state' | FlagKeySpecifier)[];
export type FlagFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggable?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	resolutionActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | 'unfilteredCountForSubject' | 'uniqueFlaggingUsers' | 'uniqueResolvingUsers' | FlagConnectionKeySpecifier)[];
export type FlagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unfilteredCountForSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueFlaggingUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueResolvingUsers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagEdgeKeySpecifier = ('cursor' | 'node' | FlagEdgeKeySpecifier)[];
export type FlagEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagEntityActivityKeySpecifier = ('createdAt' | 'events' | 'flag' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | FlagEntityActivityKeySpecifier)[];
export type FlagEntityActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagEntityPayloadKeySpecifier = ('clientMutationId' | 'flag' | FlagEntityPayloadKeySpecifier)[];
export type FlagEntityPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlaggableKeySpecifier = ('flagged' | 'flags' | 'id' | 'link' | 'name' | FlaggableKeySpecifier)[];
export type FlaggableFieldPolicy = {
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FusionKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'description' | 'events' | 'featureAliases' | 'featureInstance' | 'featureType' | 'fivePrimeGene' | 'fivePrimePartnerStatus' | 'flagged' | 'flags' | 'fullName' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'openRevisionCount' | 'revisions' | 'sources' | 'threePrimeGene' | 'threePrimePartnerStatus' | 'variants' | FusionKeySpecifier)[];
export type FusionFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	featureAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstance?: FieldPolicy<any> | FieldReadFunction<any>,
	featureType?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimeGene?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimePartnerStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimeGene?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimePartnerStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FusionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | FusionConnectionKeySpecifier)[];
export type FusionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FusionEdgeKeySpecifier = ('cursor' | 'node' | FusionEdgeKeySpecifier)[];
export type FusionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FusionVariantKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'events' | 'feature' | 'fivePrimeCoordinates' | 'fivePrimeEndExonCoordinates' | 'fivePrimeStartExonCoordinates' | 'flagged' | 'flags' | 'fusion' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfiles' | 'name' | 'openRevisionCount' | 'revisions' | 'singleVariantMolecularProfile' | 'singleVariantMolecularProfileId' | 'threePrimeCoordinates' | 'threePrimeEndExonCoordinates' | 'threePrimeStartExonCoordinates' | 'variantAliases' | 'variantTypes' | 'viccCompliantName' | FusionVariantKeySpecifier)[];
export type FusionVariantFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimeCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimeEndExonCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimeStartExonCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fusion?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimeCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimeEndExonCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimeStartExonCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	viccCompliantName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'description' | 'entrezId' | 'events' | 'featureAliases' | 'featureInstance' | 'featureType' | 'flagged' | 'flags' | 'fullName' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'myGeneInfoDetails' | 'name' | 'openRevisionCount' | 'revisions' | 'sources' | 'variants' | GeneKeySpecifier)[];
export type GeneFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entrezId?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	featureAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	featureInstance?: FieldPolicy<any> | FieldReadFunction<any>,
	featureType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fullName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	myGeneInfoDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | GeneConnectionKeySpecifier)[];
export type GeneConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneEdgeKeySpecifier = ('cursor' | 'node' | GeneEdgeKeySpecifier)[];
export type GeneEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneVariantKeySpecifier = ('alleleRegistryId' | 'clinvarIds' | 'comments' | 'coordinates' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'events' | 'feature' | 'flagged' | 'flags' | 'hgvsDescriptions' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'maneSelectTranscript' | 'molecularProfiles' | 'myVariantInfo' | 'name' | 'openCravatAnnotations' | 'openCravatUrl' | 'openRevisionCount' | 'primaryCoordinates' | 'revisions' | 'singleVariantMolecularProfile' | 'singleVariantMolecularProfileId' | 'variantAliases' | 'variantTypes' | GeneVariantKeySpecifier)[];
export type GeneVariantFieldPolicy = {
	alleleRegistryId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarIds?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	hgvsDescriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	maneSelectTranscript?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	myVariantInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openCravatAnnotations?: FieldPolicy<any> | FieldReadFunction<any>,
	openCravatUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	primaryCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneVariantConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | GeneVariantConnectionKeySpecifier)[];
export type GeneVariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneVariantEdgeKeySpecifier = ('cursor' | 'node' | GeneVariantEdgeKeySpecifier)[];
export type GeneVariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GenerateApiKeyPayloadKeySpecifier = ('apiKey' | 'clientMutationId' | 'user' | GenerateApiKeyPayloadKeySpecifier)[];
export type GenerateApiKeyPayloadFieldPolicy = {
	apiKey?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardOrganizationKeySpecifier = ('actionCount' | 'canEndorse' | 'description' | 'eventCount' | 'events' | 'hasEndorsingSubgroups' | 'id' | 'isApprovedVcep' | 'memberCount' | 'members' | 'mostRecentActivityTimestamp' | 'name' | 'orgAndSuborgsStatsHash' | 'orgStatsHash' | 'profileImagePath' | 'rank' | 'ranks' | 'subGroups' | 'url' | LeaderboardOrganizationKeySpecifier)[];
export type LeaderboardOrganizationFieldPolicy = {
	actionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	canEndorse?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCount?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEndorsingSubgroups?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isApprovedVcep?: FieldPolicy<any> | FieldReadFunction<any>,
	memberCount?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgAndSuborgsStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	orgStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	ranks?: FieldPolicy<any> | FieldReadFunction<any>,
	subGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardOrganizationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | LeaderboardOrganizationConnectionKeySpecifier)[];
export type LeaderboardOrganizationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardOrganizationEdgeKeySpecifier = ('cursor' | 'node' | LeaderboardOrganizationEdgeKeySpecifier)[];
export type LeaderboardOrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardRankKeySpecifier = ('actionCount' | 'rank' | LeaderboardRankKeySpecifier)[];
export type LeaderboardRankFieldPolicy = {
	actionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardUserKeySpecifier = ('actionCount' | 'apiKeys' | 'areaOfExpertise' | 'bio' | 'country' | 'displayName' | 'email' | 'events' | 'facebookProfile' | 'id' | 'joinDate' | 'linkedinProfile' | 'mostRecentActivityTimestamp' | 'mostRecentConflictOfInterestStatement' | 'mostRecentEvent' | 'mostRecentOrganizationId' | 'name' | 'notifications' | 'orcid' | 'organizations' | 'organizationsWithEndorsementPrivileges' | 'profileImagePath' | 'rank' | 'ranks' | 'role' | 'statsHash' | 'twitterHandle' | 'url' | 'username' | LeaderboardUserKeySpecifier)[];
export type LeaderboardUserFieldPolicy = {
	actionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	apiKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	areaOfExpertise?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	joinDate?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedinProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentConflictOfInterestStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentOrganizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	orcid?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationsWithEndorsementPrivileges?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	ranks?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	statsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardUserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | LeaderboardUserConnectionKeySpecifier)[];
export type LeaderboardUserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LeaderboardUserEdgeKeySpecifier = ('cursor' | 'node' | LeaderboardUserEdgeKeySpecifier)[];
export type LeaderboardUserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkableDiseaseKeySpecifier = ('deprecated' | 'id' | 'link' | 'name' | LinkableDiseaseKeySpecifier)[];
export type LinkableDiseaseFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkableFeatureKeySpecifier = ('deprecated' | 'flagged' | 'id' | 'link' | 'name' | LinkableFeatureKeySpecifier)[];
export type LinkableFeatureFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkableTherapyKeySpecifier = ('deprecated' | 'id' | 'link' | 'name' | LinkableTherapyKeySpecifier)[];
export type LinkableTherapyFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkableVariantKeySpecifier = ('deprecated' | 'feature' | 'flagged' | 'id' | 'link' | 'matchText' | 'name' | LinkableVariantKeySpecifier)[];
export type LinkableVariantFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	matchText?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkableVariantTypeKeySpecifier = ('id' | 'link' | 'name' | LinkableVariantTypeKeySpecifier)[];
export type LinkableVariantTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkoutDataKeySpecifier = ('currentValue' | 'diffValue' | 'name' | 'suggestedValue' | LinkoutDataKeySpecifier)[];
export type LinkoutDataFieldPolicy = {
	currentValue?: FieldPolicy<any> | FieldReadFunction<any>,
	diffValue?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModerateAssertionActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | ModerateAssertionActivityKeySpecifier)[];
export type ModerateAssertionActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModerateAssertionPayloadKeySpecifier = ('assertion' | 'clientMutationId' | ModerateAssertionPayloadKeySpecifier)[];
export type ModerateAssertionPayloadFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModerateEvidenceItemActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | ModerateEvidenceItemActivityKeySpecifier)[];
export type ModerateEvidenceItemActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModerateEvidenceItemPayloadKeySpecifier = ('clientMutationId' | 'evidenceItem' | ModerateEvidenceItemPayloadKeySpecifier)[];
export type ModerateEvidenceItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModeratedObjectFieldKeySpecifier = ('deleted' | 'deprecated' | 'displayName' | 'displayType' | 'entityType' | 'feature' | 'flagged' | 'id' | 'link' | ModeratedObjectFieldKeySpecifier)[];
export type ModeratedObjectFieldFieldPolicy = {
	deleted?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	entityType?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileKeySpecifier = ('assertions' | 'comments' | 'complexMolecularProfileCreationActivity' | 'complexMolecularProfileDeprecationActivity' | 'deprecated' | 'deprecatedVariants' | 'deprecationReason' | 'description' | 'events' | 'evidenceCountsByStatus' | 'evidenceCountsByType' | 'evidenceItems' | 'flagged' | 'flags' | 'id' | 'isComplex' | 'isMultiVariant' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfileAliases' | 'molecularProfileScore' | 'name' | 'openRevisionCount' | 'parsedName' | 'rawName' | 'revisions' | 'sources' | 'variantCreationActivity' | 'variantDeprecationActivity' | 'variants' | MolecularProfileKeySpecifier)[];
export type MolecularProfileFieldPolicy = {
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	complexMolecularProfileCreationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	complexMolecularProfileDeprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecatedVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCountsByStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCountsByType?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isComplex?: FieldPolicy<any> | FieldReadFunction<any>,
	isMultiVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileScore?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedName?: FieldPolicy<any> | FieldReadFunction<any>,
	rawName?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCreationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	variantDeprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileAliasKeySpecifier = ('name' | MolecularProfileAliasKeySpecifier)[];
export type MolecularProfileAliasFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileComponentKeySpecifier = ('id' | 'link' | 'name' | MolecularProfileComponentKeySpecifier)[];
export type MolecularProfileComponentFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | MolecularProfileConnectionKeySpecifier)[];
export type MolecularProfileConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileEdgeKeySpecifier = ('cursor' | 'node' | MolecularProfileEdgeKeySpecifier)[];
export type MolecularProfileEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileNamePreviewKeySpecifier = ('deprecatedVariants' | 'existingMolecularProfile' | 'segments' | MolecularProfileNamePreviewKeySpecifier)[];
export type MolecularProfileNamePreviewFieldPolicy = {
	deprecatedVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	existingMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	segments?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolecularProfileTextSegmentKeySpecifier = ('text' | MolecularProfileTextSegmentKeySpecifier)[];
export type MolecularProfileTextSegmentFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('acceptRevisions' | 'addComment' | 'addDisease' | 'addRemoteCitation' | 'addTherapy' | 'createFeature' | 'createFusionFeature' | 'createFusionVariant' | 'createMolecularProfile' | 'createVariant' | 'deleteComment' | 'deprecateComplexMolecularProfile' | 'deprecateFeature' | 'deprecateVariant' | 'editUser' | 'endorseAssertion' | 'flagEntity' | 'generateApiKey' | 'moderateAssertion' | 'moderateEvidenceItem' | 'rejectRevisions' | 'resolveFlag' | 'revokeApiKey' | 'revokeEndorsement' | 'submitAssertion' | 'submitEvidence' | 'submitVariantGroup' | 'subscribe' | 'suggestAssertionRevision' | 'suggestEvidenceItemRevision' | 'suggestFactorRevision' | 'suggestFactorVariantRevision' | 'suggestFusionRevision' | 'suggestFusionVariantRevision' | 'suggestGeneRevision' | 'suggestGeneVariantRevision' | 'suggestMolecularProfileRevision' | 'suggestSource' | 'suggestVariantGroupRevision' | 'unsubscribe' | 'updateCoi' | 'updateNotificationStatus' | 'updateSourceSuggestionStatus' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptRevisions?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addDisease?: FieldPolicy<any> | FieldReadFunction<any>,
	addRemoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	addTherapy?: FieldPolicy<any> | FieldReadFunction<any>,
	createFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	createFusionFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	createFusionVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	createMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	createVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecateComplexMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecateFeature?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecateVariant?: FieldPolicy<any> | FieldReadFunction<any>,
	editUser?: FieldPolicy<any> | FieldReadFunction<any>,
	endorseAssertion?: FieldPolicy<any> | FieldReadFunction<any>,
	flagEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	generateApiKey?: FieldPolicy<any> | FieldReadFunction<any>,
	moderateAssertion?: FieldPolicy<any> | FieldReadFunction<any>,
	moderateEvidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectRevisions?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeApiKey?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeEndorsement?: FieldPolicy<any> | FieldReadFunction<any>,
	submitAssertion?: FieldPolicy<any> | FieldReadFunction<any>,
	submitEvidence?: FieldPolicy<any> | FieldReadFunction<any>,
	submitVariantGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestAssertionRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestEvidenceItemRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestFactorRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestFactorVariantRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestFusionRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestFusionVariantRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestGeneRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestGeneVariantRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestMolecularProfileRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestSource?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestVariantGroupRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCoi?: FieldPolicy<any> | FieldReadFunction<any>,
	updateNotificationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSourceSuggestionStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyChemInfoKeySpecifier = ('chebiDefinition' | 'chebiId' | 'chemblId' | 'chemblMoleculeType' | 'drugbankId' | 'fdaEpcCodes' | 'fdaMoaCodes' | 'firstApproval' | 'inchikey' | 'indications' | 'pharmgkbId' | 'pubchemCid' | 'rxnorm' | MyChemInfoKeySpecifier)[];
export type MyChemInfoFieldPolicy = {
	chebiDefinition?: FieldPolicy<any> | FieldReadFunction<any>,
	chebiId?: FieldPolicy<any> | FieldReadFunction<any>,
	chemblId?: FieldPolicy<any> | FieldReadFunction<any>,
	chemblMoleculeType?: FieldPolicy<any> | FieldReadFunction<any>,
	drugbankId?: FieldPolicy<any> | FieldReadFunction<any>,
	fdaEpcCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	fdaMoaCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	firstApproval?: FieldPolicy<any> | FieldReadFunction<any>,
	inchikey?: FieldPolicy<any> | FieldReadFunction<any>,
	indications?: FieldPolicy<any> | FieldReadFunction<any>,
	pharmgkbId?: FieldPolicy<any> | FieldReadFunction<any>,
	pubchemCid?: FieldPolicy<any> | FieldReadFunction<any>,
	rxnorm?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyDiseaseInfoKeySpecifier = ('diseaseOntologyExactSynonyms' | 'diseaseOntologyRelatedSynonyms' | 'doDef' | 'doDefCitations' | 'icd10' | 'icdo' | 'mesh' | 'mondoDef' | 'mondoId' | 'ncit' | 'omim' | MyDiseaseInfoKeySpecifier)[];
export type MyDiseaseInfoFieldPolicy = {
	diseaseOntologyExactSynonyms?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseOntologyRelatedSynonyms?: FieldPolicy<any> | FieldReadFunction<any>,
	doDef?: FieldPolicy<any> | FieldReadFunction<any>,
	doDefCitations?: FieldPolicy<any> | FieldReadFunction<any>,
	icd10?: FieldPolicy<any> | FieldReadFunction<any>,
	icdo?: FieldPolicy<any> | FieldReadFunction<any>,
	mesh?: FieldPolicy<any> | FieldReadFunction<any>,
	mondoDef?: FieldPolicy<any> | FieldReadFunction<any>,
	mondoId?: FieldPolicy<any> | FieldReadFunction<any>,
	ncit?: FieldPolicy<any> | FieldReadFunction<any>,
	omim?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyVariantInfoKeySpecifier = ('caddConsequence' | 'caddDetail' | 'caddPhred' | 'caddScore' | 'clinvarClinicalSignificance' | 'clinvarHgvsCoding' | 'clinvarHgvsGenomic' | 'clinvarHgvsNonCoding' | 'clinvarHgvsProtein' | 'clinvarId' | 'clinvarOmim' | 'cosmicId' | 'dbnsfpInterproDomain' | 'dbsnpRsid' | 'eglClass' | 'eglHgvs' | 'eglProtein' | 'eglTranscript' | 'exacAlleleCount' | 'exacAlleleFrequency' | 'exacAlleleNumber' | 'fathmmMklPrediction' | 'fathmmMklScore' | 'fathmmPrediction' | 'fathmmScore' | 'fitconsScore' | 'gerp' | 'gnomadExomeAlleleCount' | 'gnomadExomeAlleleFrequency' | 'gnomadExomeAlleleNumber' | 'gnomadExomeFilter' | 'gnomadGenomeAlleleCount' | 'gnomadGenomeAlleleFrequency' | 'gnomadGenomeAlleleNumber' | 'gnomadGenomeFilter' | 'lrtPrediction' | 'lrtScore' | 'metalrPrediction' | 'metalrScore' | 'metasvmPrediction' | 'metasvmScore' | 'mutationassessorPrediction' | 'mutationassessorScore' | 'mutationtasterPrediction' | 'mutationtasterScore' | 'myVariantInfoId' | 'phastcons30way' | 'phastcons100way' | 'phyloP30way' | 'phyloP100way' | 'polyphen2HdivPrediction' | 'polyphen2HdivScore' | 'polyphen2HvarPrediction' | 'polyphen2HvarScore' | 'proveanPrediction' | 'proveanScore' | 'revelScore' | 'siftPrediction' | 'siftScore' | 'siphy' | 'snpeffSnpEffect' | 'snpeffSnpImpact' | MyVariantInfoKeySpecifier)[];
export type MyVariantInfoFieldPolicy = {
	caddConsequence?: FieldPolicy<any> | FieldReadFunction<any>,
	caddDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	caddPhred?: FieldPolicy<any> | FieldReadFunction<any>,
	caddScore?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarClinicalSignificance?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarHgvsCoding?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarHgvsGenomic?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarHgvsNonCoding?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarHgvsProtein?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarOmim?: FieldPolicy<any> | FieldReadFunction<any>,
	cosmicId?: FieldPolicy<any> | FieldReadFunction<any>,
	dbnsfpInterproDomain?: FieldPolicy<any> | FieldReadFunction<any>,
	dbsnpRsid?: FieldPolicy<any> | FieldReadFunction<any>,
	eglClass?: FieldPolicy<any> | FieldReadFunction<any>,
	eglHgvs?: FieldPolicy<any> | FieldReadFunction<any>,
	eglProtein?: FieldPolicy<any> | FieldReadFunction<any>,
	eglTranscript?: FieldPolicy<any> | FieldReadFunction<any>,
	exacAlleleCount?: FieldPolicy<any> | FieldReadFunction<any>,
	exacAlleleFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	exacAlleleNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	fathmmMklPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	fathmmMklScore?: FieldPolicy<any> | FieldReadFunction<any>,
	fathmmPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	fathmmScore?: FieldPolicy<any> | FieldReadFunction<any>,
	fitconsScore?: FieldPolicy<any> | FieldReadFunction<any>,
	gerp?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadExomeAlleleCount?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadExomeAlleleFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadExomeAlleleNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadExomeFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadGenomeAlleleCount?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadGenomeAlleleFrequency?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadGenomeAlleleNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	gnomadGenomeFilter?: FieldPolicy<any> | FieldReadFunction<any>,
	lrtPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	lrtScore?: FieldPolicy<any> | FieldReadFunction<any>,
	metalrPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	metalrScore?: FieldPolicy<any> | FieldReadFunction<any>,
	metasvmPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	metasvmScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mutationassessorPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	mutationassessorScore?: FieldPolicy<any> | FieldReadFunction<any>,
	mutationtasterPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	mutationtasterScore?: FieldPolicy<any> | FieldReadFunction<any>,
	myVariantInfoId?: FieldPolicy<any> | FieldReadFunction<any>,
	phastcons30way?: FieldPolicy<any> | FieldReadFunction<any>,
	phastcons100way?: FieldPolicy<any> | FieldReadFunction<any>,
	phyloP30way?: FieldPolicy<any> | FieldReadFunction<any>,
	phyloP100way?: FieldPolicy<any> | FieldReadFunction<any>,
	polyphen2HdivPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	polyphen2HdivScore?: FieldPolicy<any> | FieldReadFunction<any>,
	polyphen2HvarPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	polyphen2HvarScore?: FieldPolicy<any> | FieldReadFunction<any>,
	proveanPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	proveanScore?: FieldPolicy<any> | FieldReadFunction<any>,
	revelScore?: FieldPolicy<any> | FieldReadFunction<any>,
	siftPrediction?: FieldPolicy<any> | FieldReadFunction<any>,
	siftScore?: FieldPolicy<any> | FieldReadFunction<any>,
	siphy?: FieldPolicy<any> | FieldReadFunction<any>,
	snpeffSnpEffect?: FieldPolicy<any> | FieldReadFunction<any>,
	snpeffSnpImpact?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NccnGuidelineKeySpecifier = ('id' | 'name' | NccnGuidelineKeySpecifier)[];
export type NccnGuidelineFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NcitDefinitionKeySpecifier = ('definition' | 'source' | NcitDefinitionKeySpecifier)[];
export type NcitDefinitionFieldPolicy = {
	definition?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NcitDetailsKeySpecifier = ('definitions' | 'synonyms' | NcitDetailsKeySpecifier)[];
export type NcitDetailsFieldPolicy = {
	definitions?: FieldPolicy<any> | FieldReadFunction<any>,
	synonyms?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NcitSynonymKeySpecifier = ('name' | 'source' | NcitSynonymKeySpecifier)[];
export type NcitSynonymFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NewsItemKeySpecifier = ('contentHtml' | 'id' | 'publishedAt' | 'title' | NewsItemKeySpecifier)[];
export type NewsItemFieldPolicy = {
	contentHtml?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	publishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationKeySpecifier = ('createdAt' | 'event' | 'id' | 'notifiedUser' | 'originatingUser' | 'seen' | 'subscription' | 'type' | 'updatedAt' | NotificationKeySpecifier)[];
export type NotificationFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	notifiedUser?: FieldPolicy<any> | FieldReadFunction<any>,
	originatingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	seen?: FieldPolicy<any> | FieldReadFunction<any>,
	subscription?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationConnectionKeySpecifier = ('edges' | 'eventTypes' | 'mentioningUsers' | 'nodes' | 'notificationSubjects' | 'organizations' | 'originatingUsers' | 'pageCount' | 'pageInfo' | 'totalCount' | 'unreadCount' | NotificationConnectionKeySpecifier)[];
export type NotificationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	mentioningUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	notificationSubjects?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	originatingUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unreadCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NotificationEdgeKeySpecifier = ('cursor' | 'node' | NotificationEdgeKeySpecifier)[];
export type NotificationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectFieldKeySpecifier = ('objects' | ObjectFieldKeySpecifier)[];
export type ObjectFieldFieldPolicy = {
	objects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ObjectFieldDiffKeySpecifier = ('addedObjects' | 'currentObjects' | 'keptObjects' | 'removedObjects' | 'suggestedObjects' | ObjectFieldDiffKeySpecifier)[];
export type ObjectFieldDiffFieldPolicy = {
	addedObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	currentObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	keptObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	removedObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedObjects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('canEndorse' | 'description' | 'eventCount' | 'events' | 'hasEndorsingSubgroups' | 'id' | 'isApprovedVcep' | 'memberCount' | 'members' | 'mostRecentActivityTimestamp' | 'name' | 'orgAndSuborgsStatsHash' | 'orgStatsHash' | 'profileImagePath' | 'ranks' | 'subGroups' | 'url' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	canEndorse?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCount?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	hasEndorsingSubgroups?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isApprovedVcep?: FieldPolicy<any> | FieldReadFunction<any>,
	memberCount?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgAndSuborgsStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	orgStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	ranks?: FieldPolicy<any> | FieldReadFunction<any>,
	subGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | OrganizationConnectionKeySpecifier)[];
export type OrganizationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationEdgeKeySpecifier = ('cursor' | 'node' | OrganizationEdgeKeySpecifier)[];
export type OrganizationEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationLeaderboardsKeySpecifier = ('commentsLeaderboard' | 'moderationLeaderboard' | 'revisionsLeaderboard' | 'submissionsLeaderboard' | OrganizationLeaderboardsKeySpecifier)[];
export type OrganizationLeaderboardsFieldPolicy = {
	commentsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	moderationLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypeKeySpecifier = ('description' | 'hpoId' | 'id' | 'link' | 'name' | 'url' | PhenotypeKeySpecifier)[];
export type PhenotypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | PhenotypeConnectionKeySpecifier)[];
export type PhenotypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypeEdgeKeySpecifier = ('cursor' | 'node' | PhenotypeEdgeKeySpecifier)[];
export type PhenotypeEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypePopoverKeySpecifier = ('assertionCount' | 'description' | 'evidenceItemCount' | 'hpoId' | 'id' | 'link' | 'molecularProfileCount' | 'name' | 'url' | PhenotypePopoverKeySpecifier)[];
export type PhenotypePopoverFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileCount?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('acmgCode' | 'acmgCodesTypeahead' | 'activities' | 'activity' | 'assertion' | 'assertions' | 'browseDiseases' | 'browseFeatures' | 'browseMolecularProfiles' | 'browseOrganizations' | 'browsePhenotypes' | 'browseSources' | 'browseTherapies' | 'browseUsers' | 'browseVariantGroups' | 'browseVariants' | 'clingenCode' | 'clingenCodesTypeahead' | 'clinicalTrial' | 'clinicalTrials' | 'comment' | 'comments' | 'contributors' | 'countries' | 'dataReleases' | 'disease' | 'diseasePopover' | 'diseaseTypeahead' | 'diseases' | 'endorsements' | 'entityTypeahead' | 'events' | 'evidenceItem' | 'evidenceItems' | 'factor' | 'factors' | 'feature' | 'featureTypeahead' | 'flag' | 'flags' | 'fusion' | 'fusions' | 'gene' | 'genes' | 'molecularProfile' | 'molecularProfiles' | 'nccnGuideline' | 'nccnGuidelinesTypeahead' | 'newsItems' | 'notifications' | 'organization' | 'organizationLeaderboards' | 'organizations' | 'phenotype' | 'phenotypePopover' | 'phenotypeTypeahead' | 'phenotypes' | 'previewCommentText' | 'previewMolecularProfileName' | 'remoteCitation' | 'revision' | 'revisions' | 'search' | 'searchAssertions' | 'searchByPermalink' | 'searchDiseases' | 'searchEvidenceItems' | 'searchFeatures' | 'searchMolecularProfiles' | 'searchPhenotypes' | 'searchSources' | 'searchTherapies' | 'searchUsers' | 'searchVariantTypes' | 'searchVariants' | 'source' | 'sourcePopover' | 'sourceSuggestionValues' | 'sourceSuggestions' | 'sourceTypeahead' | 'sources' | 'subscriptionForEntity' | 'therapies' | 'therapy' | 'therapyPopover' | 'therapyTypeahead' | 'timepointStats' | 'user' | 'userLeaderboards' | 'userTypeahead' | 'users' | 'validateRevisionsForAcceptance' | 'variant' | 'variantGroup' | 'variantGroups' | 'variantType' | 'variantTypePopover' | 'variantTypeTypeahead' | 'variantTypes' | 'variants' | 'variantsTypeahead' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	acmgCode?: FieldPolicy<any> | FieldReadFunction<any>,
	acmgCodesTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	activities?: FieldPolicy<any> | FieldReadFunction<any>,
	activity?: FieldPolicy<any> | FieldReadFunction<any>,
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	browseDiseases?: FieldPolicy<any> | FieldReadFunction<any>,
	browseFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	browseMolecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	browseOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	browsePhenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	browseSources?: FieldPolicy<any> | FieldReadFunction<any>,
	browseTherapies?: FieldPolicy<any> | FieldReadFunction<any>,
	browseUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	browseVariantGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	browseVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	clingenCode?: FieldPolicy<any> | FieldReadFunction<any>,
	clingenCodesTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	contributors?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	dataReleases?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	diseasePopover?: FieldPolicy<any> | FieldReadFunction<any>,
	diseaseTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	endorsements?: FieldPolicy<any> | FieldReadFunction<any>,
	entityTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	factor?: FieldPolicy<any> | FieldReadFunction<any>,
	factors?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	featureTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	fusion?: FieldPolicy<any> | FieldReadFunction<any>,
	fusions?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	genes?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	nccnGuideline?: FieldPolicy<any> | FieldReadFunction<any>,
	nccnGuidelinesTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	newsItems?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationLeaderboards?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotype?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypePopover?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypeTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	previewCommentText?: FieldPolicy<any> | FieldReadFunction<any>,
	previewMolecularProfileName?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	searchAssertions?: FieldPolicy<any> | FieldReadFunction<any>,
	searchByPermalink?: FieldPolicy<any> | FieldReadFunction<any>,
	searchDiseases?: FieldPolicy<any> | FieldReadFunction<any>,
	searchEvidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	searchFeatures?: FieldPolicy<any> | FieldReadFunction<any>,
	searchMolecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	searchPhenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	searchSources?: FieldPolicy<any> | FieldReadFunction<any>,
	searchTherapies?: FieldPolicy<any> | FieldReadFunction<any>,
	searchUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	searchVariantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	searchVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	sourcePopover?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestionValues?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestions?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptionForEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	therapies?: FieldPolicy<any> | FieldReadFunction<any>,
	therapy?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyPopover?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	timepointStats?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userLeaderboards?: FieldPolicy<any> | FieldReadFunction<any>,
	userTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	validateRevisionsForAcceptance?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	variantGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	variantType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypePopover?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypeTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	variantsTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RanksKeySpecifier = ('commentsRank' | 'moderationRank' | 'revisionsRank' | 'submissionsRank' | RanksKeySpecifier)[];
export type RanksFieldPolicy = {
	commentsRank?: FieldPolicy<any> | FieldReadFunction<any>,
	moderationRank?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionsRank?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionsRank?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RejectRevisionsActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'revisions' | 'subject' | 'user' | 'verbiage' | RejectRevisionsActivityKeySpecifier)[];
export type RejectRevisionsActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RejectRevisionsPayloadKeySpecifier = ('clientMutationId' | 'revisions' | RejectRevisionsPayloadKeySpecifier)[];
export type RejectRevisionsPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolveFlagActivityKeySpecifier = ('createdAt' | 'events' | 'flag' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | ResolveFlagActivityKeySpecifier)[];
export type ResolveFlagActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolveFlagPayloadKeySpecifier = ('clientMutationId' | 'flag' | ResolveFlagPayloadKeySpecifier)[];
export type ResolveFlagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionKeySpecifier = ('acceptanceActivity' | 'comments' | 'createdAt' | 'creationActivity' | 'currentValue' | 'events' | 'fieldName' | 'id' | 'lastCommentEvent' | 'link' | 'linkoutData' | 'name' | 'rejectionActivity' | 'resolutionActivity' | 'revisionSetId' | 'status' | 'subject' | 'suggestedValue' | 'supersedingActivity' | 'updatedAt' | RevisionKeySpecifier)[];
export type RevisionFieldPolicy = {
	acceptanceActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	currentValue?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	linkoutData?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	resolutionActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedValue?: FieldPolicy<any> | FieldReadFunction<any>,
	supersedingActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'revisedFieldNames' | 'totalCount' | 'unfilteredCountForSubject' | 'uniqueResolvers' | 'uniqueRevisors' | RevisionConnectionKeySpecifier)[];
export type RevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	revisedFieldNames?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	unfilteredCountForSubject?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueResolvers?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueRevisors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionEdgeKeySpecifier = ('cursor' | 'node' | RevisionEdgeKeySpecifier)[];
export type RevisionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionResultKeySpecifier = ('fieldName' | 'id' | 'newlyCreated' | 'revisionSetId' | RevisionResultKeySpecifier)[];
export type RevisionResultFieldPolicy = {
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newlyCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSetId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionSetKeySpecifier = ('createdAt' | 'displayName' | 'events' | 'id' | 'link' | 'name' | 'revisions' | 'updatedAt' | RevisionSetKeySpecifier)[];
export type RevisionSetFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeApiKeyPayloadKeySpecifier = ('clientMutationId' | 'success' | RevokeApiKeyPayloadKeySpecifier)[];
export type RevokeApiKeyPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeEndorsementActivityKeySpecifier = ('assertion' | 'createdAt' | 'endorsement' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | RevokeEndorsementActivityKeySpecifier)[];
export type RevokeEndorsementActivityFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	endorsement?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevokeEndorsementPayloadKeySpecifier = ('assertion' | 'clientMutationId' | RevokeEndorsementPayloadKeySpecifier)[];
export type RevokeEndorsementPayloadFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScalarFieldKeySpecifier = ('value' | ScalarFieldKeySpecifier)[];
export type ScalarFieldFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScalarFieldDiffKeySpecifier = ('left' | 'right' | ScalarFieldDiffKeySpecifier)[];
export type ScalarFieldDiffFieldPolicy = {
	left?: FieldPolicy<any> | FieldReadFunction<any>,
	right?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultKeySpecifier = ('id' | 'matchingText' | 'name' | 'resultType' | SearchResultKeySpecifier)[];
export type SearchResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	matchingText?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resultType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceKeySpecifier = ('abstract' | 'ascoAbstractId' | 'authorString' | 'citation' | 'citationId' | 'clinicalTrials' | 'comments' | 'deprecated' | 'displayType' | 'events' | 'fullJournalTitle' | 'fullyCurated' | 'id' | 'journal' | 'lastCommentEvent' | 'link' | 'name' | 'openAccess' | 'pmcId' | 'publicationDate' | 'publicationDay' | 'publicationMonth' | 'publicationYear' | 'retracted' | 'retractionDate' | 'retractionNature' | 'retractionReasons' | 'sourceType' | 'sourceUrl' | 'title' | SourceKeySpecifier)[];
export type SourceFieldPolicy = {
	abstract?: FieldPolicy<any> | FieldReadFunction<any>,
	ascoAbstractId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorString?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fullJournalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	fullyCurated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	pmcId?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDay?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	retracted?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionNature?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | SourceConnectionKeySpecifier)[];
export type SourceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceEdgeKeySpecifier = ('cursor' | 'node' | SourceEdgeKeySpecifier)[];
export type SourceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourcePopoverKeySpecifier = ('abstract' | 'ascoAbstractId' | 'authorString' | 'citation' | 'citationId' | 'clinicalTrials' | 'comments' | 'deprecated' | 'displayType' | 'events' | 'evidenceItemCount' | 'fullJournalTitle' | 'fullyCurated' | 'id' | 'journal' | 'lastCommentEvent' | 'link' | 'name' | 'openAccess' | 'pmcId' | 'publicationDate' | 'publicationDay' | 'publicationMonth' | 'publicationYear' | 'retracted' | 'retractionDate' | 'retractionNature' | 'retractionReasons' | 'sourceType' | 'sourceUrl' | 'title' | SourcePopoverKeySpecifier)[];
export type SourcePopoverFieldPolicy = {
	abstract?: FieldPolicy<any> | FieldReadFunction<any>,
	ascoAbstractId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorString?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	fullJournalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	fullyCurated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	pmcId?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDay?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	retracted?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionNature?: FieldPolicy<any> | FieldReadFunction<any>,
	retractionReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceStubKeySpecifier = ('citationId' | 'id' | 'sourceType' | SourceStubKeySpecifier)[];
export type SourceStubFieldPolicy = {
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceSuggestionKeySpecifier = ('createdAt' | 'creationActivity' | 'disease' | 'events' | 'id' | 'initialComment' | 'lastStatusUpdateActivity' | 'link' | 'molecularProfile' | 'name' | 'reason' | 'source' | 'status' | 'user' | SourceSuggestionKeySpecifier)[];
export type SourceSuggestionFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	initialComment?: FieldPolicy<any> | FieldReadFunction<any>,
	lastStatusUpdateActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceSuggestionConnectionKeySpecifier = ('edges' | 'filteredCount' | 'lastUpdated' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | SourceSuggestionConnectionKeySpecifier)[];
export type SourceSuggestionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	lastUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceSuggestionEdgeKeySpecifier = ('cursor' | 'node' | SourceSuggestionEdgeKeySpecifier)[];
export type SourceSuggestionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceSuggestionValuesKeySpecifier = ('disease' | 'molecularProfile' | 'source' | SourceSuggestionValuesKeySpecifier)[];
export type SourceSuggestionValuesFieldPolicy = {
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatsKeySpecifier = ('acceptedAssertions' | 'acceptedEvidenceItems' | 'appliedRevisions' | 'comments' | 'revisions' | 'submittedAssertions' | 'submittedEvidenceItems' | 'suggestedSources' | StatsKeySpecifier)[];
export type StatsFieldPolicy = {
	acceptedAssertions?: FieldPolicy<any> | FieldReadFunction<any>,
	acceptedEvidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	appliedRevisions?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	submittedAssertions?: FieldPolicy<any> | FieldReadFunction<any>,
	submittedEvidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedSources?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitAssertionActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | SubmitAssertionActivityKeySpecifier)[];
export type SubmitAssertionActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitAssertionPayloadKeySpecifier = ('assertion' | 'clientMutationId' | SubmitAssertionPayloadKeySpecifier)[];
export type SubmitAssertionPayloadFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitEvidenceItemActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'subject' | 'user' | 'verbiage' | SubmitEvidenceItemActivityKeySpecifier)[];
export type SubmitEvidenceItemActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitEvidenceItemPayloadKeySpecifier = ('clientMutationId' | 'evidenceItem' | SubmitEvidenceItemPayloadKeySpecifier)[];
export type SubmitEvidenceItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubmitVariantGroupPayloadKeySpecifier = ('clientMutationId' | 'variantGroup' | SubmitVariantGroupPayloadKeySpecifier)[];
export type SubmitVariantGroupPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribableKeySpecifier = ('entityType' | 'id' | SubscribableKeySpecifier)[];
export type SubscribableFieldPolicy = {
	entityType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscribePayloadKeySpecifier = ('clientMutationId' | 'subscriptions' | SubscribePayloadKeySpecifier)[];
export type SubscribePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	subscriptions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('id' | 'subscribable' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribable?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestAssertionRevisionPayloadKeySpecifier = ('assertion' | 'clientMutationId' | 'results' | SuggestAssertionRevisionPayloadKeySpecifier)[];
export type SuggestAssertionRevisionPayloadFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestEvidenceItemRevisionPayloadKeySpecifier = ('clientMutationId' | 'evidenceItem' | 'results' | SuggestEvidenceItemRevisionPayloadKeySpecifier)[];
export type SuggestEvidenceItemRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestFactorRevisionPayloadKeySpecifier = ('clientMutationId' | 'factor' | 'results' | SuggestFactorRevisionPayloadKeySpecifier)[];
export type SuggestFactorRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	factor?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestFactorVariantRevisionPayloadKeySpecifier = ('clientMutationId' | 'results' | 'variant' | SuggestFactorVariantRevisionPayloadKeySpecifier)[];
export type SuggestFactorVariantRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestFusionRevisionPayloadKeySpecifier = ('clientMutationId' | 'fusion' | 'results' | SuggestFusionRevisionPayloadKeySpecifier)[];
export type SuggestFusionRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	fusion?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestFusionVariantRevisionPayloadKeySpecifier = ('clientMutationId' | 'results' | 'variant' | SuggestFusionVariantRevisionPayloadKeySpecifier)[];
export type SuggestFusionVariantRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestGeneRevisionPayloadKeySpecifier = ('clientMutationId' | 'gene' | 'results' | SuggestGeneRevisionPayloadKeySpecifier)[];
export type SuggestGeneRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestGeneVariantRevisionPayloadKeySpecifier = ('clientMutationId' | 'results' | 'variant' | SuggestGeneVariantRevisionPayloadKeySpecifier)[];
export type SuggestGeneVariantRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestMolecularProfileRevisionPayloadKeySpecifier = ('clientMutationId' | 'molecularProfile' | 'results' | SuggestMolecularProfileRevisionPayloadKeySpecifier)[];
export type SuggestMolecularProfileRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestRevisionSetActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'revisionSet' | 'revisions' | 'subject' | 'user' | 'verbiage' | SuggestRevisionSetActivityKeySpecifier)[];
export type SuggestRevisionSetActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionSet?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestSourceActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'sourceSuggestion' | 'subject' | 'user' | 'verbiage' | SuggestSourceActivityKeySpecifier)[];
export type SuggestSourceActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestion?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestSourcePayloadKeySpecifier = ('clientMutationId' | 'sourceSuggestion' | SuggestSourcePayloadKeySpecifier)[];
export type SuggestSourcePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestVariantGroupRevisionPayloadKeySpecifier = ('clientMutationId' | 'results' | 'variantGroup' | SuggestVariantGroupRevisionPayloadKeySpecifier)[];
export type SuggestVariantGroupRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	variantGroup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TherapyKeySpecifier = ('deprecated' | 'id' | 'link' | 'myChemInfo' | 'name' | 'ncitId' | 'therapyAliases' | 'therapyUrl' | TherapyKeySpecifier)[];
export type TherapyFieldPolicy = {
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	myChemInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TherapyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | TherapyConnectionKeySpecifier)[];
export type TherapyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TherapyEdgeKeySpecifier = ('cursor' | 'node' | TherapyEdgeKeySpecifier)[];
export type TherapyEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TherapyPopoverKeySpecifier = ('assertionCount' | 'deprecated' | 'evidenceItemCount' | 'id' | 'link' | 'molecularProfileCount' | 'myChemInfo' | 'name' | 'ncitId' | 'therapyAliases' | 'therapyUrl' | TherapyPopoverKeySpecifier)[];
export type TherapyPopoverFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfileCount?: FieldPolicy<any> | FieldReadFunction<any>,
	myChemInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	therapyUrl?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimePointCountsKeySpecifier = ('allTime' | 'newThisMonth' | 'newThisWeek' | 'newThisYear' | TimePointCountsKeySpecifier)[];
export type TimePointCountsFieldPolicy = {
	allTime?: FieldPolicy<any> | FieldReadFunction<any>,
	newThisMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	newThisWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	newThisYear?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnsubscribePayloadKeySpecifier = ('clientMutationId' | 'unsubscribedEntities' | UnsubscribePayloadKeySpecifier)[];
export type UnsubscribePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribedEntities?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCoiPayloadKeySpecifier = ('clientMutationId' | 'coiStatement' | UpdateCoiPayloadKeySpecifier)[];
export type UpdateCoiPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	coiStatement?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateNotificationStatusPayloadKeySpecifier = ('clientMutationId' | 'notifications' | UpdateNotificationStatusPayloadKeySpecifier)[];
export type UpdateNotificationStatusPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSourceSuggestionStatusActivityKeySpecifier = ('createdAt' | 'events' | 'id' | 'note' | 'organization' | 'parsedNote' | 'sourceSuggestion' | 'subject' | 'user' | 'verbiage' | UpdateSourceSuggestionStatusActivityKeySpecifier)[];
export type UpdateSourceSuggestionStatusActivityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	parsedNote?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestion?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	verbiage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSourceSuggestionStatusPayloadKeySpecifier = ('clientMutationId' | 'sourceSuggestion' | UpdateSourceSuggestionStatusPayloadKeySpecifier)[];
export type UpdateSourceSuggestionStatusPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceSuggestion?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('apiKeys' | 'areaOfExpertise' | 'bio' | 'country' | 'displayName' | 'email' | 'events' | 'facebookProfile' | 'id' | 'joinDate' | 'linkedinProfile' | 'mostRecentActivityTimestamp' | 'mostRecentConflictOfInterestStatement' | 'mostRecentEvent' | 'mostRecentOrg' | 'mostRecentOrganizationId' | 'name' | 'notifications' | 'orcid' | 'organizations' | 'organizationsWithEndorsementPrivileges' | 'profileImagePath' | 'ranks' | 'role' | 'statsHash' | 'twitterHandle' | 'url' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	apiKeys?: FieldPolicy<any> | FieldReadFunction<any>,
	areaOfExpertise?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	joinDate?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedinProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentActivityTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentConflictOfInterestStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentOrg?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentOrganizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	orcid?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationsWithEndorsementPrivileges?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	ranks?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	statsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterHandle?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserEdgeKeySpecifier = ('cursor' | 'node' | UserEdgeKeySpecifier)[];
export type UserEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserLeaderboardsKeySpecifier = ('commentsLeaderboard' | 'moderationLeaderboard' | 'revisionsLeaderboard' | 'submissionsLeaderboard' | UserLeaderboardsKeySpecifier)[];
export type UserLeaderboardsFieldPolicy = {
	commentsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	moderationLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionsLeaderboard?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ValidationErrorsKeySpecifier = ('genericErrors' | 'validationErrors' | ValidationErrorsKeySpecifier)[];
export type ValidationErrorsFieldPolicy = {
	genericErrors?: FieldPolicy<any> | FieldReadFunction<any>,
	validationErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'events' | 'feature' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfiles' | 'name' | 'openRevisionCount' | 'revisions' | 'singleVariantMolecularProfile' | 'singleVariantMolecularProfileId' | 'variantAliases' | 'variantTypes' | VariantKeySpecifier)[];
export type VariantFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantAliasKeySpecifier = ('name' | VariantAliasKeySpecifier)[];
export type VariantAliasFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantCoordinateKeySpecifier = ('chromosome' | 'coordinateType' | 'ensemblVersion' | 'events' | 'id' | 'lastAcceptedRevisionEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'openRevisionCount' | 'referenceBases' | 'referenceBuild' | 'representativeTranscript' | 'revisions' | 'start' | 'stop' | 'variantBases' | VariantCoordinateKeySpecifier)[];
export type VariantCoordinateFieldPolicy = {
	chromosome?: FieldPolicy<any> | FieldReadFunction<any>,
	coordinateType?: FieldPolicy<any> | FieldReadFunction<any>,
	ensemblVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceBases?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceBuild?: FieldPolicy<any> | FieldReadFunction<any>,
	representativeTranscript?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>,
	variantBases?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantGroupKeySpecifier = ('comments' | 'description' | 'events' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'name' | 'openRevisionCount' | 'revisions' | 'sources' | 'variants' | VariantGroupKeySpecifier)[];
export type VariantGroupFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantGroupConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | VariantGroupConnectionKeySpecifier)[];
export type VariantGroupConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantGroupEdgeKeySpecifier = ('cursor' | 'node' | VariantGroupEdgeKeySpecifier)[];
export type VariantGroupEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantInterfaceKeySpecifier = ('comments' | 'creationActivity' | 'deprecated' | 'deprecationActivity' | 'deprecationReason' | 'events' | 'feature' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'link' | 'molecularProfiles' | 'name' | 'openRevisionCount' | 'revisions' | 'singleVariantMolecularProfile' | 'singleVariantMolecularProfileId' | 'variantAliases' | 'variantTypes' | VariantInterfaceKeySpecifier)[];
export type VariantInterfaceFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	creationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecated?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	deprecationReason?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	feature?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	molecularProfiles?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	singleVariantMolecularProfileId?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantInterfaceConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | VariantInterfaceConnectionKeySpecifier)[];
export type VariantInterfaceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantInterfaceEdgeKeySpecifier = ('cursor' | 'node' | VariantInterfaceEdgeKeySpecifier)[];
export type VariantInterfaceEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantTypeKeySpecifier = ('description' | 'id' | 'link' | 'name' | 'soid' | 'url' | VariantTypeKeySpecifier)[];
export type VariantTypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	soid?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantTypePopoverKeySpecifier = ('description' | 'id' | 'link' | 'name' | 'soid' | 'url' | 'variantCount' | VariantTypePopoverKeySpecifier)[];
export type VariantTypePopoverFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	soid?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithRevisionsKeySpecifier = ('lastAcceptedRevisionEvent' | 'lastSubmittedRevisionEvent' | 'openRevisionCount' | 'revisions' | WithRevisionsKeySpecifier)[];
export type WithRevisionsFieldPolicy = {
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	openRevisionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AcceptRevisionsActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptRevisionsActivityKeySpecifier | (() => undefined | AcceptRevisionsActivityKeySpecifier),
		fields?: AcceptRevisionsActivityFieldPolicy,
	},
	AcceptRevisionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptRevisionsPayloadKeySpecifier | (() => undefined | AcceptRevisionsPayloadKeySpecifier),
		fields?: AcceptRevisionsPayloadFieldPolicy,
	},
	AcmgCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcmgCodeKeySpecifier | (() => undefined | AcmgCodeKeySpecifier),
		fields?: AcmgCodeFieldPolicy,
	},
	ActivityInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityInterfaceKeySpecifier | (() => undefined | ActivityInterfaceKeySpecifier),
		fields?: ActivityInterfaceFieldPolicy,
	},
	ActivityInterfaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityInterfaceConnectionKeySpecifier | (() => undefined | ActivityInterfaceConnectionKeySpecifier),
		fields?: ActivityInterfaceConnectionFieldPolicy,
	},
	ActivityInterfaceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityInterfaceEdgeKeySpecifier | (() => undefined | ActivityInterfaceEdgeKeySpecifier),
		fields?: ActivityInterfaceEdgeFieldPolicy,
	},
	AddCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddCommentPayloadKeySpecifier | (() => undefined | AddCommentPayloadKeySpecifier),
		fields?: AddCommentPayloadFieldPolicy,
	},
	AddDiseasePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddDiseasePayloadKeySpecifier | (() => undefined | AddDiseasePayloadKeySpecifier),
		fields?: AddDiseasePayloadFieldPolicy,
	},
	AddRemoteCitationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddRemoteCitationPayloadKeySpecifier | (() => undefined | AddRemoteCitationPayloadKeySpecifier),
		fields?: AddRemoteCitationPayloadFieldPolicy,
	},
	AddTherapyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddTherapyPayloadKeySpecifier | (() => undefined | AddTherapyPayloadKeySpecifier),
		fields?: AddTherapyPayloadFieldPolicy,
	},
	AdvancedSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvancedSearchResultKeySpecifier | (() => undefined | AdvancedSearchResultKeySpecifier),
		fields?: AdvancedSearchResultFieldPolicy,
	},
	ApiKey?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApiKeyKeySpecifier | (() => undefined | ApiKeyKeySpecifier),
		fields?: ApiKeyFieldPolicy,
	},
	Assertion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssertionKeySpecifier | (() => undefined | AssertionKeySpecifier),
		fields?: AssertionFieldPolicy,
	},
	AssertionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssertionConnectionKeySpecifier | (() => undefined | AssertionConnectionKeySpecifier),
		fields?: AssertionConnectionFieldPolicy,
	},
	AssertionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AssertionEdgeKeySpecifier | (() => undefined | AssertionEdgeKeySpecifier),
		fields?: AssertionEdgeFieldPolicy,
	},
	BrowseClinicalTrial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseClinicalTrialKeySpecifier | (() => undefined | BrowseClinicalTrialKeySpecifier),
		fields?: BrowseClinicalTrialFieldPolicy,
	},
	BrowseClinicalTrialConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseClinicalTrialConnectionKeySpecifier | (() => undefined | BrowseClinicalTrialConnectionKeySpecifier),
		fields?: BrowseClinicalTrialConnectionFieldPolicy,
	},
	BrowseClinicalTrialEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseClinicalTrialEdgeKeySpecifier | (() => undefined | BrowseClinicalTrialEdgeKeySpecifier),
		fields?: BrowseClinicalTrialEdgeFieldPolicy,
	},
	BrowseDisease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDiseaseKeySpecifier | (() => undefined | BrowseDiseaseKeySpecifier),
		fields?: BrowseDiseaseFieldPolicy,
	},
	BrowseDiseaseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDiseaseConnectionKeySpecifier | (() => undefined | BrowseDiseaseConnectionKeySpecifier),
		fields?: BrowseDiseaseConnectionFieldPolicy,
	},
	BrowseDiseaseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDiseaseEdgeKeySpecifier | (() => undefined | BrowseDiseaseEdgeKeySpecifier),
		fields?: BrowseDiseaseEdgeFieldPolicy,
	},
	BrowseFeature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseFeatureKeySpecifier | (() => undefined | BrowseFeatureKeySpecifier),
		fields?: BrowseFeatureFieldPolicy,
	},
	BrowseFeatureConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseFeatureConnectionKeySpecifier | (() => undefined | BrowseFeatureConnectionKeySpecifier),
		fields?: BrowseFeatureConnectionFieldPolicy,
	},
	BrowseFeatureEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseFeatureEdgeKeySpecifier | (() => undefined | BrowseFeatureEdgeKeySpecifier),
		fields?: BrowseFeatureEdgeFieldPolicy,
	},
	BrowseMolecularProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseMolecularProfileKeySpecifier | (() => undefined | BrowseMolecularProfileKeySpecifier),
		fields?: BrowseMolecularProfileFieldPolicy,
	},
	BrowseMolecularProfileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseMolecularProfileConnectionKeySpecifier | (() => undefined | BrowseMolecularProfileConnectionKeySpecifier),
		fields?: BrowseMolecularProfileConnectionFieldPolicy,
	},
	BrowseMolecularProfileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseMolecularProfileEdgeKeySpecifier | (() => undefined | BrowseMolecularProfileEdgeKeySpecifier),
		fields?: BrowseMolecularProfileEdgeFieldPolicy,
	},
	BrowseOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseOrganizationKeySpecifier | (() => undefined | BrowseOrganizationKeySpecifier),
		fields?: BrowseOrganizationFieldPolicy,
	},
	BrowseOrganizationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseOrganizationConnectionKeySpecifier | (() => undefined | BrowseOrganizationConnectionKeySpecifier),
		fields?: BrowseOrganizationConnectionFieldPolicy,
	},
	BrowseOrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseOrganizationEdgeKeySpecifier | (() => undefined | BrowseOrganizationEdgeKeySpecifier),
		fields?: BrowseOrganizationEdgeFieldPolicy,
	},
	BrowsePhenotype?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowsePhenotypeKeySpecifier | (() => undefined | BrowsePhenotypeKeySpecifier),
		fields?: BrowsePhenotypeFieldPolicy,
	},
	BrowsePhenotypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowsePhenotypeConnectionKeySpecifier | (() => undefined | BrowsePhenotypeConnectionKeySpecifier),
		fields?: BrowsePhenotypeConnectionFieldPolicy,
	},
	BrowsePhenotypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowsePhenotypeEdgeKeySpecifier | (() => undefined | BrowsePhenotypeEdgeKeySpecifier),
		fields?: BrowsePhenotypeEdgeFieldPolicy,
	},
	BrowseSource?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseSourceKeySpecifier | (() => undefined | BrowseSourceKeySpecifier),
		fields?: BrowseSourceFieldPolicy,
	},
	BrowseSourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseSourceConnectionKeySpecifier | (() => undefined | BrowseSourceConnectionKeySpecifier),
		fields?: BrowseSourceConnectionFieldPolicy,
	},
	BrowseSourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseSourceEdgeKeySpecifier | (() => undefined | BrowseSourceEdgeKeySpecifier),
		fields?: BrowseSourceEdgeFieldPolicy,
	},
	BrowseTherapy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseTherapyKeySpecifier | (() => undefined | BrowseTherapyKeySpecifier),
		fields?: BrowseTherapyFieldPolicy,
	},
	BrowseTherapyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseTherapyConnectionKeySpecifier | (() => undefined | BrowseTherapyConnectionKeySpecifier),
		fields?: BrowseTherapyConnectionFieldPolicy,
	},
	BrowseTherapyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseTherapyEdgeKeySpecifier | (() => undefined | BrowseTherapyEdgeKeySpecifier),
		fields?: BrowseTherapyEdgeFieldPolicy,
	},
	BrowseUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseUserKeySpecifier | (() => undefined | BrowseUserKeySpecifier),
		fields?: BrowseUserFieldPolicy,
	},
	BrowseUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseUserConnectionKeySpecifier | (() => undefined | BrowseUserConnectionKeySpecifier),
		fields?: BrowseUserConnectionFieldPolicy,
	},
	BrowseUserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseUserEdgeKeySpecifier | (() => undefined | BrowseUserEdgeKeySpecifier),
		fields?: BrowseUserEdgeFieldPolicy,
	},
	BrowseVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantKeySpecifier | (() => undefined | BrowseVariantKeySpecifier),
		fields?: BrowseVariantFieldPolicy,
	},
	BrowseVariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantConnectionKeySpecifier | (() => undefined | BrowseVariantConnectionKeySpecifier),
		fields?: BrowseVariantConnectionFieldPolicy,
	},
	BrowseVariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantEdgeKeySpecifier | (() => undefined | BrowseVariantEdgeKeySpecifier),
		fields?: BrowseVariantEdgeFieldPolicy,
	},
	BrowseVariantGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantGroupKeySpecifier | (() => undefined | BrowseVariantGroupKeySpecifier),
		fields?: BrowseVariantGroupFieldPolicy,
	},
	BrowseVariantGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantGroupConnectionKeySpecifier | (() => undefined | BrowseVariantGroupConnectionKeySpecifier),
		fields?: BrowseVariantGroupConnectionFieldPolicy,
	},
	BrowseVariantGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantGroupEdgeKeySpecifier | (() => undefined | BrowseVariantGroupEdgeKeySpecifier),
		fields?: BrowseVariantGroupEdgeFieldPolicy,
	},
	BrowseVariantType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantTypeKeySpecifier | (() => undefined | BrowseVariantTypeKeySpecifier),
		fields?: BrowseVariantTypeFieldPolicy,
	},
	BrowseVariantTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantTypeConnectionKeySpecifier | (() => undefined | BrowseVariantTypeConnectionKeySpecifier),
		fields?: BrowseVariantTypeConnectionFieldPolicy,
	},
	BrowseVariantTypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseVariantTypeEdgeKeySpecifier | (() => undefined | BrowseVariantTypeEdgeKeySpecifier),
		fields?: BrowseVariantTypeEdgeFieldPolicy,
	},
	CivicTimepointStats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CivicTimepointStatsKeySpecifier | (() => undefined | CivicTimepointStatsKeySpecifier),
		fields?: CivicTimepointStatsFieldPolicy,
	},
	ClingenCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClingenCodeKeySpecifier | (() => undefined | ClingenCodeKeySpecifier),
		fields?: ClingenCodeFieldPolicy,
	},
	ClinicalTrial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClinicalTrialKeySpecifier | (() => undefined | ClinicalTrialKeySpecifier),
		fields?: ClinicalTrialFieldPolicy,
	},
	Coi?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoiKeySpecifier | (() => undefined | CoiKeySpecifier),
		fields?: CoiFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentActivityKeySpecifier | (() => undefined | CommentActivityKeySpecifier),
		fields?: CommentActivityFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
	},
	CommentTagSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTagSegmentKeySpecifier | (() => undefined | CommentTagSegmentKeySpecifier),
		fields?: CommentTagSegmentFieldPolicy,
	},
	CommentTagSegmentFlagged?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTagSegmentFlaggedKeySpecifier | (() => undefined | CommentTagSegmentFlaggedKeySpecifier),
		fields?: CommentTagSegmentFlaggedFieldPolicy,
	},
	CommentTagSegmentFlaggedAndDeprecated?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTagSegmentFlaggedAndDeprecatedKeySpecifier | (() => undefined | CommentTagSegmentFlaggedAndDeprecatedKeySpecifier),
		fields?: CommentTagSegmentFlaggedAndDeprecatedFieldPolicy,
	},
	CommentTagSegmentFlaggedAndWithStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTagSegmentFlaggedAndWithStatusKeySpecifier | (() => undefined | CommentTagSegmentFlaggedAndWithStatusKeySpecifier),
		fields?: CommentTagSegmentFlaggedAndWithStatusFieldPolicy,
	},
	CommentTextSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentTextSegmentKeySpecifier | (() => undefined | CommentTextSegmentKeySpecifier),
		fields?: CommentTextSegmentFieldPolicy,
	},
	Commentable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentableKeySpecifier | (() => undefined | CommentableKeySpecifier),
		fields?: CommentableFieldPolicy,
	},
	ContributingUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributingUserKeySpecifier | (() => undefined | ContributingUserKeySpecifier),
		fields?: ContributingUserFieldPolicy,
	},
	ContributingUsersSummary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributingUsersSummaryKeySpecifier | (() => undefined | ContributingUsersSummaryKeySpecifier),
		fields?: ContributingUsersSummaryFieldPolicy,
	},
	Contribution?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContributionKeySpecifier | (() => undefined | ContributionKeySpecifier),
		fields?: ContributionFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CreateComplexMolecularProfileActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateComplexMolecularProfileActivityKeySpecifier | (() => undefined | CreateComplexMolecularProfileActivityKeySpecifier),
		fields?: CreateComplexMolecularProfileActivityFieldPolicy,
	},
	CreateFeatureActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFeatureActivityKeySpecifier | (() => undefined | CreateFeatureActivityKeySpecifier),
		fields?: CreateFeatureActivityFieldPolicy,
	},
	CreateFeaturePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFeaturePayloadKeySpecifier | (() => undefined | CreateFeaturePayloadKeySpecifier),
		fields?: CreateFeaturePayloadFieldPolicy,
	},
	CreateFusionFeaturePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFusionFeaturePayloadKeySpecifier | (() => undefined | CreateFusionFeaturePayloadKeySpecifier),
		fields?: CreateFusionFeaturePayloadFieldPolicy,
	},
	CreateFusionVariantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateFusionVariantPayloadKeySpecifier | (() => undefined | CreateFusionVariantPayloadKeySpecifier),
		fields?: CreateFusionVariantPayloadFieldPolicy,
	},
	CreateMolecularProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMolecularProfilePayloadKeySpecifier | (() => undefined | CreateMolecularProfilePayloadKeySpecifier),
		fields?: CreateMolecularProfilePayloadFieldPolicy,
	},
	CreateVariantActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVariantActivityKeySpecifier | (() => undefined | CreateVariantActivityKeySpecifier),
		fields?: CreateVariantActivityFieldPolicy,
	},
	CreateVariantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateVariantPayloadKeySpecifier | (() => undefined | CreateVariantPayloadKeySpecifier),
		fields?: CreateVariantPayloadFieldPolicy,
	},
	DataRelease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DataReleaseKeySpecifier | (() => undefined | DataReleaseKeySpecifier),
		fields?: DataReleaseFieldPolicy,
	},
	DeleteCommentActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCommentActivityKeySpecifier | (() => undefined | DeleteCommentActivityKeySpecifier),
		fields?: DeleteCommentActivityFieldPolicy,
	},
	DeleteCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCommentPayloadKeySpecifier | (() => undefined | DeleteCommentPayloadKeySpecifier),
		fields?: DeleteCommentPayloadFieldPolicy,
	},
	DeprecateComplexMolecularProfileActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateComplexMolecularProfileActivityKeySpecifier | (() => undefined | DeprecateComplexMolecularProfileActivityKeySpecifier),
		fields?: DeprecateComplexMolecularProfileActivityFieldPolicy,
	},
	DeprecateComplexMolecularProfilePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateComplexMolecularProfilePayloadKeySpecifier | (() => undefined | DeprecateComplexMolecularProfilePayloadKeySpecifier),
		fields?: DeprecateComplexMolecularProfilePayloadFieldPolicy,
	},
	DeprecateFeatureActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateFeatureActivityKeySpecifier | (() => undefined | DeprecateFeatureActivityKeySpecifier),
		fields?: DeprecateFeatureActivityFieldPolicy,
	},
	DeprecateFeaturePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateFeaturePayloadKeySpecifier | (() => undefined | DeprecateFeaturePayloadKeySpecifier),
		fields?: DeprecateFeaturePayloadFieldPolicy,
	},
	DeprecateVariantActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateVariantActivityKeySpecifier | (() => undefined | DeprecateVariantActivityKeySpecifier),
		fields?: DeprecateVariantActivityFieldPolicy,
	},
	DeprecateVariantPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeprecateVariantPayloadKeySpecifier | (() => undefined | DeprecateVariantPayloadKeySpecifier),
		fields?: DeprecateVariantPayloadFieldPolicy,
	},
	Disease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiseaseKeySpecifier | (() => undefined | DiseaseKeySpecifier),
		fields?: DiseaseFieldPolicy,
	},
	DiseaseConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiseaseConnectionKeySpecifier | (() => undefined | DiseaseConnectionKeySpecifier),
		fields?: DiseaseConnectionFieldPolicy,
	},
	DiseaseEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiseaseEdgeKeySpecifier | (() => undefined | DiseaseEdgeKeySpecifier),
		fields?: DiseaseEdgeFieldPolicy,
	},
	DiseasePopover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiseasePopoverKeySpecifier | (() => undefined | DiseasePopoverKeySpecifier),
		fields?: DiseasePopoverFieldPolicy,
	},
	DownloadableFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DownloadableFileKeySpecifier | (() => undefined | DownloadableFileKeySpecifier),
		fields?: DownloadableFileFieldPolicy,
	},
	EditUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EditUserPayloadKeySpecifier | (() => undefined | EditUserPayloadKeySpecifier),
		fields?: EditUserPayloadFieldPolicy,
	},
	EndorseAssertionActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EndorseAssertionActivityKeySpecifier | (() => undefined | EndorseAssertionActivityKeySpecifier),
		fields?: EndorseAssertionActivityFieldPolicy,
	},
	EndorseAssertionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EndorseAssertionPayloadKeySpecifier | (() => undefined | EndorseAssertionPayloadKeySpecifier),
		fields?: EndorseAssertionPayloadFieldPolicy,
	},
	Endorsement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EndorsementKeySpecifier | (() => undefined | EndorsementKeySpecifier),
		fields?: EndorsementFieldPolicy,
	},
	EndorsementConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EndorsementConnectionKeySpecifier | (() => undefined | EndorsementConnectionKeySpecifier),
		fields?: EndorsementConnectionFieldPolicy,
	},
	EndorsementEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EndorsementEdgeKeySpecifier | (() => undefined | EndorsementEdgeKeySpecifier),
		fields?: EndorsementEdgeFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventConnectionKeySpecifier | (() => undefined | EventConnectionKeySpecifier),
		fields?: EventConnectionFieldPolicy,
	},
	EventEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventEdgeKeySpecifier | (() => undefined | EventEdgeKeySpecifier),
		fields?: EventEdgeFieldPolicy,
	},
	EventOriginObject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventOriginObjectKeySpecifier | (() => undefined | EventOriginObjectKeySpecifier),
		fields?: EventOriginObjectFieldPolicy,
	},
	EventSubject?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventSubjectKeySpecifier | (() => undefined | EventSubjectKeySpecifier),
		fields?: EventSubjectFieldPolicy,
	},
	EventSubjectWithCount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventSubjectWithCountKeySpecifier | (() => undefined | EventSubjectWithCountKeySpecifier),
		fields?: EventSubjectWithCountFieldPolicy,
	},
	EvidenceItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvidenceItemKeySpecifier | (() => undefined | EvidenceItemKeySpecifier),
		fields?: EvidenceItemFieldPolicy,
	},
	EvidenceItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvidenceItemConnectionKeySpecifier | (() => undefined | EvidenceItemConnectionKeySpecifier),
		fields?: EvidenceItemConnectionFieldPolicy,
	},
	EvidenceItemEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvidenceItemEdgeKeySpecifier | (() => undefined | EvidenceItemEdgeKeySpecifier),
		fields?: EvidenceItemEdgeFieldPolicy,
	},
	EvidenceItemsByStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvidenceItemsByStatusKeySpecifier | (() => undefined | EvidenceItemsByStatusKeySpecifier),
		fields?: EvidenceItemsByStatusFieldPolicy,
	},
	EvidenceItemsByType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EvidenceItemsByTypeKeySpecifier | (() => undefined | EvidenceItemsByTypeKeySpecifier),
		fields?: EvidenceItemsByTypeFieldPolicy,
	},
	ExonCoordinate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ExonCoordinateKeySpecifier | (() => undefined | ExonCoordinateKeySpecifier),
		fields?: ExonCoordinateFieldPolicy,
	},
	Factor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorKeySpecifier | (() => undefined | FactorKeySpecifier),
		fields?: FactorFieldPolicy,
	},
	FactorConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorConnectionKeySpecifier | (() => undefined | FactorConnectionKeySpecifier),
		fields?: FactorConnectionFieldPolicy,
	},
	FactorEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorEdgeKeySpecifier | (() => undefined | FactorEdgeKeySpecifier),
		fields?: FactorEdgeFieldPolicy,
	},
	FactorVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorVariantKeySpecifier | (() => undefined | FactorVariantKeySpecifier),
		fields?: FactorVariantFieldPolicy,
	},
	FactorVariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorVariantConnectionKeySpecifier | (() => undefined | FactorVariantConnectionKeySpecifier),
		fields?: FactorVariantConnectionFieldPolicy,
	},
	FactorVariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FactorVariantEdgeKeySpecifier | (() => undefined | FactorVariantEdgeKeySpecifier),
		fields?: FactorVariantEdgeFieldPolicy,
	},
	FdaCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FdaCodeKeySpecifier | (() => undefined | FdaCodeKeySpecifier),
		fields?: FdaCodeFieldPolicy,
	},
	Feature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeatureKeySpecifier | (() => undefined | FeatureKeySpecifier),
		fields?: FeatureFieldPolicy,
	},
	FieldName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldNameKeySpecifier | (() => undefined | FieldNameKeySpecifier),
		fields?: FieldNameFieldPolicy,
	},
	FieldValidationError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldValidationErrorKeySpecifier | (() => undefined | FieldValidationErrorKeySpecifier),
		fields?: FieldValidationErrorFieldPolicy,
	},
	Flag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagKeySpecifier | (() => undefined | FlagKeySpecifier),
		fields?: FlagFieldPolicy,
	},
	FlagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagConnectionKeySpecifier | (() => undefined | FlagConnectionKeySpecifier),
		fields?: FlagConnectionFieldPolicy,
	},
	FlagEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagEdgeKeySpecifier | (() => undefined | FlagEdgeKeySpecifier),
		fields?: FlagEdgeFieldPolicy,
	},
	FlagEntityActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagEntityActivityKeySpecifier | (() => undefined | FlagEntityActivityKeySpecifier),
		fields?: FlagEntityActivityFieldPolicy,
	},
	FlagEntityPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagEntityPayloadKeySpecifier | (() => undefined | FlagEntityPayloadKeySpecifier),
		fields?: FlagEntityPayloadFieldPolicy,
	},
	Flaggable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlaggableKeySpecifier | (() => undefined | FlaggableKeySpecifier),
		fields?: FlaggableFieldPolicy,
	},
	Fusion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FusionKeySpecifier | (() => undefined | FusionKeySpecifier),
		fields?: FusionFieldPolicy,
	},
	FusionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FusionConnectionKeySpecifier | (() => undefined | FusionConnectionKeySpecifier),
		fields?: FusionConnectionFieldPolicy,
	},
	FusionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FusionEdgeKeySpecifier | (() => undefined | FusionEdgeKeySpecifier),
		fields?: FusionEdgeFieldPolicy,
	},
	FusionVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FusionVariantKeySpecifier | (() => undefined | FusionVariantKeySpecifier),
		fields?: FusionVariantFieldPolicy,
	},
	Gene?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneKeySpecifier | (() => undefined | GeneKeySpecifier),
		fields?: GeneFieldPolicy,
	},
	GeneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneConnectionKeySpecifier | (() => undefined | GeneConnectionKeySpecifier),
		fields?: GeneConnectionFieldPolicy,
	},
	GeneEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneEdgeKeySpecifier | (() => undefined | GeneEdgeKeySpecifier),
		fields?: GeneEdgeFieldPolicy,
	},
	GeneVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneVariantKeySpecifier | (() => undefined | GeneVariantKeySpecifier),
		fields?: GeneVariantFieldPolicy,
	},
	GeneVariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneVariantConnectionKeySpecifier | (() => undefined | GeneVariantConnectionKeySpecifier),
		fields?: GeneVariantConnectionFieldPolicy,
	},
	GeneVariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneVariantEdgeKeySpecifier | (() => undefined | GeneVariantEdgeKeySpecifier),
		fields?: GeneVariantEdgeFieldPolicy,
	},
	GenerateApiKeyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GenerateApiKeyPayloadKeySpecifier | (() => undefined | GenerateApiKeyPayloadKeySpecifier),
		fields?: GenerateApiKeyPayloadFieldPolicy,
	},
	LeaderboardOrganization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardOrganizationKeySpecifier | (() => undefined | LeaderboardOrganizationKeySpecifier),
		fields?: LeaderboardOrganizationFieldPolicy,
	},
	LeaderboardOrganizationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardOrganizationConnectionKeySpecifier | (() => undefined | LeaderboardOrganizationConnectionKeySpecifier),
		fields?: LeaderboardOrganizationConnectionFieldPolicy,
	},
	LeaderboardOrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardOrganizationEdgeKeySpecifier | (() => undefined | LeaderboardOrganizationEdgeKeySpecifier),
		fields?: LeaderboardOrganizationEdgeFieldPolicy,
	},
	LeaderboardRank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardRankKeySpecifier | (() => undefined | LeaderboardRankKeySpecifier),
		fields?: LeaderboardRankFieldPolicy,
	},
	LeaderboardUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardUserKeySpecifier | (() => undefined | LeaderboardUserKeySpecifier),
		fields?: LeaderboardUserFieldPolicy,
	},
	LeaderboardUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardUserConnectionKeySpecifier | (() => undefined | LeaderboardUserConnectionKeySpecifier),
		fields?: LeaderboardUserConnectionFieldPolicy,
	},
	LeaderboardUserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LeaderboardUserEdgeKeySpecifier | (() => undefined | LeaderboardUserEdgeKeySpecifier),
		fields?: LeaderboardUserEdgeFieldPolicy,
	},
	LinkableDisease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkableDiseaseKeySpecifier | (() => undefined | LinkableDiseaseKeySpecifier),
		fields?: LinkableDiseaseFieldPolicy,
	},
	LinkableFeature?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkableFeatureKeySpecifier | (() => undefined | LinkableFeatureKeySpecifier),
		fields?: LinkableFeatureFieldPolicy,
	},
	LinkableTherapy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkableTherapyKeySpecifier | (() => undefined | LinkableTherapyKeySpecifier),
		fields?: LinkableTherapyFieldPolicy,
	},
	LinkableVariant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkableVariantKeySpecifier | (() => undefined | LinkableVariantKeySpecifier),
		fields?: LinkableVariantFieldPolicy,
	},
	LinkableVariantType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkableVariantTypeKeySpecifier | (() => undefined | LinkableVariantTypeKeySpecifier),
		fields?: LinkableVariantTypeFieldPolicy,
	},
	LinkoutData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkoutDataKeySpecifier | (() => undefined | LinkoutDataKeySpecifier),
		fields?: LinkoutDataFieldPolicy,
	},
	ModerateAssertionActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModerateAssertionActivityKeySpecifier | (() => undefined | ModerateAssertionActivityKeySpecifier),
		fields?: ModerateAssertionActivityFieldPolicy,
	},
	ModerateAssertionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModerateAssertionPayloadKeySpecifier | (() => undefined | ModerateAssertionPayloadKeySpecifier),
		fields?: ModerateAssertionPayloadFieldPolicy,
	},
	ModerateEvidenceItemActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModerateEvidenceItemActivityKeySpecifier | (() => undefined | ModerateEvidenceItemActivityKeySpecifier),
		fields?: ModerateEvidenceItemActivityFieldPolicy,
	},
	ModerateEvidenceItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModerateEvidenceItemPayloadKeySpecifier | (() => undefined | ModerateEvidenceItemPayloadKeySpecifier),
		fields?: ModerateEvidenceItemPayloadFieldPolicy,
	},
	ModeratedObjectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModeratedObjectFieldKeySpecifier | (() => undefined | ModeratedObjectFieldKeySpecifier),
		fields?: ModeratedObjectFieldFieldPolicy,
	},
	MolecularProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileKeySpecifier | (() => undefined | MolecularProfileKeySpecifier),
		fields?: MolecularProfileFieldPolicy,
	},
	MolecularProfileAlias?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileAliasKeySpecifier | (() => undefined | MolecularProfileAliasKeySpecifier),
		fields?: MolecularProfileAliasFieldPolicy,
	},
	MolecularProfileComponent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileComponentKeySpecifier | (() => undefined | MolecularProfileComponentKeySpecifier),
		fields?: MolecularProfileComponentFieldPolicy,
	},
	MolecularProfileConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileConnectionKeySpecifier | (() => undefined | MolecularProfileConnectionKeySpecifier),
		fields?: MolecularProfileConnectionFieldPolicy,
	},
	MolecularProfileEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileEdgeKeySpecifier | (() => undefined | MolecularProfileEdgeKeySpecifier),
		fields?: MolecularProfileEdgeFieldPolicy,
	},
	MolecularProfileNamePreview?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileNamePreviewKeySpecifier | (() => undefined | MolecularProfileNamePreviewKeySpecifier),
		fields?: MolecularProfileNamePreviewFieldPolicy,
	},
	MolecularProfileTextSegment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolecularProfileTextSegmentKeySpecifier | (() => undefined | MolecularProfileTextSegmentKeySpecifier),
		fields?: MolecularProfileTextSegmentFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	MyChemInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MyChemInfoKeySpecifier | (() => undefined | MyChemInfoKeySpecifier),
		fields?: MyChemInfoFieldPolicy,
	},
	MyDiseaseInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MyDiseaseInfoKeySpecifier | (() => undefined | MyDiseaseInfoKeySpecifier),
		fields?: MyDiseaseInfoFieldPolicy,
	},
	MyVariantInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MyVariantInfoKeySpecifier | (() => undefined | MyVariantInfoKeySpecifier),
		fields?: MyVariantInfoFieldPolicy,
	},
	NccnGuideline?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NccnGuidelineKeySpecifier | (() => undefined | NccnGuidelineKeySpecifier),
		fields?: NccnGuidelineFieldPolicy,
	},
	NcitDefinition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NcitDefinitionKeySpecifier | (() => undefined | NcitDefinitionKeySpecifier),
		fields?: NcitDefinitionFieldPolicy,
	},
	NcitDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NcitDetailsKeySpecifier | (() => undefined | NcitDetailsKeySpecifier),
		fields?: NcitDetailsFieldPolicy,
	},
	NcitSynonym?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NcitSynonymKeySpecifier | (() => undefined | NcitSynonymKeySpecifier),
		fields?: NcitSynonymFieldPolicy,
	},
	NewsItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NewsItemKeySpecifier | (() => undefined | NewsItemKeySpecifier),
		fields?: NewsItemFieldPolicy,
	},
	Notification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationKeySpecifier | (() => undefined | NotificationKeySpecifier),
		fields?: NotificationFieldPolicy,
	},
	NotificationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationConnectionKeySpecifier | (() => undefined | NotificationConnectionKeySpecifier),
		fields?: NotificationConnectionFieldPolicy,
	},
	NotificationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NotificationEdgeKeySpecifier | (() => undefined | NotificationEdgeKeySpecifier),
		fields?: NotificationEdgeFieldPolicy,
	},
	ObjectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectFieldKeySpecifier | (() => undefined | ObjectFieldKeySpecifier),
		fields?: ObjectFieldFieldPolicy,
	},
	ObjectFieldDiff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ObjectFieldDiffKeySpecifier | (() => undefined | ObjectFieldDiffKeySpecifier),
		fields?: ObjectFieldDiffFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationConnectionKeySpecifier | (() => undefined | OrganizationConnectionKeySpecifier),
		fields?: OrganizationConnectionFieldPolicy,
	},
	OrganizationEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationEdgeKeySpecifier | (() => undefined | OrganizationEdgeKeySpecifier),
		fields?: OrganizationEdgeFieldPolicy,
	},
	OrganizationLeaderboards?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationLeaderboardsKeySpecifier | (() => undefined | OrganizationLeaderboardsKeySpecifier),
		fields?: OrganizationLeaderboardsFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Phenotype?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhenotypeKeySpecifier | (() => undefined | PhenotypeKeySpecifier),
		fields?: PhenotypeFieldPolicy,
	},
	PhenotypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhenotypeConnectionKeySpecifier | (() => undefined | PhenotypeConnectionKeySpecifier),
		fields?: PhenotypeConnectionFieldPolicy,
	},
	PhenotypeEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhenotypeEdgeKeySpecifier | (() => undefined | PhenotypeEdgeKeySpecifier),
		fields?: PhenotypeEdgeFieldPolicy,
	},
	PhenotypePopover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhenotypePopoverKeySpecifier | (() => undefined | PhenotypePopoverKeySpecifier),
		fields?: PhenotypePopoverFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Ranks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RanksKeySpecifier | (() => undefined | RanksKeySpecifier),
		fields?: RanksFieldPolicy,
	},
	RejectRevisionsActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RejectRevisionsActivityKeySpecifier | (() => undefined | RejectRevisionsActivityKeySpecifier),
		fields?: RejectRevisionsActivityFieldPolicy,
	},
	RejectRevisionsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RejectRevisionsPayloadKeySpecifier | (() => undefined | RejectRevisionsPayloadKeySpecifier),
		fields?: RejectRevisionsPayloadFieldPolicy,
	},
	ResolveFlagActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolveFlagActivityKeySpecifier | (() => undefined | ResolveFlagActivityKeySpecifier),
		fields?: ResolveFlagActivityFieldPolicy,
	},
	ResolveFlagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResolveFlagPayloadKeySpecifier | (() => undefined | ResolveFlagPayloadKeySpecifier),
		fields?: ResolveFlagPayloadFieldPolicy,
	},
	Revision?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionKeySpecifier | (() => undefined | RevisionKeySpecifier),
		fields?: RevisionFieldPolicy,
	},
	RevisionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionConnectionKeySpecifier | (() => undefined | RevisionConnectionKeySpecifier),
		fields?: RevisionConnectionFieldPolicy,
	},
	RevisionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionEdgeKeySpecifier | (() => undefined | RevisionEdgeKeySpecifier),
		fields?: RevisionEdgeFieldPolicy,
	},
	RevisionResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionResultKeySpecifier | (() => undefined | RevisionResultKeySpecifier),
		fields?: RevisionResultFieldPolicy,
	},
	RevisionSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevisionSetKeySpecifier | (() => undefined | RevisionSetKeySpecifier),
		fields?: RevisionSetFieldPolicy,
	},
	RevokeApiKeyPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeApiKeyPayloadKeySpecifier | (() => undefined | RevokeApiKeyPayloadKeySpecifier),
		fields?: RevokeApiKeyPayloadFieldPolicy,
	},
	RevokeEndorsementActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeEndorsementActivityKeySpecifier | (() => undefined | RevokeEndorsementActivityKeySpecifier),
		fields?: RevokeEndorsementActivityFieldPolicy,
	},
	RevokeEndorsementPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RevokeEndorsementPayloadKeySpecifier | (() => undefined | RevokeEndorsementPayloadKeySpecifier),
		fields?: RevokeEndorsementPayloadFieldPolicy,
	},
	ScalarField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScalarFieldKeySpecifier | (() => undefined | ScalarFieldKeySpecifier),
		fields?: ScalarFieldFieldPolicy,
	},
	ScalarFieldDiff?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScalarFieldDiffKeySpecifier | (() => undefined | ScalarFieldDiffKeySpecifier),
		fields?: ScalarFieldDiffFieldPolicy,
	},
	SearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultKeySpecifier | (() => undefined | SearchResultKeySpecifier),
		fields?: SearchResultFieldPolicy,
	},
	Source?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceKeySpecifier | (() => undefined | SourceKeySpecifier),
		fields?: SourceFieldPolicy,
	},
	SourceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceConnectionKeySpecifier | (() => undefined | SourceConnectionKeySpecifier),
		fields?: SourceConnectionFieldPolicy,
	},
	SourceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceEdgeKeySpecifier | (() => undefined | SourceEdgeKeySpecifier),
		fields?: SourceEdgeFieldPolicy,
	},
	SourcePopover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourcePopoverKeySpecifier | (() => undefined | SourcePopoverKeySpecifier),
		fields?: SourcePopoverFieldPolicy,
	},
	SourceStub?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceStubKeySpecifier | (() => undefined | SourceStubKeySpecifier),
		fields?: SourceStubFieldPolicy,
	},
	SourceSuggestion?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceSuggestionKeySpecifier | (() => undefined | SourceSuggestionKeySpecifier),
		fields?: SourceSuggestionFieldPolicy,
	},
	SourceSuggestionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceSuggestionConnectionKeySpecifier | (() => undefined | SourceSuggestionConnectionKeySpecifier),
		fields?: SourceSuggestionConnectionFieldPolicy,
	},
	SourceSuggestionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceSuggestionEdgeKeySpecifier | (() => undefined | SourceSuggestionEdgeKeySpecifier),
		fields?: SourceSuggestionEdgeFieldPolicy,
	},
	SourceSuggestionValues?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceSuggestionValuesKeySpecifier | (() => undefined | SourceSuggestionValuesKeySpecifier),
		fields?: SourceSuggestionValuesFieldPolicy,
	},
	Stats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsKeySpecifier | (() => undefined | StatsKeySpecifier),
		fields?: StatsFieldPolicy,
	},
	SubmitAssertionActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitAssertionActivityKeySpecifier | (() => undefined | SubmitAssertionActivityKeySpecifier),
		fields?: SubmitAssertionActivityFieldPolicy,
	},
	SubmitAssertionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitAssertionPayloadKeySpecifier | (() => undefined | SubmitAssertionPayloadKeySpecifier),
		fields?: SubmitAssertionPayloadFieldPolicy,
	},
	SubmitEvidenceItemActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitEvidenceItemActivityKeySpecifier | (() => undefined | SubmitEvidenceItemActivityKeySpecifier),
		fields?: SubmitEvidenceItemActivityFieldPolicy,
	},
	SubmitEvidenceItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitEvidenceItemPayloadKeySpecifier | (() => undefined | SubmitEvidenceItemPayloadKeySpecifier),
		fields?: SubmitEvidenceItemPayloadFieldPolicy,
	},
	SubmitVariantGroupPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubmitVariantGroupPayloadKeySpecifier | (() => undefined | SubmitVariantGroupPayloadKeySpecifier),
		fields?: SubmitVariantGroupPayloadFieldPolicy,
	},
	Subscribable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribableKeySpecifier | (() => undefined | SubscribableKeySpecifier),
		fields?: SubscribableFieldPolicy,
	},
	SubscribePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscribePayloadKeySpecifier | (() => undefined | SubscribePayloadKeySpecifier),
		fields?: SubscribePayloadFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	SuggestAssertionRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestAssertionRevisionPayloadKeySpecifier | (() => undefined | SuggestAssertionRevisionPayloadKeySpecifier),
		fields?: SuggestAssertionRevisionPayloadFieldPolicy,
	},
	SuggestEvidenceItemRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestEvidenceItemRevisionPayloadKeySpecifier | (() => undefined | SuggestEvidenceItemRevisionPayloadKeySpecifier),
		fields?: SuggestEvidenceItemRevisionPayloadFieldPolicy,
	},
	SuggestFactorRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestFactorRevisionPayloadKeySpecifier | (() => undefined | SuggestFactorRevisionPayloadKeySpecifier),
		fields?: SuggestFactorRevisionPayloadFieldPolicy,
	},
	SuggestFactorVariantRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestFactorVariantRevisionPayloadKeySpecifier | (() => undefined | SuggestFactorVariantRevisionPayloadKeySpecifier),
		fields?: SuggestFactorVariantRevisionPayloadFieldPolicy,
	},
	SuggestFusionRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestFusionRevisionPayloadKeySpecifier | (() => undefined | SuggestFusionRevisionPayloadKeySpecifier),
		fields?: SuggestFusionRevisionPayloadFieldPolicy,
	},
	SuggestFusionVariantRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestFusionVariantRevisionPayloadKeySpecifier | (() => undefined | SuggestFusionVariantRevisionPayloadKeySpecifier),
		fields?: SuggestFusionVariantRevisionPayloadFieldPolicy,
	},
	SuggestGeneRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestGeneRevisionPayloadKeySpecifier | (() => undefined | SuggestGeneRevisionPayloadKeySpecifier),
		fields?: SuggestGeneRevisionPayloadFieldPolicy,
	},
	SuggestGeneVariantRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestGeneVariantRevisionPayloadKeySpecifier | (() => undefined | SuggestGeneVariantRevisionPayloadKeySpecifier),
		fields?: SuggestGeneVariantRevisionPayloadFieldPolicy,
	},
	SuggestMolecularProfileRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestMolecularProfileRevisionPayloadKeySpecifier | (() => undefined | SuggestMolecularProfileRevisionPayloadKeySpecifier),
		fields?: SuggestMolecularProfileRevisionPayloadFieldPolicy,
	},
	SuggestRevisionSetActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestRevisionSetActivityKeySpecifier | (() => undefined | SuggestRevisionSetActivityKeySpecifier),
		fields?: SuggestRevisionSetActivityFieldPolicy,
	},
	SuggestSourceActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestSourceActivityKeySpecifier | (() => undefined | SuggestSourceActivityKeySpecifier),
		fields?: SuggestSourceActivityFieldPolicy,
	},
	SuggestSourcePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestSourcePayloadKeySpecifier | (() => undefined | SuggestSourcePayloadKeySpecifier),
		fields?: SuggestSourcePayloadFieldPolicy,
	},
	SuggestVariantGroupRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestVariantGroupRevisionPayloadKeySpecifier | (() => undefined | SuggestVariantGroupRevisionPayloadKeySpecifier),
		fields?: SuggestVariantGroupRevisionPayloadFieldPolicy,
	},
	Therapy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TherapyKeySpecifier | (() => undefined | TherapyKeySpecifier),
		fields?: TherapyFieldPolicy,
	},
	TherapyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TherapyConnectionKeySpecifier | (() => undefined | TherapyConnectionKeySpecifier),
		fields?: TherapyConnectionFieldPolicy,
	},
	TherapyEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TherapyEdgeKeySpecifier | (() => undefined | TherapyEdgeKeySpecifier),
		fields?: TherapyEdgeFieldPolicy,
	},
	TherapyPopover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TherapyPopoverKeySpecifier | (() => undefined | TherapyPopoverKeySpecifier),
		fields?: TherapyPopoverFieldPolicy,
	},
	TimePointCounts?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimePointCountsKeySpecifier | (() => undefined | TimePointCountsKeySpecifier),
		fields?: TimePointCountsFieldPolicy,
	},
	UnsubscribePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnsubscribePayloadKeySpecifier | (() => undefined | UnsubscribePayloadKeySpecifier),
		fields?: UnsubscribePayloadFieldPolicy,
	},
	UpdateCoiPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCoiPayloadKeySpecifier | (() => undefined | UpdateCoiPayloadKeySpecifier),
		fields?: UpdateCoiPayloadFieldPolicy,
	},
	UpdateNotificationStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateNotificationStatusPayloadKeySpecifier | (() => undefined | UpdateNotificationStatusPayloadKeySpecifier),
		fields?: UpdateNotificationStatusPayloadFieldPolicy,
	},
	UpdateSourceSuggestionStatusActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSourceSuggestionStatusActivityKeySpecifier | (() => undefined | UpdateSourceSuggestionStatusActivityKeySpecifier),
		fields?: UpdateSourceSuggestionStatusActivityFieldPolicy,
	},
	UpdateSourceSuggestionStatusPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSourceSuggestionStatusPayloadKeySpecifier | (() => undefined | UpdateSourceSuggestionStatusPayloadKeySpecifier),
		fields?: UpdateSourceSuggestionStatusPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserEdgeKeySpecifier | (() => undefined | UserEdgeKeySpecifier),
		fields?: UserEdgeFieldPolicy,
	},
	UserLeaderboards?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserLeaderboardsKeySpecifier | (() => undefined | UserLeaderboardsKeySpecifier),
		fields?: UserLeaderboardsFieldPolicy,
	},
	ValidationErrors?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ValidationErrorsKeySpecifier | (() => undefined | ValidationErrorsKeySpecifier),
		fields?: ValidationErrorsFieldPolicy,
	},
	Variant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantKeySpecifier | (() => undefined | VariantKeySpecifier),
		fields?: VariantFieldPolicy,
	},
	VariantAlias?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantAliasKeySpecifier | (() => undefined | VariantAliasKeySpecifier),
		fields?: VariantAliasFieldPolicy,
	},
	VariantCoordinate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantCoordinateKeySpecifier | (() => undefined | VariantCoordinateKeySpecifier),
		fields?: VariantCoordinateFieldPolicy,
	},
	VariantGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantGroupKeySpecifier | (() => undefined | VariantGroupKeySpecifier),
		fields?: VariantGroupFieldPolicy,
	},
	VariantGroupConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantGroupConnectionKeySpecifier | (() => undefined | VariantGroupConnectionKeySpecifier),
		fields?: VariantGroupConnectionFieldPolicy,
	},
	VariantGroupEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantGroupEdgeKeySpecifier | (() => undefined | VariantGroupEdgeKeySpecifier),
		fields?: VariantGroupEdgeFieldPolicy,
	},
	VariantInterface?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantInterfaceKeySpecifier | (() => undefined | VariantInterfaceKeySpecifier),
		fields?: VariantInterfaceFieldPolicy,
	},
	VariantInterfaceConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantInterfaceConnectionKeySpecifier | (() => undefined | VariantInterfaceConnectionKeySpecifier),
		fields?: VariantInterfaceConnectionFieldPolicy,
	},
	VariantInterfaceEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantInterfaceEdgeKeySpecifier | (() => undefined | VariantInterfaceEdgeKeySpecifier),
		fields?: VariantInterfaceEdgeFieldPolicy,
	},
	VariantType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantTypeKeySpecifier | (() => undefined | VariantTypeKeySpecifier),
		fields?: VariantTypeFieldPolicy,
	},
	VariantTypePopover?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantTypePopoverKeySpecifier | (() => undefined | VariantTypePopoverKeySpecifier),
		fields?: VariantTypePopoverFieldPolicy,
	},
	WithRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithRevisionsKeySpecifier | (() => undefined | WithRevisionsKeySpecifier),
		fields?: WithRevisionsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;