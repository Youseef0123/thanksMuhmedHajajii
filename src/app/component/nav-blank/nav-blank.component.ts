import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/shard/service/auth.service';

@Component({
  selector: 'app-nav-blank',
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.css']
})
export class NavBlankComponent {
  constructor(private _AuthService:AuthService){}


}
