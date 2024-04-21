# CRUDAngularTeste
 Este repositório se trata somente de um CRUD básico em Angular com uma API em C# ASP.NET Core

 Por uma questão de tempo do Teste, utilizei do migration para criar a base de dados na API para que assim não haja necessidade de uma configuração mais complexa da mesma ao clonar o projeto para outra máquina, porém outra alternativa que eu utilizaria seria criar uma base pelo SQL Server Sanagement Studio, fazer a conexão da mesma no meu projeto da API, e utilizaria de ADO Models e Procedures para fazer as consultas e alterações da base, mas a maneira como está feita no momento facilita para avaliação.

 No Angular é necessário verificar a url declarada no TarefaService, pois como se trata de um localhost é necessário verificar se está com a mesma porta que a API está usando na sua respectiva máquina.