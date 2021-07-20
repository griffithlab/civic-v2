import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cvc-contributor-avatars',
  templateUrl: './contributor-avatars.component.html',
  styleUrls: ['./contributor-avatars.component.less']
})
export class ContributorAvatarsComponent implements OnInit {
  curators: any[];
  editors: any[];

  constructor() {
    this.curators = getCurators();
    this.editors = getEditors();
  }

  ngOnInit(): void {
  }

}

export function getCurators(): any[] {
  return [
    {
      id: 6,
      displayName: 'Edward Butcher',
      username: 'ebutcher',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/2.jpg',
      role: 'curator'
    },
    {
      id: 22,
      displayName: 'Swansen Geronimo',
      username: 'sgeronimo',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/male/45.jpg',
      role: 'curator'
    },
    {
      id: 6,
      displayName: 'Winsten Lozano',
      username: 'ebutcher',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/6.jpg',
      role: 'curator'
    },
    {
      id: 66,
      displayName: 'ebutcher',
      username: 'ebutcher',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/female/65.jpg',
      role: 'curator'
    },
    {
      id: 22,
      displayName: 'Shena Zhang',
      username: 'szhang',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/female/66.jpg',
      role: 'curator'
    },
    {
      id: 6,
      displayName: 'Jed Lynn',
      username: 'jlynn',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/9.jpg',
      role: 'curator'
    },
    {
      id: 26,
      displayName: 'Brentan Hull',
      username: 'bhull',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/7.jpg',
      role: 'curator'
    },
    {
      id: 689,
      displayName: 'Nikolas Morrison',
      username: 'nmorrison',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/male/44.jpg',
      role: 'curator'
    },
    {
      id: 223,
      displayName: 'Demitri Webster',
      username: 'dwebster',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/male/84.jpg',
      role: 'curator'
    },
  ]
}

export function getEditors(): any[] {
  return [
    {
      id: 76,
      displayName: 'Brieann Newton',
      username: 'bnewton',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/8.jpg',
      role: 'curator'
    },
    {
      id: 222,
      displayName: 'Anslie Macdonald',
      username: 'amacdonald',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/female/94.jpg',
      role: 'curator'
    },
    {
      id: 22,
      displayName: 'Duglas Graham',
      username: 'sgeronimo',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/male/22.jpg',
      role: 'admin'
    },
    {
      id: 6,
      displayName: 'Murielle Osborn',
      username: 'mosborn',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/female/22.jpg',
      role: 'editor'
    },
    {
      id: 22,
      displayName: 'Claire Morse',
      username: 'cmorse',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/female/75.jpg',
      role: 'editor'
    },
    {
      id: 262,
      displayName: 'Claire Morse',
      username: 'cmorse',
      profileImagePath: 'https://randomuser.me/api/portraits/lego/2.jpg',
      role: 'editor'
    },
    {
      id: 16,
      displayName: 'Perkins Christensen',
      username: 'pchristens',
      profileImagePath: 'https://minimaltoolkit.com/images/randomdata/male/47.jpg',
      role: 'editor'
    },
  ]
}
