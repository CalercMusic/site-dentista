
# 🦷 Website Dr. Marcio Castro

## 🛠 Solução para o erro "src refspec main does not match any"

Se você recebeu esse erro no CMD, execute estes passos:

1. **Confirme que você tem commits:**
   ```cmd
   git add .
   git commit -m "feat: correção de estrutura"
   ```

2. **Force o nome da branch para main:**
   ```cmd
   git branch -M main
   ```

3. **Verifique se o link do repositório está certo:**
   *Troque 'seu-usuario' pelo seu nome no GitHub*
   ```cmd
   git remote set-url origin https://github.com/CalercMusic/site-dentista.git
   ```

4. **Envie os arquivos:**
   ```cmd
   git push -u origin main
   ```

---

## 🌐 Onde hospedar para não dar erro?

**NÃO use o GitHub Pages diretamente com arquivos .tsx.** O GitHub Pages não sabe ler esses arquivos.

**A solução definitiva é a Vercel:**
1. Crie conta em [vercel.com](https://vercel.com).
2. Clique em **Add New** -> **Project**.
3. Importe este repositório do seu GitHub.
4. **IMPORTANTE:** Em "Environment Variables", adicione `API_KEY` com sua chave do Gemini.
5. Clique em **Deploy**. A Vercel vai transformar seus arquivos `.tsx` em um site real automaticamente.
