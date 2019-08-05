import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'xxx-page-not-found',
  templateUrl: './xxx-page-not-found.component.html',
  styleUrls: ['./xxx-page-not-found.component.scss']
})

export class XxxPageNotFoundComponent {
}
