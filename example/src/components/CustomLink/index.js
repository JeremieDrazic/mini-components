import './styles.css'

export default {
  selector: '.custom-link',

  data: {
    text: 'foobar'
  },

  mounted() {
    this.$el.addEventListener('click', this.greet.bind(this))
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },

  methods: {
    greet () {
      console.log(`hi my id is ${this.$id}`)
    }
  }
}