import { Injectable } from '@angular/core';

import { Meta } from './meta';
import { METAS } from './meta-list-local';

@Injectable()
export class MetaService {

  getMeta(id: number): Promise<Meta> {
    return this.getMetas()
    .then(metas => metas.find(meta => meta.id === id));
  }

  getMetas(): Promise<Meta[]> {
    return Promise.resolve(METAS);
  }

}
