# Curso de JavaScript - Padrões de Projeto

Este repositório contém os projetos e exemplos desenvolvidos durante o curso de **JavaScript - Padrões de Projeto** do professor Luiz Otávio Miranda, disponível na plataforma Udemy.

## Sobre o Curso

O curso aborda uma variedade de padrões de projeto que são essenciais para desenvolver aplicações JavaScript mais robustas, escaláveis e manuteníveis. Os padrões de projeto são soluções testadas e comprovadas para problemas comuns de design de software e ajudam a melhorar a qualidade do código.

### Padrões de Projeto Aprendidos

1. **Singleton**
   - **Propósito:** Garante que uma classe tenha apenas uma instância e fornece um ponto global de acesso a essa instância.
   - **Características:**
     - Controla a criação de instâncias, assegurando que apenas uma instância exista.
     - Fornece um método estático que retorna a única instância.
     - Utilizado para gerenciar recursos compartilhados, como conexões de banco de dados ou configurações de aplicação.
   - **Exemplo de Uso:** Um objeto de configuração que é acessado em toda a aplicação.

2. **Factory**
   - **Propósito:** Define uma interface para criar objetos, mas permite que as subclasses decidam qual classe instanciar.
   - **Características:**
     - Encapsula a lógica de criação de objetos.
     - Pode ser implementado usando métodos de fábrica ou classes de fábrica.
     - Facilita a adição de novas classes de produtos sem alterar o código cliente.
   - **Exemplo de Uso:** Um criador de objetos de interface gráfica que cria botões, campos de texto, etc., dependendo da necessidade.
  
3. **Observer**
   - **Propósito:** Define uma dependência um-para-muitos entre objetos para que quando um objeto muda de estado, todos os seus dependentes sejam notificados e atualizados automaticamente.
   - **Características:**
     - O objeto observado mantém uma lista de observadores.
     - Os observadores se registram no objeto observado para serem notificados de mudanças.
     - Promove a comunicação desacoplada entre objetos.
   - **Exemplo de Uso:** Sistemas de eventos, onde várias partes da aplicação precisam reagir a eventos específicos, como uma mudança de estado de um objeto.

4. **Decorator**
   - **Propósito:** Permite adicionar comportamentos a objetos individualmente, de forma dinâmica, sem afetar o comportamento de outros objetos da mesma classe.
   - **Características:**
     - Usa composição ao invés de herança para estender funcionalidades.
     - Os decoradores são objetos que "envolvem" o objeto original.
     - Vários decoradores podem ser combinados para adicionar múltiplas funcionalidades.
   - **Exemplo de Uso:** Adicionar funcionalidades como rolagem e bordas a um componente de interface gráfica sem alterar o código base do componente.

5. **Strategy**
   - **Propósito:** Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.
   - **Características:**
     - O algoritmo é separado do contexto onde é usado.
     - Pode trocar a estratégia de algoritmo em tempo de execução.
     - Facilita a adição de novos algoritmos sem modificar o contexto.
   - **Exemplo de Uso:** Diferentes métodos de ordenação (rápido, bolha, mesclagem) que podem ser selecionados conforme a necessidade.

6. **Command**
   - **Propósito:** Encapsula uma solicitação como um objeto, permitindo parametrizar clientes com diferentes solicitações, enfileirar ou registrar solicitações e suportar operações que podem ser desfeitas.
   - **Características:**
     - Cada comando é representado como um objeto que contém todas as informações necessárias para executar a ação.
     - Suporta operações que podem ser desfeitas (undo) e refeitas (redo).
     - Facilita a criação de filas de comandos e o registro de operações.
   - **Exemplo de Uso:** Sistemas de interface de usuário onde cada ação do usuário é encapsulada como um comando, permitindo desfazer e refazer operações.

