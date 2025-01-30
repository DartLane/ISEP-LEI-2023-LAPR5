import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { Config } from '../config';
import { User } from '../model/user/user';
import { Token } from '../model/token/token';

describe('UserService', () => {
    let service: UserService;
    let httpMock: HttpTestingController;
    const URL = Config.gestaoArmazemURL + 'Users/';
    const URLlogin = Config.gestaoArmazemURL + 'Login/';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(UserService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        // After every test, assert that there are no more pending requests.
        httpMock.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#criarUser', () => {
        it('should return an Observable<User>', () => {
            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.criarUser(dummyUser).subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL);
            expect(request.request.method).toBe("POST");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

    describe('#getUsers', () => {
        it('should return an Observable<User[]>', () => {
            const dummyUsers =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.getUsers().subscribe(users => {
                expect(users.length).toBe(1);
                expect(users).toEqual(dummyUsers);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL);
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUsers);
        });
    });

    describe('#getUsersExistentes', () => {
        it('should return an Observable<User[]>', () => {
            const dummyUsers =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.getUsersExistentes().subscribe(users => {
                expect(users.length).toBe(1);
                expect(users).toEqual(dummyUsers);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+'existing/users');
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUsers);
        });
    });

    describe('#getUser', () => {
        it('should return an Observable<User>', () => {
            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.getUsersExistentes().subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+dummyUser.id);
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

    describe('#getToken', () => {
        it('should return an Observable<Token>', () => {
            const dummyToken =
                { token: 123 } as Token;
                const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.getToken(dummyUser.email).subscribe(token => {
                expect(token).toEqual(dummyToken);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URLlogin);
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyToken);
        });
    });

    describe('#getUserByEmail', () => {
        it('should return an Observable<User>', () => {
            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.getUserByEmail(dummyUser.email).subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+'email'+dummyUser.email);
            expect(request.request.method).toBe("GET");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

    describe('#updateUser', () => {
        it('should return an Observable<User>', () => {
            const dummyUserToUpdate =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.updateUser(dummyUserToUpdate).subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+dummyUserToUpdate.id);
            expect(request.request.method).toBe("PUT");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

    describe('#anonimizeUser', () => {
        it('should return an Observable<User>', () => {
            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.anonimizeUser(dummyUser.id).subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+dummyUser.id+'/soft');
            expect(request.request.method).toBe("DELETE");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

    describe('#deleteUser', () => {
        it('should return an Observable<User>', () => {
            const dummyUser =
                { id: "1", phoneNumber: 987777777, email: 'email', firstName: 'firstName', lastName: 'lastName', userName: 'username', password: 'password', userType: 'admin' } as User;

            service.anonimizeUser(dummyUser.id).subscribe(user => {
                expect(user).toEqual(dummyUser);
            });

            // The following `expectOne()` will match the request's URL.
            // If no requests or multiple requests matched that URL
            // `expectOne()` would throw.
            const request = httpMock.expectOne(URL+dummyUser.id+'/hard');
            expect(request.request.method).toBe("DELETE");

            // Respond with mock data, causing Observable to resolve.
            // Subscribe callback asserts that correct data was returned.
            request.flush(dummyUser);
        });
    });

});