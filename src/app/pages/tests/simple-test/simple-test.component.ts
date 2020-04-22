import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-simple-test',
  templateUrl: 'simple-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleTestComponent implements OnInit, AfterViewInit, AfterViewChecked {

  public text = '';

  constructor(
    private changeDetectionRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.updateView();
  }

  private updateView(): void {
    this.changeDetectionRef.reattach();
    this.changeDetectionRef.detectChanges();
    this.changeDetectionRef.detach();
  }

  public showText(event: MouseEvent) {
    event.preventDefault();
    this.text = 'my text';
    this.updateView();
  }

  public ngAfterViewChecked(): void {
    console.log('detected');
  }


}
