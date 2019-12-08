<p align="center"><img src="https://i.imgur.com/89qMuoz.gif" width="500"></p>

<p align="center">
  <a href="https://discord.me/servers/4sucres"><img alt="Discord" src="https://img.shields.io/discord/570066757021204515?label=Discord&style=for-the-badge"></a>
</p>

# Auto-refresh pour 2Sucres

Après quelques semaines de travail intensif sur le code source de 2Sucres v2, nous sommes heureux de vous présenter le retour de la fonctionnalité d'auto-refresh pour 2Sucres.

L'auto-refresh permet de charger automatiquement les nouveaux messages que des membres postent sur la page d'accueil et sur un topic, sans avoir à recharger la page.

# Installation

## Étape 1

Ajoutez l'extension [TamperMonkey](https://tampermonkey.com/) à votre navigateur. Cette extension permet d'exécuter des scripts Javascript personnalisés.

| Navigateur | Extension |
| ---------- | ---- |
| Google Chrome | [Lien](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
| Mozilla Firefox | [Lien](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/)
| Opera | [Lien](https://addons.opera.com/fr/extensions/details/tampermonkey-beta/)
| Safari | [Lien](https://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC)

## Étape 2

Ajoutez le script à votre navigateur. Le script est téléchargeable [ici](https://github.com/sucresware/2sucres-auto-refresh/raw/master/2sucres-auto-refresh.user.js).

Vous pouvez aussi installer le script en cliquant sur l'icône TamperMonkey dans votre navigateur, puis en sélectionnant **Create a new script...**. Copiez le contenu du script dans la page qui vient de s'ouvrir et enregistrez-le.

Pour en savoir plus, vous pouvez vous renseigner dans la [FÀQ de TamperMonkey](https://www.tampermonkey.net/faq.php#Q102).

# Paramétrage

L'intervalle de rechargement est réglé par défaut à 100ms. Si besoin, pour voir apparaître encore plus rapidement les topics, vous pouvez directement la modifier dans le script, ligne 11 :

```js
// 2sucres-auto-refresh.user.js#L11

var refreshRate = 100;
```
