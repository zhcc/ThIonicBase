angular.module('pwqx.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/list',
            templateUrl: 'templates/list.html',
            controller: "listCtrl"
        })
        .state('text', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/text.html",
            controller: "textCtrl"
        })        
       	.state('button', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/button.html",
            controller: "buttonCtrl"
        })
       	.state('card', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/card.html",
            controller: "cardCtrl"
        })
       	.state('grid', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/grid.html",
            controller: "gridCtrl"
        })
       	.state('color', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/color.html",
            controller: "colorCtrl"
        })
       	.state('toggle', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/toggle.html",
            controller: "toggleCtrl"
        })
       	.state('checkbox', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/checkbox.html",
            controller: "checkboxCtrl"
        })
       	.state('range', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/range.html",
            controller: "rangeCtrl"
        })
       	.state('tab', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/tab.html",
            controller: "tabCtrl"
        })
       	.state('list1', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/list1.html",
            controller: "list1Ctrl"
        })
       	.state('putUpMenu', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/putUpMenu.html",
            controller: "putUpMenuCtrl"
        })
       	.state('background', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/background.html",
            controller: "backgroundCtrl"
        })
       	.state('refresh', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/refresh.html",
            controller: "refreshCtrl"
        })
       	.state('popover', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/popover.html",
            controller: "popoverCtrl"
        })
       	.state('icon', {
            url: '/controls/:value',
            cache: true,
            templateUrl: "templates/controls/icon.html",
            controller: "iconCtrl"
        });
    $urlRouterProvider.otherwise("/list");
});