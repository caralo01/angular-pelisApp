import { Component, OnInit } from '@angular/core';

import { PelisAppService} from '../../services/pelis-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public cartelera:any[] = [];
  public populares:any[] = [];
  public popularesNinos:any[] = [];

  constructor(private _ps:PelisAppService) { 
    this._ps.getCartelera()
        .subscribe(res => this.cartelera = res.results);

    this._ps.getPopulares()
        .subscribe(res => this.populares = res.results);

    this._ps.getPopulareNinos()
        .subscribe(res => this.popularesNinos = res.results);
  }

  ngOnInit() {
  }

}
