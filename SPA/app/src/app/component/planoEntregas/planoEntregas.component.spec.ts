import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEntregasComponent } from './planoEntregas.component';
import { PlanoEntregas } from '../../model/planoEntregas/planoEntregas';

describe('EntregaComponent', () => {
    let component: PlanoEntregasComponent;
    let fixture: ComponentFixture<PlanoEntregasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PlanoEntregasComponent],
            imports: [HttpClientModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PlanoEntregasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#listarPlanoEntregas', () => {

        it('listar plano entregas', () => {
            component.listarPlanoEntregas();
            expect(component.planos.length).toBeLessThanOrEqual(3);
        })
    });

    describe('#pageChangeEvent', () => {

        it('mudar pagina', () => {
            component.pageChangeEvent(2);
            expect(component.paginaAtual).toBe(2);
            expect(component.planos.length).toBeLessThanOrEqual(3);
        })
    });

});