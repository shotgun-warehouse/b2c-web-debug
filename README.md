# Shotgun website

Ce site utilise le framework [Next](https://nextjs.org/).

Il est recommandé d'implémenter le CMS dans votre API pour n'avoir qu'un point d'accès.
Nous commandons : [Prismic](https://prismic.io/).

## ⚡️Features

- CSS-in-JS : [Emotion](https://github.com/emotion-js/emotion)
- Typage : [TypeScript](https://www.typescriptlang.org/)
- Test : [Jest](https://jestjs.io/) & [Enzime](https://airbnb.io/enzyme/)
- UI component dev : [Storybook](https://storybook.js.org/)
- GraphQL : [Apollo](https://www.apollographql.com/)

Pour exemple, 2 pages ont été montées sur un endpoint GraphQL [PokemonAPI](https://graphql-pokemon.now.sh/) (pokemonList + pokemonDetails). Elles sont rendues en SSR pour optimiser chargement et SEO. On a également branché des hooks useQuery apollo.

## 🔨 Pré-requis

- Node v10.15.3
- Yarn v1.16.0

### Installation des dépendances

#### NVM

Installer [NVM](https://github.com/creationix/nvm) pour gérer sa version de Node :

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.1/install.sh | bash
```

(Dans le projet) Installer et utiliser la version courante de Node :

```
# Installe la version de node spécifiée dans le .nvmrc
nvm install
# Switche vers la version de node spécifiée dans le .nvmrc
nvm use
```

(Optionel mais **fortement recommandé**) [Installer AVN](https://github.com/wbyoung/avn) pour éviter d'avoir à lancer `nvm use` à chaque ouverture du projet.

#### YARN

Installer [YVM](https://yvm.js.org/docs/overview), pour gérer sa version de Yarn :

```
brew install tophat/bar/yvm
```

Puis lancer YVM :

```
yvm use
```

Télécharger la bonne version de Yarn :

```
yvm install
```

Utiliser la bonne version de Yarn :

```
yvm use
```

Installer les dépendances front :

```
yarn install
```

## 👮 Code formatting

Afin de garantir la consistance de style au sein du projet, il est impératif d'utiliser [Prettier](https://prettier.io/) pour le formatage de code.

## 🚀 Les scripts

### `yarn start`

Lance l'app en mode developpement, visible sur [http://localhost:3000](http://localhost:3000).

L'app hot-reload à chaque modification, les erreurs apparaissent en console.

### `yarn build`

Build l'app pour la production dans le dossier `.next`

### `yarn start:prod`

Démarre l'application en mode `production`
L'application doit avoir été compilée avec `yarn build` avant.

### `yarn test`

Lance les tests

### `yarn storybook`

Lance Storybook
