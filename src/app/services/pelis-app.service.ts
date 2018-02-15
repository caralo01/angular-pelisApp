import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class PelisAppService {

  private apikey:string= "b75bcb8a77bbc9ddd6a43efa8491a70c";
  private urlMoviedb:string="https://api.themoviedb.org/3";

  constructor(private _jsonp:Jsonp) { }

   getCartelera(){
     let desde = new Date();
     let hasta = new Date();
     hasta.setDate( hasta.getDate() + 7);

     let desdeSrt = `${ desde.getFullYear() }-${ desde.getMonth() }-${ desde.getDay() }`;
     let hastaSrt = `${ hasta.getFullYear() }-${ hasta.getMonth() }-${ hasta.getDay() }`;
     console.log(desdeSrt, hastaSrt);
     let url=`${ this.urlMoviedb }/discover/movie?primary_release_date.gte=${ desdeSrt }&primary_release_date.lte=${ hastaSrt }&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
      
      return this._jsonp.get( url )
                  .map(res => res.json());
 
   }

  getPopulares(){

    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
                .map( res=> res.json());
  }

  getPopulareNinos(){

    let url = `${ this.urlMoviedb }/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
                .map( res=> res.json());
  }

  buscarPelicula( texto:string ){

    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
                .map( res=> res.json());
  }

  getPelicula( id, page){

    let url = `${ this.urlMoviedb }/movie/${id}?api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;

    return this._jsonp.get( url )
                .map( res=> res.json());
  }
}
