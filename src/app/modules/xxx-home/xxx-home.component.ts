import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-home',
  styleUrls: ['./xxx-home.component.scss'],
  templateUrl: './xxx-home.component.html'
})

export class XxxHomeComponent {
}
