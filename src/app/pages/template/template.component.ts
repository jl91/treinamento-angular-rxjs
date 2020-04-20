import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: 'template.component.html',
  styleUrls: [
    './template.component.scss'
  ]
})

export class TemplateComponent implements OnInit {

  public mainMenuOpenned = true;

  ngOnInit() {
  }

  public toggleOpened(): void {
    this.mainMenuOpenned = !this.mainMenuOpenned;
  }
}
