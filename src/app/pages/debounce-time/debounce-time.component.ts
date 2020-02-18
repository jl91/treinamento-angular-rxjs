import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-fork-join',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {

  public password: string;

  public printText: string;

  public textObservable: Subject<string> = new Subject<string>();


  constructor(
    private titleService: Title
  ) {
  }

  ngOnInit() {
    this.registerOnTextObservableChanges();
  }

  private registerOnTextObservableChanges(): void {
    this.textObservable
      .asObservable()
      .pipe(debounceTime(500))
      .subscribe((text: string) => {
        this.printText = text;
      });
  }

  ngAfterViewInit(): void {
    this.titleService.setTitle('Debounce Time');
  }

  public onModelChanges(event: string): void {
    this.password = event;
    this.textObservable.next(event);
  }

}
