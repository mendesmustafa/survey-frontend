import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [

        {
            path: '/',
            name: 'homePage',
            component: () => import(/* webpackChunkName: "homePage" */ '@/view/HomePage')
        },
        {
            path: '/football-survey/save',
            name: 'footballSurveySave',
            component: () => import(/* webpackChunkName: "footballSurveySave" */ '@/view/FootballSurvey')
        },
        {
            path: '/football-survey/update/:id',
            name: 'footballSurveyUpdate',
            component: () => import(/* webpackChunkName: "footballSurveyUpdate" */ '@/view/FootballSurvey')
        },
        {
            path: '/football-survey/list',
            name: 'footballSurveyList',
            component: () => import(/* webpackChunkName: "footballSurveyList" */ '@/view/FootballSurveyList')
        },
        {
            path: '/life-survey/save',
            name: 'lifeSurveySave',
            component: () => import(/* webpackChunkName: "lifeSurveySave" */ '@/view/LifeSurvey')
        },
        {
            path: '/life-survey/update/:id',
            name: 'lifeSurveyUpdate',
            component: () => import(/* webpackChunkName: "lifeSurveyUpdate" */ '@/view/LifeSurvey')
        },
        {
            path: '/life-survey/list',
            name: 'lifeSurveyList',
            component: () => import(/* webpackChunkName: "lifeSurveyList" */ '@/view/LifeSurveyList')
        },
 

    ]
});