
import { Component, Input } from '@angular/core';

import { Card, CardBalance } from '../../models/defineClass';
import { Student } from '../../models/defineClass';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})

export class CardDetailsComponent {
  @Input()
  card: Card;
  @Input()
  balance: string;
  @Input()
  nonce: string;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;



  

  constructor (private cardService: CardService) {
  }

  createCard(card: Card) {

    if (!card.OwnerName || !card.CardName || !card.CardAddress) {
      return;
    }

    this.cardService.createCard(card).then((newCard: Card) => {
      this.createHandler(newCard);
    });
  }

  updateCard(card: Card): void {
    this.cardService.updateCard(card).then((updatedCard: Card) => {
      this.updateHandler(updatedCard);
    });
  }

  deleteCard(cardId: String): void {
    
    this.cardService.deleteCard(cardId).then((deletedcardId: String) => {

      console.log("Delete card ID: " + cardId);
      // deletedcardId is wrong ID ??  Why ??

      this.deleteHandler(cardId);
    });
  }

  /*
  refreashCard(cardAddress: String): void {

    console.log("In refreashCard of card-details.ts ");

    this.cardService.refreashCard(cardAddress).then((cardBalance: CardBalance) => {
      
      console.log("Got from cardService.refreashCard of card-details.ts ");

      console.log(cardBalance);
      console.log(cardBalance.balance);
      console.log(cardBalance.nonce);
      console.log(cardBalance.type);


      this.balance = Number(cardBalance.balance) / 1000000000000000000.0;
      this.nonce   = cardBalance.nonce;

    });
  }
  */
}