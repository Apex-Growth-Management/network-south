import { defineField, defineType } from 'sanity'

export const stat = defineType({
  name: 'stat',
  title: 'Stat',
  type: 'document',
  fields: [
    defineField({ name: 'value', title: 'Value', type: 'string', description: 'e.g. 30+', validation: (Rule) => Rule.required() }),
    defineField({ name: 'label', title: 'Label', type: 'string', description: 'e.g. Years in Business', validation: (Rule) => Rule.required() }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
})
