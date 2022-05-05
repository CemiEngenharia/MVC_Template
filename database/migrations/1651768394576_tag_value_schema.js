'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagValueSchema extends Schema {
  up () {
    this.create('tag_values', (table) => {
      table.increments()
      table.integer("tag_id")
      table.integer("value")
      table.datetime("date")
      table.integer("project")
      table.timestamps()
    })
  }

  down () {
    this.drop('tag_values')
  }
}

module.exports = TagValueSchema
