import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent {

  constructor() {
    setTimeout(() => {
        this.ajouterCommentaireBtn = !this.ajouterCommentaireBtn;
    }, 1000);
  }

  ajouterCommentaireBtn = false;
  listeCommentaires = [
    {name: '', email: '', subject: '', commentaire: ''}
  ];

  name: '';
  email: '';
  subject: '';
  commentaire = '';

  showBtn(){
    this.ajouterCommentaireBtn = !this.ajouterCommentaireBtn;
  }

  ajouterCommentaire() {
    this.ajouterCommentaireBtn = !this.ajouterCommentaireBtn;
    this.listeCommentaires.push({
      name: this.name,
      email: this.email,
      subject: this.subject,
      commentaire: this.commentaire
    });
    this.commentaire = '';
    this.name = '';
    this.email = '';
    this.subject = '';
  }
}
