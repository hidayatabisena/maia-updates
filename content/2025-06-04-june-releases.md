---
title: June Release 🖥️
date: 2025-06-04
---

## Model Context Protocol (MCP)

Singkatnya:
- **MCP** = Standar/aturan biar AI (LLM) gampang nyambung ke mana aja.
- **MCP Server** = Tempat/alat yang nyediain data atau tools yang bisa diakses AI lewat MCP.

![MCP MAIA](https://res.cloudinary.com/moyadev/image/upload/v1748994693/maia/releases/mcp_g1o1qa.webp)

**Penjelasan resminya:**

MCP adalah sebuah protokol standar yang dirancang untuk memudahkan integrasi antara model AI (seperti LLM) dengan berbagai sumber data dan layanan eksternal. 

Dengan MCP, model dapat secara efisien mengakses, mengambil, dan memanipulasi data atau fungsi dari sistem lain melalui mekanisme yang terstandarisasi. 

Hal ini mengurangi kebutuhan integrasi khusus (custom integration) dan mempercepat pengembangan aplikasi berbasis AI.

### Manfaat utama:
- Menyederhanakan proses integrasi antara model AI dengan berbagai data source atau layanan eksternal
- Meningkatkan interoperabilitas dan skalabilitas solusi AI.
- Mendukung akses data secara real-time dan kontekstual untuk meningkatkan performa model.

---
## Model Context Protocol Server (MCP Server)
MCP Server adalah komponen atau layanan yang mengimplementasikan protokol MCP. Server ini bertindak sebagai perantara yang menyediakan akses ke data, tools, atau fungsi tertentu yang dibutuhkan oleh model AI. MCP Server memastikan bahwa permintaan dari model AI diproses sesuai standar protokol, sekaligus mengelola aspek keamanan dan otorisasi akses.

### Fungsi utama:
- Menyediakan endpoint standar bagi model AI untuk mengakses data atau layanan eksternal.
- Mengelola autentikasi dan otorisasi akses sumber daya.
- Dapat dikembangkan secara modular sesuai kebutuhan organisasi atau aplikasi.

Singkatnya lagi:
- MCP adalah protokol standar untuk integrasi AI dengan berbagai sumber data dan layanan
- MCP Server adalah implementasi server yang menyediakan akses data/tools melalui protokol MCP

