import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  tests=[
    {
      title: "Legend of Zelda, A Link to the Past",
      content: "Arrivé très tôt dans la vie de la Super Nintendo, ce Zelda fait partie de la légende. Link devra sauver une fois de plus la princesse Zelda des griffes de Gannon.",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "Gran Turismo 2",
      content: "Après un premier volet grandiose, la meilleure des simulations de course revient avec de nombreuses options supplémentaires: mode Rallye, etc.",
      loveIts: 0,
      created_at: Date
    },
    {
      title: "Road Rash 3D",
      content: "C'était un hit sur MegaDrive, il revient sur Playstation! Et en 3D, en plus! Chevauchez les plus belles montures des États-Unis et tapez sur vos concurrents avec chaînes, matraques et bouteilles de verre.",
      loveIts: 0,
      created_at: Date
    }
  ];
  constructor() {

   }

  ngOnInit(): void {
  }

}
