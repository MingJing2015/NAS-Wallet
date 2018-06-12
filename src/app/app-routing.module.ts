import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { CardListComponent } from './cards/card-list/card-list.component';
import { WalletDetailsComponent } from './wallets/wallet-details/wallet-details.component';  

// @NgModule({
//   imports: [
//     CommonModule
//   ],
//   declarations: []
// })

const routes: Routes = [
    { path: '', redirectTo: 'CardList', pathMatch: 'full' },
    { path: 'CardList', component: CardListComponent },
    { path: 'WalletDetails',  component: WalletDetailsComponent }
];



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
