# upload-nodejs

Dans cette quête tu vas voir comment envoyer des fichiers via les formulaires HTML.
Objectifs

    Comprendre le mécanisme derrière l'upload de fichier
    Comprendre le lien entre le formulaire HTML et le serveur

Étapes

    Le formulaire HTML
    Mise en place de Multer
    Traitement du fichier
    Upload multiple de fichiers

Challenge
Send me some pics

Dans ton dossier contenant ton projet généré avec l'express-generator, tu vas créer une nouvelle route dans routes/index.js ; cette route sera en POST (/monupload) et permettra de gérer l'upload de fichiers.
L'utilisateur pourra envoyer envoyer des images, seulement au format *.png et avec une taille inférieure à 3mo.

Tu peux informer l'utilisateur du type de format accepté (png) grâce à l'attribut HTML accept.

Le code sera disponible sur github.
Critéres de validation

    Le code permet l'upload de plusieurs fichiers
    Le code bloque les fichiers supérieur à 3mo
    Le code n'accepte que les fichiers avec le mimetype image/png
