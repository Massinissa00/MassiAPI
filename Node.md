Creation d'un projet Node:

```bash
npm init -y
```

Installation de la librairie `express`:

```bash
npm install express
```

Création d'un fichier `index.js` dans un dossier src:

```bash
mkdir src
touch src/index.js
```

Modification du package.json pour ajouter un script de démarrage:

```json
{
  "scripts": {
    "start": "node src/index.js"
  }
}
```

Modification du package.json pour utiliser le module `esm`:

```json
{
  "type": "module"
}
```
