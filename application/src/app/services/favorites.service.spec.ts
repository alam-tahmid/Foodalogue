import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: FavoritesService = TestBed.get(FavoritesService);
    expect(service).toBeTruthy();
  });
});
