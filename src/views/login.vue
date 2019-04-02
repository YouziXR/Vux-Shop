<template>
    <div class="login-form">
        <group title="loginForm" label-align="right">
            <h4>用户登录</h4>
            <x-input placeholder="用户账号" v-model="userAccount" required="true">
                <img slot="label" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAARxJREFUSA3tVzsKAjEU9IeVWriF2AraegArsfYCXsDbeAwvsI3XsBIULOxtXAXBxhnNfn1BE4ha5MFsXl4mmc2kSUqlH0VZo1tDfQwMgYaG8658BWEHrIBLkVwtFlR/gnYE1DXjn5T58x2gC6yLEzgoBXfKWALbR2b+CTBlDvSAJhABSVSSLJ/E9tqKcrWjAnMK50InnCO56HhhF66Ka3qrRVtcFL3VLlwV1/RWi7a4KHqrXbgqrqm7gYjkTLGPfKr6IVrerYzC9owp2lKIf+ArwkYiEtl2x7T3pMDcOGzPmGe6MFbLTNDt+Kw4gwzXNA0wgWBEzyb96nbMCzgv9LOUap3tMfNFWPeSOIDMsTZg+5rgE2YDhMAN+I+4Aw3iHTDqXC1oAAAAAElFTkSuQmCC">
            </x-input>
            <x-input placeholder="密码" v-model="userPwd" type="password">
                <img slot="label" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcVJREFUSA3tlrtKA0EUhtcLUbwgiiLeSaEiYmGtTyAGeztfy85CK+0sfAI7UbGwUYgRvBBEURHEC35/MhMmMTu74iZpcuDLZOdc/p2zs5MEQYOs5Y+6aeIXYQp64B3ycA5H8AGxLK5wJ9XWYM5T9QXfLlx5YkquOMIpojdgBL7gEC7hDnphDJZhEL5hG+T3WpvXW3SuMkzDI2zBGTzBJ7yBbuAY1PpRmDXX3rZHCQ9RJAOyHbgpfPv9oZVegG6wH9RJ76pbCfDZPE4V0SqvfYH49BgOTMwCo/JCLUpYrZPlikPkpzqiG9CzV+tDLUq422Teh1Yod+i5P5gpm1seYa6ihK1fq4hrNtbmVs3zOqtmJDTZMOH2igXo9RoGbQ5ZR3EIJhntnJkKHSpz9D7rXdc7XzJ3y/cxuw4STtq06fbhxBZ2V7zCpER15t6aAO3MLsib6zhDZY7yxyEDWdCpF7jCaU1gmyDxJE2dnIEJKAi7mytllJIWVVlb0z7/wBU2uvUZmsL16TMqzVY3W12zDrib69Wo6GhL0uxZrZr2BCs7q09xLIHO1VrYM0WztrD79zbHpK4HwJ7bNu4/o34Ss7AHEm+s/QDiqUU2/mZNXgAAAABJRU5ErkJggg==">
            </x-input>
        </group>
    </div>
</template>

<script>
import { XInput,Box, Group, XButton } from 'vux'
export default {
    components: {
        Group,
        XInput,
        Box,
        XButton
    }

}
</script>
<style lang="less" scoped>
    .login-form{
        width: 95%;
        border-radius: 10%;
    }
</style>
