import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import TgForm from '../../src/main'

export default ({ Vue }) => {
  Vue.use(ElementUI)
  Vue.use(TgForm)

  Vue.mixin({
    methods: {
      handleSubmit () {
        this.$refs.form.validate()
          .then(() => {
            alert('验证通过')
          })
          .catch(errors => {
            alert(JSON.stringify(errors))
          })
      }
    }
  })
}
