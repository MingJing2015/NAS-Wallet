import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { StudentService } from '../../services/student.service';

import { CardService } from '../../services/card.service';
import { RemoteService } from '../../services/remote.service';
import { NetState, PwdChangeStatusModel, Student, Card, CardBalance } from '../../models/defineClass';


const URL_UPLOAD = 'http://localhost:55756/api/FileProcessing/';

export class Result {
    result: CardBalance;
}


@Component({
    selector: 'app-wallet-details',
    templateUrl: './wallet-details.component.html',
    styleUrls: ['./wallet-details.component.css'],
    providers: [CardService, StudentService]
})
export class WalletDetailsComponent implements OnInit {

    // Import data -- ng2-file-upload
    public uploader: FileUploader = new FileUploader({ url: URL_UPLOAD });

    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    public myFile: any;

    // For display Account Info
    selectedCard: Card
    fromAddress: string
    toAddress: string
    //netState: NetState;
    //cardBalance: CardBalance;
    resultData: Result;

    private balance: string = null;
    private nonce: string = null;
    private password: string = 'Nas20180429';
    
    // "value":"3000000000000000000"
    private amount: string = '1';
    private gasPrice: string = '100000';

    // For Setect Net
    netTypeArr = [
        { value: '0', name: "Testnet" },
        { value: '1', name: "Local Nodes" },
        { value: '2', name: "Mainnet" },
    ];

    netType: string = '0';

    mTxHash: string;
    Receipt: string;

    jsonAddressFile: any;

    constructor(private studentService: StudentService) { }

    ngOnInit() {

        // For : Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
        this.uploader.onBeforeUploadItem = (item) => {
            item.withCredentials = false;
        }

        const self = this;
        this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
            console.log("onSuccessItem " + status, item);
            // ???self.handle(response);
        }
    }

    getStudent() {

        //this.studentService.getStudents().then((newStudent) => {
        //this.studentService.getAccountState("n1L5AExWGCP299jB5RWmdo7t6qCRZ4MW8PW").then((newStudent) => {
        this.studentService.postAccount(this.myFile).then((newStudent) => {

            console.log(newStudent);
        });
    }

    // For test API - Remove All Button:
    public onClearAll() {
        this.uploader.clearQueue()
        delete this.selectedCard;
    }

    private onRemoveOneFile(item) {
        item.remove()
    }

    // 选择 From Address Button =================================================================================================================
    public onSelectFrom(evt) {

        console.log("选择 From Address ");

        //this.selectedCard = new Card;
        this.jsonAddressFile = evt; // FileList object is file, now use _file

        this.fromAddress = this.jsonAddressFile.name.split('.')[0];

    }

    // 选择 From Address Button =================================================================================================================
    public onSelectTo(evt) {

        console.log("选择 To Address ");

        //this.selectedCard = new Card;
        var jsonAddressFile = evt; // FileList object is file, now use _file

        this.toAddress = jsonAddressFile.name.split('.')[0];

    }

    // 1. 账户解锁 Button =================================================================================================================
    public onUnlockAccount() {

        console.log("1. 账户解锁 - Start ---------------- ");

        this.studentService.postAccount(this.jsonAddressFile).then((cardBalance: CardBalance) => {

            console.log("1. 账户解锁 - End ");
            console.log(cardBalance);

            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                this.balance = dataBalance.toString() + ' NAS';
            else
                this.balance = '';

            this.nonce = cardBalance.nonce;
        });
    }

    // 2. 生成签名 Button ===============================================
    public onCreateSignData() {

        if (!this.jsonAddressFile)
            return;

        console.log("2. 生成签名 - Start -------------------- ");
        //this.selectedCard = new Card;
        //var file = evt; // FileList object is file, now use _file

        console.log(this.nonce);

        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        console.log(nonceStr);

        var value = Number(this.amount) * 1000000000000000000.0
        var valueStr = value.toString();

        this.studentService.putTransaction(this.jsonAddressFile, { 'nonce': nonceStr, 'value': valueStr, 'toAddress': this.toAddress }).then((cardBalance: CardBalance) => {

            console.log("2. 生成签名 - End");
            console.log(cardBalance);

            this.mTxHash = cardBalance.toString();
        });
    }

    // 3. 发送交易 Button  ================================================
    public onSendTransaction() {

        if (!this.jsonAddressFile)
            return;

        console.log("3. 发送交易 - Start ...... ");

        this.studentService.deleteStudent(this.jsonAddressFile).then((cardBalance: CardBalance) => {

            console.log("3. 发送交易 - End ...... ");
            console.log(cardBalance);

            this.Receipt = JSON.stringify(cardBalance);
        });
    }
}
