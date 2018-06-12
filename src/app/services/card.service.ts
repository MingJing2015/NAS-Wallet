
import { Injectable } from '@angular/core';
import { Card, CardBalance } from '../models/defineClass';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CardService {

    //private cardsUrl = '/api/cards';                            // For Internet !!!!!!!!!!!!!!!!!!!!!!!!!!!
    private cardsUrl = 'http://127.0.0.1:3000/api/cards';     // For local debug, need open CORS on Chrome 

    constructor (private http: HttpClient) {}

    
    // get("/api/cards")
    getCards(): Promise<Card[] | void> {
      return this.http.get(this.cardsUrl)
                 .toPromise()
                 .then(response => response as Card[])
                 .catch(this.handleError);
    }

    // post("/api/cards")
    createCard(newCard: Card): Promise<Card | void> {
      return this.http.post(this.cardsUrl, newCard)
                 .toPromise()
                 .then(response => response as Card)
                 .catch(this.handleError);
    }

    // get("/api/cards/:id") endpoint not used by Angular app

    // delete("/api/cards/:id")
    deleteCard(delCardId: String): Promise<String | void> {
      return this.http.delete(this.cardsUrl + '/' + delCardId)
                 .toPromise()
                 .then(response => response as String)
                 .catch(this.handleError);
    }

    // put("/api/cards/:id")
    updateCard(putCard: Card): Promise<Card | void > {

        console.log("account info update ... PUT() ..... ");

      var putUrl = this.cardsUrl + '/' + putCard._id;
      return this.http.put(putUrl, putCard)
                 .toPromise()
                 .then(response => response as Card)
                 .catch(this.handleError);
    }


    // get card Balance by CardAddress
    refreashCard(cardAddress: String): Promise<CardBalance | void > {

      console.log("In card service : refreashCard ..." + cardAddress);

      // private cardsBalanceUrl = '/api/cardsBalance';   -- get API service by cards.js in routes folder
      return this.http.get(this.cardsUrl + '/' + cardAddress)
                 .toPromise()
                 .then(response => response as CardBalance)
                 .catch(this.handleError);
    }   


    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
    
}