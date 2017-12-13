import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ToastmastersService {
  private apiUrl = 'http://terrylp.ics415.com/toastmasters/api/';

  constructor(private http: Http) { }

  /**
   * Resets a password to a members email given tid
   * @method emailPassword
   * @param tid of the member
   * @return Observable with response
   */
  emailPassword(tid) {
    return this.http.get(this.apiUrl + 'email_pw_api.php?tid=' + tid, {withCredentials: true})
    .map((res: Response) => res.json());
  }

  /**
   * Gets the names of all the members along with tid and key
   * @method getNames
   * @return Observable with response
   */
  getNames() {
    return this.http.get(this.apiUrl + 'get_names_api.php', {withCredentials: true})
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
    return this.http.get(this.apiUrl + 'login_api.php?tid=' + tid + '&pw=' + pw, {withCredentials: true})
      .map((res: Response) => res.json());
    } else {
      return this.http.get(this.apiUrl + 'login_api.php?first=' + first + '&pw=' + pw, {withCredentials: true})
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
  return this.http.get(this.apiUrl + 'update_desires_api.php', {withCredentials: true})
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
    return this.http.get(this.apiUrl + 'update_desires_api.php?duty=' + duty + '&desireOld=' + desireOld + '&desireNew=' + desireNew, {withCredentials: true})
    .map((res: Response) => res.json());
  }

  /**
   * Gets all the information regarding member. ex: name, password etc.
   * Member must be logged in prior to calling this function
   * @method getMemberInfo
   * @return Observable with response
   */
  getMemberInfo() {
    return this.http.get(this.apiUrl + 'update_member_api.php', {withCredentials: true})
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
    return this.http.get(this.apiUrl + 'update_member_api.php?field=' + field + '&fieldOld=' + fieldOld + '&fieldNew=' + fieldNew, {withCredentials: true})
    .map((res: Response) => res.json());
  }

  /**
   * Logs a member out of their current session
   * Member must be logged in prior to calling this function
   * @method logout
   * @return Observable with response
   */
  logout() {
    return this.http.get(this.apiUrl + 'logout_api.php', {withCredentials: true})
    .map((res: Response) => res.json());
  }

  /**
   * Gets the current roster for toastmaster
   * @method getRoster
   * @return Observable with response
   */
  getRoster() {
    return this.http.get(this.apiUrl + 'roster_api.php', {withCredentials: true})
    .map((res: Response) => res.json());
  }

  /**
   * Updates agenda given an id
   * I dont even know what this api endpoint does
   * @method updateAgenda
   * @return Observable with response
   */
  updateAgenda(agendaId) {
    return this.http.get(this.apiUrl + 'update_agenda_api.php?agendaId=' + agendaId, {withCredentials: true})
    .map((res: Response) => res.json());
  }


  updateAgenda_2(func, meetingDate, itemId, toastmaster, text) {
    const query = '?function=' + func +
                  '&meetingDate=' + meetingDate +
                  '&itemId=' + itemId +
                  '&toastmaster=' + toastmaster +
                  '&text=' + text;

    return this.http.get(this.apiUrl + 'update_agenda_api.php' + query, {withCredentials: true})
    .map((res: Response) => res.json());
  }

  updateAvailability(func, field, fieldOld, fieldNew) {
    const query = '?function=' + func +
              '&field=' + field +
              '&fieldOld=' + fieldOld +
              '&fieldNew=' + fieldNew;

    return this.http.get(this.apiUrl + 'update_avail_api.php' + query, {withCredentials: true})
    .map((res: Response) => res.json());
  }
}
