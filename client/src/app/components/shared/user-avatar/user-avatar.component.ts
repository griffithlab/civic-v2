import { Component, Input, OnInit } from "@angular/core";

export interface WithProfileImageAndDisplayName {
  displayName: string,
  profileImagePath?: string
}

@Component({
  selector: 'cvc-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.less']
})
export class UserAvatarComponent implements OnInit {
  @Input() user!: WithProfileImageAndDisplayName;
  @Input() size!: number | "large" | "default" | "small";

  ngOnInit() {
    if (this.user === undefined) {
      throw new Error("Must supply a user to use this component");
    }

    if (this.size === undefined) {
      this.size = "default"
    }
  }
}
