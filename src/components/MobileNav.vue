<template>
  <div id="MobileNav">
    <div>
    <nav class="nav-bar">
      <img id="nav-logo" src="../assets/logos/2BlueCranes-birds-only.png" alt="2 Blue Cranes">

      <div @click="navToggle = !navToggle" class="hamburger-button">
        <span class="burger-line"></span>
        <span class="burger-line"></span>         
        <span class="burger-line"></span>
      </div>
    </nav>
    </div>
    <section :class='{hidden : navToggle}'>
      <router-link class="nav-link dropdown-button" to="/">About Our CBD</router-link>    
      <router-link class="nav-link dropdown-button" to="/products">Products</router-link>
    </section>

  </div>
</template>
<script>
export default {
  name: 'MobileNav',
  data () {
    return {
      navToggle: true,
    }
  },
}
</script>

<style scoped>
  
  #MobileNav {
    max-width: 100vw;
    background-color: rgb(74,178,96);
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
  .hamburger-button {
    width: 25px;
    height: 25px;
    margin-right: 25px;
  }
  .burger-line { 
    display: block; 
    width: 19px; 
    height: 3px; 
    margin: 4px 0; 
    background: white; 
    z-index: 99; 
  }
  .dropdown-button {
    width: 200px;
    border-bottom: solid 1px white;
    color: white;
    margin: 2px;
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
  section {
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 10000;
  }
  a {
    color: rgb(0, 134, 54);
  }

</style>
