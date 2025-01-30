describe('Entrega', () => {
    it('Visita a pagina de entregas', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')

        //criar camiao
        cy.get('.EntregaSection').contains('TempoDescarga da Entrega:')
        cy.get('[name=tempodescarga]').invoke('val')

        cy.get('.EntregaSection').contains('TempoCarga da Entrega:')
        cy.get('[name=tempocarga]').invoke('val')

        cy.get('.EntregaSection').contains('Massa da Entrega:')
        cy.get('[name=massa]').invoke('val')

        cy.get('.EntregaSection').contains('ArmazemId de Entrega:')
        cy.get('[name=armazemId]').invoke('val')

        cy.get('.EntregaSection').contains('Dia de Entrega:')
        cy.get('[name=dia]').invoke('val')

        cy.get('.EntregaSection').contains('Mes de Entrega:')
        cy.get('[name=mes]').invoke('val')

        cy.get('.EntregaSection').contains('Ano de Entrega:')
        cy.get('[name=ano]').invoke('val')

        //adicionar entrega
        cy.contains('Adicionar Entrega').click()

        //opções de filtragem 
        cy.get('#inputFilter1').invoke('val')
        cy.get('#inputFilter2').invoke('val')
        cy.get('.selectFilters').select('Todos').should('have.value', 'todos')
        cy.get('.selectFilters').select('Armazém').should('have.value', 'Armazem')
        cy.get('.selectFilters').select('Intervalo de Datas').should('have.value', 'Intervalo de Datas')

        //botão filtrar
        cy.contains('Filtrar').click()
        cy.contains('Armazens Ascendente').click()
        cy.contains('Armazens Descendente').click()
    })
})

describe('Criar Entrega', () => {

    it('Criar Entrega OK', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('zzz')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('1500')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Entrega adicionada!')
        })
    })

    it('Criar Entrega : erro Tempo Descarga null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Tempo Descarga!!')
        })
    })

    it('Criar Entrega : erro Tempo Carga null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Tempo Carga!!')
        })
    })

    it('Criar Entrega : erro Massa null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Massa!!')
        })
    })

    it('Criar Entrega : erro Armazem ID null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Armazem ID!!')
        })
    })

    it('Criar Entrega : erro Dia null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Dia!!')
        })
    })

    it('Criar Entrega : erro Mes null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Mes!!')
        })
    })

    it('Criar Entrega : erro Ano null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Ano!!')
        })
    })

    it('Criar Entrega : erro tempo descarga = 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('0')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O Tempo de Descarga não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro tempo descarga < 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('-10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O Tempo de Descarga não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro tempo carga = 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('0')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O Tempo de Carga não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro tempo carga < 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('-10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O Tempo de Carga não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro tempo massa = 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('0')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('A Massa da entrega não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro tempo massa < 0', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('-300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('10')
        cy.get('input[name=mes]').type('11')
        cy.get('input[name=ano]').type('2020')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('A Massa da entrega não pode ser negativo nem 0')
        })
    })

    it('Criar Entrega : erro dia invalido > 31', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('32')
        cy.get('input[name=mes]').type('1')
        cy.get('input[name=ano]').type('2022')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Inválido (mes com mais de 31 dias)')
        })
    })

    it('Criar Entrega : erro dia invalido > 30', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('31')
        cy.get('input[name=mes]').type('4')
        cy.get('input[name=ano]').type('2022')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Inválido (mes com mais de 30 dias)')
        })
    })

    it('Criar Entrega : erro dia invalido > 29', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('30')
        cy.get('input[name=mes]').type('2')
        cy.get('input[name=ano]').type('2024')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Inválido (mes com mais de 29 dias)')
        })
    })

    it('Criar Entrega : erro dia invalido > 28', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Criar Entregas')
        cy.get('input[name=tempodescarga]').type('10')
        cy.get('input[name=tempocarga]').type('10')
        cy.get('input[name=massa]').type('300')
        cy.get('input[name=armazemId]').type('001')
        cy.get('input[name=dia]').type('29')
        cy.get('input[name=mes]').type('2')
        cy.get('input[name=ano]').type('2022')

        cy.get('#botaoAdicionarEntrega').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Inválido (mes com mais de 28 dias)')
        })
    })
})

describe('Listar Entregas', () => {
    it('Listar todas entregas', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Entregas')
        cy.get('.selectFilters').select('todos')
        cy.get('#botaoFiltrarEntregas').click()
        cy.get('li.entregasLi').contains('ArmazemId:zzz 10/11/1500')
    })

    it('Listar entregas por armazem', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Entregas')
        cy.get('.selectFilters').select('Armazem')
        cy.get('#inputFilter1').type('zzz')
        cy.get('#botaoFiltrarEntregas').click()
        cy.get('li.entregasLi').contains('ArmazemId:zzz 10/11/1500')
        cy.get('li.entregasLi').should('not.include.text', 'ArmazemId:001')
    })

    it('Listar entregas por datas', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/entregas')
        cy.contains('Entregas')
        cy.get('.selectFilters').select('Intervalo de Datas')
        cy.get('#inputFilter1').type('15001110')
        cy.get('#inputFilter2').type('15001110')
        cy.get('#botaoFiltrarEntregas').click()
        cy.get('li.entregasLi').contains('ArmazemId:zzz 10/11/1500')
        cy.get('li.entregasLi').should('not.include.text', 'ArmazemId:001')
    })
})


