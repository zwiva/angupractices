import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest/rest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tarea201202',
  templateUrl: './tarea201202.component.html',
  styleUrls: ['./tarea201202.component.scss']
})
export class Tarea201202Component implements OnInit {

  students: any[] = [];

  constructor(
    private _rest: RestService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      for (let id = 1; id <= environment.usersId.length; id++) {
        let dataReturned: any = await this._rest.getUserById(id);
        if (dataReturned[0].typeid == 1) {
          this.students.push(dataReturned[0].name)
          console.log(dataReturned[0].name);
        }
      }
      console.log(this.students)
    } catch (error) {
      console.log(error);
    }
  }
}
