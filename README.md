# Thaiföld 2026 útinapló

Egyoldalas, offline is működő oldal a bangkoki WDBF világbajnokság utazási teendőihez.

## Fájlok

- `index.html`: maga az oldal, minden benne van
- `manifest.webmanifest`: a telefonra telepíthetőséghez
- `sw.js`: offline gyorsítótár
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`: ikonok

## Közzététel GitHub Pagesen

1. Hozz létre egy új GitHub tárolót (repository), például `thaifold-2026`.
2. Töltsd fel ide az összes fájlt a gyökérbe.
3. A tárolóban: Settings, Pages, Source: "Deploy from a branch", ág: `main`, mappa: `/ (root)`, Save.
4. Egy-két perc múlva az oldal a `https://<felhasználóneved>.github.io/thaifold-2026/` címen érhető el.

## Offline használat telefonon

1. Nyisd meg a fenti címet **egyszer, internetkapcsolattal**. Ekkor a telefon eltárolja az oldalt.
2. Android (Chrome): menü, "Telepítés" vagy "Hozzáadás a kezdőképernyőhöz".
3. iPhone (Safari): Megosztás, "Főképernyőhöz adás".
4. Ezután az ikonról indítva internet nélkül is megnyílik.

A pipák és a saját tételek abban a böngészőben (vagy telepített appban) tárolódnak, ahol bejelölöd őket. Egy eszközön mindig ugyanazt a változatot használd.

## Módosítás után

Ha frissíted az `index.html`-t a tárolóban, a telefonon a menüsor jobb szélén lévő **Frissítés** gombbal töltheted be az új verziót (internetkapcsolat kell hozzá). A pipák és a saját tételek megmaradnak. Ha internet nélkül nyomod meg, a mentett változat marad.

Ha a `sw.js` fájlt módosítod, érdemes a `CACHE` verziószámát is növelni (például `thaifold-2026-v3`).
