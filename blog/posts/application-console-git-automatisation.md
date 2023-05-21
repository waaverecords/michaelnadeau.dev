---
title: Application console pour automatiser les processus Git
publishedOn: '2023-05-21'
---

On recherche un moyen de faciliter le démarrage ou la continuation d’une tâche d’un programmeur. Dans la majorité des cas, une tâche correspond à une branche dans le gestionnaire de version. Les tâches sont visibles par un écran où le programmeur peut entrer ses temps travaillés. Idéalement, le programmeur pourrait démarrer la tâche sur laquelle il désire travailler directement à partir de cet écran.

![init-gft-bt, une application console pour l'automatisation de Git](/images/posts/application-console-git-automatisation/init-gft.png "init-gft-bt, une application console pour l'automatisation de Git")

Première interrogation rencontrée; Comme va-t-on faire pour positionner le gestionnaire de version sur la bonne branche à partir de l’écran d’entré de temps.

Première solution envisagée: Un service Windows est installé sur le poste du programmeur. Lorsque celui-ci désire démarrer une tâche, Prextra envoi l'info nécessaire à un serveur qui s’occupe à son tour de relayer cette même info au service Windows sur le poste du programmeur. Cependant, cette solution s’avère complexe; Il existe certainement une solution plus simple.

Entre en compte les [protocol URL](https://learn.microsoft.com/en-us/windows/win32/search/-search-3x-wds-ph-install-registration) de Windows. En liant un certain protocole à un exécutable, on peut exécuter une action sur la machine de l’utilisateur à partir d’un navigateur.

La communication entre le navigateur et la machine étant établie, il faut maintenant développer l’exécutable. Le premier prototype développer en C# exécute directement des commandes GIT dans un terminal. Pour déterminer si les commandes se sont bien déroulées, il faut alors “parser” les résultats. Bien que cela fonctionne, le code rédiger pour accomplir ceci est très lourd et sera difficile à maintenir.

On entreprend donc la refonte de l’exécutable pour alléger la lecture du code. Après quelques recherches effectuées, il semble que la librairie [LibGit2Sharp](https://github.com/libgit2/libgit2sharp) soit le meilleur choix. Une première version est menée à terme, puis une batterie de test est effectuée avec les membres de l’équipe .Net. Les tests se déroule sans accros.

 On répète les mêmes tests avec l’équipe base. Certains programmeurs obtiennent une erreur d’authentification lorsque l’exécutable est démarré.
 ```
 Unhandled exception. LibGit2Sharp.LibGit2SharException: too many redirects or authentication replays.
 ```
 Il faut donc résoudre le problème pour s’assurer que tout le monde puisse utiliser l’exécutable.

Première hypothèse; le nom d’utilisateur ou bien le mot de passe envoyé par la librairie est erroné. Après plusieurs tests avec des nom d’utilisateur et mot de passes avec des caractères spéciaux, le problème ne semble pas être là.

Peut-être y a-t-il un accro lorsque l’exécutable est utilisé à travers le VPN; VPN ou pas le problème persiste.

Peut-être que le poste du programmeur est configuré d’une manière différente à ceux des membres de l’équipe .Net. Ça ne semble pas être le cas.

Étant à bout d’idée, on décide d’inspecter le code de la librairie LibGit2Sharp. La logique semble bonne.

Comme dernier recourt, on inspecte, à l’aide de Wireshark, les paquets envoyés au serveur Git par la librairie LibGit2Sharp. Encore une fois, rien de suspicieux.

Par le passé, on a déjà eu des problèmes quant à l’utilisation de Git lorsque le nom d’un objet diffère en minuscule et majuscule. On porte donc un regard sur le dossier .git. Après regard, il y a effectivement un pépin au niveau des noms de branches. On s’aperçoit que LibGit2Sharp ne gère pas bien les noms de branches. Pour remédier au problème, on adapte le code de l’exécutable pour s’assurer de bien les formater.

Le problème étant régler. La fonctionnalité est déployée en production et est maintenant utilisée par la majorité des programmeurs chez CDID.