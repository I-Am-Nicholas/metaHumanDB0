import { Component } from '@angular/core';
import { MetaService } from './meta-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MetaService]
})

export class AppComponent {

  constructor(private metaService: MetaService) { }
  title = 'META-HUMAN DATABASE';
}
