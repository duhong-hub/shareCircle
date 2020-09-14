<template>
  <div >
    login
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
// import * as dd from 'dingtalk-jsapi' // 此方式为整体加载钉钉api，也可按需进行加载
// import dingConfig from '@/utils/ding-config' // 钉钉app的常量信息
// import axios from 'axios'
// import Cookies from 'js-cookie'

export default {
  name: 'Login',
  // data() {
  //   const validateUsername = (rule, value, callback) => {
  //     if (!validUsername(value)) {
  //       callback(new Error('Please enter the correct user name'))
  //     } else {
  //       callback()
  //     }
  //   }
  //   const validatePassword = (rule, value, callback) => {
  //     if (value.length < 6) {
  //       callback(new Error('The password can not be less than 6 digits'))
  //     } else {
  //       callback()
  //     }
  //   }
  //   return {
  //     loginForm: {
  //       username: '',
  //       password: ''
  //     },
  //     loginRules: {
  //       username: [
  //         { required: true, trigger: 'blur', validator: validateUsername }
  //       ],
  //       password: [
  //         { required: true, trigger: 'blur', validator: validatePassword }
  //       ]
  //     },
  //     loading: false,
  //     passwordType: 'password',
  //     redirect: undefined
  //   }
  // },
  // watch: {
  //   $route: {
  //     handler: function(route) {
  //       this.redirect = route.query && route.query.redirect
  //     },
  //     immediate: true
  //   }
  // },
  // created() {
  //   this.dingdingLogin()
  // },
  // methods: {
  //   // loginbyVuex: function() {
  //   //   this.loading = true;
  //   //   this.$store.dispatch("user/getInfo",'').then(() => {
  //   //     if (this.name && this.token) {
  //   //       this.$router.push({ path: this.redirect || "/" });
  //   //     }
  //   //     this.loading = false;
  //   //   });
  //   // },
  //   dingdingLogin() {
  //     const _this = this
  //     dd.ready(function() {
  //       dd.runtime.permission.requestAuthCode({
  //         corpId: dingConfig.corpId, // 企业id
  //         onSuccess: function(info) {
  //           const code = info.code // 通过该免登授权码可以获取用户身份
  //           _this.getUserInfo(code)
  //         }
  //       })
  //     })
  //   },
  //   getUserInfo(code) {
  //     this.loading = true
  //     axios
  //       .get('/kpi/v1/user', {
  //         params: {
  //           code: code
  //         }
  //       })
  //       .then((res) => {
  //         const id = res.data.userid
  //         const name = res.data.name
  //         Cookies.set('request_user_id', id)
  //         Cookies.set('request_user_name', name)
  //         if (id && name) {
  //           this.loading = false
  //           if (id && name) {
  //             this.$router.push({ path: this.redirect || '/' })
  //           }
  //         }
  //       })
  //   },
  //   showPwd() {
  //     if (this.passwordType === 'password') {
  //       this.passwordType = ''
  //     } else {
  //       this.passwordType = 'password'
  //     }
  //     this.$nextTick(() => {
  //       this.$refs.password.focus()
  //     })
  //   },
  //   handleLogin() {
  //     this.$refs.loginForm.validate((valid) => {
  //       if (valid) {
  //         this.loading = true
  //         this.$store
  //           .dispatch('user/login', this.loginForm)
  //           .then(() => {
  //             this.$router.push({ path: this.redirect || '/' })
  //             this.loading = false
  //           })
  //           .catch(() => {
  //             this.loading = false
  //           })
  //       } else {
  //         console.log('error submit!!')
  //         return false
  //       }
  //     })
  //   }
  // }
}
</script>

<style >

</style>
