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
	-v $(pwd)/metadata.json:/home/service-engine/app/lib/metadata.json \
	-v $(pwd)/migrations:/home/service-engine/app/migrations \
	--network mynetwork \
	-p 8888:8080 \
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