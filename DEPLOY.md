# Como fazer Deploy na Hostinger (Versão PWA)

Seu projeto agora é um PWA completo! Siga os passos abaixo para atualizar seu site na Hostinger.

## 1. Preparar o Código

⚠️ **Importante:** Seus ícones atuais são placeholders (SVG simples). Antes de fazer o deploy final, recomendo substituir os arquivos em `public/icons/` pelos logos oficiais da sua marca:
- `public/icons/icon-192.png` (Tamanho recomendado: 192x192 px)
- `public/icons/icon-512.png` (Tamanho recomendado: 512x512 px)

Depois de arrumar os ícones (se quiser), gere a versão final:

1.  Abra o terminal na pasta do projeto: `cd tabela-decodes-app`
2.  Execute o build:
    ```bash
    npm run build
    ```

## 2. Enviar para a Hostinger

1.  Acesse o **Gerenciador de Arquivos** da Hostinger.
2.  Entre na pasta `public_html`.
3.  **Limpe tudo:** Apague os arquivos antigos para garantir que não sobrem arquivos desnecessários.
4.  **Upload:**
    *   Pegue todo o conteúdo de DENTRO da pasta `dist`.
    *   Arraste para a `public_html`.

## Testando o PWA

*   **Android/Chrome:** Ao acessar o site, aguarde 5 segundos. Um popup "Instale o Power ON" deve aparecer.
*   **iOS/Safari:** Toque no botão "Compartilhar" e procure por "Adicionar à Tela de Início".
*   **Offline:** Depois de instalar, desligue a internet e abra o app. Ele deve carregar a tabela normalmente!

## GitHub

Para salvar essas alterações no GitHub:
```bash
git add .
git commit -m "Implement PWA features: Manifest, SW, and Install Prompt"
git push
```
