# Hypnerotomachia Poliphili

📖 One of the first work of printing,
published in 1499 by **Alde Manuce** in Venise,
re-edited in Next.js.

<img src="app/public/images/book/f001.jpg" width="400px">

[Read online (static generated version)](https://eliseduverdier.github.io/hypnerotomachia-poliphili/)

## how to use

-   Connect to vagrant and docker
    -   `vagrant up --provision && vagrant ssh`
    -   (will fail first time because docker containers are not yet installed, so run `docker-compose build`)
-   `dup` (alias for `docker-compose up -d`)
-   `cd app/`
-   start server (`dex` is alias of `docker exec`)
    -   `dex web npm install`
    -   `dex web npm run dev`

And go to http://localhost:3000/hypnerotomachia-poliphili

## sources

-   [Wikipedia](https://en.wikipedia.org/wiki/Hypnerotomachia_Poliphili)
-   [Latin text](http://www.liberliber.it/mediateca/libri/c/colonna/hypnerotomachia_poliphili_etc/pdf/hypner_p.pdf)
-   [French text](<https://fr.wikisource.org/wiki/Le_Songe_de_Poliphile_(%C3%A9d._Popelin,_1883)>)
-   [Scanned book](http://architectura.cesr.univ-tours.fr/Traite/Images/LES1358Index.asp)
-   [Illustrations](https://gallica.bnf.fr/ark:/12148/btv1b2200005d)
