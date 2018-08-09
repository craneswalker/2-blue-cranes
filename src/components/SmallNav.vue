<template>
  <div id="SmallNav">
    <nav class="nav-bar">
      <div class="left-nav-container">
        <img id="nav-logo" src="../assets/logos/2bc-blue-no-text.png" alt="2 Blue Cranes">
        <ul class="menu-list">
          <li class="nav-li">
            <router-link class="nav-link" to="/">About Our CBD</router-link>
          </li>
          <li class="nav-li">
            <router-link class="nav-link" to="/products">Products</router-link>
          </li>
        </ul>
      </div>  
      <div class="right-nav-container">
        <a class="fb-thumbnail nav-link" href="https://www.facebook.com/2BlueCranes/">
          <img 
            class="fb-thumbnail-img"
            src="../assets/thumbnails/facebook-square.png" 
            alt="2 Blue Cranes Facebook Page"
          >
        </a>
        <a href="tel:+17202702525">
          <button type="button" class="btn btn-green btn-md">Call Now</button>
        </a>
      </div> 
    </nav>
  </div>
</template>
<script>
export default {
  name: 'SmallNav',
  data () {
    return {

    }
  },
}
</script>

<style scoped>
  #SmallNav {
    max-width: 100vw;
    background-color: rgb(0,122,181);
    -webkit-box-shadow: 0 0 20px rgb(5, 5, 5);
    box-shadow: 0 0 20px rbga(0,0,0,0.6);
    opacity: 0.9;
    z-index: 10000;
  }
  #nav-logo {
    width: 75px;
    height: 100%;
    margin: 10px;
    opacity: 1;
  }
  .left-nav-container,
  .right-nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .menu-list, .nav-bar {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    align-items: center;
  }
  .nav-bar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-link, .nav-li {
    color:white;
  }
  .nav-li {
    margin-top: 7px;
  }
  .btn-green {
    background: rgb(74,178,96);
    border: 1px solid white;
    color: white;
    margin: 25px;
  }
  .fb-thumbnail {
    padding: 0px;
  }
  .fb-thumbnail-img {
    max-width: 50px;
    max-height: 50px;
  }
  a {
    color: rgb(0, 134, 54);
  }
</style>
