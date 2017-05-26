'use strict';

angular.module('News', ['Core']).config(function($stateProvider) {
    $stateProvider
    .state('news', {
        url: "/novedades",
        abstract: true,
        template: "<ui-view />"
    })
    .state('news.index', {
        url: "/",
        templateUrl: "news/index.html",
        controller: "news.index"
    })
});