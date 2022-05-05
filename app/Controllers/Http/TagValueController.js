'use strict'

const TagValue = use('App/Models/TagValue')

class TagValueController {
    /*
    async index({ request, view, response, auth })
    {

    }
    */
    
    async index({response})
    {
        try{
            const tagValue = await TagValue.all();
            return response.json(tagValue);
        }catch(error)
        {
            return response.status(500).send();
        }
    }
    
    async insert({request, response})
    {
        try{
            const {
                tag_id,
                value,
                date,
                project
            } = request.body;
            
            const tagValue = new TagValue();

            tagValue.tag_id = tag_id;
            tagValue.value = value;
            tagValue.date = date;
            tagValue.project = project;

            await tagValue.save()
            return response.json(tagValue);
        }catch(error)
        {
            return response.status(500).send();
        }
    }
}

module.exports = TagValueController
