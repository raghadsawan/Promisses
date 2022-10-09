import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  // ngOnInit() {
  //   this.getAsyncData();
  // }
  // async getAsyncData() {
  //   Promise.all([this.getNonAssignedApps(), this.getAccount()])
  //     .then((result) => {
  //       this.assignAppModel.accountId = this.accountId;
  //       this.apps = result[0];
  //       this.assignAppModel.apps = result[1].apps;
  //     })
  //     .catch((error) => {
  //       this.notifyService.showApiError('general.error', error);
  //     });
  // }
  // getNonAssignedApps() {
  //   return this.appService.getNonAssignedApps().toPromise();
  // }
  // getAccount() {
  //   return this.accountService.getByID(this.accountId).toPromise();
  // }
}
