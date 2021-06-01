import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
  }

  updateTheme(theme){
    console.log(`Update theme: ${theme}`);
    this.settingsService.theme = theme;
  }

}
