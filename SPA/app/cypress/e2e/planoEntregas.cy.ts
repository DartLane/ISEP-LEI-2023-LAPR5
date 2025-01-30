describe('PlanoEntregas', () => {
    it('Visita a pagina dos planos entregas', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/planoEntregas')
        cy.contains('Plano de Entregas')

        cy.contains('1')
    })
})

describe('Listar Planos', () => {

    it('Listar todos users', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        
        cy.visit('/planoEntregas')
        cy.get('li.entregasLi').should('have.length.at.most', 3)
    })

})