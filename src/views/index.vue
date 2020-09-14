<template>
  <div >
    <div class="searchTop">
		<div class="inputDiv">
			<input type="text" placeholder="搜索资源 " readonly onclick="window.location.href='#'" />
			<img src="../assets/images/searchTop.png" alt />
		</div>
		<div class="rightBtn">
			<img src="../assets/images/icon1.png" alt />
		</div>
    </div>
    <div class="tabDiv">
		<ul class="tabDiv-box">
			<li class="tabDivActive">精选</li>
			<li>关注</li>
			<li>我的圈子</li>
			<li>音乐圈</li>
			<li>私密圈 </li>
			<li>娱乐圈</li>
			<li>娱乐圈</li>
			<li>娱乐圈</li>
			<li>娱乐圈</li>
		</ul>
	</div>
<!-- <ul id="example-1">
  <li v-for="item in items" :key="item.message">
    {{ item.message }}
  </li>
</ul> -->
	<div class="contDiv">
		<no-data :v-show="items.length == 0" />
		<ul class="contDiv-list">
			<li v-for="item in items" :key="item.message" @click="clickCard">
				<div class="contDiv-img">
					<img src="../assets/images/listimg.jpg" alt="">
					<span>10:20</span>
				</div>
				<div class="contDiv-text">
					<div class="contDiv-text-left">
						<img src="../assets/images/headimg.png" alt="">
					</div>
					<div class="contDiv-text-right">
						<div class="t">日出-愿你有一个美好的今日时光！日出-愿你有一个美好好的好的的今日时日出-愿你有一个美好的今日时光光</div>
						<div class="c">
							<p>管理员·1小时前</p>
							<p class="d">127</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
  </div>
</template>

<script>
// import { validUsername } from '@/utils/validate'
// import * as dd from 'dingtalk-jsapi' // 此方式为整体加载钉钉api，也可按需进行加载
// import dingConfig from '@/utils/ding-config' // 钉钉app的常量信息
import axios from 'axios';
import NoData from '@/views/NoData';
// import Cookies from 'js-cookie'

export default {
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
	name: 'index',
	components:{
		NoData
	},
	data(){
		return{
			items:[
				{ message: 'Foo' },
				{ message: 'Bar' }
			]
		}
	},
	created() {
		this.getSelectedCircle();
	},
	methods: {
		clickCard() {
			// console.log(this.$router)
			this.$router.push({path:'/details',params:{userId: '123'}});
			// router.push('home')
			// if (this.is_show_kr) {
			// 	this.dialog = true
			// } else {
			// 	eventBus.$emit('choose', this.id, this.objective)
			// }
		},

		getSelectedCircle(){
			console.log(111111111111);
			// this.loading = true
			// axios.get('/jqkj/cricle/getSelectedCircle', {
			// 	params: {}
			// }).then((res) => {
			// 	// const id = res.data.userid
			// 	// const name = res.data.name
			// 	// Cookies.set('request_user_id', id)
			// 	// Cookies.set('request_user_name', name)
			// 	// if (id && name) {
			// 	// 	this.loading = false
			// 	// 	if (id && name) {
			// 	// 		this.$router.push({ path: this.redirect || '/' })
			// 	// 	}
			// 	// }
			// });
		},

		getUserInfo() {
			// this.loading = true
			// axios
			// 	.get('/kpi/v1/user', {
			// 	params: {
			// 		code: code
			// 	}
			// 	})
			// 	.then((res) => {
			// 	const id = res.data.userid
			// 	const name = res.data.name
			// 	Cookies.set('request_user_id', id)
			// 	Cookies.set('request_user_name', name)
			// 	if (id && name) {
			// 		this.loading = false
			// 		if (id && name) {
			// 		this.$router.push({ path: this.redirect || '/' })
			// 		}
			// 	}
			// })
		},
		showPwd() {
			// if (this.passwordType === 'password') {
			// 	this.passwordType = ''
			// } else {
			// 	this.passwordType = 'password'
			// }
			// this.$nextTick(() => {
			// 	this.$refs.password.focus()
			// })
		},
		handleLogin() {
			// this.$refs.loginForm.validate((valid) => {
			// 	if (valid) {
			// 	this.loading = true
			// 	this.$store
			// 		.dispatch('user/login', this.loginForm)
			// 		.then(() => {
			// 		this.$router.push({ path: this.redirect || '/' })
			// 		this.loading = false
			// 		})
			// 		.catch(() => {
			// 		this.loading = false
			// 		})
			// 	} else {
			// 	console.log('error submit!!')
			// 	return false
			// 	}
			// })
		}
	}
}
</script>

<style >

</style>
