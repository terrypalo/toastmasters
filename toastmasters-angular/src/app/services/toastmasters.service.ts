import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToastmastersService {
  private apiUrl = 'http://ics415.com/toastmasters/members/apis/'

  constructor(private http: Http) { }

  /**
   * Resets a password to a members email given tid
   * @method emailPassword
   * @param tid of the member
   * @return Observable with response
   */
  emailPassword(tid) {
  	return this.http.get(this.apiUrl + 'email_pw_api.php?tid=' + tid)
  	.map((res: Response) => res.json());
  }

  /**
   * Gets the names of all the members along with tid and key
   * @method getNames
   * @return Observable with response
   */
  getNames() {
  	return this.http.get(this.apiUrl + 'get_names_api.php')
  	.map((res: Response) => res.json());
  }

  /**
   * Logs a member in given tid or first and password
   * @method login
   * @param first, the first name of the member
   * @param pw, member password
   * @param tid, optional param to log in with tid
   * @return Observable with response
   */
  login(first, pw, tid?) {
  	if (tid) {
 		return this.http.get(this.apiUrl + 'login_api.php?tid=' + tid + '&pw=' + pw)
  		.map((res: Response) => res.json());
  	} else {
  		return this.http.get(this.apiUrl + 'login_api.php?first=' + first + '&pw=' + pw)
  		.map((res: Response) => res.json());
  	}

  }

  /**
   * Gets all the duty desires for a particular member
   * Member must be logged in prior to calling this function
   * @method getDesires
   * @return Observable with response
   */
  getDesires() {
	return this.http.get(this.apiUrl + 'update_desires_api.php')
  	.map((res: Response) => res.json());
  }

  /**
   * Updates a particular desire value on a member
   * Member must be logged in prior to calling this function
   * @method updateDesires
   * @param duty, desire duty to update
   * @param desireOld, current desire value (for accurate sql query)
   * @param desireNew, new desire value  
   * @return Observable with response
   */
  updateDesires(duty, desireOld, desireNew) {
  	return this.http.get(this.apiUrl + 'update_desires_api.php?duty=' + duty + '&desireOld=' + desireOld + '&desireNew=' + desireNew)
  	.map((res: Response) => res.json());
  }

  /**
   * Gets all the information regarding member. ex: name, password etc.
   * Member must be logged in prior to calling this function
   * @method getMemberInfo 
   * @return Observable with response
   */
  getMemberInfo() {
  	return this.http.get(this.apiUrl + 'update_member_api.php')
  	.map((res: Response) => res.json());
  }

  /**
   * Updates member info given particular field
   * Member must be logged in prior to calling this function
   * @method updateMemberInfo
   * @param field, the field to update
   * @param fieldOld, current field value (for accurate sql query)
   * @param fieldNew, new field value to change to
   * @return Observable with response
   */
  updateMemberInfo(field, fieldOld, fieldNew) {
  	return this.http.get(this.apiUrl + 'update_member_api.php?field=' + field + '&fieldOld=' + fieldOld + '&fieldNew=' + fieldNew)
  	.map((res: Response) => res.json());
  }

  /**
   * Logs a member out of their current session
   * Member must be logged in prior to calling this function
   * @method logout 
   * @return Observable with response
   */
  logout() {
  	return this.http.get(this.apiUrl + 'logout_api.php')
  	.map((res: Response) => res.json());
  }

  /**
   * Gets the current roster for toastmaster
   * @method getRoster 
   * @return Observable with response
   */
  getRoster() {
  	return this.http.get(this.apiUrl + 'roster_api.php')
  	.map((res: Response) => res.json());
  }
}
