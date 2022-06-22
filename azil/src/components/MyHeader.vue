<template>
<div>
    <!-- <img src="../assets/baby giraffe.png" class="main_logo" alt=""> -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

        <router-link to="/">
            <h1 class="logo me-auto me-lg-0"><a href="#">Azil</a></h1>
        </router-link>   
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#">Početna</a></li>
          <li class="dropdown"><a href="#"><span>Životinje</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Psi</a></li>
              <li><a href="#">Mačke</a></li>
              <li><a href="#">Ptice</a></li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#">Izgubljeni ljubimci</a></li>
          <li><a class="nav-link scrollto" href="#">Dodaj oglas</a></li>
          <li><a class="nav-link scrollto" href="#">Moj nalog</a></li>
          <li><a class="nav-link scrollto" href="#">O nama</a></li>
          <li><a class="nav-link scrollto" href="#contact">Kontakt</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->
      <a href="#" class="book-a-table-btn scrollto d-none d-lg-flex">Registruj se</a>

    </div>
  </header>
</div>
</template>

<style>
/* .main_logo{
    width: 170px;
    height: 200px;
} */

/*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  background: rgba(12, 11, 9, 0.6);
  border-bottom: 1px solid rgba(12, 11, 9, 0.6);
  transition: all 0.5s;
  z-index: 997;
  padding: 15px 0;
}
#header.header-scrolled {
  top: 0;
  background: rgba(0, 0, 0, 0.85);
  border-bottom: 1px solid #37332a;
}
#header .logo {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
}
#header .logo a {
  color: #fff;
}
#header .logo img {
  max-height: 40px;
}

/*--------------------------------------------------------------
# Book a table button Menu
--------------------------------------------------------------*/
.book-a-table-btn {
  margin: 0 0 0 15px;
  border: 2px solid #cda45e;
  color: #fff;
  border-radius: 50px;
  padding: 8px 25px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
  transition: 0.3s;
}
.book-a-table-btn:hover {
  background: #cda45e;
  color: #fff;
}
@media (max-width: 992px) {
  .book-a-table-btn {
    margin: 0 15px 0 0;
    padding: 8px 20px;
  }
}

/*--------------------------------------------------------------
# Navigation Menu
--------------------------------------------------------------*/
/**
* Desktop Navigation 
*/
.navbar {
  padding: 0;
}
.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}
.navbar li {
  position: relative;
}
.navbar a, .navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  color: #fff;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 14px;
}
.navbar a i, .navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}
.navbar a:hover, .navbar .active, .navbar .active:focus, .navbar li:hover > a {
  color: #d9ba85;
}
.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 14px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}
.navbar .dropdown ul li {
  min-width: 200px;
}
.navbar .dropdown ul a {
  padding: 10px 20px;
  color: #444444;
}
.navbar .dropdown ul a i {
  font-size: 12px;
}
.navbar .dropdown ul a:hover, .navbar .dropdown ul .active:hover, .navbar .dropdown ul li:hover > a {
  color: #cda45e;
}
.navbar .dropdown:hover > ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}
.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}
.navbar .dropdown .dropdown:hover > ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}
@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }
  .navbar .dropdown .dropdown:hover > ul {
    left: -100%;
  }
}
</style>

<script>

export default{

    name:'MyHeader'

}
</script>
