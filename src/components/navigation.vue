<template>
  <nav>

    <p class="nav-brand">Elevensity</p>
    <ul class="nav-list">
      <li><router-link class="link" to="/">Blogs</router-link></li>
      <li><router-link class="link" to="/add">New Blog</router-link></li>
      <li><router-link class="link" to="/topics">Topics</router-link></li>
    </ul>

    <span class="nav-menu" uk-toggle="target: #offcanvas-flip" uk-icon="icon: menu; ratio:1.5"></span>

    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
        <div class="uk-offcanvas-bar">
            <button class="uk-offcanvas-close" type="button" uk-close></button>
            <ul class="nav-menu-list">
              <li><router-link class="link" to="/">Blogs</router-link></li>
              <li><router-link class="link" to="/add">New Blog</router-link></li>
              <li><router-link class="link" to="/topics">Topics</router-link></li>
            </ul>

        </div>
    </div>

  </nav>
</template>

<script>
export default {

}
</script>

<style>
  nav {
    align-items: baseline !important;
    background: #212121;
    display: flex;
    justify-content: space-between;
    padding: 7px 20px 0 20px;
  }

  .nav-brand {
    color: #fff;
    font-size: 24px;
  }

  .nav-list {
    display: flex;
    list-style: none;
  }

  .nav-menu {
    color: #fff;
    display: none;
  }

  .link {
    color: #fff;
    font-size: 14px;
    margin: 0 20px;
    text-decoration: none;
  }
  .link:hover {
    color: #fff;
    text-decoration: none !important;
  }

  .nav-menu-list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 150px;
    list-style: none;
    margin: 50px auto !important;
  }

  .nav-menu-list .link {
    font-size: 16px;
    margin: 20px auto;
  }

  .router-link-exact-active {
    color: #ff65a0;
  }

  .router-link-exact-active:hover {
    color: #ff65a0;
  }

  @media screen and (max-width: 800px) {
    .nav-list {
      display: none;
    }

    .nav-menu {
      display: inline;
      padding-top: 7px;
    }
  }
  
</style>