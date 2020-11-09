# service-engine-template

#### Dockerized Service-Engine Service.

#### This project implements the [`service-engine`](https://www.npmjs.com/package/service-engine) npm package to provide REST & GraphQL interfaces to Databases. Currently it only supports postgres (and most sql -- create & update do not return records as expected just nulls) -- but all database engines support by knex will soon be added.

## Run by Docker

### set secrets & metadata

The app needs some secrets set in `.env` and some data in `metadata.json`. These get mounted into the container at runtime -- so simply update the files and run the docker command below.d


### Docker Run

```
docker run \
	--rm -it \
	--env-file ./.env \
	-v $(pwd)/src/metadata.json:/app/lib/metadata.json \
	-v $(pwd)/src/middleware.js:/app/lib/middleware.js \
	-v $(pwd)/src/complex_resources.js:/app/lib/complex_resources.js \
	-v $(pwd)/migrations:/app/migrations \
	--network mynetwork \
	-p 8080:8080 \
	-p 50051:50051 \
	--name myservice \
	sudowing/service-engine:latest

```

#### Docker Networking Notes:
DB_HOST should be ip, domain or docker container name. If container name ensure db and this service on same network.
`--network` docker flag only needed if DB is run by docker as both need to be on same networks. If available outside docker -- you can omit.


## Migrations
Knex is used for db migrations. Instead of exposing all the knex migration interfaces, migrations are added by placing new migration files into the `migrations` directory.
Simply copy/paste `migrations/knex.stub.template` to `migrations/YYYYMMDDHHMMSS_some_migration_name.js` and add the migration steps to the `exports.up` & `exports.down` functions (exactly as you would with knex).

The migrations will be run on server start.

** Migration support is not toggled via an ENV VAR `MIGRATIONS`. Will be enabled unless set to string of value `false`

## API Documentation

The service has a two sets of resources -- some static development resources to the framework (ping, openapi, etc) and others that are generated dynamically that are specific to the database.

I use the [`Insomnia API Client`](insomnia.rest) for develoment, and I've included an export of some general service calls to speed your development.

Once you install insomnia, you can import [`docs/insomnia.service.json`](./docs/insomnia.service.json)


### OpenAPI Docs

This app auto generates OpenAPI docs that can be used with any OpenAPI client -- for example the OpenAPI UI -- which you can run locally via Docker (make sure the `port` in the `API_URL` matches what you defined in `.env`).

Also -- make sure the `medata.servers` first entry matches your host & port. Else the client wont be able to execute any calls without an error.

```
docker run \
	-p 8080:8080 \
	-e API_URL='http://localhost:8888/openapi' \
	swaggerapi/swagger-ui
```




# OpenAPI UI

The OpenAPI UI is available via [Docker Container](https://hub.docker.com/r/swaggerapi/swagger-ui/) and the command below will run that container and populate it with the `OpenAPI definition` generated from this server.

```
docker run -p 8088:8080 -e API_URL='http://0.0.0.0:8080/openapi' swaggerapi/swagger-ui
```

[http://localhost:8088](http://localhost:8088)

# Static HTML Documentation

You can also generate some awesome static HTML documentation using [Mermade/shins](https://github.com/Mermade/shins). Tip: I always use the `--inline` flag.

```
npx widdershins \
 --search true \
 --language_tabs 'javascript:JavaScript' 'javascript--nodejs:Node.JS' 'python:Python' 'go:Go' 'http:HTTP' 'ruby:Ruby' \
 --summary http://0.0.0.0:8080/openapi \
 -o docs/service.md
```	

##### **NOTE 1:** You will need node installed locally to use `npx`

# Versioning

[SemVer](http://semver.org/) is used for versioning. For the versions available, see the [tags on this repository](https://github.com/sudowing/service-engine-template/tags). 

# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
