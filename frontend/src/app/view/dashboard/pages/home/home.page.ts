import { Component, OnInit } from '@angular/core';
import { DataJson, RespuestaNo } from 'src/app/core/interfaces/interfaces';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public data: DataJson[] ;
  public idDe: string;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getTelephones()
    .subscribe( (resp: RespuestaNo) => {
      this.idDe = resp.data[0]._id;
      this.data = resp.data ;
    });
  }

}
