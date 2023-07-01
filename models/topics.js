const  {  Schema, model, models } = require ("mongoose")

const topicSchema = new Schema(
	{
		title: String,
		content: String
	}
)

const Topic = models.Topic || model('Topic', topicSchema)
module.exports = Topic