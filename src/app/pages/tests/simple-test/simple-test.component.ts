import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-simple-test',
  templateUrl: 'simple-test.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush
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
    // this.detectChanges();
  }

  private detectChanges(): void {
    this.changeDetectionRef.reattach();
    this.changeDetectionRef.detectChanges();
    this.changeDetectionRef.detach();
  }

  public showText(event: MouseEvent) {
    event.preventDefault();
    this.text = 'my text';
    // this.detectChanges();
  }

  public ngAfterViewChecked(): void {
    console.log('detected');
  }


}
