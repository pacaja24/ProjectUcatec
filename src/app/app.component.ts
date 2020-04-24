import { CompanyService } from './services/company.service';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  user: any;
  pages: any[];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private navCtrl: NavController,
    private company: CompanyService
  ) {
    this.initializeApp();

    this.company.getEmail().then(result => {
      if (result === null) {
        this.navCtrl.navigateRoot('/login');
      }

      if (result !== null) {
        this.company.getUserData(result)
          .subscribe(res => {
            this.user = res.user;
            this.navCtrl.navigateRoot('/home');
            console.log("error encontrado");
          }, () => {
            this.navCtrl.navigateRoot('/login');
          });
      }
    });
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  createCompany(){
    this.router.navigate(['/create-company']);
  }
  companies(){
    this.router.navigate(['/companies']);
  }
  search(){
    this.router.navigate(['/search']);
  }
  leaderboard(){
    this.router.navigate(['/leaderboard']);
  }
  settings() {
    this.router.navigate(['/settings']);
  }

  logout() {
    this.storage.remove('useremail');
    this.navCtrl.navigateRoot('/login');
  }
}
