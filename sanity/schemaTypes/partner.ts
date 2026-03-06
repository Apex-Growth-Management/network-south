import { defineField, defineType } from 'sanity'

export const partner = defineType({
  name: 'partner',
  title: 'Technology Partner',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Partner Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
