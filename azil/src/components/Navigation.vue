<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand active" href="#"><img src="../assets/Home.png" class="invert" alt="">Почетна</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Животиње
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#"><img src="../assets/dog-logo.png" class="small-icons" alt=""> Пси</a>
            <a class="dropdown-item" href="#"><img src="../assets/cat-logo.png" class="small-icons" alt="">Мачке</a>
            <a class="dropdown-item" href="#"><img src="../assets/bird-logo.png" class="small-icons" alt="">Птице</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Изгубљени љубимци</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Додај оглас</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Мој налог</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">О нама</a>
        </li>
        
    </ul>
  </div>
</nav>
</template>

<style>

/*overflow: hidden;*/
.invert{
    filter: invert(1);
    margin-top: -6px;
}
.small-icons{
    width: 25px;
    height: 30px;
}
.navbar-dark .navbar-nav .nav-link{
    font-size: 15px;
    /*font-family: cirilica;*/
}
</style>

<script>


export default{

    name:'Navigation'
}
</script>