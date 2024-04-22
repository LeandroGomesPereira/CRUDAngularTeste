# CRUDAngularTeste
 Este repositório se trata somente de um CRUD básico em Angular com uma API em C# ASP.NET Core

 Por uma questão de tempo da Avaliação, utilizei do migration para criar a base de dados na API para que assim não haja necessidade de uma configuração mais complexa da mesma ao clonar o projeto para outra máquina, porém outra alternativa que eu utilizaria seria criar uma base pelo SQL Server Sanagement Studio, fazer a conexão da mesma no meu projeto da API, e utilizaria de ADO Models e Procedures para fazer as consultas e alterações da base, mas a maneira como está feita no momento facilita para avaliação.

 Para configurar a Base de dados é necessário somente usar o comando "Update-DataBase" no Package Manager Console pelo Visual Studio (Recomendado) ou executar o comando "dotnet ef database update" no CLI enquanto localizado no diretório do projeto

 No Angular é necessário verificar a url declarada no TarefaService, pois como se trata de um localhost é necessário verificar se está com a mesma porta que a API está usando na sua respectiva máquina.

Para executar o projeto, é necessário Executar primeiro a API, e depois usar o comando "ng serve -o" no CLI do VS Code e ele automaticamente abrirá uma guia no grid com as tarefas.