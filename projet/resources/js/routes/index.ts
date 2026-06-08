import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../wayfinder'
/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
export const accueil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accueil.url(options),
    method: 'get',
})

accueil.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
accueil.url = (options?: RouteQueryOptions) => {




    return accueil.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
accueil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: accueil.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
accueil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: accueil.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
const accueilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accueil.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
accueilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accueil.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/'
*/
accueilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: accueil.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

accueil.form = accueilForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
export const connexion = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connexion.url(options),
    method: 'get',
})

connexion.definition = {
    methods: ["get","head"],
    url: '/connexion',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
connexion.url = (options?: RouteQueryOptions) => {




    return connexion.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
connexion.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: connexion.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
connexion.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: connexion.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
const connexionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connexion.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
connexionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connexion.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/connexion'
*/
connexionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: connexion.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

connexion.form = connexionForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
export const inscription = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inscription.url(options),
    method: 'get',
})

inscription.definition = {
    methods: ["get","head"],
    url: '/inscription',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
inscription.url = (options?: RouteQueryOptions) => {




    return inscription.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
inscription.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: inscription.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
inscription.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: inscription.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
const inscriptionForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inscription.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
inscriptionForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inscription.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/inscription'
*/
inscriptionForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: inscription.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

inscription.form = inscriptionForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
export const jouer = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jouer.url(options),
    method: 'get',
})

jouer.definition = {
    methods: ["get","head"],
    url: '/jouer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
jouer.url = (options?: RouteQueryOptions) => {




    return jouer.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
jouer.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: jouer.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
jouer.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: jouer.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
const jouerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jouer.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
jouerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jouer.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/jouer'
*/
jouerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: jouer.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

jouer.form = jouerForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
export const quiz = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quiz.url(args, options),
    method: 'get',
})

quiz.definition = {
    methods: ["get","head"],
    url: '/quiz/{categoryId}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
quiz.url = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return quiz.definition.url
            .replace('{categoryId}', parsedArgs.categoryId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
quiz.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quiz.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
quiz.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: quiz.url(args, options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
const quizForm = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quiz.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
quizForm.get = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quiz.url(args, options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/quiz/{categoryId}'
*/
quizForm.head = (args: { categoryId: string | number } | [categoryId: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: quiz.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

quiz.form = quizForm

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
export const classement = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: classement.url(options),
    method: 'get',
})

classement.definition = {
    methods: ["get","head"],
    url: '/classement',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
classement.url = (options?: RouteQueryOptions) => {




    return classement.definition.url + queryParams(options)
}

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
classement.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: classement.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
classement.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: classement.url(options),
    method: 'head',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
const classementForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: classement.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
classementForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: classement.url(options),
    method: 'get',
})

/**
* @see \Inertia\Controller::__invoke
* @see vendor/inertiajs/inertia-laravel/src/Controller.php:13
* @route '/classement'
*/
classementForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: classement.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

classement.form = classementForm
