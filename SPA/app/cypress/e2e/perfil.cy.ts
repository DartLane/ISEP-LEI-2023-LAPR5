describe('Perfil', () => {
    it('Visita a pagina', () => {
        localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjYWxvczEyMyIsImZpcnN0TmFtZSI6IkNhcmxvcyIsInJvbGUgIjoiYWRtaW4iLCJqdGkiOiIyYzQwNGFkYi0zYjRkLTRkMDItOWFkZi0zOGRjNDQ1OGUzOWYiLCJleHAiOjE3MDM4NzU3NTEsImlzcyI6IkVsZXRyaWNHTyIsImF1ZCI6IkVsZXRyaWNHTyJ9.gFrpl8PUeW5BxTR17tBN88uaTlk98Z1Hf1lI2QMM-mQ')
        cy.reload()


      cy.visit('/perfil')
      cy.contains('Perfil')
      /*
      NAO SEI FAZER ESTA MERDA AJUDAAAAAAA
      cy.get('.tudoPerfil').contains('Telemovel:')

        cy.get('.tudoPerfil').contains('Email:')

        cy.get('.tudoPerfil').contains('Nome do Utilizador:')
        cy.get('[name=firstName]').invoke('val')
        
        cy.get('.tudoPerfil').contains('Sobrenome do Utilizador:')
        cy.get('[name=lastName]').invoke('val')

        cy.get('.tudoPerfil').contains('UserName do Utilizador:')
        cy.get('[name=userName]').invoke('val')

        cy.get('.tudoPerfil').contains('Password do Utilizador:')
        cy.get('[name=password]').invoke('val')

        cy.get('.tudoPerfil').contains('UserType:')
        */
    })
})