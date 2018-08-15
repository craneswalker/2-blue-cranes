<template>
  <div id="TheFooter">
    <nav>
      <ul class="footer-menu-list">
        <li class="footer-li">
          <router-link class="footer-link" to="/">About Our CBD</router-link>
        </li>
        <li class="footer-li">
          <router-link class="footer-link" to="/products">Products</router-link>
        </li>
      </ul>
    </nav>
    <mq-layout mq="tablet+">
      <p class="footer-text">
        © 2018 - 2 Blue Cranes  
        &emsp;|&emsp; Monument, Colorado 
        &emsp;|&emsp; 720-270-2525
      </p>
    </mq-layout>
    <mq-layout mq="mobile">
      <p class="footer-text-mobile">
        © 2018 - 2 Blue Cranes  
        <br> Monument, Colorado 
        <br> 720-270-2525
      </p>
    </mq-layout>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
    }
  },
}
</script>

<style scoped>
  #TheFooter {
    height:120px;
    max-width: 100vw;
    margin-top: 25px;
    background-color: rgb(74,178,96);
    -webkit-box-shadow: 0 0 20px rgb(5, 5, 5);
    box-shadow: 0 0 20px rbga(0,0,0,0.6);
    z-index: 10000;
  }
  nav {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .footer-menu-list {
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    margin-top: 15px;
  }
  .footer-link {
    color: white;
  }
  .footer-text {
    color: white;
    text-align: center;
    font-size: 12px;
  }  
  .footer-text-mobile {
    color: white;
    text-align: center;
    font-size: 12px;
    margin-bottom: 15px;
  }
</style>