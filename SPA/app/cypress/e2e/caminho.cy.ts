describe('Caminho', () => {
    it('Visita a pagina de caminhos', () => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      
      //criar camiao
      cy.get('.caminhoSection').contains('Energia necessária para percorrer o Caminho em KWh:')
      cy.get('[name=energiaNecessariaKWh]').invoke('val')
      
      cy.get('.caminhoSection').contains('Tempo de deslocacao minimo entre armazéns em Minutos:')
      cy.get('[name=tempoDeslocacaoMin]').invoke('val')
     
      cy.get('.caminhoSection').contains('Identificador do Armazém de Origem:')
      cy.get('[name=idArmazemOrigem]').invoke('val')
    
      cy.get('.caminhoSection').contains('Identificador do Armazém de Destino:')
      cy.get('[name=idArmazemDestino]').invoke('val')
      
      cy.get('.caminhoSection').contains('Distância entre os 2 Armazéns em Km:')
      cy.get('[name=distanciaEntreArmazens]').invoke('val')
      
      //adicionar caminho
      cy.contains('Adicionar Caminho').click()
      
      //opções de filtragem 
      cy.get('[name=filter]').invoke('val')
      cy.get('.selectFilters').select('ID').should('have.value','id')
      cy.get('.selectFilters').select('Armazém de Origem').should('have.value','idArmazemOrigem')
      cy.get('.selectFilters').select('Armazém de Destino').should('have.value','idArmazemDestino')
      
      //listar todos caminhos
      cy.get('.selectFilters').select('Todos').should('have.value','todos')
      
      //botão filtrar
      cy.contains('Filtrar').click()
    })
  })

  describe('Criar Caminho', () => {
    
    it('Criar Caminho', () => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('80')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')

      cy.get('#botaoAdicionarCamião').click()
    })

    it('Criar Caminho : erro com energia necessaria <0',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('-2')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Energia Necessária para percorrer Caminho em KWh, seja maior que 0!!')
      })
    })

    it('Criar Caminho : erro com energia necessaria null',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório campo Energia Necessária para percorrer Caminho em KWh!!')
      })
    })

    it('Criar Caminho : erro com tempo deslocação <0',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('-5')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Tempo de deslocacao minimo entre armazéns em Minutos, seja maior que 0!!')
      })
    })

    it('Criar Caminho : erro com tempo deslocação null',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório campo Tempo de deslocacao minimo entre armazéns em Minutos!!')
      })
    })

    it('Criar Caminho : erro id de Armazem de Origem <3',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('11')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Identificador do Armazém de Origem, tenha 3 caracteres!!')
      })
    })
    it('Criar Caminho : erro id de Armazem de Origem nulo',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório campo Identificador do Armazém de Origem!!')
      })
    })

    it('Criar Caminho : erro id de Armazem de Origem >3',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('1111')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Identificador do Armazém de Origem, tenha 3 caracteres!!')
      })
    })

    it('Criar Caminho : erro id de Armazem de destino <3',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('22')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!')
      })
    })

    it('Criar Caminho : erro id de Armazem de destino null',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!')
      })
    })

    it('Criar Caminho : erro id de Armazem de destino >3',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('2222')
      cy.get('input[name=distanciaEntreArmazens]').type('20')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Identificador do Armazém de Destino, tenha 3 caracteres!!')
      })
    })

    it('Criar Caminho : erro distancia entre armazens null',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório campo Distância entre os 2 armazéns!!')
      })
    })

    it('Criar Caminho : erro distancia entre armazens <0',() => {
      localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
      cy.visit('/caminhos')
      cy.contains('Criar Caminhos')
      cy.get('input[name=energiaNecessariaKWh]').type('20')
      cy.get('input[name=tempoDeslocacaoMin]').type('20')
      cy.get('input[name=idArmazemOrigem]').type('001')
      cy.get('input[name=idArmazemDestino]').type('003')
      cy.get('input[name=distanciaEntreArmazens]').type('-1')
      
      cy.get('#botaoAdicionarCamião').click()

      cy.on('window:alert', (str) => {
        expect(str).to.equal('Obrigatório que o campo Distância entre os 2 armazéns, seja maior que 0!!')
      })
    })
  })

describe('Listar Caminhos',() => {
  it('Listar todos os caminhos', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
    cy.visit('/caminhos')
    cy.contains('Caminhos')
    cy.get('ul.caminhos').should('have.length',1)
    cy.get('li').contains('001')
  })
})
describe('Listar Caminhos',() => {
  it('Listar todos os caminhos', () => {
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
      cy.reload()
    cy.visit('/caminhos')
    cy.contains('Caminhos')
    cy.get('ul.caminhos').should('have.length',1)
    cy.get('li').contains('003')
    cy.get('li').should('have.length.at.least',9)
  })
})