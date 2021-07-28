import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AcceptRevisionPayloadKeySpecifier = ('clientMutationId' | 'revision' | 'supersededRevisions' | AcceptRevisionPayloadKeySpecifier)[];
export type AcceptRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	supersededRevisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AcmgCodeKeySpecifier = ('code' | 'description' | 'id' | AcmgCodeKeySpecifier)[];
export type AcmgCodeFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | AddCommentPayloadKeySpecifier)[];
export type AddCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AddRemoteCitationPayloadKeySpecifier = ('clientMutationId' | 'newSource' | AddRemoteCitationPayloadKeySpecifier)[];
export type AddRemoteCitationPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	newSource?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AdvancedSearchResultKeySpecifier = ('permalinkId' | 'resultIds' | 'searchEndpoint' | AdvancedSearchResultKeySpecifier)[];
export type AdvancedSearchResultFieldPolicy = {
	permalinkId?: FieldPolicy<any> | FieldReadFunction<any>,
	resultIds?: FieldPolicy<any> | FieldReadFunction<any>,
	searchEndpoint?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AssertionKeySpecifier = ('acceptanceEvent' | 'acmgCodes' | 'ampLevel' | 'assertionDirection' | 'assertionType' | 'clinicalSignificance' | 'comments' | 'description' | 'disease' | 'drugInteractionType' | 'drugs' | 'events' | 'fdaCompanionTest' | 'flagged' | 'flags' | 'gene' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'name' | 'nccnGuideline' | 'phenotypes' | 'regulatoryApproval' | 'rejectionEvent' | 'revisions' | 'source' | 'status' | 'submissionEvent' | 'summary' | 'variant' | 'variantOrigin' | AssertionKeySpecifier)[];
export type AssertionFieldPolicy = {
	acceptanceEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	acmgCodes?: FieldPolicy<any> | FieldReadFunction<any>,
	ampLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionType?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalSignificance?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	drugInteractionType?: FieldPolicy<any> | FieldReadFunction<any>,
	drugs?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fdaCompanionTest?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nccnGuideline?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	regulatoryApproval?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	summary?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseClinicalTrialKeySpecifier = ('evidenceCount' | 'id' | 'name' | 'nctId' | 'sourceCount' | BrowseClinicalTrialKeySpecifier)[];
export type BrowseClinicalTrialFieldPolicy = {
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nctId?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseClinicalTrialConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseClinicalTrialConnectionKeySpecifier)[];
export type BrowseClinicalTrialConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseDiseaseKeySpecifier = ('assertionCount' | 'displayName' | 'doid' | 'evidenceItemCount' | 'geneNames' | 'id' | 'name' | 'variantCount' | BrowseDiseaseKeySpecifier)[];
export type BrowseDiseaseFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	doid?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	geneNames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDiseaseConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseDiseaseConnectionKeySpecifier)[];
export type BrowseDiseaseConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseDrugKeySpecifier = ('assertionCount' | 'evidenceCount' | 'id' | 'name' | 'ncitId' | BrowseDrugKeySpecifier)[];
export type BrowseDrugFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDrugConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseDrugConnectionKeySpecifier)[];
export type BrowseDrugConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseDrugEdgeKeySpecifier = ('cursor' | 'node' | BrowseDrugEdgeKeySpecifier)[];
export type BrowseDrugEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseGeneKeySpecifier = ('aliases' | 'assertionCount' | 'description' | 'diseases' | 'drugs' | 'entrezId' | 'evidenceItemCount' | 'id' | 'name' | 'variantCount' | BrowseGeneKeySpecifier)[];
export type BrowseGeneFieldPolicy = {
	aliases?: FieldPolicy<any> | FieldReadFunction<any>,
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	drugs?: FieldPolicy<any> | FieldReadFunction<any>,
	entrezId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseGeneConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseGeneConnectionKeySpecifier)[];
export type BrowseGeneConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseGeneEdgeKeySpecifier = ('cursor' | 'node' | BrowseGeneEdgeKeySpecifier)[];
export type BrowseGeneEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowsePhenotypeKeySpecifier = ('assertionCount' | 'evidenceCount' | 'hpoId' | 'id' | 'name' | BrowsePhenotypeKeySpecifier)[];
export type BrowsePhenotypeFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceCount?: FieldPolicy<any> | FieldReadFunction<any>,
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowsePhenotypeConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowsePhenotypeConnectionKeySpecifier)[];
export type BrowsePhenotypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseSourceKeySpecifier = ('authors' | 'citation' | 'citationId' | 'evidenceItemCount' | 'id' | 'journal' | 'name' | 'publicationYear' | 'sourceType' | BrowseSourceKeySpecifier)[];
export type BrowseSourceFieldPolicy = {
	authors?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseSourceConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseSourceConnectionKeySpecifier)[];
export type BrowseSourceConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseVariantKeySpecifier = ('assertionCount' | 'diseases' | 'drugs' | 'evidenceItemCount' | 'evidenceScore' | 'geneId' | 'geneName' | 'id' | 'name' | BrowseVariantKeySpecifier)[];
export type BrowseVariantFieldPolicy = {
	assertionCount?: FieldPolicy<any> | FieldReadFunction<any>,
	diseases?: FieldPolicy<any> | FieldReadFunction<any>,
	drugs?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceScore?: FieldPolicy<any> | FieldReadFunction<any>,
	geneId?: FieldPolicy<any> | FieldReadFunction<any>,
	geneName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantConnectionKeySpecifier)[];
export type BrowseVariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseVariantGroupKeySpecifier = ('evidenceItemCount' | 'geneNames' | 'id' | 'name' | 'variantCount' | 'variantNames' | BrowseVariantGroupKeySpecifier)[];
export type BrowseVariantGroupFieldPolicy = {
	evidenceItemCount?: FieldPolicy<any> | FieldReadFunction<any>,
	geneNames?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>,
	variantNames?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantGroupConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantGroupConnectionKeySpecifier)[];
export type BrowseVariantGroupConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type BrowseVariantTypeKeySpecifier = ('id' | 'name' | 'soid' | 'variantCount' | BrowseVariantTypeKeySpecifier)[];
export type BrowseVariantTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	soid?: FieldPolicy<any> | FieldReadFunction<any>,
	variantCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BrowseVariantTypeConnectionKeySpecifier = ('edges' | 'filteredCount' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | BrowseVariantTypeConnectionKeySpecifier)[];
export type BrowseVariantTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	filteredCount?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type ClinicalTrialKeySpecifier = ('description' | 'id' | 'name' | 'nctId' | 'url' | ClinicalTrialKeySpecifier)[];
export type ClinicalTrialFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nctId?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoiKeySpecifier = ('coiPresent' | 'coiStatement' | 'coiStatus' | 'createdAt' | 'expiresAt' | CoiKeySpecifier)[];
export type CoiFieldPolicy = {
	coiPresent?: FieldPolicy<any> | FieldReadFunction<any>,
	coiStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	coiStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	expiresAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('comment' | 'commenter' | 'createdAt' | 'creationEvent' | 'id' | 'name' | 'title' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	commenter?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | 'uniqueCommenters' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueCommenters?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentEdgeKeySpecifier = ('cursor' | 'node' | CommentEdgeKeySpecifier)[];
export type CommentEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentableKeySpecifier = ('comments' | 'lastCommentEvent' | CommentableKeySpecifier)[];
export type CommentableFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributingUserKeySpecifier = ('lastActionDate' | 'uniqueActions' | 'user' | ContributingUserKeySpecifier)[];
export type ContributingUserFieldPolicy = {
	lastActionDate?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueActions?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContributingUsersSummaryKeySpecifier = ('curators' | 'editors' | ContributingUsersSummaryKeySpecifier)[];
export type ContributingUsersSummaryFieldPolicy = {
	curators?: FieldPolicy<any> | FieldReadFunction<any>,
	editors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CoordinateKeySpecifier = ('chromosome' | 'referenceBases' | 'representativeTranscript' | 'start' | 'stop' | 'variantBases' | CoordinateKeySpecifier)[];
export type CoordinateFieldPolicy = {
	chromosome?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceBases?: FieldPolicy<any> | FieldReadFunction<any>,
	representativeTranscript?: FieldPolicy<any> | FieldReadFunction<any>,
	start?: FieldPolicy<any> | FieldReadFunction<any>,
	stop?: FieldPolicy<any> | FieldReadFunction<any>,
	variantBases?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiseaseKeySpecifier = ('diseaseUrl' | 'displayName' | 'doid' | 'id' | 'name' | DiseaseKeySpecifier)[];
export type DiseaseFieldPolicy = {
	diseaseUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	doid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DrugKeySpecifier = ('drugUrl' | 'id' | 'name' | 'ncitId' | DrugKeySpecifier)[];
export type DrugFieldPolicy = {
	drugUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	ncitId?: FieldPolicy<any> | FieldReadFunction<any>
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
export type EventConnectionKeySpecifier = ('edges' | 'eventTypes' | 'nodes' | 'pageCount' | 'pageInfo' | 'participatingOrganizations' | 'totalCount' | 'uniqueParticipants' | EventConnectionKeySpecifier)[];
export type EventConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	participatingOrganizations?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueParticipants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventEdgeKeySpecifier = ('cursor' | 'node' | EventEdgeKeySpecifier)[];
export type EventEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventOriginObjectKeySpecifier = ('id' | 'name' | EventOriginObjectKeySpecifier)[];
export type EventOriginObjectFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventSubjectKeySpecifier = ('events' | 'id' | 'name' | EventSubjectKeySpecifier)[];
export type EventSubjectFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EvidenceItemKeySpecifier = ('acceptanceEvent' | 'assertions' | 'clinicalSignificance' | 'comments' | 'description' | 'disease' | 'drugInteractionType' | 'drugs' | 'events' | 'evidenceDirection' | 'evidenceLevel' | 'evidenceRating' | 'evidenceType' | 'flagged' | 'flags' | 'gene' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'name' | 'phenotypes' | 'rejectionEvent' | 'revisions' | 'source' | 'status' | 'submissionEvent' | 'variant' | 'variantHgvs' | 'variantOrigin' | EvidenceItemKeySpecifier)[];
export type EvidenceItemFieldPolicy = {
	acceptanceEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalSignificance?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	drugInteractionType?: FieldPolicy<any> | FieldReadFunction<any>,
	drugs?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceRating?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceType?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	submissionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type FieldNameKeySpecifier = ('displayName' | 'name' | FieldNameKeySpecifier)[];
export type FieldNameFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagKeySpecifier = ('comments' | 'createdAt' | 'flaggable' | 'flaggingUser' | 'id' | 'lastCommentEvent' | 'name' | 'openComment' | 'resolutionComment' | 'resolvedAt' | 'resolvingUser' | 'state' | FlagKeySpecifier)[];
export type FlagFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggable?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	openComment?: FieldPolicy<any> | FieldReadFunction<any>,
	resolutionComment?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	resolvingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | FlagConnectionKeySpecifier)[];
export type FlagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagEdgeKeySpecifier = ('cursor' | 'node' | FlagEdgeKeySpecifier)[];
export type FlagEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlagEntityPayloadKeySpecifier = ('clientMutationId' | 'flag' | FlagEntityPayloadKeySpecifier)[];
export type FlagEntityPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FlaggableKeySpecifier = ('flagged' | 'flags' | 'id' | 'name' | FlaggableKeySpecifier)[];
export type FlaggableFieldPolicy = {
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneKeySpecifier = ('aliases' | 'comments' | 'description' | 'entrezId' | 'events' | 'flagged' | 'flags' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'myGeneInfoDetails' | 'name' | 'officialName' | 'revisions' | 'sources' | 'variants' | GeneKeySpecifier)[];
export type GeneFieldPolicy = {
	aliases?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entrezId?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	myGeneInfoDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	officialName?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneAliasKeySpecifier = ('name' | GeneAliasKeySpecifier)[];
export type GeneAliasFieldPolicy = {
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LinkoutDataKeySpecifier = ('currentValue' | 'diffValue' | 'name' | 'suggestedValue' | LinkoutDataKeySpecifier)[];
export type LinkoutDataFieldPolicy = {
	currentValue?: FieldPolicy<any> | FieldReadFunction<any>,
	diffValue?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedValue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MarkNotificationsAsReadPayloadKeySpecifier = ('clientMutationId' | 'notifications' | MarkNotificationsAsReadPayloadKeySpecifier)[];
export type MarkNotificationsAsReadPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModeratedObjectFieldKeySpecifier = ('displayName' | 'displayType' | 'entityType' | 'id' | ModeratedObjectFieldKeySpecifier)[];
export type ModeratedObjectFieldFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	entityType?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('acceptRevision' | 'addComment' | 'addRemoteCitation' | 'flagEntity' | 'markNotificationsAsRead' | 'rejectRevision' | 'resolveFlag' | 'subscribe' | 'suggestEvidenceItemRevision' | 'suggestGeneRevision' | 'suggestVariantRevision' | 'unsubscribe' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addRemoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	flagEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	markNotificationsAsRead?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestEvidenceItemRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestGeneRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestVariantRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribe?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MyVariantInfoKeySpecifier = ('caddConsequence' | 'caddDetail' | 'caddScore' | 'clinvarClinicalSignificance' | 'clinvarHgvsCoding' | 'clinvarHgvsGenomic' | 'clinvarHgvsNonCoding' | 'clinvarHgvsProtein' | 'clinvarId' | 'clinvarOmim' | 'cosmicId' | 'dbnsfpInterproDomain' | 'dbsnpRsid' | 'eglClass' | 'eglHgvs' | 'eglProtein' | 'eglTranscript' | 'exacAlleleCount' | 'exacAlleleFrequency' | 'exacAlleleNumber' | 'fathmmMklPrediction' | 'fathmmMklScore' | 'fathmmPrediction' | 'fathmmScore' | 'fitconsScore' | 'gerp' | 'gnomadExomeAlleleCount' | 'gnomadExomeAlleleFrequency' | 'gnomadExomeAlleleNumber' | 'gnomadExomeFilter' | 'gnomadGenomeAlleleCount' | 'gnomadGenomeAlleleFrequency' | 'gnomadGenomeAlleleNumber' | 'gnomadGenomeFilter' | 'lrtPrediction' | 'lrtScore' | 'metalrPrediction' | 'metalrScore' | 'metasvmPrediction' | 'metasvmScore' | 'mutationassessorPrediction' | 'mutationassessorScore' | 'mutationtasterPrediction' | 'mutationtasterScore' | 'myVariantInfoId' | 'phastcons100way' | 'phastcons30way' | 'phyloP100way' | 'phyloP30way' | 'polyphen2HdivPrediction' | 'polyphen2HdivScore' | 'polyphen2HvarPrediction' | 'polyphen2HvarScore' | 'proveanPrediction' | 'proveanScore' | 'revelScore' | 'siftPrediction' | 'siftScore' | 'siphy' | 'snpeffSnpEffect' | 'snpeffSnpImpact' | MyVariantInfoKeySpecifier)[];
export type MyVariantInfoFieldPolicy = {
	caddConsequence?: FieldPolicy<any> | FieldReadFunction<any>,
	caddDetail?: FieldPolicy<any> | FieldReadFunction<any>,
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
	phastcons100way?: FieldPolicy<any> | FieldReadFunction<any>,
	phastcons30way?: FieldPolicy<any> | FieldReadFunction<any>,
	phyloP100way?: FieldPolicy<any> | FieldReadFunction<any>,
	phyloP30way?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type NotificationConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | NotificationConnectionKeySpecifier)[];
export type NotificationConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ObjectFieldDiffKeySpecifier = ('addedObjects' | 'keptObjects' | 'removedObjects' | ObjectFieldDiffKeySpecifier)[];
export type ObjectFieldDiffFieldPolicy = {
	addedObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	keptObjects?: FieldPolicy<any> | FieldReadFunction<any>,
	removedObjects?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('description' | 'eventCount' | 'events' | 'id' | 'memberCount' | 'members' | 'mostRecentEvent' | 'name' | 'orgAndSuborgsStatsHash' | 'orgStatsHash' | 'profileImagePath' | 'subGroups' | 'url' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCount?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	memberCount?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	orgAndSuborgsStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	orgStatsHash?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypeKeySpecifier = ('hpoId' | 'id' | 'name' | 'url' | PhenotypeKeySpecifier)[];
export type PhenotypeFieldPolicy = {
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('assertion' | 'assertions' | 'browseDiseases' | 'browseGenes' | 'browseSources' | 'browseVariantGroups' | 'browseVariants' | 'clinicalTrial' | 'clinicalTrials' | 'comment' | 'comments' | 'contributors' | 'disease' | 'drug' | 'drugs' | 'events' | 'evidenceItem' | 'evidenceItems' | 'flag' | 'flags' | 'gene' | 'organization' | 'organizations' | 'phenotype' | 'phenotypes' | 'remoteCitation' | 'revision' | 'search' | 'searchByPermalink' | 'searchGenes' | 'source' | 'sourceTypeahead' | 'user' | 'users' | 'variant' | 'variantType' | 'variantTypes' | 'variants' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	assertion?: FieldPolicy<any> | FieldReadFunction<any>,
	assertions?: FieldPolicy<any> | FieldReadFunction<any>,
	browseDiseases?: FieldPolicy<any> | FieldReadFunction<any>,
	browseGenes?: FieldPolicy<any> | FieldReadFunction<any>,
	browseSources?: FieldPolicy<any> | FieldReadFunction<any>,
	browseVariantGroups?: FieldPolicy<any> | FieldReadFunction<any>,
	browseVariants?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrial?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	contributors?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	drug?: FieldPolicy<any> | FieldReadFunction<any>,
	drugs?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotype?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	search?: FieldPolicy<any> | FieldReadFunction<any>,
	searchByPermalink?: FieldPolicy<any> | FieldReadFunction<any>,
	searchGenes?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>,
	variantType?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	variants?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RejectRevisionPayloadKeySpecifier = ('clientMutationId' | 'revision' | RejectRevisionPayloadKeySpecifier)[];
export type RejectRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResolveFlagPayloadKeySpecifier = ('clientMutationId' | 'flag' | ResolveFlagPayloadKeySpecifier)[];
export type ResolveFlagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	flag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionKeySpecifier = ('comments' | 'createdAt' | 'creationEvent' | 'currentValue' | 'events' | 'fieldName' | 'id' | 'linkoutData' | 'name' | 'revisionsetId' | 'revisor' | 'status' | 'suggestedValue' | 'updatedAt' | RevisionKeySpecifier)[];
export type RevisionFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	currentValue?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	linkoutData?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionsetId?: FieldPolicy<any> | FieldReadFunction<any>,
	revisor?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestedValue?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'revisedFieldNames' | 'totalCount' | 'uniqueRevisors' | RevisionConnectionKeySpecifier)[];
export type RevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	revisedFieldNames?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>,
	uniqueRevisors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionEdgeKeySpecifier = ('cursor' | 'node' | RevisionEdgeKeySpecifier)[];
export type RevisionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RevisionResultKeySpecifier = ('fieldName' | 'id' | 'newlyCreated' | 'revisionsetId' | RevisionResultKeySpecifier)[];
export type RevisionResultFieldPolicy = {
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	newlyCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionsetId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ScalarFieldKeySpecifier = ('value' | ScalarFieldKeySpecifier)[];
export type ScalarFieldFieldPolicy = {
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultKeySpecifier = ('id' | 'matchingText' | 'name' | 'resultType' | SearchResultKeySpecifier)[];
export type SearchResultFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	matchingText?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	resultType?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceKeySpecifier = ('abstract' | 'ascoAbstractId' | 'authorString' | 'citation' | 'citationId' | 'clinicalTrials' | 'displayType' | 'events' | 'fullJournalTitle' | 'id' | 'journal' | 'name' | 'pmcId' | 'publicationDate' | 'publicationDay' | 'publicationMonth' | 'publicationYear' | 'sourceType' | 'sourceUrl' | 'status' | 'title' | SourceKeySpecifier)[];
export type SourceFieldPolicy = {
	abstract?: FieldPolicy<any> | FieldReadFunction<any>,
	ascoAbstractId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorString?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	displayType?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	fullJournalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	pmcId?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDay?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceStubKeySpecifier = ('citationId' | 'id' | 'sourceType' | SourceStubKeySpecifier)[];
export type SourceStubFieldPolicy = {
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>
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
export type SubscriptionKeySpecifier = ('id' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestEvidenceItemRevisionPayloadKeySpecifier = ('clientMutationId' | 'evidenceItem' | 'results' | SuggestEvidenceItemRevisionPayloadKeySpecifier)[];
export type SuggestEvidenceItemRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestGeneRevisionPayloadKeySpecifier = ('clientMutationId' | 'gene' | 'results' | SuggestGeneRevisionPayloadKeySpecifier)[];
export type SuggestGeneRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SuggestVariantRevisionPayloadKeySpecifier = ('clientMutationId' | 'results' | 'variant' | SuggestVariantRevisionPayloadKeySpecifier)[];
export type SuggestVariantRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>,
	variant?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnsubscribePayloadKeySpecifier = ('clientMutationId' | 'unsubscribedEntities' | UnsubscribePayloadKeySpecifier)[];
export type UnsubscribePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribedEntities?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('areaOfExpertise' | 'bio' | 'country' | 'displayName' | 'email' | 'events' | 'facebookProfile' | 'id' | 'linkedinProfile' | 'mostRecentConflictOfInterestStatement' | 'name' | 'notifications' | 'orcid' | 'organizations' | 'profileImagePath' | 'role' | 'statsHash' | 'twitterHandle' | 'url' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	areaOfExpertise?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	facebookProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedinProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	mostRecentConflictOfInterestStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	orcid?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type VariantKeySpecifier = ('alleleRegistryId' | 'clinvarIds' | 'comments' | 'description' | 'ensemblVersion' | 'events' | 'evidenceItems' | 'evidenceScore' | 'fivePrimeCoordinates' | 'flagged' | 'flags' | 'gene' | 'hgvsDescriptions' | 'id' | 'lastAcceptedRevisionEvent' | 'lastCommentEvent' | 'lastSubmittedRevisionEvent' | 'myVariantInfo' | 'name' | 'referenceBuild' | 'revisions' | 'sources' | 'threePrimeCoordinates' | 'variantAliases' | 'variantTypes' | VariantKeySpecifier)[];
export type VariantFieldPolicy = {
	alleleRegistryId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinvarIds?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	ensemblVersion?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceScore?: FieldPolicy<any> | FieldReadFunction<any>,
	fivePrimeCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	hgvsDescriptions?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastCommentEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	myVariantInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	referenceBuild?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	sources?: FieldPolicy<any> | FieldReadFunction<any>,
	threePrimeCoordinates?: FieldPolicy<any> | FieldReadFunction<any>,
	variantAliases?: FieldPolicy<any> | FieldReadFunction<any>,
	variantTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantConnectionKeySpecifier = ('edges' | 'nodes' | 'pageCount' | 'pageInfo' | 'totalCount' | VariantConnectionKeySpecifier)[];
export type VariantConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageCount?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantEdgeKeySpecifier = ('cursor' | 'node' | VariantEdgeKeySpecifier)[];
export type VariantEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantTypeKeySpecifier = ('description' | 'id' | 'name' | 'soid' | 'url' | VariantTypeKeySpecifier)[];
export type VariantTypeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	soid?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithRevisionsKeySpecifier = ('lastAcceptedRevisionEvent' | 'lastSubmittedRevisionEvent' | 'revisions' | WithRevisionsKeySpecifier)[];
export type WithRevisionsFieldPolicy = {
	lastAcceptedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lastSubmittedRevisionEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AcceptRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptRevisionPayloadKeySpecifier | (() => undefined | AcceptRevisionPayloadKeySpecifier),
		fields?: AcceptRevisionPayloadFieldPolicy,
	},
	AcmgCode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcmgCodeKeySpecifier | (() => undefined | AcmgCodeKeySpecifier),
		fields?: AcmgCodeFieldPolicy,
	},
	AddCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddCommentPayloadKeySpecifier | (() => undefined | AddCommentPayloadKeySpecifier),
		fields?: AddCommentPayloadFieldPolicy,
	},
	AddRemoteCitationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AddRemoteCitationPayloadKeySpecifier | (() => undefined | AddRemoteCitationPayloadKeySpecifier),
		fields?: AddRemoteCitationPayloadFieldPolicy,
	},
	AdvancedSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdvancedSearchResultKeySpecifier | (() => undefined | AdvancedSearchResultKeySpecifier),
		fields?: AdvancedSearchResultFieldPolicy,
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
	BrowseDrug?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDrugKeySpecifier | (() => undefined | BrowseDrugKeySpecifier),
		fields?: BrowseDrugFieldPolicy,
	},
	BrowseDrugConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDrugConnectionKeySpecifier | (() => undefined | BrowseDrugConnectionKeySpecifier),
		fields?: BrowseDrugConnectionFieldPolicy,
	},
	BrowseDrugEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseDrugEdgeKeySpecifier | (() => undefined | BrowseDrugEdgeKeySpecifier),
		fields?: BrowseDrugEdgeFieldPolicy,
	},
	BrowseGene?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseGeneKeySpecifier | (() => undefined | BrowseGeneKeySpecifier),
		fields?: BrowseGeneFieldPolicy,
	},
	BrowseGeneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseGeneConnectionKeySpecifier | (() => undefined | BrowseGeneConnectionKeySpecifier),
		fields?: BrowseGeneConnectionFieldPolicy,
	},
	BrowseGeneEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BrowseGeneEdgeKeySpecifier | (() => undefined | BrowseGeneEdgeKeySpecifier),
		fields?: BrowseGeneEdgeFieldPolicy,
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
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentEdgeKeySpecifier | (() => undefined | CommentEdgeKeySpecifier),
		fields?: CommentEdgeFieldPolicy,
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
	Coordinate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CoordinateKeySpecifier | (() => undefined | CoordinateKeySpecifier),
		fields?: CoordinateFieldPolicy,
	},
	Disease?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiseaseKeySpecifier | (() => undefined | DiseaseKeySpecifier),
		fields?: DiseaseFieldPolicy,
	},
	Drug?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DrugKeySpecifier | (() => undefined | DrugKeySpecifier),
		fields?: DrugFieldPolicy,
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
	FieldName?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldNameKeySpecifier | (() => undefined | FieldNameKeySpecifier),
		fields?: FieldNameFieldPolicy,
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
	FlagEntityPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlagEntityPayloadKeySpecifier | (() => undefined | FlagEntityPayloadKeySpecifier),
		fields?: FlagEntityPayloadFieldPolicy,
	},
	Flaggable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FlaggableKeySpecifier | (() => undefined | FlaggableKeySpecifier),
		fields?: FlaggableFieldPolicy,
	},
	Gene?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneKeySpecifier | (() => undefined | GeneKeySpecifier),
		fields?: GeneFieldPolicy,
	},
	GeneAlias?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneAliasKeySpecifier | (() => undefined | GeneAliasKeySpecifier),
		fields?: GeneAliasFieldPolicy,
	},
	LinkoutData?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LinkoutDataKeySpecifier | (() => undefined | LinkoutDataKeySpecifier),
		fields?: LinkoutDataFieldPolicy,
	},
	MarkNotificationsAsReadPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MarkNotificationsAsReadPayloadKeySpecifier | (() => undefined | MarkNotificationsAsReadPayloadKeySpecifier),
		fields?: MarkNotificationsAsReadPayloadFieldPolicy,
	},
	ModeratedObjectField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModeratedObjectFieldKeySpecifier | (() => undefined | ModeratedObjectFieldKeySpecifier),
		fields?: ModeratedObjectFieldFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	MyVariantInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MyVariantInfoKeySpecifier | (() => undefined | MyVariantInfoKeySpecifier),
		fields?: MyVariantInfoFieldPolicy,
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
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Phenotype?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PhenotypeKeySpecifier | (() => undefined | PhenotypeKeySpecifier),
		fields?: PhenotypeFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RejectRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RejectRevisionPayloadKeySpecifier | (() => undefined | RejectRevisionPayloadKeySpecifier),
		fields?: RejectRevisionPayloadFieldPolicy,
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
	ScalarField?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ScalarFieldKeySpecifier | (() => undefined | ScalarFieldKeySpecifier),
		fields?: ScalarFieldFieldPolicy,
	},
	SearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultKeySpecifier | (() => undefined | SearchResultKeySpecifier),
		fields?: SearchResultFieldPolicy,
	},
	Source?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceKeySpecifier | (() => undefined | SourceKeySpecifier),
		fields?: SourceFieldPolicy,
	},
	SourceStub?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceStubKeySpecifier | (() => undefined | SourceStubKeySpecifier),
		fields?: SourceStubFieldPolicy,
	},
	Stats?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatsKeySpecifier | (() => undefined | StatsKeySpecifier),
		fields?: StatsFieldPolicy,
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
	SuggestEvidenceItemRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestEvidenceItemRevisionPayloadKeySpecifier | (() => undefined | SuggestEvidenceItemRevisionPayloadKeySpecifier),
		fields?: SuggestEvidenceItemRevisionPayloadFieldPolicy,
	},
	SuggestGeneRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestGeneRevisionPayloadKeySpecifier | (() => undefined | SuggestGeneRevisionPayloadKeySpecifier),
		fields?: SuggestGeneRevisionPayloadFieldPolicy,
	},
	SuggestVariantRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestVariantRevisionPayloadKeySpecifier | (() => undefined | SuggestVariantRevisionPayloadKeySpecifier),
		fields?: SuggestVariantRevisionPayloadFieldPolicy,
	},
	UnsubscribePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnsubscribePayloadKeySpecifier | (() => undefined | UnsubscribePayloadKeySpecifier),
		fields?: UnsubscribePayloadFieldPolicy,
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
	Variant?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantKeySpecifier | (() => undefined | VariantKeySpecifier),
		fields?: VariantFieldPolicy,
	},
	VariantConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantConnectionKeySpecifier | (() => undefined | VariantConnectionKeySpecifier),
		fields?: VariantConnectionFieldPolicy,
	},
	VariantEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantEdgeKeySpecifier | (() => undefined | VariantEdgeKeySpecifier),
		fields?: VariantEdgeFieldPolicy,
	},
	VariantType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VariantTypeKeySpecifier | (() => undefined | VariantTypeKeySpecifier),
		fields?: VariantTypeFieldPolicy,
	},
	WithRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithRevisionsKeySpecifier | (() => undefined | WithRevisionsKeySpecifier),
		fields?: WithRevisionsFieldPolicy,
	}
};