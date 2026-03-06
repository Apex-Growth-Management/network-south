import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'badgeText', title: 'Badge Text', type: 'string', description: 'e.g. Serving Raleigh-Durham Since 1994' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'string' }),
    defineField({ name: 'heroSubtitle2', title: 'Hero Subtitle Line 2', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone Number', type: 'string' }),
    defineField({ name: 'address', title: 'Address', type: 'string' }),
  ],
})
