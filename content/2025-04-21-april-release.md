---
title: April Release 🔌
date: 2025-04-21
---

### New Ability 🚀

Di model-model keluaran Open AI dan Antropic, sekarang ada opsi tambahan untuk aktifkan Tool Calling. Dengan fitur ini, semua plugin yang terinstall akan otomatis aktif tanpa harus di enabled oleh user. 

![Tool Calling](https://res.cloudinary.com/moyadev/image/upload/v1745248285/maia/releases/tool-calling_uajjlh.webp)

Poin intinya:

1. Plugin akan otomatis aktif (di model-model yang support Tool Calling seperti Open AI dan Antropic Claude)

2. Plugin yg aktif adalah plugin yang sudah di install sebelumnya oleh admin

3. Jika ada plugin yang belum di install dan di aktifkan (misal dalle), maka ketika user kirim prompt tentang generate image, AI model tidak bisa generate image karena pluginnya sendiri belum di install oleh admin

4. User tidak perlu enabled plugin secara manual