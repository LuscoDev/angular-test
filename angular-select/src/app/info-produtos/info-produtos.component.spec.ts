import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProdutosComponent } from './info-produtos.component';

describe('InfoProdutosComponent', () => {
  let component: InfoProdutosComponent;
  let fixture: ComponentFixture<InfoProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
