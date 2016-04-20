---
layout: post
title: "Entendendo o Ionic Framework - Side menu"
date: 2016-04-20 09:10:58
image: '/assets/img/entendendo-o-ionic-framework-side-menu/sidemenu.png'
description: "Não basta apenas utilizar os componentes. Para construir apps ainda melhores, é necessário entender o funcionamento do framework que será usado."
tags: 
- IonicFramework
categories:
twitter_text: 'Entenda como funciona o Side Menu do Ionic Framework'
---

Nos últimos anos, o side menu tornou-se um padrão de design bastante popular, e felizmente o Ionic possui uma diretiva para essa finalidade, chamada ion-side-menus. Extremamente fácil de implementar e bastante performático, o side menu está presente na maioria das aplicações construídas com Ionic Framework.
<br>

Porém, é de suma importância que entendamos os componentes que iremos utilizar em nossos apps, pra que eles funcionem da melhor forma. Então, a fim de ajudar os iniciantes a resolverem esse gap, explicarei o funcionamento desse componente tão utilizado :).
<br>

Antes de falarmos sobre side menu, é necessária a compreensão do que são **abstract states (estados abstratos)**.
<br><br>

#### Abstract States (estados abstratos)
É simplesmente um estado pai, que não pode ser acessado diretamente pois ele sempre estará ativo enquanto o usuário navega entre seus estados filhos. 
<br>

*- Isaque, explica essa bagaça direito que eu não tô entendendo nada*
<br>

Ok, vou tornar as coisas mais simples. Eu mesmo desenhei uma imagem ilustrando o funcionamento do sidemenu (um estado abstrato)

![Layout do App](/assets/img/entendendo-o-ionic-framework-side-menu/sidemenu.png){: .full-image }
<br>

Basicamente é um container pai que carrega e renderiza todos os estados filhos dentro dele. Enquanto você estiver navegando pelo app, ele estará ativo. 
<br>
<br>

#### Estrutura
O ionSideMenu tem a seguinte estrutura básica: 

*app.html*
{% highlight html %}

<ion-side-menus>
  
  <!-- Main content -->
  <ion-side-menu-content>
    <ion-nav-bar></ion-nav-bar>
    <ion-nav-view></ion-nav-view> 
  </ion-side-menu-content>
    
  <!-- Left Side Menu -->
  <ion-side-menu side="left">
    
  </ion-side-menu>
</ion-side-menus>
{% endhighlight %}
<br>

##### Diretivas 

* ###### ion-side-menus
É a diretiva mãe, que englobará tudo que está dentro e fora do menu.
<br>
<br>

* 	###### ion-side-menu-content 
É o elemento do estado abstrato que receberá os estados filhos. Ou seja, maior parte do seu app provavelmente será carregado nessa diretiva. Em nosso ion-side-menu-content, nós temos um ion-nav-bar (com um back-button) e a diretiva ion-nav-view.
<br><br>

{% highlight html %}
<ion-side-menu-content>
    <ion-nav-bar class="bar-stable nav-title-slide-ios7">
      <ion-nav-back-button class="button-clear"><i class="icon ion-ios7-arrow-back"></i> Back</ion-nav-back-button>
    </ion-nav-bar>
    <ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view>
</ion-side-menu-content>
{% endhighlight %}
O ion-nav-bar cria uma barra de cabeçalho no topo do nosso app, e também exibirá um ion-nav-back-button.
<br>
<br>

* ###### ion-nav-view
É onde nossos estados filhos serão inseridos e renderizados. Observe que nós  atribuímos o nome menuContent, que será utilizado para construírmos nossa rota nas configs do app. 
<br>

{% highlight html %}
<ion-nav-view name="menuContent"></ion-nav-view>
{% endhighlight %}
<br>

* ###### ion-side-menu 
Receberá o conteúdo propriamente-dito do menu, como os links de navegação:
<br>

{% highlight html %}
<ion-item menu-close href="#/app/search">
  Search
</ion-item>
{% endhighlight %}

A diretiva **menu-close**, que está presente no ion-item, faz com que o side menu feche quando o link é ativado. Sem esse atributo, ao clicar no link o usuário navegará para ao estado indicado, porém o menu continuará aberto. Além disso, a ausência da diretiva também limpará a pilha do histórico e não causará animação entre as views durante a navegação, e o back button também não será exibido.
<br>
<br>

##### Child Views
Agora que já temos a estrutura principal do nosso app, precisamos implementar também as child views (estados filhos), que irão funcionar dentro do side menu.

{% highlight html %}
<ion-view title="Playlists">
  <ion-nav-buttons side="left">
    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
  </ion-nav-buttons>
  <ion-content class="has-header">
    <ion-list>
      <ion-item ng-repeat="playlist in playlists" href="#/app/playlists/{{playlist.id}}">
        {{playlist.title}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
{% endhighlight %}

Este é o arquivo **playlist.html**, a view default do nosso app. Apesar de já termos definido o ion-nav-bar no side menu, nós conseguimos especificar butões adicionais que deverão estar no ion-nav-bar. 
<br>
<br>

##### Configuração

Utilizando o angular-ui router, nós definiremos nosso menu.html e o nosso AppCtrl como um estado abstrato.

{% highlight javascript %}
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })
  .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    });
{% endhighlight %}
<br>
Nosso abstract state chama-se "app". Note que as child views utilizam o prefixo "app", e por isso não é necessário definir a url como "/app/playlist", pois já foi apontado no prefixo.

Lembra do atributo name na tag ion-nav-view na página **app.html**?

{% highlight html %}
<ion-nav-view name="menuContent" animation="slide-left-right"></ion-nav-view>
{% endhighlight %}

Nas configurações da rota, nós estamos definindo que todo o conteúdo das child views deverão ser renderizados no ion-nav-view chamado **menuContent**. 
<br>
<br>

#### Conclusão
Sua relação com o framework se tornará muito mais simples quando você entender como seus componentes funcionam. O side menu, que parece tão fácil, te dará bastante dor de cabeça se não for implementado da maneira correta. Enfim, sinta-se livre para comentar aqui suas dúvidas, contribuições e feedbacks.
<br>
<br>
<br>

**Leia também ["Aplicativos móveis híbridos: Cadê a performance que estava aqui?"](../aplicativos-moveis-hibridos-cade-a-perfomance-que-estava-aqui/){:target="_blank"}**
<br>