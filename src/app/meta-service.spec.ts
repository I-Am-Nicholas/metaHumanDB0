import { async } from '@angular/core/testing';
import { MetaService } from './meta-service';

describe('MetaService', () => {
  let service: MetaService;
  beforeEach(() => { service = new MetaService(); });

  it('should return a list of correct length', async(() => {
    service.getMetas().then(promiseItem => {
      expect(promiseItem.length).toEqual(10);
    });
  }));

  it('should return corresponding meta', async(() => {
    service.getMeta(6).then(promiseItem => {
      expect(promiseItem.name).toEqual('Black Panther');
    });
  }));

});
