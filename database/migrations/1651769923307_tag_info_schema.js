'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TagInfoSchema extends Schema {
  up () {
    this.create('tag_infos', (table) => {
      table.increments()
      table.string("name").notNull()
      table.string("address").notNull()
      table.timestamps()      
    })
  }

  down () {
    this.drop('tag_infos')
  }
}

module.exports = TagInfoSchema
