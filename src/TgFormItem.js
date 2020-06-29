export default {
  name: 'TgFormItem',
  props: {
    attr: String,
    label: String
  },
  inject: {
    form: 'tgForm'
  },
  computed: {
    _label () {
      let label = this.label

      if (label === undefined) {
        label = this.form.labels[this.attr] || this.attr
      }

      return label
    },
    // 获取只跟自己相关的验证规则
    myValidators () {
      return this.form.validators.filter(v => v.attributes.indexOf(this.attr) > -1)
    },
    // 字段是否必填
    isRequired () {
      return !!this.myValidators.find(v => v.constructor.type === 'required')
    },
    formErrors () {
      return this.form.errors
    },
    // 错误信息
    errors () {
      return this.formErrors[this.attr] || []
    },
    // 校验文案
    help () {
      if (this.errors.length) return this.errors[0]
    },
    //
    validateStatus () {
      if (this.help) return 'error'
    },
    value () {
      return this.form.form[this.attr]
    }
  },
  created () {
    if (this.attr) {
      this.$watch('value', () => {
        this.form.validate(this.attr)
      })
    }
  },
  render (h) {
    return h(
      'el-form-item',
      {
        props: {
          label: this._label,
          required: this.isRequired,
          help: this.help,
          validateStatus: this.validateStatus,
          ...this.$attrs
        }
      },
      this.$slots.default
    )
  }
}
