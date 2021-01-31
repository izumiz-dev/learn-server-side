# サーバサイド勉強リポジトリ

## 目的

ユーザ認証のある Todo アプリもしくはメモアプリを作る．
フロントエンドのほうはすでにある．
[これ](https://monaco-md.netlify.app/)
[リポジトリ](https://github.com/izumiz-dev/monaco-editor-markdown-preview)

## やりたいこと（勉強したいこと）

- DB の設計
- REST での API 作成
- ユーザ認証を可能にする

## 具体的には

- [x] PostgreSQL のサーバを docker-compose で立てる
- [x] PGWeb のサーバを docker-compose で立てる
- [x] Prisma と Express で REST API のサーバを立てる
  - [ ] これを dockerize する
- [ ] React で Web アプリを作成して、上記で Dockerize した API サーバと通信可能にする
- [ ] REST API の設計
- [ ] Schema の定義

## 目下の課題

Issue にして close していく．

## 方針

### 後に回せるものは後の回す

必ずしも解決する必要がない問題に関しては後に回す．  
まずは完成をさせることを第一目標とするので、コードの汚さや設計の雑さは置いておいて良い．  
どうせ、次から作成するもののほうが最初からすべきことがわかるようになるから．

## 参考ページ一覧

忘れないように、参考にした Web サイトを貼って行く．

- [Start from scratch | TypeScript & PostgreSQL | Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-typescript-postgres)
  - 公式のスクラッチから始めるチュートリアル
- [How To Build a REST API with Prisma and PostgreSQL | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql)
  - 主に Prisma と Expressjs による REST API の作り方が書かれている
- [sql-basic-book/docker-compose.yml at master · iktakahiro/sql-basic-book](https://github.com/iktakahiro/sql-basic-book/blob/master/docker/postgres-with-pgweb/docker-compose.yml)
  - PGWeb の docker-compose の記述の仕方を参考にした．
- [Using Docker Compose for NodeJS Development](https://www.cloudbees.com/blog/using-docker-compose-for-nodejs-development/)
- [Dockerizing a NestJS app with Prisma and PostgreSQL](https://notiz.dev/blog/dockerizing-nestjs-with-prisma-and-postgresql#add-docker-compose-with-postgresql)
  - NestJS についての解説記事だが Prisma と PostgreSQL を使う部分は共通しており,Dockerfile や docker-compose.yml についての説明がされている．
- [Best practices for writing Dockerfiles | Docker Documentation](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
  - 公式の Dockerfile の書き方のベストプラクティス．ブログ記事も良いが，公式のドキュメントも読めるようにしないと
- [docker-compose.yml で.env ファイルに定義した環境変数を使う - あとらすの備忘録](https://kitigai.hatenablog.com/entry/2019/05/08/003000)
  - データベースのパスワードが見えたらだめだよな？と思い環境変数でググったら出てきたページ．無事使えたと思う．（ただもっと最適なやり方がありそう?
