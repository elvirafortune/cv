'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state('main', {
        url: '/',
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl'
    })
    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    })
    .state('skills', {
        url: '/skills',
        templateUrl: 'templates/skills.html',
        controller: 'SkillsCtrl'
    })
    .state('experience', {
        url: '/experience',
        templateUrl: 'templates/experience.html',
        controller: 'ExperienceCtrl'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
    })
    
}).run(function () {

}); 