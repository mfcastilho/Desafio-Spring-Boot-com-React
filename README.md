# Desafio Sistema Bancario

## Tecnologias do Projeto :
> ## - Java
> ## - React
> ## - Bootstrap

## Para baixar as dependencias da aplicação frontend digite o comando: 
### `npm install`
## Para rodar a aplicação frontend digite o comando:
### `npm start`

## Execute o aplicativo no modo de desenvolvimento.
### Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no seu navegador.

------------------------------------------------------------------------------------------------------------------------------------------------------

# Desafio Técnico 

Algoritmo que executa operações de autenticação e depois, de uma transferência bancária obedecendo os seguintes critérios: 

1. A base de dados local deve conter usuários emissores e receptores de uma transferência, seguindo o modelo; 
2. A senha de autenticação deve conter 8 dígitos, caracteres especiais, letras maiúsculas e minúsculas;
3. O usuário precisará estar autenticado para realizar uma transferência; 
4. Toda transferência deverá ser feita entre um emissor e um receptor;
5. Operador e receptor iniciam a operação com um saldo de R$ 0,00;
6. As transferências deverão ser executadas de acordo com o seu tipo, sendo 3 os seus tipos: PIX, TED e DOC;
7. O limite de valor máximo permitido para uma transferência via PIX é de R$ 5 mil; 
8. Transferências via TED só são permitidas para valores acima de R$ 5 mil e até R$ 10 mil; 
9. Transferências via DOC só são permitidas para valores acima de R$ 10 mil; 
10. Não serão permitidas transferências para a mesma conta, mas um emissor pode transferir para ele mesmo se for uma conta diferente;
11. As entradas deverão estar sempre com todos os dados preenchidos.

Frontend simples (HTML) para que a aplicação seja testada. 

Ao final da operação, uma mensagem deverá ser exibida: 

1. Se a transferência for bem sucedida, exibir mensagem de sucesso com o saldo do emissor e do receptor após a transferência, de acordo com o modelo:

**Sua transferência foi realizada com sucesso!<br> 
Saldo do emissor: R$ X,XX<br>
Saldo do receptor: R$X,XX**<br>

4. Se a transferência não for completada, exibir mensagem de erro explicando o motivo, vide exemplo: 

**Sua transferência não foi completada pois (escrever o motivo)**


