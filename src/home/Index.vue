<template>
  <div>
    <Head></Head>
    <Information></Information>
    <Information></Information>
    <Information></Information>
  </div>
</template>


<script>

import Information from '../common/Information';
import Head from './head';


export default ({
  name:'Home',
  components:{
    Head,
    Information
  }
})


</script>

