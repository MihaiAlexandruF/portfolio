# 📹 Video Setup Guide pentru Proiecte

## Structura Folderelor

```
public/
├── projects/
│   ├── videos/
│   │   ├── spotpark-demo.mp4
│   │   ├── realestate-demo.mp4
│   │   ├── weather-dashboard-demo.mp4
│   │   └── blog-platform-demo.mp4
│   └── screenshots/
│       ├── spotpark/
│       │   └── preview.jpg
│       ├── realestate/
│       │   └── preview.jpg
│       ├── weather-dashboard/
│       │   └── preview.jpg
│       └── blog-platform/
│           └── preview.jpg
```

## Cum să Adaugi Videoclipuri

### 1. **Pregătirea Videoclipurilor**
- **Format**: MP4 (recomandat pentru compatibilitate web)
- **Rezoluție**: 1920x1080 (Full HD) sau 1280x720 (HD)
- **Durată**: 30 secunde - 2 minute (optim pentru atenția utilizatorilor)
- **Mărime**: Sub 50MB per video pentru loading rapid

### 2. **Conținutul Videoclipului**
Pentru fiecare proiect, arată:
- **Intro** (2-3 secunde): Logo/titlu aplicației
- **Main features** (20-45 secunde): Funcționalitățile principale
- **UI/UX showcase** (10-15 secunde): Design și interacțiuni
- **Outro** (2-3 secunde): Call to action sau contact

### 3. **Amplasarea Fișierelor**
1. Copiază videoclipurile în `public/projects/videos/`
2. Copiază screenshot-urile (poster frames) în `public/projects/screenshots/[project-name]/`
3. Actualizează paths în `data/projects.ts`

### 4. **Exemple de Naming Convention**
```
spotpark-demo.mp4           -> Video demo SpotPark
realestate-demo.mp4         -> Video demo Real Estate Platform
weather-dashboard-demo.mp4  -> Video demo Weather App
blog-platform-demo.mp4     -> Video demo Blog Platform
```

### 5. **Screenshot-uri pentru Poster**
- Folosește un frame reprezentativ din video
- Format: JPG sau PNG
- Rezoluție: 1920x1080 sau similar cu videoul
- Optimizează pentru web (sub 500KB)

## Tools Recomandate pentru Video

### Recording:
- **OBS Studio** (gratuit, profesional)
- **Loom** (ușor de folosit, direct în browser)
- **Camtasia** (plătit, dar cu editing integrat)

### Editing:
- **DaVinci Resolve** (gratuit, profesional)
- **OpenShot** (gratuit, simplu)
- **Adobe Premiere Pro** (plătit, industrial standard)

### Compression:
- **HandBrake** (gratuit, excelent pentru optimizare)
- **FFmpeg** (command line, foarte puternic)

## Tips pentru Video Demo de Calitate

1. **Planificare**:
   - Scrie un scenariu scurt
   - Testează aplicația înainte de recording
   - Pregătește date de test realistice

2. **Recording**:
   - Folosește un cursor highlight tool
   - Record la rezoluție consistentă
   - Evită să te grăbești - arată clar fiecare feature

3. **Post-production**:
   - Adaugă subtitle/text overlay pentru claritate
   - Folosește zoom-uri pentru detalii importante
   - Adaugă muzică de background subtilă (opțional)

4. **Optimizare Web**:
   - Compresează videoul pentru web
   - Testează loading time-ul
   - Creează poster frames atractive

## Avantajele Video Demo

✅ **Impresie profesională** - Arată că proiectul chiar funcționează
✅ **Engagement crescut** - Vizitatorii vor petrece mai mult timp pe site
✅ **Demonstrare clară** - Mult mai eficient decât screenshots statice
✅ **Diferențiere** - Puțini candidați au video demos pe portfolio
✅ **Story telling** - Poți arăta flow-ul complet al aplicației

## Implementarea în Cod

Videoclipurile vor fi afișate într-un modal elegant cu:
- ▶️ Play/Pause controls
- 🔊 Volume control
- ⏯️ Seek bar
- 🔍 Fullscreen support
- 📱 Responsive design

Când un utilizator apasă "Watch Demo", se va deschide modalul cu videoul tău!
