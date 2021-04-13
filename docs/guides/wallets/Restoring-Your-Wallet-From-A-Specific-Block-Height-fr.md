# Restauration de votre portefeuille à partir d'un bloc ( Block-height ) précis pour gagner du temps. 

# Étape 1 : Trouvez le bloc ( Block-height ) estimée de votre portefeuille.

- Le processus de restauration/synchronisation d'un portefeuille peut être réalisé de manière beaucoup plus rapide en incluant le bloc de départ ( Block-height ) pour que le client de notre portefeuille commence son analyse à partir de là. (puisque l'analyse de notre portefeuille ne doit plus commencer à partir du bloc 0, le processus de synchronisation est beaucoup plus rapide).

- Pour trouver la hauteur de bloc d'une date actuelle, il suffit de cliquer ici https://explorer.turtlecoin.lol/tools.html 

- Un outil de sélection des dates se trouve au bas du site Web de l'explorateur de blocs de coin TRTL.

- Dans l'exemple suivant, je me souviens avoir fait mon wallet environ en avril 2019. Et grâce à l'explorateur de chaînes de blocs, nous pouvons facilement trouver une « hauteur » de bloc appropriée pour commencer à synchroniser les portefeuilles, comme illustré ci-dessous :

![](https://i.imgur.com/5iJusgg.png)

- Comme vous pouvez le voir, cela nous donne la hauteur de bloc de "1367900" que nous pouvons utiliser pour synchroniser notre porte-monnaie d'une manière beaucoup plus rapide (grâce à la hauteur de bloc à partir de laquelle nous pouvons commencer notre analyse du porte-monnaie, notre client n'a plus besoin de télécharger l'ensemble de la chaîne de blocs à partir de son bloc de genèse).

# Étape 2 : Restauration de votre portefeuille à partir d'une hauteur de bloc spécifique

Ce guide couvre à la fois le Proton Wallet (portefeuille basé sur une interface graphique) et le Zedwallet (portefeuille basé sur une interface CLI).

# Proton Wallet (GUI)

- Commencez par ouvrir l'application Proton Wallet. Dans les options du menu, sélectionnez "Fichier", puis choisissez l'option "Restaurer".

![](https://i.imgur.com/9GUsn4A.png)

- Nous avons la possibilité de restaurer notre fichier de portefeuille à partir de notre fichier ou de votre graine ( seed ) . Dans cet exemple, nous allons restaurer notre portefeuille via notre seed. ( la fameuse suite de mots a imprimer et conserver lorsque vous créez un portefeuille numerique.

![](https://i.imgur.com/0jIrk6L.png)

- Il vous sera demandé d'entrer votre seed ou de sélectionner un fichier de porte-monnaie. Dans cet exemple, nous utiliserons la graine que nous avons notée lors de la création de notre portefeuille pour commencer notre processus de restauration, ainsi que la hauteur de balayage de "1367900" que nous avons découverte à l'étape 1.

![](https://i.imgur.com/I8WKvsq.png)

- Proton affichera l'adresse de notre porte-monnaie comme confirmation. Si cette adresse est erronée, il suffit de revenir en arrière et de revérifier que le fichier seed/key est correct. Cliquez simplement sur "Suivant" pour continuer.

![](https://i.imgur.com/Fjc6G2m.png)

- Vous serez invité à définir un nouveau mot de passe pour le portefeuille. Ensuite, cliquez simplement sur "Enregistrer le portefeuille sous".

- ![](https://i.imgur.com/b68U61Z.png)

- Félicitations, votre porte-monnaie est maintenant restauré !


# Zedwallet (CLI)

- Vous trouverez plus d'informations sur Zedwallet > https://docs.turtlecoin.lol/guides/wallets/using-zedwallet
Une compréhension de base de Zedwallet est une condition préalable pour suivre ce guide.

Commencez par ouvrir Zedwallet. Vous serez accueilli par l'écran suivant.

![](https://i.imgur.com/IA1Yg9b.png)

- Comme nous souhaitons restaurer notre portefeuille, nous choisirons l'option (3) ou (4). Dans cet exemple, nous allons restaurer via la seed de notre porte-monnaie, option 3. Il nous sera demandé d'entrer la seed de notre porte-monnaie.

![](https://i.imgur.com/kCrMpoE.png)

- Ensuite, il suffit de saisir la hauteur de bloc de départ de l'étape 1.

![](https://i.imgur.com/5MQa77s.png)

- Le porte-monnaie Zed va commencer à scanner à partir de notre hauteur de bloc de départ. 

![](https://i.imgur.com/s8aXDsh.png)

- Félicitations, notre porte-monnaie est maintenant restauré !