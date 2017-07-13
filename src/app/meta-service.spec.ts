import { async } from '@angular/core/testing';
import { MetaService } from './meta-service';

describe('MetaService', () => {
  let service: MetaService;
  beforeEach(() => { service = new MetaService(); });

  it('should return a list of correct length', async(() => {
    service.getMetas().then(promiseList => {
      expect(promiseList[1]).toEqual(jasmine.objectContaining({name: 'Captain America'}));
    });
  }));

  it('should return corresponding meta', async(() => {
    service.getMeta(1).then(promiseList => {
      expect(promiseList.name).toEqual('Iron Man');
    });
  }));

});
