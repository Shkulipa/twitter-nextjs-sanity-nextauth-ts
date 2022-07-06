export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
      validation: Rule => [ 
        Rule.required().min(5).error('A comment of min. 10 characters is required'),
        Rule.max(50).warning('Shorter comment are usually better')
      ]
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: Rule => Rule.required().error('Field is required')
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'tweet',
      title: 'Tweet',
      description: 'Reference the Tweet the coment is associated to:',
      type: 'reference',
      to: {
        type: 'tweet'
      },
      validation: Rule => Rule.required()
    },
  ],
}
