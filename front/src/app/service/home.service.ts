import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class HomeService{

	private homeUrl = "/api/home";
	
	constructor(private http: Http){}

	getData(){
		return this.http.get(this.homeUrl)
				   .toPromise()
				   .then(res => res.json().data)
				   .catch(this.handleError);
	}

	private handleError(error: any){
		console.error('An error occurred', error);
		return Promise.reject(error.message || error);
	}
}