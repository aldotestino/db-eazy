<template>
  <nav class="navbar">
    <a class="title" href="/"><img src="../assets/database.svg"/>&nbsp;db-eazy</a>
    <div class="right">
      <div class="input-container">
        <img src="../assets/bx-search.svg" alt="" srcset="">
        <input v-model="state.query" type="text" class="input" placeholder="Search" @keyup="startQuery">
        <div class="results" v-if="state.query && state.results.length">
          <a class="result" v-for="res in state.results" :href="res.ref" :key="res.name"><i :class="res.icon"></i>&nbsp;{{res.name}}</a>
        </div>
      </div>
      <div class="links">
        <a id="npm" target="blank" href="https://www.npmjs.com/package/db-eazy"><i class="fab fa-npm fa-3x"></i></a>
        <a id="gh" target="blank" href="https://github.com/aldotestino/db-eazy"><i class="fab fa-github fa-2x"></i></a>
      </div>
    </div>
  </nav>
</template>

<script>
import state from '@/store/index.js';

export default {
  setup() {

    function startQuery() {
      const reg = new RegExp(state.query, 'i');
      state.results = state.functions.filter(f => f.name.match(reg));
      console.log(state.results);
    }

    return {
      state,
      startQuery
    };
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  padding: 0 30px;
  background-color: rgba($color: #F3F3F3, $alpha: 0.7);
  backdrop-filter: blur(4px);
  box-shadow: 0 3px 6px rgba($color: #000000, $alpha: 0.3);
  .title {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
    img{
      height: 40px;
    }
  }
  .right {
    display: flex;
    align-items: center;

    .input-container{
      position: relative;
      margin-right: 30px;
      display: flex;
      align-items: center;
      padding: 5px 10px 3px 10px;
      background: #fff;
      border-bottom: 2px solid #fff;
      transition:  all .2s ease;
      &:focus-within {
        border-color: rebeccapurple;
      }
      img {
        height: 20px;
        width: auto;
        margin-right: 10px;
        color: #F3F3F3;
      }
      .input{
        background: none;
        border: none;
        outline: none;
        font-size: 24px;
        font-family: Montserrat;
        &::placeholder {
          font-style: italic;
        }
      }
      .results{
        z-index: -1;
        background-color: #F3F3F3;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding-top: 39px;
        background-color: #F3F3F3;
        box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.3);
        .result {
          transition: all .2s ease;
          display: block;
          padding: 10px;
          text-decoration: none;
          color: #333;
          font-size: 20px;
          outline: none;
          &:hover{
            background-color: #d3d3d3;
          }
          &:focus{
            background-color: #d3d3d3;
          }
        }
      }
    }

    .links {
      display: flex;
      align-items: center;
      a {
        i {
          height: 30px;
          width: auto;
        }
      }
      #npm {
        margin-right: 30px;
        color: #CB3837;
      }
      #gh{
        color: #000;
      }
    }
  }
}
</style>