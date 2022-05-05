'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TagValue extends Model {
    tag_id(){
        return this.belongsTo("App/Models/TagInfo")
    }
    project(){
        return this.belongsTo("App/Models/Project")
    }
}

module.exports = TagValue
