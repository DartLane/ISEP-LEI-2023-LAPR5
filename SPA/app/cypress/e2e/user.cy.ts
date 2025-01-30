describe('User', () => {
    it('Visita a pagina dos users', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')

        //criar user
        cy.get('.UsersSection').contains('Numero de Telemovel do User:')
        cy.get('[name=phonenumber]').invoke('val')

        cy.get('.UsersSection').contains('Email do Utilizador:')
        cy.get('[name=email]').invoke('val')

        cy.get('.UsersSection').contains('Nome do Utilizador:')
        cy.get('[name=nome]').invoke('val')

        cy.get('.UsersSection').contains('Sobrenome do Utilizador:')
        cy.get('[name=sobrenome]').invoke('val')

        cy.get('.UsersSection').contains('UserName do Utilizador:')
        cy.get('[name=userName]').invoke('val')

        cy.get('.UsersSection').contains('Password do Utilizador:')
        cy.get('[name=password]').invoke('val')

        cy.get('.UsersSection').contains('UserType do Utilizador:')
        cy.get('.userTypeOptions').select('Admin').should('have.value', 'admin')
        cy.get('.userTypeOptions').select('Gestor Armazens').should('have.value', 'gestor Armazens')
        cy.get('.userTypeOptions').select('Gestor Frota').should('have.value', 'gestor Frota')
        cy.get('.userTypeOptions').select('Gestor Logistica').should('have.value', 'gestor Logistica')

        //adicionar entrega
        cy.contains('Adicionar User').click()

        cy.contains('Users')
    })
})

describe('Criar User', () => {

    it('Criar User OK', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('User adicionado!')
        })
    })

    it('Criar User : erro email null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Email!!')
        })
    })

    it('Criar User : erro first name null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo firstName!!')
        })
    })

    it('Criar User : erro last name null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo LastName!!')
        })
    })

    it('Criar User : erro username null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo userName!!')
        })
    })

    it('Criar User : erro password null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo password!!')
        })
    })

    it('Criar User : erro phone number invalido', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('9999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O PhoneNumber é um numero com 9 digitos')
        })
    })

    it('Criar User : erro phone number invalido', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('1')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O PhoneNumber é um numero com 9 digitos')
        })
    })

    it('Criar User : erro phone repetido', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('999999999')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro! Tente novamente.')
        })
    })

    it('Criar User : erro email repetido', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Criar User')
        cy.get('input[name=phonenumber]').type('835730294')
        cy.get('input[name=email]').type('email@gmail.com')
        cy.get('input[name=nome]').type('nome')
        cy.get('input[name=sobrenome]').type('sobrenome')
        cy.get('input[name=userName]').type('username')
        cy.get('input[name=password]').type('password')
        cy.get('.userTypeOptions').select('Admin')

        cy.get('#botaoAdicionarUser').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Erro! Tente novamente.')
        })
    })

})

describe('Listar Users', () => {

    it('Listar todos users', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Users')
        cy.get('li.usersLi').contains('999999999')
    })

})

/*describe('Details User', () => {
    
    it('Click user detail', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/users')
        cy.contains('Users')
        cy.get('li.usersLi').contains('999999999').click()

        //cy.get('.detalhesUser').should('have.text', 'nome')
        //cy.get('#email').should('have.text', 'Email: email@gmail.com')
        cy.get('#botaoCancelarUser').click()
    })

})*/