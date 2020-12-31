import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatIconModule, MatCardModule, MatDividerModule, MatInputModule } from '@angular/material';
import { DisplayComponent } from './display/display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, DisplayComponent],
      imports: [
        FormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatDividerModule,
        HttpClientTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatInputModule



      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
