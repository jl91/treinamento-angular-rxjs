import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public subtitle: string = '';

  constructor(
    public titleService: Title
  ) {
    this.titleService.setTitle('Home');
  }

  public ngOnInit() {
    this.setSubtitle();
  }

  public setSubtitle(): void {
    this.subtitle = this.titleService.getTitle();
  }

  public setPageTitleSuffix(): void {
    this.subtitle += ' Page';
  }


}
