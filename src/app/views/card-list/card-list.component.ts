
import { Component, OnInit } from '@angular/core';
import { Card, CardBalance } from '../../models/defineClass';
import { Student } from '../../models/defineClass';
import { CardService } from '../../services/card.service';

import { RemoteService } from '../../services/remote.service';
import { NetState, PwdChangeStatusModel, NetStatusModel } from '../../models/defineClass';
import { CardDetailsComponent } from '../card-details/card-details.component';

export class Result {
    result: CardBalance;
}


@Component({
    selector: 'card-list',
    templateUrl: './card-list.component.html',
    styleUrls: ['./card-list.component.css'],
    providers: [CardService, RemoteService]
})


export class CardListComponent implements OnInit {

    cards: Card[]
    selectedCard: Card

    netState: NetState;

    cardBalance: CardBalance;

    resultData: Result;

    private balance: string = null;
    private nonce: string = null;


    // For Setect Net
    netTypeArr = [
        { value: '0', name: "Testnet" },
        { value: '1', name: "Local nodes" },
        { value: '2', name: "Mainnet" },
    ];

    netType: string = '2';

    Chain_ID: number;
    Height: string;
    Lib: string;
    Protocol_version: string;
    Synchronized: boolean;
    Tail: string;
    Version: string;

    constructor(private CardService: CardService,
        private remoteService: RemoteService
    ) { }

    ngOnInit() {
        this.CardService
            .getCards()
            .then((cards: Card[]) => {
                this.cards = cards.map((card) => {
                    return card;
                });
            });
    }

    private getIndexOfCard = (cardId: String) => {
        return this.cards.findIndex((card) => {
            return card._id === cardId;
        });
    }

    selectCard(card: Card) {

        this.selectedCard = card;

        this.balance = '';
        this.nonce = '';

        //this.CardService.refreashCard(card.CardAddress).then((cardBalance: CardBalance) => {
        this.remoteService.getAccountState(card.CardAddress).then((cardBalance: PwdChangeStatusModel) => {

            console.log("Got from cardService.refreashCard of card-details.ts ");

            console.log(cardBalance);
            //console.log(cardBalance._body);

            //this.cardBalance = JSON.parse(cardBalance._body);
            //console.log(this.cardBalance);

            this.resultData = JSON.parse(cardBalance._body);

            //console.log(this.resultData.result.balance);
            //console.log(this.resultData.result.nonce);

            var dataBalance = Number(this.resultData.result.balance) / 1000000000000000000.0;

            if (!isNaN(dataBalance))
                this.balance = dataBalance.toString() + ' NAS';
            else
                this.balance = '';

            this.nonce = this.resultData.result.nonce;
        });
    }

    showNetState() {

        // ????? different Net, parameter ????? 
        //this.remoteService.getNetState().then((netState: NetState) => {
        this.remoteService.getNetState()
            //.then((netState: PwdChangeStatusModel) => this.netState = netState)
            .then((netState: NetStatusModel) => { 
                console.log(netState);

                this.Chain_ID = netState.result.chain_id;
                this.Height = netState.result.height;
                this.Lib = netState.result.lib;
                this.Protocol_version = netState.result.protocol_version;
                this.Synchronized = netState.result.synchronized;
                this.Tail = netState.result.tail;
                this.Version = netState.result.version;
            } );
    }

    createNewCard() {
        var card: Card = {
            OwnerName: '',
            CardName: '',
            CardAddress: '',
            Password: '',
            StartDate: new Date()
        };

        this.balance = '';
        this.nonce = '';

        // By default, a newly-created contact will have the selected state.
        this.selectCard(card);
    }

    deleteCard = (cardId: String) => {

        var idx = this.getIndexOfCard(cardId);

        console.log("Delete ID: " + idx);

        if (idx !== -1) {

            console.log("Delete ID: " + idx);
            console.log("cards before size: " + this.cards.length);

            this.cards.splice(idx, 1);

            console.log("cards after size: " + this.cards.length);

            this.selectCard(null);
        }
        return this.cards;
    }

    addCard = (card: Card) => {
        this.cards.push(card);
        this.selectCard(card);
        return this.cards;
    }

    updateCard = (card: Card) => {
        var idx = this.getIndexOfCard(card._id);
        if (idx !== -1) {
            this.cards[idx] = card;
            this.selectCard(card);
        }
        return this.cards;
    }
}