# Web Layers - A web em camadas

## Introdução

Com a evolução da web novas soluções cada vez mais sofisticadas estão sendo criadas para ela. Um ponto marcante para essa mudança foi com o surgimento do Ajax, que tornou as experiências muito mais fluídas e dinâmicas, dando a possibilidade de existirem páginas como Facebook com sua rolagem infinita e ao Netflix que você navega por muitos conteúdos sem recarregar a página, as famosas SPAs (aplicativos de página única). Junto do Ajax e das SPAs apareceram os aparelhos smart, principalmente telefones, que trouxeram outros desafio, dentre a responsividade e a possibilidade de criar interfaces que sejam agradáveis e de boa usabilidade para qualquer aparelho ou tecnologia sendo usado para acessar o site. Quando surgiram os smartphones a web não era madura o suficiente para dar uma boa experiência para quem a acessava de um celular, então deu-se espaço para os aplicativos que traziam além desempenho, ferramentas e usabilidade que em muitos casos não se alcançava em uma página Web. Os tempo mudaram, a Web evoluiu e apesar de ainda haver um grande mercado de aplicativos nativos, os avanços da web, principalmente na área de PWAs, promete consolidade de vez a web como a única forma de fazer uma interface, seja ela para Windows, Android, IOS... Prova disso são os vários aplicativos que já usamos feitos com HTML que nem imaginamos, como o VS Code, Figma, Microsoft Teams, Facebook Messenger...

Estão saindo muitas novas especificações do W3C e do TC39 que estão avançando muito a Web, mas não só isso é preciso para que para uma página web seja igual um aplicativo mobile. O primeiro ponto é o design, vou trazer aqui alguns exemplos de problema de design que não podem ser solucionados de forma fácil na web.

**Figura 1: Imagem de rodapé mobile**
[imagem de um menu inferior com um botão com se estivesse encravado nele](https://lh3.googleusercontent.com/ujBYvkW-lp562Asx3R0l0Bm4ZLACqIys0JxAYyrr_EUk_lPnAHT7zXbVOeGU9uYM4fFR8pzdM39UDQiAj_h66CL3O9b95P6YB4zG=w1064-v0)
Fonte: Material.io

**Figura 2: Cantos chanfrados**
[botões com cantos chanfrados](https://lh3.googleusercontent.com/kJvyrvUbUL5LBggF9JnqED-YQ_OfDoVp5gjWdeqV11DrpN7k3Rv4LgF3mTE4SfSPBnnZqU3dHObr8CiC7DP4hnGndO83o2-nhKeTcw=w1064-v0)

As outras duas dificuldades que estão unificadas nesse artigo, são a de animações e de arquitetura.

## Desafio

Repensar uma página web ao invés da tradicional rolagem de conteúdo, agora com camadas, sobreposições e interações muito mobile. Esse estudo não visa atender e resolver toda demanda referente a interações usadas no celular e sim trazer uma tradução para a web visando suas limitações e evitar assim um esforço excessivo e erros ocasionados por usar a Web de uma forma que ela não dê suporte.

![image](https://user-images.githubusercontent.com/27368585/126732377-f3e9a450-04a9-4b25-9393-6c70bfee9d2d.png)

