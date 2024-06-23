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
  
7.  **State**
   - **Propósito:** Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe.
   - **Características:**
     - Encapsula o estado em objetos separados e delega o comportamento para o objeto correspondente ao estado atual.
     - Facilita a adição de novos estados, apenas adicionando novas classes de estado.
     - Remove condicionais complexas baseadas no estado de um objeto.
   - **Exemplo de Uso:** : Uma máquina de venda automática que muda seu comportamento (aceitar moedas, dispensar produtos, etc.) com base no seu estado atual (esperando por moeda, moeda inserida, produto selecionado).
   Este padrão é útil para situações onde um objeto deve alterar seu comportamento em tempo de execução dependendo do seu estado interno.


8.  **Template Method**
   - **Propósito:** Define o esqueleto de um algoritmo em uma operação, diferindo alguns passos para subclasses. Permite que subclasses redefinam certos passos de um algoritmo sem alterar sua estrutura.
   - **Características:**
     - O método principal (template method) define a sequência de passos de um algoritmo.
     - Alguns passos do algoritmo são implementados em métodos abstratos ou métodos que podem ser sobrescritos pelas subclasses.
     - Promove o reuso de código, mantendo a estrutura geral do algoritmo enquanto permite personalização nos detalhes.
   - **Exemplo de Uso:** : Um método de processamento de pedidos que define etapas como validação, cobrança e envio. Subclasses específicas podem redefinir a forma de validação e cobrança sem alterar a estrutura do processo.
   O padrão Template Method é útil quando você tem algoritmos que são semelhantes em estrutura, mas diferem em detalhes específicos, permitindo que subclasses implementem essas partes variáveis.


9.  **Builder**
   - **Propósito:** Separa a construção de um objeto complexo da sua representação, permitindo que o mesmo processo de construção crie diferentes representações.
   - **Características:**
     - Utiliza um objeto Builder para construir o objeto final passo a passo.
     - O processo de construção é controlado por uma classe Director opcional, que define a ordem de construção.
     - Permite a criação de objetos complexos com diferentes configurações, sem a necessidade de um grande número de construtores ou parâmetros opcionais.
   - **Exemplo de Uso:** : Construção de um objeto House com diferentes partes (como quartos, banheiros, cozinha) onde a variação nos detalhes de cada parte pode resultar em diferentes tipos de casas (casa de campo, casa moderna, etc.).   
O padrão Builder é especialmente útil para a construção de objetos que requerem várias etapas de inicialização ou configuração, tornando o código mais legível e gerenciável.

10.  **Abstract Factory**
   - **Propósito:** Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
   - **Características:**
     - Define uma interface (ou classe abstrata) para a criação de objetos de diferentes tipos.
     - Implementações concretas da fábrica produzem variações de objetos que pertencem à mesma família.
     - Facilita a troca de famílias de produtos sem alterar o código que usa os produtos.
     - Promove a consistência entre objetos de uma família, garantindo que eles funcionem bem juntos.
   - **Exemplo de Uso:** : Um sistema de interface gráfica que pode usar diferentes temas (Windows, macOS, Linux) onde cada tema tem suas próprias implementações de botões, caixas de texto e outros componentes de interface.  
O padrão Abstract Factory é útil quando o sistema deve ser independente da forma como seus produtos são criados e compostos, e quando o sistema deve ser configurado com uma das várias famílias de produtos.

11. **Prototype**
   - **Propósito:** Permite criar novos objetos clonando uma instância existente, conhecida como protótipo.
   - **Características:**
     - Define uma interface para clonar objetos.
     - Útil para a criação de objetos complexos ou caros em termos de desempenho e recursos.
     - Permite a cópia de objetos sem depender de suas classes concretas, garantindo flexibilidade e independência de implementação.
   - **Exemplo de Uso:** Um editor gráfico que permite copiar e colar elementos gráficos complexos, mantendo todas as propriedades e estados do objeto original.
   O padrão Prototype é útil quando a instânciação direta de objetos é cara ou complexa, e quando se deseja criar novos objetos configurados a partir de um conjunto padrão de objetos.


12. **Memento**
   - **Propósito:** Captura e externaliza o estado interno de um objeto sem violar seu encapsulamento, permitindo que o objeto retorne a esse estado mais tarde.
   - **Características:**
     - Armazena o estado interno de um objeto em um objeto separado chamado memento.
     - Preserva o encapsulamento, evitando que outros objetos acessem o estado interno diretamente.
     - Útil para implementar operações de desfazer (undo) e refazer (redo).
   - **Exemplo de Uso:** Um editor de texto que permite ao usuário desfazer e refazer alterações no documento.
   O padrão Memento é útil quando você precisa salvar e restaurar o estado de um objeto sem comprometer sua encapsulação, facilitando a implementação de funcionalidades como desfazer e histórico de mudanças.


13. **Mediator**
   - **Propósito:** Define um objeto que encapsula a forma como um conjunto de objetos interage, promovendo o acoplamento fraco ao evitar que os objetos se refiram uns aos outros explicitamente.
   - **Características:**
     - Centraliza a comunicação entre objetos, evitando referências diretas entre eles.
     - Reduz o número de conexões necessárias entre objetos, simplificando a interação e aumentando a modularidade.
     - Facilita a manutenção e extensão do sistema, já que as interações são gerenciadas por um mediador central.
   - **Exemplo de Uso:** Uma interface gráfica onde os componentes (botões, campos de texto, etc.) interagem através de um objeto mediador que gerencia as comunicações e coordena as ações.
   O padrão Mediator é útil para reduzir a complexidade de comunicação em sistemas com muitos objetos interdependentes, promovendo um design mais organizado e de fácil manutenção.


14. **Chain of Responsibility**
   - **Propósito:** Permite que um pedido passe por uma cadeia de handlers (manipuladores) até que um deles processe o pedido, promovendo o desacoplamento entre o remetente e os receptores.
   - **Características:**
     - Cada handler na cadeia decide se processa o pedido ou o passa para o próximo handler.
     - Facilita a adição e remoção de handlers na cadeia sem alterar o código que envia os pedidos.
     - Promove a flexibilidade na atribuição de responsabilidades para o processamento de pedidos.
   - **Exemplo de Uso:** Sistemas de suporte ao cliente onde diferentes níveis de suporte (primeiro nível, segundo nível, etc.) tratam os pedidos até que o problema seja resolvido.
   O padrão Chain of Responsibility é útil quando você deseja passar pedidos através de uma série de objetos, permitindo que cada objeto tenha a chance de processar o pedido ou passá-lo adiante.


15. **Adapter**
   - **Propósito:** Permite que interfaces incompatíveis trabalhem juntas ao converter a interface de uma classe em outra interface que o cliente espera.
   - **Características:**
     - Atua como um intermediário entre duas interfaces incompatíveis.
     - Encapsula a adaptação necessária para que as classes possam interagir sem modificar seu código original.
     - Pode ser implementado através da composição (objeto adaptador) ou da herança (classe adaptadora).
   - **Exemplo de Uso:** Um adaptador que permite que uma aplicação antiga utilize uma nova biblioteca de gráficos sem precisar ser reescrita.
   O padrão Adapter é útil quando você precisa integrar classes com interfaces incompatíveis, permitindo que trabalhem juntas sem alterar seu código existente.



16. **Bridge**
   - **Propósito:** Desacopla uma abstração de sua implementação, permitindo que ambas variem independentemente.
   - **Características:**
     - Separa a abstração (interface) da implementação (concreta) em diferentes hierarquias de classes.
     - Facilita a extensão e a manutenção de código ao permitir alterações independentes na abstração e na implementação.
     - Usa composição ao invés de herança para conectar a abstração com a implementação.
   - **Exemplo de Uso:** Um sistema de gerenciamento de dispositivos onde a interface de controle é separada da implementação específica de cada dispositivo (como impressoras, scanners, etc.), permitindo que novos dispositivos sejam adicionados facilmente.
   O padrão Bridge é útil quando você precisa evitar uma explosão combinatória de subclasses ao combinar múltiplas dimensões de variação, promovendo uma separação clara entre abstração e implementação.


17. **Composite**
   - **Propósito:** : Permite tratar objetos individuais e composições de objetos de maneira uniforme, formando uma estrutura em árvore.
   - **Características:**
     - Define objetos primitivos e composições (objetos que contêm outros objetos) como sendo do mesmo tipo através de uma interface comum.
     - Permite que clientes tratem objetos individuais e composições de objetos de maneira uniforme.
     - Facilita a adição e a remoção dinâmica de objetos na estrutura em árvore.
   - **Exemplo de Uso:** Uma estrutura de diretórios onde um diretório pode conter arquivos e subdiretórios, permitindo operações recursivas.
   O padrão Composite é útil quando você precisa trabalhar com hierarquias de objetos que possam ser tratados de maneira uniforme, seja indivisível ou uma coleção de objetos.


18. **Flyweight**
   - **Propósito:** : Minimiza o uso de memória compartilhando o máximo possível de dados com objetos similares.
   - **Características:**
     - Divide os objetos em intrínsecos (compartilháveis) e extrínsecos (contextuais).
     - Usa um objeto compartilhado para representar múltiplos objetos semelhantes.
     - Reduz o uso de memória, especialmente útil quando muitos objetos similares precisam ser criados.
   - **Exemplo de Uso:** Um editor de texto onde objetos Character representam caracteres individuais, e objetos Font representam a fonte aplicada a cada caractere. O padrão Flyweight permitiria que diferentes caracteres compartilhassem
                          a mesma fonte para economizar memória.
  O padrão Flyweight é útil quando você tem um grande número de objetos que compartilham dados semelhantes e podem ser eficientemente representados usando um conjunto limitado de objetos compartilhados.


19. **Proxy**
   - **Propósito:** : Fornece um substituto ou um espaço reservado para outro objeto controlar o acesso a ele.
   - **Características:**
     - Controla o acesso ao objeto real, permitindo adicionar funcionalidades adicionais, como verificação de acesso, cache, etc.
     - Mantém a mesma interface que o objeto real, garantindo que o proxy possa ser usado em seu lugar.
     - Pode ser usado para evitar a criação de objetos caros até que sejam realmente necessários.
   - **Exemplo de Uso:** Um proxy de imagem que carrega a imagem real apenas quando ela é necessária, enquanto exibe uma imagem de espaço reservado antes disso.
   O padrão Proxy é útil quando você deseja controlar ou adicionar funcionalidades adicionais ao acesso a um objeto sem modificar o código do objeto real.



