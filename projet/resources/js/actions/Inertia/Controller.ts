import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const Controller980bb49ee7ae63891f1d891d2fbcf1c9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.url = (options?: RouteQueryOptions) => {




    return Controller980bb49ee7ae63891f1d891d2fbcf1c9.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const Controller980bb49ee7ae63891f1d891d2fbcf1c9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
Controller980bb49ee7ae63891f1d891d2fbcf1c9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller980bb49ee7ae63891f1d891d2fbcf1c9.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller980bb49ee7ae63891f1d891d2fbcf1c9.form = Controller980bb49ee7ae63891f1d891d2fbcf1c9Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
const Controller92c05204c233b3b6d9eee92bba72651c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller92c05204c233b3b6d9eee92bba72651c.url(options),
    method: 'get',
})

Controller92c05204c233b3b6d9eee92bba72651c.definition = {
    methods: ["get","head"],
    url: '/connexion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
Controller92c05204c233b3b6d9eee92bba72651c.url = (options?: RouteQueryOptions) => {




    return Controller92c05204c233b3b6d9eee92bba72651c.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
Controller92c05204c233b3b6d9eee92bba72651c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller92c05204c233b3b6d9eee92bba72651c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
Controller92c05204c233b3b6d9eee92bba72651c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller92c05204c233b3b6d9eee92bba72651c.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
const Controller92c05204c233b3b6d9eee92bba72651cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller92c05204c233b3b6d9eee92bba72651c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
Controller92c05204c233b3b6d9eee92bba72651cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller92c05204c233b3b6d9eee92bba72651c.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
Controller92c05204c233b3b6d9eee92bba72651cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller92c05204c233b3b6d9eee92bba72651c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller92c05204c233b3b6d9eee92bba72651c.form = Controller92c05204c233b3b6d9eee92bba72651cForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
const Controllere8296433262366ac7c50cc4a0b1a5a01 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere8296433262366ac7c50cc4a0b1a5a01.url(options),
    method: 'get',
})

Controllere8296433262366ac7c50cc4a0b1a5a01.definition = {
    methods: ["get","head"],
    url: '/inscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
Controllere8296433262366ac7c50cc4a0b1a5a01.url = (options?: RouteQueryOptions) => {




    return Controllere8296433262366ac7c50cc4a0b1a5a01.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
Controllere8296433262366ac7c50cc4a0b1a5a01.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllere8296433262366ac7c50cc4a0b1a5a01.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
Controllere8296433262366ac7c50cc4a0b1a5a01.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllere8296433262366ac7c50cc4a0b1a5a01.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
const Controllere8296433262366ac7c50cc4a0b1a5a01Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere8296433262366ac7c50cc4a0b1a5a01.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
Controllere8296433262366ac7c50cc4a0b1a5a01Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere8296433262366ac7c50cc4a0b1a5a01.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
Controllere8296433262366ac7c50cc4a0b1a5a01Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllere8296433262366ac7c50cc4a0b1a5a01.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllere8296433262366ac7c50cc4a0b1a5a01.form = Controllere8296433262366ac7c50cc4a0b1a5a01Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
const Controllerbcc043cbae13a87bbab2a0dc4bc098ba = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url(options),
    method: 'get',
})

Controllerbcc043cbae13a87bbab2a0dc4bc098ba.definition = {
    methods: ["get","head"],
    url: '/jouer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url = (options?: RouteQueryOptions) => {




    return Controllerbcc043cbae13a87bbab2a0dc4bc098ba.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
Controllerbcc043cbae13a87bbab2a0dc4bc098ba.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
Controllerbcc043cbae13a87bbab2a0dc4bc098ba.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
const Controllerbcc043cbae13a87bbab2a0dc4bc098baForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
Controllerbcc043cbae13a87bbab2a0dc4bc098baForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
Controllerbcc043cbae13a87bbab2a0dc4bc098baForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerbcc043cbae13a87bbab2a0dc4bc098ba.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerbcc043cbae13a87bbab2a0dc4bc098ba.form = Controllerbcc043cbae13a87bbab2a0dc4bc098baForm
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
const Controller84273833a00dce4dc9ec48ccf9abc001 = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, options),
    method: 'get',
})

Controller84273833a00dce4dc9ec48ccf9abc001.definition = {
    methods: ["get","head"],
    url: '/quiz/{categoryId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
Controller84273833a00dce4dc9ec48ccf9abc001.url = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { categoryId: args }
    }


    if (Array.isArray(args)) {
        args = {
            categoryId: args[0],
        }
    }

    args = applyUrlDefaults(args)


    const parsedArgs = {
        categoryId: args.categoryId,
    }

    return Controller84273833a00dce4dc9ec48ccf9abc001.definition.url
            .replace('{categoryId}', parsedArgs.categoryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
Controller84273833a00dce4dc9ec48ccf9abc001.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
Controller84273833a00dce4dc9ec48ccf9abc001.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
const Controller84273833a00dce4dc9ec48ccf9abc001Form = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
Controller84273833a00dce4dc9ec48ccf9abc001Form.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
Controller84273833a00dce4dc9ec48ccf9abc001Form.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controller84273833a00dce4dc9ec48ccf9abc001.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controller84273833a00dce4dc9ec48ccf9abc001.form = Controller84273833a00dce4dc9ec48ccf9abc001Form
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
const Controllerd83d2cb63e7315bd1b36100f701a306e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd83d2cb63e7315bd1b36100f701a306e.url(options),
    method: 'get',
})

Controllerd83d2cb63e7315bd1b36100f701a306e.definition = {
    methods: ["get","head"],
    url: '/classement',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
Controllerd83d2cb63e7315bd1b36100f701a306e.url = (options?: RouteQueryOptions) => {




    return Controllerd83d2cb63e7315bd1b36100f701a306e.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
Controllerd83d2cb63e7315bd1b36100f701a306e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: Controllerd83d2cb63e7315bd1b36100f701a306e.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
Controllerd83d2cb63e7315bd1b36100f701a306e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: Controllerd83d2cb63e7315bd1b36100f701a306e.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
const Controllerd83d2cb63e7315bd1b36100f701a306eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd83d2cb63e7315bd1b36100f701a306e.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
Controllerd83d2cb63e7315bd1b36100f701a306eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd83d2cb63e7315bd1b36100f701a306e.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
Controllerd83d2cb63e7315bd1b36100f701a306eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: Controllerd83d2cb63e7315bd1b36100f701a306e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

Controllerd83d2cb63e7315bd1b36100f701a306e.form = Controllerd83d2cb63e7315bd1b36100f701a306eForm

const Controller = {
    '/': Controller980bb49ee7ae63891f1d891d2fbcf1c9,
    '/connexion': Controller92c05204c233b3b6d9eee92bba72651c,
    '/inscription': Controllere8296433262366ac7c50cc4a0b1a5a01,
    '/jouer': Controllerbcc043cbae13a87bbab2a0dc4bc098ba,
    '/quiz/{categoryId}': Controller84273833a00dce4dc9ec48ccf9abc001,
    '/classement': Controllerd83d2cb63e7315bd1b36100f701a306e,
}




export default Controller