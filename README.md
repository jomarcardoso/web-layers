# Web Motion 1.0

> Diretrizes de criação e desenvolvimento de interfaces na Web.

Grandes empresas, que possuem seus produtos multi plataforma, criam produtos diferentes em cada um, isso por causa das limitações e da forma padrão como cada uma funciona. Esse projeto visa explorar todos os recursos da web, para que reduzir suas limitações e criar um padrão.

## Camadas

As camadas são elementos que podem ser sobrepostos e ainda manter a área de toque das camadas anteriores.

![image](https://user-images.githubusercontent.com/27368585/126732419-b6891926-28d3-4f60-943b-11bda47e66f9.png)

### Gatilhos em camadas

Quando uma está se posicionando na tela, é possível criar uns gatilhos baseados em sua posição. O conceito de [Scrollspy](https://github.com/jomarcardoso/ovos/tree/master/src/interface/scroll-spy) pode ser usado aqui.

## Painéis

Painéis são elementos que ocupam a tela toda.

### Painéis de rolagem

### Painéis de rolagem com paralaxe

### Painéis de sobreposição

## Placeholders

## Animações de entrada e saída

Para não mostrar o conteúdo se formando pode-se usar um loader e renderizar o conteúdo, após isso fazer o efeito de fade com um translate em todos os elementos.

Referências:

- https://material.io/design/motion/the-motion-system.html#shared-axis

Animação em 300ms

Opção de mesmo eixo.

```css
@keyframes shared-axis-out {
  0% {
    opacity: 1;
  }
  15% {
    transform: translateX(0);
  }
  30% {
    opacity: 0;
  }
  100% {
    transform: translateX(30dp);
  }
}

@keyframes shared-axis-in {
  0% {
    opacity: 0;
  }
  15% {
    transform: translateX(30dp);
  }
  30% {
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
```

## Transições

### Transições com relação

A troca do conteúdo ser feita com fade out e fade in. O efeito precisa tanto de opacidade como um efeito de expansão.

## Transformação

No meio da transição, com a opacidade zero trocar o conteúdo.

Evitar mudar o formato da forma, apenas o conteúdo.
