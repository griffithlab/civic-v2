import type { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AcceptRevisionPayloadKeySpecifier = ('clientMutationId' | 'revision' | 'supersededRevisions' | AcceptRevisionPayloadKeySpecifier)[];
export type AcceptRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	revision?: FieldPolicy<any> | FieldReadFunction<any>,
	supersededRevisions?: FieldPolicy<any> | FieldReadFunction<any>
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
export type ClinicalTrialKeySpecifier = ('description' | 'id' | 'name' | 'nctId' | ClinicalTrialKeySpecifier)[];
export type ClinicalTrialFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nctId?: FieldPolicy<any> | FieldReadFunction<any>
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
export type CommentableKeySpecifier = ('comments' | CommentableKeySpecifier)[];
export type CommentableFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>
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
export type EvidenceItemKeySpecifier = ('clinicalSignificance' | 'comments' | 'description' | 'disease' | 'drugInteractionType' | 'drugs' | 'events' | 'evidenceDirection' | 'evidenceLevel' | 'evidenceRating' | 'evidenceType' | 'flagged' | 'flags' | 'id' | 'name' | 'phenotypes' | 'revisions' | 'source' | 'status' | 'variant' | 'variantHgvs' | 'variantOrigin' | EvidenceItemKeySpecifier)[];
export type EvidenceItemFieldPolicy = {
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
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phenotypes?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type FlagKeySpecifier = ('comments' | 'createdAt' | 'flaggable' | 'flaggingUser' | 'id' | 'name' | 'resolvingUser' | 'state' | FlagKeySpecifier)[];
export type FlagFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggable?: FieldPolicy<any> | FieldReadFunction<any>,
	flaggingUser?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type GeneKeySpecifier = ('aliases' | 'comments' | 'description' | 'entrezId' | 'events' | 'flagged' | 'flags' | 'id' | 'lifecycleActions' | 'myGeneInfoDetails' | 'name' | 'officialName' | 'revisions' | 'sources' | 'variants' | GeneKeySpecifier)[];
export type GeneFieldPolicy = {
	aliases?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	entrezId?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lifecycleActions?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type LifecycleKeySpecifier = ('lastCommentedOn' | 'lastModified' | 'lastReviewed' | LifecycleKeySpecifier)[];
export type LifecycleFieldPolicy = {
	lastCommentedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	lastModified?: FieldPolicy<any> | FieldReadFunction<any>,
	lastReviewed?: FieldPolicy<any> | FieldReadFunction<any>
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
export type MutationKeySpecifier = ('acceptRevision' | 'addComment' | 'addRemoteCitation' | 'flagEntity' | 'markNotificationsAsRead' | 'rejectRevision' | 'resolveFlag' | 'subscribe' | 'suggestGeneRevision' | 'unsubscribe' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	addComment?: FieldPolicy<any> | FieldReadFunction<any>,
	addRemoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	flagEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	markNotificationsAsRead?: FieldPolicy<any> | FieldReadFunction<any>,
	rejectRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	resolveFlag?: FieldPolicy<any> | FieldReadFunction<any>,
	subscribe?: FieldPolicy<any> | FieldReadFunction<any>,
	suggestGeneRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribe?: FieldPolicy<any> | FieldReadFunction<any>
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
export type OrganizationKeySpecifier = ('description' | 'events' | 'id' | 'name' | 'profileImagePath' | 'url' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PhenotypeKeySpecifier = ('hpoClass' | 'hpoId' | 'id' | PhenotypeKeySpecifier)[];
export type PhenotypeFieldPolicy = {
	hpoClass?: FieldPolicy<any> | FieldReadFunction<any>,
	hpoId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('browseGenes' | 'comments' | 'disease' | 'drug' | 'events' | 'evidenceItem' | 'flags' | 'gene' | 'organization' | 'remoteCitation' | 'searchByPermalink' | 'searchGenes' | 'source' | 'sourceTypeahead' | 'user' | 'viewer' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	browseGenes?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	disease?: FieldPolicy<any> | FieldReadFunction<any>,
	drug?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItem?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	remoteCitation?: FieldPolicy<any> | FieldReadFunction<any>,
	searchByPermalink?: FieldPolicy<any> | FieldReadFunction<any>,
	searchGenes?: FieldPolicy<any> | FieldReadFunction<any>,
	source?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceTypeahead?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type RevisionKeySpecifier = ('comments' | 'createdAt' | 'creationEvent' | 'currentValue' | 'fieldName' | 'id' | 'linkoutData' | 'name' | 'revisionsetId' | 'revisor' | 'status' | 'suggestedValue' | 'updatedAt' | RevisionKeySpecifier)[];
export type RevisionFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	creationEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	currentValue?: FieldPolicy<any> | FieldReadFunction<any>,
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
export type SourceKeySpecifier = ('ascoAbstractId' | 'citation' | 'citationId' | 'clinicalTrials' | 'fullJournalTitle' | 'id' | 'journal' | 'name' | 'publicationDay' | 'publicationMonth' | 'publicationYear' | 'sourceType' | 'sourceUrl' | 'status' | SourceKeySpecifier)[];
export type SourceFieldPolicy = {
	ascoAbstractId?: FieldPolicy<any> | FieldReadFunction<any>,
	citation?: FieldPolicy<any> | FieldReadFunction<any>,
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	clinicalTrials?: FieldPolicy<any> | FieldReadFunction<any>,
	fullJournalTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	journal?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDay?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationMonth?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationYear?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SourceStubKeySpecifier = ('citationId' | 'id' | 'sourceType' | SourceStubKeySpecifier)[];
export type SourceStubFieldPolicy = {
	citationId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceType?: FieldPolicy<any> | FieldReadFunction<any>
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
export type SuggestGeneRevisionPayloadKeySpecifier = ('clientMutationId' | 'gene' | 'results' | SuggestGeneRevisionPayloadKeySpecifier)[];
export type SuggestGeneRevisionPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UnsubscribePayloadKeySpecifier = ('clientMutationId' | 'unsubscribedEntities' | UnsubscribePayloadKeySpecifier)[];
export type UnsubscribePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	unsubscribedEntities?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('bio' | 'country' | 'displayName' | 'email' | 'events' | 'id' | 'name' | 'notifications' | 'organizations' | 'profileImagePath' | 'role' | 'url' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notifications?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	profileImagePath?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VariantKeySpecifier = ('comments' | 'description' | 'events' | 'evidenceItems' | 'flagged' | 'flags' | 'gene' | 'id' | 'name' | VariantKeySpecifier)[];
export type VariantFieldPolicy = {
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	evidenceItems?: FieldPolicy<any> | FieldReadFunction<any>,
	flagged?: FieldPolicy<any> | FieldReadFunction<any>,
	flags?: FieldPolicy<any> | FieldReadFunction<any>,
	gene?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
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
export type WithRevisionsKeySpecifier = ('revisions' | WithRevisionsKeySpecifier)[];
export type WithRevisionsFieldPolicy = {
	revisions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AcceptRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AcceptRevisionPayloadKeySpecifier | (() => undefined | AcceptRevisionPayloadKeySpecifier),
		fields?: AcceptRevisionPayloadFieldPolicy,
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
	ClinicalTrial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClinicalTrialKeySpecifier | (() => undefined | ClinicalTrialKeySpecifier),
		fields?: ClinicalTrialFieldPolicy,
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
	Lifecycle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LifecycleKeySpecifier | (() => undefined | LifecycleKeySpecifier),
		fields?: LifecycleFieldPolicy,
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
	Source?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceKeySpecifier | (() => undefined | SourceKeySpecifier),
		fields?: SourceFieldPolicy,
	},
	SourceStub?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SourceStubKeySpecifier | (() => undefined | SourceStubKeySpecifier),
		fields?: SourceStubFieldPolicy,
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
	SuggestGeneRevisionPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SuggestGeneRevisionPayloadKeySpecifier | (() => undefined | SuggestGeneRevisionPayloadKeySpecifier),
		fields?: SuggestGeneRevisionPayloadFieldPolicy,
	},
	UnsubscribePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UnsubscribePayloadKeySpecifier | (() => undefined | UnsubscribePayloadKeySpecifier),
		fields?: UnsubscribePayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
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
	WithRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithRevisionsKeySpecifier | (() => undefined | WithRevisionsKeySpecifier),
		fields?: WithRevisionsFieldPolicy,
	}
};