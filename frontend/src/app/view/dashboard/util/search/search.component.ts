import { Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AlertController } from '@ionic/angular';
import { DataJson } from 'src/app/core/interfaces/interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit , OnChanges {
  @Input() public data: DataJson[];
  @Input() public datalocal: DataJson[];
  @Input() public idDefault: string;
  private idSearchReal: any;
  public searchNumber: string;

  constructor(private http: HttpService, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ngOnChanges(cambios: SimpleChanges) {
    if (this.idDefault !== undefined) {
      this.idSearchReal = this.idDefault;
      this.searchById2(this.idSearchReal);
    }
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Vacio',
      message: 'No hay coincidencias.',
      buttons: ['OK']
    });

    await alert.present();
  }
  public search() {
    this.http.getSearchNumber(this.searchNumber).subscribe((resp: any) => {
      if (resp.data.length >= 1) {
        this.data = resp.data;
      } else {
        this.presentAlert();
      }
    });
  }
  public viewData(id: string) {
    this.searchById(id);
  }
  private searchById2(id) {
    this.http.getCuentaId(id).subscribe((resp: any) => {
        this.datalocal = resp.data;
      });
    }
    private searchById(id) {
      this.http.getCuentaId(id).subscribe((resp: any) => {
        this.datalocal = resp.data;
      });
  }
}
