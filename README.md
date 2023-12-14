Teste realizado para oportunidade Datum + Renner, que consiste em um app em react Native que utiliza api GraphQL do Rick and Martin para exibir os personagems em uma lista paginada no modelo de infinity scroll. Além de possuir um filtro para buscar um ou mais personagens específicos. Ao selecionar o personagem, mais informações do mesmo serão exibidas numa tela de detalhes.

Tecnologias Utilizadas:
- React Native
- Typescript
- Redux
- Styled components
- Apollo
- React Native Reanimated
- React Native Testing Library

Detalhes de arquitetura:
Como foi questionado sobre conhecimento em Clean Architeture no questionário, optei por utilizar essa arquitetura a fim de trazer desacoplamento e divisão de responsabilidades.
O projeto foi dividido nos seguintes diretórios:
Domain: Layer onde armazena-se os useCases e Models das entidades de modo abstrato;
Data: Layer onde implementa-se os useCases e Models concretos;
Infra: Layer onde configura-se e implementa-se plugins/bibliotecas de terceiros;
Main: Layer onde cria-se os serviços por meio de Factories.
Presentation: Layer onde armazena-se toda a camada que interage com o usuário.

Próximos passos:
- Cobrir o app com mais testes unitários e integração, uma vez que, devido ao tempo, só foi possível até o momento incluir alguns testes unitários de componentes;
- Identificar e Refatorar pontos que podem ser melhorados;
- Implementar Acessibilidade
- Implementar LazyLoading/Carregamento progressivo de imagens

Instruções de execução
Ios:
- npm install
- cd ios & pod install
- npm start
- npm run ios

Android:
- npm install
- npm start
- npm run android

https://github.com/lucascapra6/Rick-and-Morty-GraphQL/assets/85529911/4166519e-37ae-4315-a429-0ea3769b5821
