import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FlagEntityGQL, FlagEntityInput, FlaggableInput, Maybe, Organization } from "@app/generated/civic.apollo";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
    selector: 'cvc-flag-add',
    templateUrl: './flag-add.form.html',
    styleUrls: ['./flag-add.form.less']
})
export class CvcFlagAddForm implements OnInit {
    @Input() flaggable!: FlaggableInput
    @Input() flagAddedCallback?: () => void

    formModel!: FlagEntityInput
    formFields: FormlyFieldConfig[]
    selectedOrg: Maybe<Organization>
    formGroup = new FormGroup({})
    formOptions: FormlyFormOptions = {};

    constructor(private gql: FlagEntityGQL) {
        this.formFields = [{
            key: 'comment',
            type: 'comment-textarea',
            templateOptions: {
                required: true,
                minLength: 10
            }
        }]
    }

    ngOnInit() {
        if (this.flaggable === undefined) {
            throw new Error("Must pass a flagggable into flag add component");
        }

        this.formModel = {
            subject: this.flaggable,
            comment: ""
        }
    }

    onOrgSelected(org: Organization) {
        this.formModel.organizationId = org.id
    }

    submitFlag(input: FlagEntityInput) {
        this.gql.mutate({input: input}).subscribe(
            ({data}) => {
                if (this.flagAddedCallback) {
                    this.flagAddedCallback()
                }
                console.log(data?.flagEntity?.flag?.id)
            },
            (error) => {
                console.log(error)
            }
        )
    }
}
