<p align="center">
  <img width="550" src="logo.png" alt="TrollFactory"/>
</p>

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/9ec8df2df6984b6ab2a5717b820a3e18)](https://app.codacy.com/gh/stanislavovsky/TrollFactory-Web/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![GitHub License](https://img.shields.io/github/license/stanislavovsky/TrollFactory-Web)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/stanislavovsky/TrollFactory-Web)
![GitHub repo size](https://img.shields.io/github/repo-size/stanislavovsky/TrollFactory-Web)

React front-end for [TrollFactory](https://github.com/stanislavovsky/TrollFactory), an amazingly accurate fake personalities generator.

***WARNING:** This project is at a very early stage of development! The code on the `main` branch does not reflect the final product.*

## Development

After installing the `trollfactory` Python package and setting up the API, clone this repository:

```bash
git clone git@github.com:stanislawowski/TrollFactory-Web.git
```

Install the dependencies:

```bash
pnpm install
```

Set the API URL as an environment variable:
```bash
echo "NEXT_PUBLIC_TF_API_URL=http://localhost:8000" > .env.local
```


And run the development server:

```bash
pnpm dev
```