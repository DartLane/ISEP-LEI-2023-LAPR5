import { lastIndexOf } from "cypress/types/lodash"

//Cypress Camiao test
describe('Camiao', () => {
    it('Visita a pagina de camioes', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '2000', '666', '80', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()
    })

    it('criar camiao erro matricula ', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'', '2000', '666', '80', '20', '30'
        cy.get('input[name="matricula"]').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Matricula com formato Inválido';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Matricula com formato Inválido')
        }
        )
    })

    it('criar camiao erro tara null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '', '666', '80', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('aaaaaa')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Obrigatório campo Tara!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Tara!!')
        }
        )
    })

    it('criar camiao erro capacidade carga null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '2000', '', '80', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('aaaa')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Obrigatório campo Capacidade de Carga!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Capacidade de Carga!!')
        }
        )
    })

    it('criar camiao erro carga total baterias null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '2000', '666', '', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('aaaa')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Obrigatório campo Carga Total Baterias!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Carga Total Baterias!!')
        }
        )
    })

    it('criar camiao erro autonomia null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '2000', '666', '80', '', '30'
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('aaaa')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Obrigatório campo Autonomia!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Autonomia!!')
        }
        )
    })

    it('criar camiao erro tempo recarregamento null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')

        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')

        //'JZ-11-AH', '2000', '666', '80', '20', ''
        cy.get('input[name="matricula"]').type('JZ-11-AP')
        cy.get('input[name="tara"]').type('2000')
        cy.get('input[name="capacidadeCarga"]').type('666')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('aaaa')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Obrigatório campo Tempo Recarregamento!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Tempo Recarregamento!!')
        }
        )
    })

    it('criar outro camiao valido', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')

        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')
        //'JZ-11-SS', '2020', '766', '80', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-SS')
        cy.get('input[name="tara"]').type('2020')
        cy.get('input[name="capacidadeCarga"]').type('766')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()
        cy.contains('JZ-11-SS')

    })

    it('criar camiao erro matricula repetida', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')

        cy.visit('/camioes')
        cy.contains('CRIAR CAMIÕES')
        //'JZ-11-SS', '2020', '766', '80', '20', '30'
        cy.get('input[name="matricula"]').type('JZ-11-SS')
        cy.get('input[name="tara"]').type('2020')
        cy.get('input[name="capacidadeCarga"]').type('766')
        cy.get('input[name="cargaTotalBaterias"]').type('80')
        cy.get('input[name="autonomia"]').type('20')
        cy.get('input[name="tempoRecarregamento"]').type('30')
        cy.get('#botaoAdicionarCamião').click()

        //const msg = 'Matricula já existe!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Matricula já existe!!')
        }
        )
    })



    describe('inibir camioes', () => {
        it('inibir camioes', () => {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
            cy.visit('/camioes')
            cy.contains('CAMIÕES')

            cy.get('input[name="matricula"]').type('01-AA-01')
            cy.get('input[name="tara"]').type('2000')
            cy.get('input[name="capacidadeCarga"]').type('666')
            cy.get('input[name="cargaTotalBaterias"]').type('80')
            cy.get('input[name="autonomia"]').type('20')
            cy.get('input[name="tempoRecarregamento"]').type('30')
            cy.get('#botaoAdicionarCamião').click()
            //sleep 1 segundo
            cy.wait(1000)
            //test alert
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Camião com matricula: 01-AA-01 adicionado!')
            })
            //testes com base no html no comentario anterior
            var matricula = cy.get('.camioes').children().eq(1).children().eq(0).get('.badge').eq(0).invoke('text')
            cy.get('.camioes').children().eq(1).children().eq(0).get('.inibir').eq(0).eq(0).should('exist')
            cy.get('.camioes').children().eq(1).children().eq(0).get('.inibir').eq(0).click({force: true})
            //refrescar a pagina
            cy.reload()
            
            //check last element
            cy.get('.camioes').children().eq(1).children().eq(1).get('.inibido').eq(length).should('exist')
            //.eq(last)
            var matriculaF = cy.get('.camioes').children().eq(1).children().eq(1).get('.badge').last().invoke('text')

            if(String(matricula).valueOf() === String(matriculaF).valueOf() ){
                cy.log('matriculas iguais')
            }else{
                cy.log('matriculas diferentes')
            }




        })
    })
})




