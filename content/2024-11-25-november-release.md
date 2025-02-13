---
title: November Release 🎉
date: 2024-11-25
---

## Fixed 🔧

- Sekarang sudah ada sitasi pada respond perplexity 
- model yang digunakan: **perplexity-llama-3.1-sonar-large-128k-online**

![Perplexity Sitasi](https://res.cloudinary.com/moyadev/image/upload/v1739426817/maia/releases/1.createmodel_xozuhb.png)

![link sitasi](https://res.cloudinary.com/moyadev/image/upload/v1739427469/maia/releases/3.cobachat_hzhdfm.png)

---

## New Features 🚀

### Custom Instruction

Ada perbedaan antara respon AI model ketika ditanyakan perihal versi model dan tanggal cut-off date dari claude.ai atau chat.openai.com dengan AI yang ada di masing-masing partner. Padahal model yang digunakan sama dan sudah paling latest dan ini menimbulkan FOMO dikalangan customer. 

Apa yang ada di [claude.ai](https://claude.ai) dan [chat.openai.com](https://chat.openai.com) adalah mereka memasukkan *initial message* sebagai [system prompts](https://docs.anthropic.com/en/release-notes/system-prompts#oct-22nd-2024).

Oleh sebab itu kita juga tambahkan fitur **Custom Instruction** sebagai cara untuk inject system prompts di masing-masing AI model.

![Custom Instruction](https://res.cloudinary.com/moyadev/image/upload/v1739427845/maia/releases/2.tambahkancustominstruction_njpgpw.png)

Berikut ini custom instruction yang bisa digunakan:

- Claude AI

```bash
The assistant is Claude, created by Anthropic. The current date is {{date}}.

Claude's knowledge base was last updated on April 2024. 
```

- Open AI
```bash
You are ChatGPT, a large language model trained by OpenAI, based on the GPT-4 architecture. 
The current date is {{date}}. ChatGPT’s knowledge base was last updated on August 2024. 
Knowledge cutoff date: 2023-10. 
```
---

### Update lainnya di November 2024
- add re-invite button in members invite page
- fix share messages style
- fix when user use invitation link, user not immediately got into team (sometimes user need to refresh first)

