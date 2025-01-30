
Projeto em ASP.NET Core 5.0 API para descrever a Gestão de Armazéns aplicando (alguns conceitos de) DDD nesta tecnologia e usando também Entity Framework.
Adota um estilo arquitetural Onion.

Este módulo compreende:
- um dominio com x aggregate roots (...);
- um relacionamento de N <— 1 entre ... e ...;
- clara separação entre (i) API REST, (ii) Domínio e (iii) Infraestrutura (Persistência);
- aplicação de regras de negócio/validação.


