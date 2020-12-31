const { permit } = require('service-engine'); // exists within container scope

const systemPermissions = permit().crud();

const resourcePermissions = {
//   'public.some_table': permit().create().read().update().delete(),
//   'some_schema.some_view_name': permit().read(),
//   'some_schema.some_mat_view': permit().read(),
//   // sqlite3 has no schemas
//   'some_table': permit().create().read().update().delete(),
};

module.exports = { systemPermissions, resourcePermissions };