---
layout: post
title: "Aplicativos móveis híbridos; cadê a perfomance que estava aqui?"
date: 2015-10-06 16:01:33
image: '/assets/img/perfomance-ionic/Main.jpg'
description: "História real de um dev desesperado por um app fluido"
tags:
- Perfomance
- Ionic Framework

categories:
twitter_text: "Otimizando a perfomance do seu app Ionic"
---

Nos últimos 14 meses estive bastante engajado no desenvolvimento de apps com [Ionic Framework](http://www.ionicframework.com){:target="_blank"}, e nesse post irei compartilhar um pouco das minhas experiências ao longo do caminho.
<br>

Em meados do ano passado me uni com um colega da faculdade para desenvolver um app, e então nos veio a grande dúvida; nativo ou híbrido? Analisamos a situaçao, e obviamente optamos por construir o aplicativo utilizando Ionic.
<br><br>

###### Em terra de JQuery Mobile, quem tem componentes otimizados é rei
Quando conheci o Ionic, foi paixão a primeira vista. Componentes bem legais, e otimizados para mobile, diferente da maioria dos frameworks utilizados na época. Comecei a testar os componentes no browser, e pasmem; era realmente fluido. A possibiliade de construir apps hibridos com fluidez me animou bastante, e então mergulhei de cabeça no framework.
<br><br>

###### A primeira build
Desenvolvi a primeira versão do meu app, e apesar do app realmente não ter ficado tão bom, eu estava feliz com o resultado. Finalmente baixei todos os SDKs do Android, e fiz minha primeira build. Peguei a APK e instalei no meu Moto G, e me decepcionei com o resultado. 
<br><br>

###### A decepção
Nem tudo era tão fluido como parecia. Sei que era noob o suficiente pra não testar o app em um emulador, mas eu não imaginava que a perda seria tão aterrorizante. A timeline do meu app era composta por cards com imagens full-width, como no Instagram, e obviamente o resultado daquilo não seria animador, mas eu tive que aprender da pior forma. As transições não funcionavam bem, e pra ser sincero, nada funcionava bem de verdade. Bem, pra resolver essa problemática, precisei de algumas soluções alternativas, as quais citarei a seguir:
<br><br>

###### 1- Se possível, reduza o tamanho das imagens das listas
Primeiro fiz o mais obvio. Reduzi a proporçao em px das imagens, e obtive uma melhora considerável. O layout ficou da seguinte forma:

![Layout do App](/assets/img/perfomance-ionic/app.png)
<br><br>

###### 2- Minimize/Evite o uso de ouvintes(watchers).
Se sua aplicaçao AngularJS está muito lenta, isso provavelmente significa que você possui mais ouvintes que o necessário. Para rastrear todas as alteraçoes no app, o AngularJS percorre todos os ouvintes para checar se eles precisam ser atualizados (ciclo de digest). Mesmo sendo executado em browsers modernos, o uso excessivo de ouvintes pode interromper o funcionamento do mesmo.
<br>

**1. Ouvintes estão setados em:**
 
- $scope.$watch
- Two way binding.
- Diretivas como **ng-show**
- Filtros
- Ng-repeat

**2. Ciclos de Digest são executados em:**

- Ações do usuário (ng-click, etc).
- Ng-change
- Ng-model
- $http (chamadas ajax)
- $q promises
- $timeout
- $interval
- Chamadas manuais para $scope.$apply e $scope.digest
<br><br>


###### 3- Utilize o bind once.
O Angularjs havia acabado de lançar o bind once ::, que permitia o one-time binding. Em suma, o Angular receberia um valor e renderezaria no element DOM. E então removeria todos os ouvintes, removendo o elo entre a view e o controller. 
<br><br>

{% highlight html %}
<!-- BIND ONCE -->
<p ng-bind="::name" >One time binding</p>
  
<!-- TWO WAY BINDING -->
<p ng-bind="name"></p>
{% endhighlight %}
<br>

###### 4- Evite ng-show e ng-hide
A diretiva ng-show irá renderizar o elemento, e utilizará **display:none** pra escondê-lo. O ng-if, por sua vez, remove o elemento do DOM, e o re-cria quando necessário.
<br><br>

###### 5- Evite utilizar ng-repeat
Iterar listas com o ng-repeat é extremamente custoso. O Ionic possui duas alternativas para isso:

**1. Collection-repeat**

> Collection-repeat é uma diretiva que nos permite renderizar listas com centenas de itens sem penalizar a perfomance.

Isso significa que, se você tiver uma lista com 2000 itens, apenas os que couberem na tela serão renderizados. Ou seja, 10 itens serão renderizados ao invés de 2000 (O problema com a perfomance das listas é a renderização no browser. Entretanto, o problema com o collection-repeat é que os itens precisam ter a mesma altura e tamanho para que tudo funcione:

{% highlight html %}
<div class="contact-list">
  <div ng-repeat="person in contacts | filter:{name: searchModel.name}"
     class="item item-icon-right"
     ng-class="{'selected': option.active}"
     ng-click="showDetails(person)">
      <span ng-bind="::person.name"></span>
  </div>
</div>
{% endhighlight %}
<br>
**2. Native Scrolling**

Native scrolling significa dispensar o uso do [$ionicScrollDelegate](http://ionicframework.com/docs/api/service/$ionicScrollDelegate/){:target="_blank"}, e utilizar o scrolling nativo do browser. 

{% highlight js %}
if (!ionic.Platform.isIOS()) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
}
{% endhighlight %}

O native scrolling foram implementados apenas na WKWebView do iOS8, ou seja, o scroll nativo não funcionará como deveria em todas as versões do iOS. Logo, ignoramos o iOS no código acima.
<br><br>

###### Conclusão
O Ionic faz um ótimo trabalho em entregar excelentes componentes e diretivas que permitem aos desenvolvedores construir apps de forma rápida, sem comprometer a qualidade. Porém, o Angular ainda possui sérios problemas em perfomance, sobretudo na iteração de listas, o que nos obriga a buscar soluções alternativas.

