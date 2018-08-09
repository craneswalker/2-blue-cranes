<template>
  <div id="LargeNav">
    <nav class="navbar">
      <div class="left-nav-container">
        <img id="nav-logo" src="../assets/logos/2BlueCranes-Transparent_png.png" alt="2 Blue Cranes">
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
          <button type="button" class="btn btn-blue btn-md">Call Now</button>
        </a>
      </div>  
    </nav>
  </div>
</template>

<script>
export default {
  name: 'LargeNav',
  data () {
    return {

    }
  },
}
</script>

<style scoped>
  #nav-logo {
    width: 75px;
    height: 100%;
  }
  .navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    background: none;
    z-index: 9999;
  }
  .left-nav-container,
  .right-nav-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  .right-nav-container {
    display: flex;
    align-items: center;
    width: 180px;
    height: 50px;
  }
  .menu-list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    list-style-type: none;
  }
  .nav-link, .nav-li {
    color:white;
  }
  .nav-li {
    margin-top: 7px;
  }
  .btn-blue {
    background: rgb(0,122,181);
    border: 1px solid white;
    color: white;
    margin: 25px;
  }
  .fb-thumbnail {
    padding:0%;
  }
  .fb-thumbnail-img {
    max-width: 50px;
    max-height: 50px;
  }
  a {
    color: rgb(0, 134, 54);
  }
</style>
