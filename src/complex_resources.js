const complexResources = [
    {
      topResourceName: 'public_i001_city_state_entity_provider_n',
      subResourceName: 'cms_providers',
      groupBy: ['address_city','address_state','entity_type','provider_type'],
      calculatedFields: {
        n: 'count(npi)'
      },
    },
    {
      topResourceName: 'cms_providers',
      subResourceName: 'cms_providers',
      calculatedFields: {
        address_city: 'UPPER(address_city)'
      },
    }
  ]

module.exports = complexResources;