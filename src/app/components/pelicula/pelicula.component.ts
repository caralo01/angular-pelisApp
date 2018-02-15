import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PelisAppService} from '../../services/pelis-app.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula:any;
  page:string;
  busqueda:string;

  constructor(private _ps:PelisAppService,
              private _route: ActivatedRoute) {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this.page = params['page'];
      this.busqueda = params['busqueda'];
      console.log("page", this.page);
      this._ps.getPelicula(id, this.page).subscribe(res => {this.pelicula = res; console.log(res)});
    });
    
  }

  ngOnInit() {
  }

}
