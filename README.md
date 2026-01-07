
# 🦷 Website Dr. Marcio Castro - Odontologia de Excelência

## 🚀 Como subir o site (Passo a Passo CMD)

Se você encontrou erros de "remote already exists" ou "refspec", use estes comandos nesta ordem:

```cmd
# 1. Limpar conexões antigas
git remote remove origin

# 2. Inicializar e preparar
git init
git add .
git commit -m "Projeto Dr Marcio Castro"
git branch -M main

# 3. Conectar ao seu GitHub (Troque pelo seu link)
git remote add origin https://github.com/CalercMusic/site-dentista.git

# 4. Enviar
git push -u origin main
```

## 🌍 Hospedagem (Vercel)

Para o site funcionar com os arquivos `.tsx` e a Inteligência Artificial:

1. Crie conta na [Vercel](https://vercel.com) usando seu GitHub.
2. Importe o projeto `site-dentista`.
3. Em **Environment Variables**, adicione a `API_KEY` (sua chave do Gemini).
4. Clique em **Deploy**.

O site estará online em um link profissional em menos de 1 minuto!
