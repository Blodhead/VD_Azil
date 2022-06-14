<template>
    <div class="menu">
<div id="google_translate_element"></div>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Почетна</a> 
        <div class="dropdown show">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" target="_blank" rel="noopener">Животиње</a> 

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </div>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Изгубљени љубимци</a> 
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Додај оглас</a> 
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">Мој налог</a> 
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">О нама</a> 

    </div>
</template>

<style>

.menu a{ 
    color: whitesmoke;
    float: left;
    padding: 14px 16px;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    margin-right: 5px;
}
.menu a:link, .menu a:visited {
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.menu a:hover,.menu a:active {
  background-color: green;
  color: white;
}
.menu {
    overflow: hidden;
    background-color: #333;
}
</style>

<script>


export default{

    name:'Navigation'
}
</script>