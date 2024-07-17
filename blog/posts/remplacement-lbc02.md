---
title: Trouver un appareil remplaçant le LBC-02
publishedOn: '2024-07-17'
---

Le LBC-02 de SYMCOD ayant été récemment discontinué, il est nécessaire de trouver un appareil alternatif afin que nos partenaires puissent continuer à utiliser la fonctionnalité de poinçon dans [Prextra](https://www.prextra.com/). L'appareil doit être abordable, tolérant aux pertes de courant, tolérant aux pertes de connexion, et bien sûr, permettre de poinçonner. 

![L'appareil LBC-02 de Symcod](/images/posts/remplacement-lbc02/lbc-02.jpg "L'appareil LBC-02 de Symcod")

Des recherches sont donc effectuées afin de trouver un appareil similaire. Les appareils de remplacement direct au LBC-02 de SYMCOD se font très rares. Il est donc préférable de se tourner vers quelque chose de plus récent. La plupart des appareils disponibles sur le marché sont sous forme de tablettes ou de petits ordinateurs. Les appareils de [ZEBRA](https://www.zebra.com/us/en.html) pourraient être une option intéressante à considérer. L'écosystème [ZEBRA](https://www.zebra.com/us/en.html) est bien développé et de nombreuses documentations et exemples sont disponibles pour faciliter le développement d'applications. Le coût de la solution étant un enjeu important, les démarches envers [ZEBRA](https://www.zebra.com/us/en.html) sont arrêtées. 

Le QUARTZ2 de Punch Solution semble combler les besoins : prix abordable, lecteur biométrique en option, intégration avec un logiciel tiers possible. Le développement d’une application de test est donc démarré. Après avoir communiqué avec Punch Solution pour des questions concernant le fonctionnement de l’API, il semble que la compagnie soit très petite. La compagnie n'étant pas encore établie, adopter cette solution s'avérerait un risque. 

N'ayant pas trouvé d’appareil répondant à nos besoins, nous décidons d'explorer le développement de notre propre solution. Notre expertise étant dans le domaine du web, il est déterminé qu'il serait préférable de développer l’application pour les navigateurs web. Afin que l'utilisateur puisse utiliser la carte à puce, il faut faire un pont entre un appareil possédant un lecteur RFID et l'application web. La tablette Android [Kalliope KMF10](https://conceptnumerique.com/en/kalliope-tablet-kmf10/) est choisie. 

![Tablette Kalliope KMF10](/images/posts/remplacement-lbc02/KMF10.webp "Tablette Kalliope KMF10")

Surprise, le lecteur RFID sur une tablette Android ne peut pas interagir directement avec une application web ; il faut simuler comme entrée clavier la valeur captée par le lecteur. L'idée initiale de développer un service simulant clavier est impossible ; une application/service ne peut pas générer des événements clavier pour une autre application (une clé de plateforme est nécessaire, et seuls les fabricants en possèdent une). 

Il est donc nécessaire de développer une vraie application Android afin de pouvoir interagir avec le lecteur RFID. On se tourne donc vers React Native qui va nous permettre d'embed notre application web dans une application Android. Le navigateur embed avec react-native-webview est vieux et ne supporte pas toutes les fonctionnalités nécessaires. Le [Background Sync API](https://developer.mozilla.org/en-US/docs/Web/API/Background_Synchronization_API), qui serait normalement utilisé pour tolérer les pertes de connexion, n'est pas disponible. Heureusement, le [Message API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) l’est : quand l'application Android revient en ligne, on envoie un message au navigateur pour lui indiquer le retour en ligne. 

Le projet de remplacement du LBC-02 est un succès. Cependant, il ne s’agit pas d’un simple remplacement d’appareil comme l'objectif initial le suggérait. Il s’agit d’une solution en deux parties : une application web et une application Android. Le nouveau système de poinçon est en production depuis quelques mois.