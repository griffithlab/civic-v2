import { OnDestroy, OnInit } from '@angular/core';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApolloCache } from '@apollo/client/core';
import { LinkableAssertion } from '@app/components/assertions/assertions-tag/assertion-tag.component';
import { LinkableClinicalTrial } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.component';
import { LinkableComment } from '@app/components/comments/comment-tag/comment-tag.component';
import { LinkableDrug } from '@app/components/drugs/cvc-drug-tag/cvc-drug-tag.component';
import { LinkableEvidence } from '@app/components/evidence/evidence-tag/evidence-tag.component';
import { LinkableFlag } from '@app/components/flags/flag-tag/flag-tag.component';
import { LinkableGene } from '@app/components/genes/gene-tag/gene-tag.component';
import { LinkablePhenotype } from '@app/components/phenotypes/phenotype-tag/phenotype-tag.component';
import { LinkableSource } from '@app/components/sources/source-tag/source-tag.component';
import { LinkableVariantType } from '@app/components/variant-types/variant-type-tag/variant-type-tag.component';
import { LinkableVariant } from '@app/components/variants/variant-tag/variant-tag.component';
import { Maybe } from '@app/generated/civic.apollo';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs';

// TODO: normalize source tag and variant tag LinkableTypes with the others

export type AnyLinkableType =
  LinkableGene
  | LinkableVariant
  | LinkableEvidence
  // | LinkableSource
  | LinkableVariantType
  | LinkableDrug
  | LinkableAssertion
  // | LinkableClinicalTrial
  | LinkableComment
  | LinkableFlag
  | LinkablePhenotype

type AnyLinkableTypeToEntityType<T extends AnyLinkableType> =
  T extends LinkableGene ? LinkableGene :
  T extends LinkableVariant ? LinkableVariant :
  T extends LinkableEvidence ? LinkableEvidence :
  // T extends LinkableSource ? LinkableSource :
  T extends LinkableVariantType ? LinkableVariantType :
  T extends LinkableDrug ? LinkableDrug :
  T extends LinkableAssertion ? LinkableAssertion :
  // T extends LinkableClinicalTrial ? LinkableClinicalTrial :
  T extends LinkableComment ? LinkableComment :
  T extends LinkableFlag ? LinkableFlag :
  T extends LinkablePhenotype ? LinkablePhenotype :
  never

@Component({
  selector: 'field-tag-wrapper',
  templateUrl: './field-tag.wrapper.html',
  styleUrls: ['./field-tag.wrapper.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldTagWrapper extends FieldWrapper implements OnInit, OnDestroy {
  private cache: ApolloCache<any>;
  linkableType!: Maybe<AnyLinkableType>;
  ltSub!: Subscription;
  closeTag: (_: number) => void;

  constructor(private apollo: Apollo) {
    super();
    this.cache = this.apollo.client.cache;

    this.closeTag = (_: number) => {
      this.formControl!.setValue(undefined);
    }

  }

  get errorState() {
    return this.showError ? 'error' : '';
  }

  ngOnInit() {
    this.ltSub = this.formControl
      .valueChanges
      .subscribe((selection: Maybe<AnyLinkableType>) => {
        if (selection) {
          const lt = this.cache.readFragment({
            id: `${this.to.entityType}:${selection.id}`,
            fragment: this.to.entityFragment
          }) as AnyLinkableType;
          this.linkableType = linkableTypeToEntityType(lt);
        } else {
          this.linkableType = undefined;
        }
      })

    function linkableTypeToEntityType<LT extends AnyLinkableType>(linkableType: AnyLinkableType): AnyLinkableTypeToEntityType<LT> {
      return linkableType as AnyLinkableTypeToEntityType<LT>;
    }
  }

  ngOnDestroy() {
    this.ltSub.unsubscribe();
  }
}
