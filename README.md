<a href='https://portfolio-lisiz.vercel.app'>
  <img src='./public/README_Banner.png' alt='Banner do Projeto'>
</a>
<br />
<div align="center">

  <h3 align="center">Portfolio Lisiz</h3>

  <p align="center">
    Um portfólio moderno, rápido e responsivo feito com Next.js.<br>
    Destaque seus projetos, experiências e habilidades de forma elegante.<br>
    <a href="https://portfolio-lisiz.vercel.app"><strong>Veja online! »</strong></a>
    <br /><br />
  </p>
</div>

<!-- SUMÁRIO -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias">Tecnologias</a></li>
      </ul>
    </li>
    <li>
      <a href="#executando-localmente">Executando localmente</a>
    </li>
    <li><a href="#uso">Uso</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#metodologia-git">Metodologia Git</a></li>
    <li><a href="#contato">Contato</a></li>
    <li><a href="#agradecimentos">Agradecimentos</a></li>
  </ol>
</details>

## 🖼️ Sobre o Projeto

É uma aplicação web desenvolvida para apresentar seus projetos, habilidades e experiências de forma moderna, responsiva e eficiente. O projeto foi pensado para ser facilmente customizável, permitindo que você destaque seus principais projetos, compartilhe sua trajetória profissional e facilite o contato com recrutadores e clientes.

O portfólio conta com animações suaves, dark mode, suporte a múltiplos idiomas (i18n), integração com redes sociais e uma navegação fluida entre as seções. O código é modular, organizado e utiliza as melhores práticas do ecossistema React/Next.js.

Principais características:
- Layout responsivo e elegante, adaptado para todos os dispositivos.
- Seções para projetos, experiências, habilidades e contato.
- Fácil personalização de conteúdo e estilos.
- Performance otimizada com Next.js e Tailwind CSS.
- Dark mode e internacionalização.
- Animações modernas com Framer Motion e GSAP.
- Componentização reutilizável e arquitetura escalável.

### Tecnologias

[![Next][Next.js]][Next-url]
[![React][React.js]][React-url]
[![Tailwind][Tailwind]][Tailwind-url]
[![Framer Motion][Framer]][Framer-url]
[![GSAP][GSAP]][GSAP-url]
[![Radix UI][Radix]][Radix-url]
[![Lucide][Lucide]][Lucide-url]
[![i18next][i18next]][i18next-url]
[![Next Themes][NextThemes]][NextThemes-url]
<!-- Adicione outras tecnologias relevantes -->

## 💻 Executando localmente

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seuusuario/portfolio-lisiz.git
cd portfolio-lisiz
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para ver o resultado.

## 🚀 Uso

Após rodar o projeto localmente, personalize as seções do portfólio editando os arquivos de conteúdo (ex: projetos, experiências, habilidades e informações de contato). O layout foi projetado para facilitar a adição de novos projetos e experiências profissionais, tornando seu portfólio sempre atualizado e atrativo.

- Adicione seus projetos em `/src/data/projects.js` (ou arquivo correspondente).
- Atualize suas experiências e habilidades em `/src/data/experience.js` e `/src/data/skills.js`.
- Personalize o visual facilmente editando os arquivos de estilo do Tailwind em `/src/app/globals.css`.
- Para alterar textos e idiomas, edite os arquivos em `/i18n`.
- Para adicionar novas páginas, utilize a estrutura de rotas do Next.js em `/src/app`.

## 🛣️ Roadmap

- [x] Layout responsivo
- [x] Seção de projetos
- [x] Seção de experiências profissionais
- [x] Seção de habilidades técnicas
- [x] Página de contato
- [x] Dark mode
- [x] Animações e transições modernas
- [ ] Internacionalização (i18n) completa
- [ ] Integração com CMS para gerenciamento de conteúdo
- [ ] Página de blog
- [ ] Testes automatizados

Veja as [issues abertas](https://github.com/seuusuario/portfolio-lisiz/issues) para uma lista completa de funcionalidades planejadas e bugs conhecidos.

## 📝 Metodologia Git

Utilizamos commits semânticos e atômicos. Veja a tabela de emojis e exemplos de uso abaixo:

| Tipo do commit           | Emoji                                         |
|:-------------------------|:----------------------------------------------|
| Refatorando código       | :hammer: `:hammer:`                           |
| Nova feature             | :sparkles: `:sparkles:`                       |
| Bugfix                   | :bug: `:bug:`                                 |
| ...                      | ...                                           |

<details>
  <summary>Ver todos os tipos</summary>

|   Tipo do commit           | Emoji                                         |
|:---------------------------|:----------------------------------------------|
| Commit Inicial             | :tada: `:tada:`                               |
| Versão                     | :bookmark: `:bookmark:`                       |
| Nova feature               | :sparkles: `:sparkles:`                       |
| Bugfix                     | :bug: `:bug:`                                 |
| Metadata                   | :card_index: `:card_index:`                   |
| Documentação               | :books: `:books:`                             |
| Documentando codigo        | :bulb: `:bulb:`                               |
| Performance                | :racehorse: `:racehorse:`                     |
| Cosmético                  | :lipstick: `:lipstick:`                       |
| Testes                     | :rotating_light: `:rotating_light:`           |
| Adicionando teste          | :white_check_mark: `:white_check_mark:`       |
| Fazendo teste passar       | :heavy_check_mark: `:heavy_check_mark:`       |
| General update             | :zap: `:zap:`                                 |
| Improve format/structure   | :art: `:art:`                                 |
| Refatorando codigo         | :hammer: `:hammer:`                           |
| Removendo codigo/arquivos  | :fire: `:fire:`                               |
| Integração Continua        | :green_heart: `:green_heart:`                 |
| Segurança                  | :lock: `:lock:`                               |
| Upgrading dependencies     | :arrow_up: `:arrow_up:`                       |
| Downgrading dependencies   | :arrow_down: `:arrow_down:`                   |
| Lint                       | :shirt: `:shirt:`                             |
| Traduzindo                 | :alien: `:alien:`                             |
| Texto                      | :pencil: `:pencil:`                           |
| Critical hotfix            | :ambulance: `:ambulance:`                     |
| Deploying stuff            | :rocket: `:rocket:`                           |
| Work in progress           | :construction:  `:construction:`              |
| Adding CI build system     | :construction_worker: `:construction_worker:` |
| Analytics or tracking code | :chart_with_upwards_trend: `:chart_with_upwards_trend:` |
| Removendo dependencia      | :heavy_minus_sign: `:heavy_minus_sign:`       |
| Adicionando dependencia    | :heavy_plus_sign: `:heavy_plus_sign:`         |
| Docker                     | :whale: `:whale:`                             |
| Configuration files        | :wrench: `:wrench:`                           |
| Package.json in JS         | :package: `:package:`                         |
| Merging branches           | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` |
| Bad code / need improv.    | :hankey: `:hankey:`                           |
| Reverting changes          | :rewind: `:rewind:`                           |
| Breaking changes           | :boom: `:boom:`                               |
| Code review changes        | :ok_hand: `:ok_hand:`                         |
| Acessibilidade             | :wheelchair: `:wheelchair:`                   |
| Mover/renomear repositorio | :truck: `:truck:`                             |
| Outros                     | [Be creative](http://www.emoji-cheat-sheet.com/)  |

Inspirado em [dannyfritz/commit-message-emoji](https://github.com/dannyfritz/commit-message-emoji)
Veja mais em [gitmoji](https://gitmoji.carloscuesta.me/).
</details>

## ✉️ Contato

Entre em contato pelo [LinkedIn](https://linkedin.com/in/seulinkedin) ou envie um email para seuemail@dominio.com.

<!-- MARKDOWN LINKS & IMAGES -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind]: https://img.shields.io/badge/Tailwind-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[Framer]: https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
[Framer-url]: https://www.framer.com/motion/
[GSAP]: https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white
[GSAP-url]: https://greensock.com/gsap/
[Radix]: https://img.shields.io/badge/Radix%20UI-000000?style=for-the-badge&logo=radixui&logoColor=white
[Radix-url]: https://www.radix-ui.com/
[Lucide]: https://img.shields.io/badge/Lucide-000000?style=for-the-badge&logo=lucide&logoColor=white
[Lucide-url]: https://lucide.dev/
[i18next]: https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white
[i18next-url]: https://www.i18next.com/
[NextThemes]: https://img.shields.io/badge/next--themes-000000?style=for-the-badge&logo=vercel&logoColor=white
[NextThemes-url]: https://github.com/pacocoursey/next-themes


