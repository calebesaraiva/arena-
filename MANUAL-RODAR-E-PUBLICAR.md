# Manual de uso do projeto — Arena Green Beer

Este pacote contém a landing page da **Arena Green Beer** pronta para edição, execução local e publicação. O projeto foi desenvolvido em **React + Vite + TypeScript**, com interface estática e foco em apresentação comercial.

| Item | Descrição |
| --- | --- |
| Projeto | Landing page comercial da Arena Green Beer |
| Stack | React 19, Vite, TypeScript, Tailwind CSS |
| Objetivo | Apresentação comercial, institucional e visual do projeto |
| Tipo | Frontend estático |

## Como rodar na sua máquina

Para executar o projeto localmente, você precisa ter o **Node.js** instalado. O ideal é usar uma versão atual do Node 20 ou superior, além do **pnpm** como gerenciador de pacotes.

| Passo | Comando |
| --- | --- |
| Entrar na pasta do projeto | `cd arena-green-beer-lp` |
| Instalar dependências | `pnpm install` |
| Rodar em desenvolvimento | `pnpm dev` |
| Gerar build de produção | `pnpm build` |
| Validar tipagem | `pnpm check` |

Depois de rodar `pnpm dev`, o terminal vai mostrar um endereço local, normalmente `http://localhost:3000` ou semelhante. Basta abrir no navegador para visualizar o site.

> Se você não tiver o pnpm instalado, pode instalar com `npm install -g pnpm`.

## Estrutura principal do projeto

| Pasta/arquivo | Função |
| --- | --- |
| `client/src/pages/Home.tsx` | Página principal da landing page |
| `client/src/index.css` | Estilos globais e tema visual |
| `client/src/App.tsx` | Estrutura principal da aplicação |
| `client/index.html` | HTML base do projeto |
| `MANUAL-RODAR-E-PUBLICAR.md` | Este manual |

## Onde editar o conteúdo

Se você quiser trocar textos, seções, títulos ou botões, o arquivo principal é o `client/src/pages/Home.tsx`. Se quiser mexer nas cores, tipografia, atmosfera visual e classes utilitárias globais, o arquivo principal é o `client/src/index.css`.

As imagens usadas no site estão apontadas por **URLs públicas**. Isso foi feito para facilitar publicação e evitar problemas com arquivos pesados no deploy.

## Como publicar na Vercel

A Vercel detecta automaticamente projetos Vite e permite deploy diretamente da raiz do projeto com o comando `vercel` [1]. Para aplicações Vite em modo SPA, a própria documentação da Vercel recomenda configurar reescrita para `index.html` quando necessário, garantindo funcionamento correto de rotas internas [1].

### Opção 1: publicar pela interface da Vercel

A forma mais simples é subir o projeto para um repositório no GitHub e depois importar esse repositório na Vercel.

| Etapa | O que fazer |
| --- | --- |
| 1 | Crie um repositório no GitHub |
| 2 | Envie os arquivos do projeto para esse repositório |
| 3 | Acesse [vercel.com](https://vercel.com) |
| 4 | Clique em **Add New Project** |
| 5 | Importe o repositório |
| 6 | A Vercel deve detectar Vite automaticamente |
| 7 | Clique em **Deploy** |

### Opção 2: publicar pelo terminal com Vercel CLI

Você também pode publicar direto pelo terminal. Segundo a documentação oficial, basta instalar a CLI e executar o comando `vercel` na raiz do projeto [1].

| Passo | Comando |
| --- | --- |
| Instalar a CLI | `npm install -g vercel` |
| Entrar na pasta do projeto | `cd arena-green-beer-lp` |
| Fazer login | `vercel login` |
| Publicar | `vercel` |

Na primeira execução, a Vercel fará algumas perguntas simples, como nome do projeto e pasta raiz. Normalmente, a raiz é a própria pasta do projeto.

## Arquivo recomendado para SPA na Vercel

Como o projeto usa navegação de frontend, é recomendável manter um arquivo `vercel.json` com rewrite para `index.html`, conforme orientação da documentação oficial da Vercel para apps Vite em modo SPA [1].

Exemplo:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## Observação importante sobre imagens

As imagens não estão todas armazenadas localmente dentro do projeto. Elas já estão publicadas por URL e o site consome esses links diretamente. Isso ajuda no deploy, reduz peso e evita timeout de publicação.

Se você quiser substituir imagens futuramente, o melhor caminho é subir novas imagens para uma hospedagem/CDN e trocar as URLs no arquivo `Home.tsx`.

## Checklist rápido antes de publicar

| Verificação | Status esperado |
| --- | --- |
| `pnpm install` executado | OK |
| `pnpm check` sem erros | OK |
| `pnpm build` concluído | OK |
| Links e imagens abrindo corretamente | OK |
| Projeto importado na Vercel | OK |

## References

[1]: https://vercel.com/docs/frameworks/frontend/vite "Vite on Vercel"
