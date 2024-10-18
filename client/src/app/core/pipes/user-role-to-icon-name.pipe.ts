import { Pipe, PipeTransform } from '@angular/core'
import { getEntityColor } from '../utilities/get-entity-color'

@Pipe({
  name: 'userRoleToIconName',
})
export class UserRoleToIconNamePipe implements PipeTransform {
  transform(role: string): string {
    let icon: string
    switch (role) {
        case 'ADMIN':
          icon = 'civic-admin'
          break
        case 'EDITOR':
          icon = 'civic-editor'
          break
        case 'CURATOR':
          icon = 'civic-curator'
          break
        default:
          icon = 'civic-curator'
      }
    return icon 
  }
}
