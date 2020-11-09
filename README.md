# General Service Engine Template

This project is a containerized implementation of [**`service-engine`**](https://www.npmjs.com/package/service-engine). The goal is to provide a minimalist template that can be used to quickly bootstap services.

This project currently supports PostgreSQL, MySQL and Sqlite3. Support for all other database dialects supported by [knex.js](http://knexjs.org) is planned.

* [General Service Engine Template](general_service_engine_template)
* [Application Configuration](application_configuration)
    * [Required](required)
    * [Optional](optional)
* [Run by Docker](run_by_docker)
* [Migrations](migrations)
* [API Documentation](api_documentation)
* [OpenAPI UI](open_api_ui)
* [Static HTML Documentation](static_html_documentation)
* [Versioning](versioning)
* [License](license)

# <a id="application_configuration"></a> Application Configuration

## <a id="required"></a> Required

### <a id="env"></a> `.env`

Mostly consists of DB Connection information, but also includes options for pagination limits, ports for `REST` & `gRPC` services & a flag indicated if you want to enable db migrations on startup.

### <a id="metadata_json"></a> `metadata.json`

Most of this content is used to complete the OpenAPI docs. However, the **appShortName** is also used to define root URL path & is injected into all logs.

## <a id="optional"></a> Optional

The remaining files are all optional. Detailed descriptions of what each is for is documented on the **README** of the root project.

- [`middleware.js`](https://github.com/sudowing/service-engine/blob/develop/README.md#application-configurations_middleware)
- [`complex_resources.js`](https://github.com/sudowing/service-engine/blob/develop/README.md#application-configurations_complex-resources-subqueries)
- [`permissions.js`](https://github.com/sudowing/service-engine/blob/develop/README.md#application-configurations_permissions)

# <a id="run_by_docker"></a> Run by Docker

```sh
docker run \
	--rm -it \
	--env-file ./.env \
	-v $(pwd)/src/metadata.json:/app/lib/metadata.json \
	-v $(pwd)/src/middleware.js:/app/lib/middleware.js \
	-v $(pwd)/src/permissions.js:/app/lib/permissions.js \
	-v $(pwd)/src/complex_resources.js:/app/lib/complex_resources.js \
	-v $(pwd)/migrations:/app/migrations \
	--network mynetwork \
	-p 8080:8080 \
	-p 50051:50051 \
	--name myservice \
	sudowing/service-engine:latest
```
The services should now be running:
[Health Check Route](http://localhost:8080/healthz)

##### **NOTE 1:** Docker run `--network` flag is only needed if you want ton connect to DB service via Docker Network.

##### **NOTE 2:** `DB_HOST` should be ip, domain or docker container name. If container name ensure db and this service on same network.

# <a id="migrations"></a> Migrations

Knex is used for db migrations. Instead of exposing all the knex migration interfaces, migrations are added by placing new migration files into the `migrations` directory.
Simply copy/paste `migrations/knex.stub.template` to `migrations/YYYYMMDDHHMMSS_some_migration_name.js` and add the migration steps to the `exports.up` & `exports.down` functions (exactly as you would with knex).

The migrations will be run on server start.

** Migration support is not toggled via an ENV VAR `MIGRATIONS`. Will be enabled unless set to string of value `false`

# <a id="api_documentation"></a> API Documentation

The service has a two sets of resources -- some [static development resources](https://github.com/sudowing/service-engine#rest-endpoints) and others that are generated dynamically that are specific to the database.

I use the [`Insomnia API Client`](insomnia.rest) for develoment, and I've included an [insomnia export](./docs/insomnia.service.json) of some general service calls to speed your adoption.

# <a id="open_api_ui"></a> OpenAPI UI

The OpenAPI UI is available via [Docker Container](https://hub.docker.com/r/swaggerapi/swagger-ui/) and the command below will run that container and populate it with the `OpenAPI definition` generated from this server.

```
docker run -p 8088:8080 -e API_URL='http://0.0.0.0:8080/openapi' swaggerapi/swagger-ui
```

[http://localhost:8088](http://localhost:8088)

# <a id="static_html_documentation"></a> Static HTML Documentation

You can also generate some awesome static HTML documentation using [Mermade/shins](https://github.com/Mermade/shins). Tip: I always use the `--inline` flag.

```
npx widdershins \
 --search true \
 --language_tabs 'javascript:JavaScript' 'javascript--nodejs:Node.JS' 'python:Python' 'go:Go' 'http:HTTP' 'ruby:Ruby' \
 --summary http://0.0.0.0:8080/openapi \
 -o docs/service.md
```	

##### **NOTE 1:** You will need node installed locally to use `npx`

# <a id="versioning"></a> Versioning

[SemVer](http://semver.org/) is used for versioning. For the versions available, see the [tags on this repository](https://github.com/sudowing/service-engine-template/tags). 

# <a id="license"></a> License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
