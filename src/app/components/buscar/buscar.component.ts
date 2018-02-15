import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PelisAppService} from '../../services/pelis-app.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

	buscar:string;
	peliculas: any[];

  constructor(private _ps:PelisAppService,
  						private _route: ActivatedRoute) {
  	this._route.params.subscribe(params => {
  		this.buscar = params['search'];
  			this.buscarPelicula();
  	}); 
  	
  	this.peliculas = [];
  }

  ngOnInit() {
  }

  buscarPelicula(){
  	console.log(this.buscar);
  	if(this.buscar && this.buscar.length > 0 ){
  		this._ps.buscarPelicula(this.buscar).subscribe(res=> {this.peliculas=res.results; console.log(this.peliculas)});
  	}
  }
}
