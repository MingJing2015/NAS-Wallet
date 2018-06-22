import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContractService {

    private contractUrl = '/api/contracts';
    //private contractUrl = 'http://127.0.0.1:3000/api/contracts';       // For local debug, need open CORS on Chrome 

    constructor(private http: HttpClient) { }

    // Check TX Status
    getContracts(hash: string): Promise<any | void> {
    //getContracts(): Promise<any | void> {

        return this.http.get(this.contractUrl + '/' + hash)
        //return this.http.get(this.contractUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
    }

    // 2. 测试合约
    testTransaction(data: any): Promise<any> {

        var info = data.toAddress + '`' + data.nonce.toString() + '`' + data.value + '`' + data.contractAddress;

        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";

        return this.http.put(putUrl, data)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    // 3. 执行合约 Call
    callTransaction(file: any, data: any): Promise<any> {

        //var info = data.toAddress + ' ' + data.nonce.toString() + ' ' + data.value;
        var info = data.toAddress + '`' + data.password + '`' + data.nonce.toString() + '`' + data.value + '`' + data.function + '`' + data.arguments;

        // , 'function': this.function, 'arguments': this.arguments 

        var putUrl = this.contractUrl + '/' + info;
        //var putUrl = this.studentsUrl + '/' + "n1RaCeVeLxzJG2yLwE155y2S6EqjWeVboqJ";

        console.log(file);
        console.log(info);

        return this.http.post(putUrl, file)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }



}
