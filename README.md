# Umit Klinik Website

MineDent-Saglik icin hazirlanan React ve Vite tabanli klinik tanitim sitesi.

## Calistirma

```bash
npm install
npm run dev
```

## Yayina Alma

```bash
npm run build
```

## PWA

Site PWA olarak hazirlandi. `public/manifest.webmanifest` uygulama bilgilerini,
`public/sw.js` ise temel sayfa ve gorseller icin cevrimdisi onbellegi yonetir.
HTTPS uzerinde yayinlandiginda telefon ekranina uygulama gibi eklenebilir.

Netlify build ayarlari:

```text
Build command: npm run build
Publish directory: dist
```
