---
title: Automatiser la revue du code
publishedOn: '2023-06-23'
---

On désire automatiser le processus de revue du code. Ayant déjà développé une extension VSCode pour procurer l’IntelliSense ASP, il serait préférable d’y greffer quelque chose qui analyserait le code en temps réel. Comme ça, toute l’analyse du code se fait sous la même application.

Il faut donc trouver comment générer des avertissements dans VSCode. Après lecture de la documentation, ça semble simple. Il faut tout d’abord construire un [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) (language server protocol). Puis, à même ce LSP, on extrait avec des regex les mots fautifs dans le code. Avec cette méthode, on peut s’assurer de maintenir les règles de programmation les plus simples; Cependant, aussitôt qu’on désire faire l’analyse pour des règles plus complexe, ex: concernant la structure du code, les regex atteignent leurs limitations.

![Extension vscode pour générer des avertissement dans le code](/images/posts/revue-code-automatique/vscode-extension-code-review.png "Extension vscode pour générer des avertissement dans le code")

Il faut donc trouver une meilleure façon d’analyser le code. Entre en compte les [ASTs](https://en.wikipedia.org/wiki/Abstract_syntax_tree) (abstract syntax tree). On recherche donc un AST capable d’analyser le code ASP. Les recherches ne portent pas fruits; le langage ASP est daté et n’est plus beaucoup utilisé. On ne trouve pas de solution déjà existante.

Nous devons alors développer notre propre AST pour le langage ASP. Pour en arriver à un AST, il faut tout d’abord extraire les jetons du texte (code). Un prototype est donc développé en Rust pour en faire l’extraction. Le prototype fonctionne bien; Cependant; il faudrait investir énormément de temps pour en arriver à un AST complet.

![Exemple d'AST](/images/posts/revue-code-automatique/ast-example.png "Exemple d'AST")

Le manque de connaissance dans le domaine des compilateurs et AST se faisant ressentir. On assite à plusieurs lectures en ligne concernant la construction d’un compilateur: [CSC 151 – Compiler Construction](https://youtu.be/W9B98S2mGGE) sur Youtube. Des connaissances quant aux Regex, [NFA](https://en.wikipedia.org/wiki/Nondeterministic_finite_automaton) et [DFA](https://en.wikipedia.org/wiki/Deterministic_finite_automaton) sont acquises. Il est maintenant évident que construire un compilateur à partir de rien, bien que réalisable, prendrait beaucoup trop de temps.

On recherche donc un outil permettant de générer le DFA automatiquement. [Antlr4](https://www.antlr.org/) est un des résultats de recherche les plus communs. On adopte donc l’outil. Comme le langage ASP possède plusieurs particularités, il devient difficile d’ajouter des règles et de ne pas briser ce qui a été fait auparavant. Une brève recherche révèle qu’il est possible d’écrire des tests pour Antlr4. On procède donc à l’écriture de tests autant pour le lexer que le parser.

Le projet n’est toujours pas terminé, mais avance bien. Notre AST est capable d’extraire les déclarations de variable, les expressions if then else ainsi que les inlines statements. Une fois tout le langage ASP couvert, l’AST pourra être utilisé pour faire l’analyse du code.