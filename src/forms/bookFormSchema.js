import VueFormGenerator from 'vue-form-generator'

export default {
  groups: [
    {
      legend: 'Book Info',
      fields: [
        {
          type: 'input',
          inputType: 'text',
          label: 'Title',
          model: 'title',
          required: true,
          validator: ['string', 'required']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Subtitle',
          model: 'subtitle',
          required: false,
          validator: ['string', 'optional']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Author',
          model: 'author',
          required: true,
          validator: ['string', 'required']
        },
        {
          type: 'input',
          inputType: 'text',
          label: 'Image',
          model: 'image',
          required: false,
          validator: ['string', 'optional']
        },
        {
          type: 'textArea',
          label: 'Description',
          model: 'description',
          required: false,
          rows: 4,
          hint: "Max 500 characters",
          max: 500,
          validator: ['string', 'optional']
        }
      ]
    }
  ]
}
