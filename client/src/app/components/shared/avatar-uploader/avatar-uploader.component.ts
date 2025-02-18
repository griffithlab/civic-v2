import { Component, Output, EventEmitter, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-avatar-uploader',
  templateUrl: './avatar-uploader.component.html',
  standalone: false,
})
export class CvcAvatarUploaderComponent implements OnDestroy {
  @Output() uploadComplete = new EventEmitter<boolean>()

  uploadSubscription?: Subscription

  constructor(private http: HttpClient) {}

  processProfileImage(files: FileList | null) {
    if (files && files[0]) {
      let formData = new FormData()
      formData.append('image', files[0], files[0].name)
      this.uploadSubscription = this.http
        .post('/api/upload_profile_image', formData)
        .subscribe(
          (data) => this.uploadComplete.emit(true),
          (error) => this.uploadComplete.emit(false)
        )
    }
  }

  ngOnDestroy(): void {
    this.uploadSubscription?.unsubscribe()
  }
}
