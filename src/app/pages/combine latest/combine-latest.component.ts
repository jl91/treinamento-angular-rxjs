import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {combineLatest, forkJoin, Subject} from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent implements OnInit, AfterViewInit {

  constructor(
    private titleService: Title
  ) {
  }

  public lockerIsUnlocked: boolean = false;

  public iconButtons: Array<{ color: string, status: boolean, subject: Subject<boolean> }> = [
    {
      color: 'primary',
      status: false,
      subject: new Subject<boolean>()
    },
    {
      color: 'accent',
      status: false,
      subject: new Subject<boolean>()
    },
    {
      color: 'warn',
      status: false,
      subject: new Subject<boolean>()
    },
  ];


  ngOnInit() {
    this.registerOnUnlickAll();
  }


  private registerOnUnlickAll(): void {
    const observables = this.iconButtons
      .map((iconButton: { color: string, status: boolean, subject: Subject<boolean> }) => {
        return iconButton.subject.asObservable();
      });

    combineLatest(observables)
      .subscribe((data: any) => {

        for (const icon of data) {
          if (!icon) {
            this.lockerIsUnlocked = false;
            return;
          }

          this.lockerIsUnlocked = true;
        }
      });
  }


  ngAfterViewInit(): void {
    this.titleService.setTitle('ForkJoin');
  }

  public unlockButton(iconButon: { color: string, status: boolean, subject: Subject<boolean> }): void {
    iconButon.status = !iconButon.status;
    iconButon.subject.next(iconButon.status);
  }


}
