import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

/**
 * 15/05 - Workshop Angular PRO - Testes com Andrew Rosário
 */

describe('HomeComponent', () => {
  // nosso próprio componente que vamos testar.
  let component: HomeComponent;
  // o fixture do componente, uma caixinha de ferramenta do nosso componente para testar.
  let fixture: ComponentFixture<HomeComponent>;

  // antes de cada teste, vamos configurar o componente.
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    // instanciar o componente
    fixture = TestBed.createComponent(HomeComponent);
    // obter a instância do componente
    component = fixture.componentInstance;
    // renderizar o componente
    fixture.detectChanges();
  });

  // testar se o componente foi criado
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // testar se o header tem o título 'Workshop Angular'
  it('should contain title', () => {
    const header = fixture.nativeElement.querySelector('.header');
    expect(header.textContent).toBe('Workshop Angular');
  });
});
