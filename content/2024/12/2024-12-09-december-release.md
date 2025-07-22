---
title: December Release ✨
date: 2024-12-09
---

## Bug Fixes 🐛

- Fix $ sign handling error
- Fix mobile prompt fetching issues
- Fix case-insensitive registration issue

---

## Improvements 📈

- Add import plugin feature with URL detection
- Support direct query execution via URL parameters /q=query
- Integrate Sentry for error tracking
- Change messages UI styles
- Implement code splitting and lazy loading for core components
- Add a LoadingSpinner component
- Enhance latex.tsx with dynamic imports

---

## New Features 🚀

### 1️⃣ Custom Background Halaman Login

- Mengatur background image pada halaman login melalui menu Custom, lalu toggle ON *Login Background Image*
- Mengatur background image pada halaman chat, bisa dilakukan dengan cara toggle ON *Chatroom Background Image*

![Custom background login](https://res.cloudinary.com/moyadev/image/upload/v1739433350/update-desember_y5p3oo.png)

### 2️⃣ Fitur trial untuk invite member tanpa harus bayar

- Calon member bisa trial dulu sebelum memutuskan untuk berlangganan
- Pengaturannya di menu Custom, aktifkan *Enable Trial Mode*
- Jika fitur trial aktif, new member akan bisa register dan akses ke AI tanpa harus membayar
- Periode masa trialnya juga bisa diatur
- Klik tombol *Update preferences* untuk menyimpan perubahan

![Trial Mode](https://res.cloudinary.com/moyadev/image/upload/v1739434327/trial-mode_jlaasb.png)

### 3️⃣ Team Transfer

- Member bisa dipindahkan ke team yang lain selama masih dalam satu domain AI yang sama
- Pengaturannya di *Manage Teams*, menu *Members*
- Member yang dipindahkan teamnya, history chat dari team sebelumnya akan ikut terbawa di team yang baru

![Transfer team](https://res.cloudinary.com/moyadev/image/upload/v1739435788/team-transfer1_ft3auo.png)

- Tentukan Team, Role dan tanggal expired nya

![Team role](https://res.cloudinary.com/moyadev/image/upload/v1739435871/team-role_w089rg.png)

### 4️⃣ AI Tools

- Di menu *Manage Teams* ada fitur baru namanya **AI Tools**
- Di dalam menu tersebut saat ini berisi:
    - Transcription services untuk kebutuhan transkrip audio dan video menjadi text
    - Text-to-speech untuk generate voice audio dari teks, dengan memilih provider seperti
        - Whisper dari OpenAI
        - ElevenLabs
        - Cartesia
        - PlayHT
    - Masing-masing provider punya api key nya sendiri

![AI Tools](https://res.cloudinary.com/moyadev/image/upload/v1739436069/AI-tools1_axqaal.png)

- Ketika *Transcription* dan *Text-to-Speech* sudah diset, dari sisi member akan ada tampilan seperti ini:

![Transcription](https://res.cloudinary.com/moyadev/image/upload/v1739436194/transcription_uizjtu.png)