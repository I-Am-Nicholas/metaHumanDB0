import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Meta } from './meta';
import { MetaService } from './meta-service';

@Component({
  templateUrl: './metas.component.html',
})

export class MetasComponent implements OnInit {

  metaShown: Meta[];

  constructor(
    private router: Router,
    private metaService: MetaService
  ) { }

  ngOnInit(): void {
    this.getTheMetas();
  }

  getTheMetas(): void {
    this.metaService.getMetas().then(metas => this.metaShown = metas);
  }

}
