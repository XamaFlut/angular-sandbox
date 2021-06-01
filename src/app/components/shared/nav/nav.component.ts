import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  currentTheme = 'light';

  constructor(
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.currentTheme = this.settingsService.theme;
    this.settingsService.outsetTheme.subscribe(result => {
      console.log('Navbar theme: ', result);
      this.currentTheme = result;
    });
  }

}
