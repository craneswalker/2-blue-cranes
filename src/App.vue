<template>
  <div id="App">
    <link rel="stylesheet" href="https://bootswatch.com/4/flatly/bootstrap.min.css"> 
    <div v-if="scrolled == false">
      <LargeNav class="visible"/>
      <SmallNav class="hidden"/>
    </div>
    <div v-else>
      <LargeNav class="hidden"/>
      <SmallNav class="visible sticky"/>
    </div>
        <TopBanner data-aos="zoom-in" class="visible"/>
    <router-view/>
  </div>
</template>

<script>
import TopBanner from '@/components/TopBanner'
import LargeNav from '@/components/LargeNav'
import SmallNav from '@/components/SmallNav'
import Content from '@/components/Content'
import Products from '@/components/Products'

export default {
  name: 'App',
  components: {
    TopBanner,
    LargeNav,
    SmallNav,
    Content,
    Products
  },
data () {
  return {
    scrolled: false
  };
},
methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
  }
},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
}
}
</script>

<style>
#App, body {
  height: 100%;
  width: 100vw;
}
.hidden {
  width: 100%;
  visibility:hidden;
  position: absolute;
  opacity: 0;
}
.visible {
  visibility: visible;
  opacity: 1;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 600ms, visibility 600ms;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
html, body {
  height: 100%;
}
</style>
