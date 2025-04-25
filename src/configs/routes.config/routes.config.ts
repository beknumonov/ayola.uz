import { lazy } from 'react'
import type { Routes } from '@/@types/routes'


export const authRoutes: Routes = [
    {
        key: 'signIn',
        path: `/sign-in`,
        component: lazy(() => import('@/views/auth/SignIn')),
        authority: [],
    },
    {
        key: 'signUp',
        path: `/sign-up`,
        component: lazy(() => import('@/views/auth/SignUp')),
        authority: [],
    },
    {
        key: 'forgotPassword',
        path: `/forgot-password`,
        component: lazy(() => import('@/views/auth/ForgotPassword')),
        authority: [],
    },
    {
        key: 'resetPassword',
        path: `/reset-password`,
        component: lazy(() => import('@/views/auth/ResetPassword')),
        authority: [],
    },

    
]


export const publicRoutes: Routes = [{
    key: 'home',
    path: '/home',
    component: lazy(() => import('@/views/Home')),
    authority: [],
},
/** Example purpose only, please remove */
{
    key: 'singleMenuItem',
    path: '/single-menu-view',
    component: lazy(() => import('@/views/demo/SingleMenuView')),
    authority: [],
},
{
    key: 'collapseMenu.item1',
    path: '/collapse-menu-item-view-1',
    component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
    authority: [],
},
{
    key: 'collapseMenu.item2',
    path: '/collapse-menu-item-view-2',
    component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
    authority: [],
},
{
    key: 'groupMenu.single',
    path: '/group-single-menu-item-view',
    component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
    authority: [],
},
{
    key: 'groupMenu.collapse.item1',
    path: '/group-collapse-menu-item-view-1',
    component: lazy(
        () => import('@/views/demo/GroupCollapseMenuItemView1'),
    ),
    authority: [],
},
{
    key: 'groupMenu.collapse.item2',
    path: '/group-collapse-menu-item-view-2',
    component: lazy(
        () => import('@/views/demo/GroupCollapseMenuItemView2'),
    ),
    authority: [],
}]


export const protectedRoutes = [
    // {
    //     key: 'home',
    //     path: '/home',
    //     component: lazy(() => import('@/views/Home')),
    //     authority: [],
    // },
    // /** Example purpose only, please remove */
    // {
    //     key: 'singleMenuItem',
    //     path: '/single-menu-view',
    //     component: lazy(() => import('@/views/demo/SingleMenuView')),
    //     authority: [],
    // },
    // {
    //     key: 'collapseMenu.item1',
    //     path: '/collapse-menu-item-view-1',
    //     component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
    //     authority: [],
    // },
    // {
    //     key: 'collapseMenu.item2',
    //     path: '/collapse-menu-item-view-2',
    //     component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
    //     authority: [],
    // },
    // {
    //     key: 'groupMenu.single',
    //     path: '/group-single-menu-item-view',
    //     component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
    //     authority: [],
    // },
    // {
    //     key: 'groupMenu.collapse.item1',
    //     path: '/group-collapse-menu-item-view-1',
    //     component: lazy(
    //         () => import('@/views/demo/GroupCollapseMenuItemView1'),
    //     ),
    //     authority: [],
    // },
    // {
    //     key: 'groupMenu.collapse.item2',
    //     path: '/group-collapse-menu-item-view-2',
    //     component: lazy(
    //         () => import('@/views/demo/GroupCollapseMenuItemView2'),
    //     ),
    //     authority: [],
    // },
]
