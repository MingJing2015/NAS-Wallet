import { Component, OnInit } from '@angular/core';
import { RemoteService } from '../../services/remote.service';
import { ContractService } from '../../services/contract.service';
import { PwdChangeStatusModel, CardBalance } from '../../models/defineClass';
import { StudentService } from '../../services/student.service';

@Component({
    selector: 'app-contract-details',
    templateUrl: './contract-details.component.html',
    styleUrls: ['./contract-details.component.css'],
    providers: [RemoteService, ContractService, StudentService]
})
export class ContractDetailsComponent implements OnInit {

    // For Setect Net
    netTypeArr = [
        { value: '0', name: "Testnet" },
        { value: '1', name: "Local nodes" },
        { value: '2', name: "Mainnet" },
    ];
    netType: string = '0';

    // For display Contract Info
    // 1. 银行保险柜合约
    // contractAddress: string = 'n1zQ3F2ZLsyQGeJjefhxoXCh6Uq2jesqvkB';
    // contractTxhash:  string = 'c1ac05b55936e25d6fd959e51c7066b7d434428a005515963604f9bd3243f383';

    // 2. 用户信息合约 http://blog.51cto.com/634435/2114749
    //contractAddress: string = 'n1rQ1uHy4BEvdyuF4dRttMwp6Vu2ZTRuwB3';     // From Address: n1QvdfomX24brtcBrBypPDcPvt9Qwm9UBM9   created
    //contractTxhash:  string = '053e6f946569c6400adef0750bc69268e326bd9c30a702fa8a5614db44a56cac';
    // n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ   ["title1", "content1"]

    // 3. Order 用户信息合约 contract.txt
    //  ["4", "7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc", "iPhone 49"]

    contractAddress: string = 'n1ohyV5xeVwMTCNm6sFLVKKNvdE5Uv6uDpS';     // From Address: n1QvdfomX24brtcBrBypPDcPvt9Qwm9UBM9   created, Map index by orderID
    contractTxhash:  string = '7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc';

    contractType: string;save
    contractBalance: string;
    value: string = "0";  // transaction value

    contractCode: string;

    fromAddress: string;
    nonce:       string;
    fromBalance: string;
    password:    string = "Nas20180429";

    testResult: string;

    jsonAddressFile: File;
    jsonFileContent: any;

    newFromBalance: string;
    newContractBalance: string;
    newFromNonce: string;

    //function:  string = 'save';
    function:  string = 'readByID';
    //arguments: string = '["4", "7b571d64d9387826d7b5dc16d9c18b49f46aaac4da8a08000d5868a87503f8bc", "iPhone 49"]';  //can not has space !! because of will be splited
    arguments: string = '["1"]';   //'[0]';

    hashResult: string;

    constructor(private remoteService:   RemoteService,
                private contractService: ContractService,
                private studentService:  StudentService

    ) { }

    ngOnInit() {
    }

    checkContractState() {

        console.log("1. 查看合约信息 ........ " + this.contractAddress);

        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }

        this.remoteService.getAccountState(this.contractAddress).then((cardBalance: PwdChangeStatusModel) => {

            let account_Result = JSON.parse(cardBalance._body);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;

            if (!isNaN(dataBalance))
                this.contractBalance = dataBalance.toString();
            else
                this.contractBalance = '';

            this.contractType = account_Result.result.type;
        });
    }

    SearchContract() {

        console.log("2. 查询合约信息 ........ " + this.contractAddress);

        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }

        this.contractService.getContracts(this.contractTxhash).then((result: any) => {

            this.contractCode = atob(result.data);
            console.log(this.contractCode);

            //console.log(result);
            //this.contractCode = result;


            /*
            let account_Result = JSON.parse(cardBalance._body);
            var dataBalance = Number(account_Result.result.balance) / 1000000000000000000.0;

            if (!isNaN(dataBalance))
                this.contractBalance = dataBalance.toString();
            else
                this.contractBalance = '';

            this.contractType = account_Result.result.type;
            */
        });
    }


    checkHashResult() {

        console.log("2. 查询 Hash Result 信息 ........ ");
        if (!this.testResult) {
            alert("no hash !");
            return;
        }

        this.contractService.getContracts(this.testResult).then((result: any) => {

            console.log(result);
            this.hashResult = JSON.stringify(result);
        });
    }


    testContract() {

        console.log("4. 测试合约 start........ " + this.contractAddress);

        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }

        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        console.log(nonceStr);
        

        console.log(this.function);
        console.log(this.arguments);

        var value = Number(1.1) * 1000000000000000000.0
        var valueStr = value.toString();

        this.contractService.testTransaction({ 'toAddress': this.fromAddress, 'contractAddress': this.contractAddress,  'nonce': this.nonce, 'value': valueStr, 'function': this.function, 'arguments': this.arguments })
            .then((result: any) => {

                console.log("4. 测试合约 end........ " + this.contractAddress);
                //console.log(result);
                this.testResult = JSON.stringify(result);
                console.log(this.testResult);
            });
    }

    callContract() {

        console.log("5. 执行合约 start ........ " + this.contractAddress);

        if (!this.contractAddress) {
            alert(" Please input Contract Address!");
            return;
        }

        var nonce = Number(this.nonce) + 1;
        var nonceStr = nonce.toString();
        this.nonce = nonceStr; // Refresh Nonce for next transaction

        //console.log(nonceStr);

        var valueStr = parseFloat(this.value) * 1000000000000000000.0
        
        var tempObj = { 'toAddress': this.contractAddress, 'password': this.password, 'nonce': nonceStr, 'value': valueStr, 'function': this.function, 'arguments': this.arguments };
        console.log(tempObj);


        // here toAddress should be contractAddress ?????
        //this.contractService.callTransaction(this.jsonAddressFile, { 'toAddress': this.contractAddress, 'nonce': nonceStr, 'value': valueStr, 'function': this.function, 'arguments': this.arguments }).then((result: any) => {
        this.contractService.callTransaction( this.jsonAddressFile, tempObj ).then((result: any) => {

            console.log("5. 执行合约 end ........ " + this.contractAddress);
            //console.log(result);
            //this.testResult = JSON.stringify(result);
            
            var rr = JSON.stringify(result);
            this.testResult = JSON.parse(rr).hash;

            console.log(this.testResult);
        });

    }

    // 4. 检查合约执行 Button  ================================================
    public onCheckContractCall() {

        console.log("4. 检查合约执行结果 ...... ");

        // get from account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then((cardBalance: CardBalance) => {

            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            this.newFromBalance = JSON.stringify(dataBalance) + ' NAS';

            this.newFromNonce = cardBalance.nonce;
        });

        // get to contractAddress account status after sending transaction
        this.studentService.getAccountState(this.contractAddress).then((cardBalance: CardBalance) => {

            var dataBalance = Number(cardBalance.balance) / 1000000000000000000.0;
            this.newContractBalance = JSON.stringify(dataBalance) + ' NAS';
        });
    }


    // Selected file button
    handleInputChange(e) {

        this.jsonAddressFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        //this.jsonAddressFile = e;

        console.log(file);
        console.log("mFileJson ######################################################");

        //var mFileJson = JSON.parse(file.target.result);
        //console.log(mFileJson);

        //var tempFile = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0]; 

        this.fromAddress = this.jsonAddressFile.name.split('.')[0];

        this.onGetFromAddressInfo();

        /*
                var reader = new FileReader();
                reader.onload = () => {
                    this.jsonFileContent = reader.result;
                }
                reader.readAsText(file.name);
                console.log(this.jsonFileContent);
        */
    }

    onGetFromAddressInfo() {
        console.log("3. 得到源账户信息 ........ " + this.contractAddress);

        // get to account status after sending transaction
        this.studentService.getAccountState(this.fromAddress).then((result: CardBalance) => {

            var value = Number(result.balance) / 1000000000000000000.0;
            this.fromBalance = JSON.stringify(value) + ' NAS';

            this.nonce = result.nonce
        });

    }

}
