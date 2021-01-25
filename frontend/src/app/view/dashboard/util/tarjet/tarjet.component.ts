import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataJson } from 'src/app/core/interfaces/interfaces';
import { HttpService } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tarjet',
  templateUrl: './tarjet.component.html',
  styleUrls: ['./tarjet.component.scss'],
})
export class TarjetComponent implements OnInit, OnChanges {
  @Input() public dataIntro: DataJson[];
  public viewHistory = false;
  public arrayData = [];
  constructor(private http: HttpService, public alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {}

  ngOnChanges(cambios: SimpleChanges) {
    if (this.dataIntro !== undefined) {
      this.arrayData = this.dataIntro;
    }
  }
  public viewHistoryM(){
    this.viewHistory = !this.viewHistory ;
  }
  async presentAlert(id) {
    const alert = await this.alertCtrl.create({
      header: 'Pagar',
      message: 'Desea pagar la factura?' ,
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Si',
          handler: () => {
            this.payAccount(id);
          }
        }
      ]
    });
    await alert.present();
  }
  public payAccount(id: any){
    this.http.deleteCuentaId(id).subscribe((resp: any) => {
      if (resp.message.length >= 1) {
        this.presentAlertConfirm('Correcto', 'Factura pagada exitosamente');
      } else {
        this.presentAlertConfirm('Error', 'Intente neuvamente en unos minutos.' );
      }
    });
  }
  async presentAlertConfirm(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            location.reload();
          }
        }
      ]
    });
    await alert.present();
  }
}
