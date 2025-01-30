import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { User } from '../../model/user/user';

describe('EntregaComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [UsersComponent],
            imports: [HttpClientModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#criarUser', () => {

        it('criar user OK', () => {
            const msg = 'User adicionado!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(component).toBeTruthy();
        });

        it('criar user erro phone null', () => {
            const msg = 'Obrigatório campo PhoneNumber!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('', '987777777@gmail.com', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro email null', () => {
            const msg = 'Obrigatório campo Email!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro first name null', () => {
            const msg = 'Obrigatório campo PhoneNumber!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', '', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro last name null', () => {
            const msg = 'Obrigatório campo LastName!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', 'firstName', '', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro username null', () => {
            const msg = 'Obrigatório campo userName!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', 'firstName', 'lastName', '', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro password null', () => {
            const msg = 'Obrigatório campo password!!';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', 'firstName', 'lastName', 'username', '', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro phone < 9 digitos', () => {
            const msg = 'O PhoneNumber é um numero com 9 digitos';
            let spy = spyOn(window, 'alert')

            component.criarUser('9877777', '987777777@gmail.com', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro phone > 9 digitos', () => {
            const msg = 'O PhoneNumber é um numero com 9 digitos';
            let spy = spyOn(window, 'alert')

            component.criarUser('98777777777', '987777777@gmail.com', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

        it('criar user erro phone repetido', () => {
            const msg = 'Erro! Tente novamente.';
            let spy = spyOn(window, 'alert')

            component.criarUser('987777777', '987777777@gmail.com', 'firstName', 'lastName', 'username', 'password', 'admin');
            expect(window.alert).toHaveBeenCalledWith(msg);

            expect(spy).toBeTruthy();
        });

    });

    describe('#listarUsers', () => {

        it('listar users OK', () => {
            component.listarUsersExistentes();
            expect(component.users.length).toBeGreaterThanOrEqual(1);
        })
    });

});