import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CardListComponent }        from './views/card-list/card-list.component';
import { WalletDetailsComponent }   from './views/wallet-details/wallet-details.component';  
import { ContractDetailsComponent }   from './views/contract-details/contract-details.component';  

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
    { path: '', redirectTo: 'CardList', pathMatch: 'full' },
    { path: 'CardList',         component: CardListComponent },
    { path: 'WalletDetails',    component: WalletDetailsComponent },
    { path: 'ContractDetails',  component: ContractDetailsComponent }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
