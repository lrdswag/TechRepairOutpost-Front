import { TestBed } from '@angular/core/testing';

import { PurchaseOrdersService } from './purchase-orders.service';

describe('PurchaseOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PurchaseOrdersService = TestBed.get(PurchaseOrdersService);
    expect(service).toBeTruthy();
  });
});
