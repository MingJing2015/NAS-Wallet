import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { StudentService } from '../../services/student.service';
import { ContractService } from '../../services/contract.service';
import { CardService } from '../../services/card.service';
import { NetState, PwdChangeStatusModel, Student, Card, CardBalance } from '../../models/defineClass';


const URL_UPLOAD = 'http://localhost:55756/api/FileProcessing/';

export class Result {
    result: CardBalance;
}

export class Signed2Result {
    signed: string;
    toAccount: CardBalance;
}


@Component({
    selector: 'app-wallet-details',
    templateUrl: './wallet-details.component.html',
    styleUrls: ['./wallet-details.component.css'],
    providers: [CardService, StudentService, ContractService]
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
    private newBalance: string = null;
    private toBalance: string = null;
    private newToBalance: string = null;
    private nonce: string = null;
    private password: string = 'Nas20180429';

    // "value":"3000000000000000000"
    private amount: string = '1';
    private gasPrice: string = '100000';

    // For Setect Net
    netTypeArr = [
        { value: '0', name: "Testnet" },
        { value: '1', name: "Local nodes" },
        { value: '2', name: "Mainnet" },
    ];

    netType: string = '0';

    mTxHash: string;
    Receipt: string;

    jsonAddressFile: any;
    jsonFileContent: any;

    hashResult: string;

    constructor(private studentService: StudentService,
        private contractService: ContractService
    ) { }

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

        // initial: 
        this.selectedCard = null;
        this.fromAddress = null;
        this.toAddress = null;
        this.resultData = null;
        this.balance = null;
        this.newBalance = null;
        this.toBalance = null;
        this.newToBalance = null;
        this.nonce = null;
        this.password = 'Nas20180429';
        this.mTxHash = null;
        this.Receipt = null;
        this.jsonAddressFile = null;
        this.jsonFileContent = null;
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

        let reader = new FileReader();

        reader.onload = () => {

            this.jsonFileContent = reader.result;

            console.log("jsonFileContent: =========== ");
            console.log(this.jsonFileContent);

            var obj = JSON.parse(this.jsonFileContent);
            console.log(obj.address);

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
        reader.readAsText(this.jsonAddressFile);


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

        this.studentService.putTransaction(this.jsonAddressFile, { 'nonce': nonceStr, 'value': valueStr, 'toAddress': this.toAddress }).then((result: Signed2Result) => {

            console.log("2. 生成签名 - End");
            console.log(result);

            console.log(result.signed);
            console.log(result.toAccount);

            var dataBalance = Number(result.toAccount.balance) / 1000000000000000000.0;
            if (!isNaN(dataBalance))
                this.toBalance = dataBalance.toString() + ' NAS';
            else
                this.toBalance = '';

            this.mTxHash = result.signed.toString();
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

    // 4. 检查交易 Button  ================================================
    public onCheckTransaction() {

        if (!this.jsonAddressFile)
            return;

        console.log("4. 检查交易 ...... ");

        // get from account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then((cardBalance: CardBalance) => {

            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            this.newBalance = JSON.stringify(dataBalance) + ' NAS';
        });

        // get to account status after sending transaction
        this.studentService.getAccountState(this.toAddress).then((cardBalance: CardBalance) => {

            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            this.newToBalance = JSON.stringify(dataBalance) + ' NAS';
        });
    }

    checkHashResult() {

        console.log("5. 查询 Hash Result 信息 ........ ");

        if (!this.Receipt) {
            alert("no hash !");
            return;
        }

        var obj = JSON.parse(this.Receipt);

        this.contractService.getContracts(obj.hash).then((result: any) => {

            console.log(result);

            switch (result.status) {
                case 0:
                    this.hashResult = "0: 交易失败(failed)";
                    break;
                case 1:
                    this.hashResult = "1: 交易成功(success)";
                    break;
                case 2:
                    this.hashResult = "2: 交易待定(pending)";
                    break;
            }
            //this.hashResult = result.status.toString();

        });
    }
}
