import './styles.css'

export default {
  selector: '.homepage',

  data: {
    text: 'homepage'
  },

  mounted() {
    this.greet()

    document.querySelector('.add-custom-link-btn').addEventListener('click', e => {
      const link = document.createElement('a')
      const text = document.createTextNode('go to blabla =>')

      link.classList.add('custom-link')
      link.href = '#'
      link.append(text)

      this.$el.append(link)
    })
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },

  methods: {
    greet() {
      console.log('greet: hello homepage')
    }
  }
}