//Cypress Armazem test
describe('Armazens', () => {
    it('Visita a pagina de armazens', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro null ', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()

        //const msg = 'Matricula com formato Inválido';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Id!')
        }
        )
    })

    it('criar armazem erro designaçao null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()

        //const msg = 'Obrigatório campo Tara!!';
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Obrigatório campo Designação!')
        }
        )
    })

    it('criar armazem erro morada null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro localidade null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro codigoPostal null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro latitude null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro longitude null', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro id <3', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('12')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro id >3', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('1234')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro designação >50', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro codigoPostal1', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('400-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro codigoPostal2', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-06')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro latitude >90', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('100')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro latitude <-90', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('-100')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro longitude >180', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('200')
        cy.get('input[value="Adicionar Armazém"]').click()
    })

    it('criar armazem erro longitude <-200', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Criar Armazem')

        cy.get('input[name="id"]').type('123')
        cy.get('input[name="designacao"]').type('Armazem')
        cy.get('input[name="morada"]').type('Rua dos Carvalhos')
        cy.get('input[name="localidade"]').type('Guimaraes')
        cy.get('input[name="codigoPostal"]').type('4000-066')
        cy.get('input[name="latitude"]').type('30')
        cy.get('input[name="longitude"]').type('30')
        cy.get('input[value="Adicionar Armazém"]').click()
    })


})

describe('listar armazens', () => {
    it('listar armazens', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Armazens')
        cy.get('ul.listarArmazens').should('have.length', 1)
        cy.get('li').contains('002')

    })

    it('listar armazens 2', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/armazens')
        cy.contains('Armazens')
        cy.get('ul.listarArmazens').should('have.length', 1)
        cy.get('li').contains('001')

    })
})


    describe('inibir armazem', () => {
        
        it('inibir armazem', () => {
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
            
            cy.visit('/armazens')
            cy.contains('Armazens')

            cy.get('input[name="id"]').type('001')
            cy.get('input[name="designacao"]').type('Matosinhos')
            cy.get('input[name="morada"]').type('AV. dos Aliados, 330')
            cy.get('input[name="localidade"]').type('Porto')
            cy.get('input[name="codigoPostal"]').type(' 4000-066')
            cy.get('input[name="latitude"]').type('341.1483136')
            cy.get('input[name="longitude"]').type('-8.6130035')
            cy.get('input[name="altitude"]').type('800.0')
            cy.get('#botaoAdicionarArmazem').click()
            //sleep 1 segundo
            cy.wait(1000)
          
            //testes com base no html no comentario anterior
            var id = cy.get('.grid-container').children().eq(1).children().eq(0).get('.badge').eq(0).invoke('text')
            cy.get('.grid-container').children().eq(1).children().eq(0).get('.delete').eq(0).eq(0).should('exist')
            cy.get('.grid-container').children().eq(1).children().eq(0).get('.delete').eq(0).click({force: true})
            cy.get('#inibir').click()
            //refrescar a pagina
            cy.reload()

            cy.get('.grid-container').children().eq(1).children().eq(0).get('.delete').eq(0).click({force: true})

        
        })
})



