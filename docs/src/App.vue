<template>
  <Navbar />
  <main class="main">
    <header class="header">
      <div class="title">
        <h1>A simple JSON based local database</h1>
        <div class="tag">v 1.0.4</div>
      </div>
      <div class="description">
        <p>This package has {{state.downloads}} downloads on npm</p>
        <p>Support it on Github <span class="gh-btn"><a class="github-button" href="https://github.com/aldotestino/db-eazy" data-color-scheme="dark" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star aldotestino/db-eazy on GitHub">Star</a></span></p>
      </div>    
    </header>

    <section class="section" id="installation">
      <h2><i class="fas fa-arrow-down"></i>&nbsp;Installation</h2>
      <p class="description">You can install this package from npm</p>
      <pre class="code" id="1">
<span class="const">npm</span> install db-eazy<i class="fas fa-copy" @click="copyToClipboard(1)"></i></pre>
    </section>
    
    <section class="section" id="quickstart">
      <h2><i class="fas fa-play-circle"></i>&nbsp;Quick Start</h2>
      <p class="description">Initialize your Databse instance</p>
      <pre class="code" id="2">
<span class="lang">import</span> { <span class="prop">Database</span> } <span class="lang">from</span> <span class="string">'db-eazy'</span>;
<span class="lang">import</span> <span class="prop">path</span> <span class="lang">from</span> <span class="string">'path'</span>;

<span class="comment">// path to db folder</span>
<span class="comment">// (the db folder will be automatically created)</span>
<span class="lang">const</span> <span class="const">db</span> <span class="sign">=</span> <span class="lang">Database</span>(<span class="prop">path</span>.<span class="func">join</span>(<span class="prop">__dirname</span>, <span class="string">'..'</span>)); 

<span class="lang">type</span> <span class="const">User</span> <span class="sign">=</span> {
  <span class="prop">name</span>: <span class="const">string</span>;
  <span class="prop">email</span>: <span class="const">string</span>;
}

<span class="lang">const</span> <span class="const">users</span> <span class="sign">=</span> <span class="prop">db</span>.<span class="func">get</span>&lt;<span class="const">User</span>&gt;(<span class="string">'users'</span>);<i class="fas fa-copy" @click="copyToClipboard(2)"></i></pre>
    </section>

    <section class="section" id="insert">
      <h2><i class="fas fa-plus"></i>&nbsp;Insert</h2>
      <p class="description">Insert an object in a collection</p>
      <pre class="code" id="3">
<span class="comment">// returns the object that has been inserted</span>
<span class="prop">users</span>.<span class="func">insert</span>({
  <span class="prop">name</span>: <span class="string">'Dannel Bakesef'</span>,
  <span class="prop">email</span>: <span class="string">'dbakesef6@japanpost.jp'</span>;
});<i class="fas fa-copy" @click="copyToClipboard(3)"></i></pre>
    </section>

    <section class="section" id="query">
      <h2><i class="fas fa-search"></i>&nbsp;Query</h2>
      <p class="description">Types of query</p>
      <pre class="code" id="4">
<span class="comment">// returns an array of users</span>
<span class="prop">users</span>.<span class="func">findAll</span>();

<span class="comment">// returns the user with that specific id</span>
<span class="prop">users</span>.<span class="func">findOne</span>(<span class="string">'id_of_the_user'</span>);

<span class="comment">// returns an array of users</span>
<span class="comment">// that matches the query parameter</span>
<span class="prop">users</span>.<span class="func">find</span>({<span class="prop">property</span>: <span class="string">'name'</span>, <span class="prop">value</span>: <span class="string">'John'</span>});<i class="fas fa-copy" @click="copyToClipboard(4)"></i></pre>
    </section>

    <section class="section" id="update">
      <h2><i class="fas fa-pen"></i>&nbsp;Update</h2>
      <p class="description">Types of update</p>
      <pre class="code" id="5">
<span class="comment">// update the specific user, setting the passed property</span>
<span class="comment">// with the new value and returns the updated user</span>
<span class="prop">users</span>.<span class="func">updateOne</span>(<span class="string">'id_of_the_user'</span>, 
  {<span class="prop">type</span>: <span class="string">'$set'</span>, <span class="prop">property</span>: <span class="string">'email'</span>, <span class="prop">value</span>: <span class="string">'new_email'</span>});

<span class="comment">// if the property is of type number increments </span>
<span class="comment">// it by one and returns the updated user</span>
<span class="prop">users</span>.<span class="func">updateOne</span>(<span class="string">'id_of_the_user'</span>, 
  {<span class="prop">type</span>: <span class="string">'$inc'</span>, <span class="prop">property</span>: <span class="string">'age'</span>});<i class="fas fa-copy" @click="copyToClipboard(5)"></i></pre>
    </section>

    <section class="section" id="remove">
      <h2><i class="fas fa-minus"></i>&nbsp;Remove</h2>
      <p class="description">Remove an object from a collection</p>
      <pre class="code" id="6">
<span class="comment">// removes the specific user and returns it</span>
<span class="prop">users</span>.<span class="func">remove</span>(<span class="string">'id_of_the_user'</span>);<i class="fas fa-copy" @click="copyToClipboard(6)"></i></pre>
    </section>

    <section class="section" id="uniqueproperty">
      <h2><i class="fas fa-fingerprint"></i>&nbsp;Unique Property</h2>
      <p class="description">Set a property to be unique in a collection</p>
      <pre class="code" id="7">
<span class="comment">// set the email as an unique property</span>
<span class="comment">// (checks for updates too)</span>
<span class="prop">users</span>.<span class="func">setUniqueProperty</span>(<span class="string">'email'</span>);<i class="fas fa-copy" @click="copyToClipboard(7)"></i></pre>
    </section>
  </main>
  <footer class="footer">
    <div class="infos">
      <p class="name">aldotestino ©2020 - <a href="https://github.com/aldotestino/db-eazy/blob/master/LICENSE" target="blank">MIT license</a></p>
      <p>Politecnico di Bari - Ingegneria Informatica e dell' Automazione</p>
      <p>Made with Vue <i class="fab fa-vuejs"></i></p>
    </div>
    <div class="links">
      <p><a class="github-button" href="https://github.com/aldotestino" data-color-scheme="light" data-size="large" data-show-count="true" aria-label="Follow @aldotestino on GitHub">Follow @aldotestino</a></p>
      <p><i class="fab fa-npm"></i> <a href="https://www.npmjs.com/~aldotestino" target="blank">Npm</a></p>
      <p><i class="fab fa-twitter"></i> <a href="https://www.twitter.com/aldotestino4" target="blank">Twitter</a></p>
    </div>
  </footer>
</template>

<script>
import state from '@/store/index';
import Navbar from '@/components/Navbar.vue'
import { onMounted, onUnmounted } from 'vue';

const base_url = 'https://cors-anywhere.herokuapp.com/https://npm-stat.com/api/download-counts?package=db-eazy&from=2020-10-07&until=';

export default {
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    
    onMounted(() => {
      getDownloads();
      window.addEventListener('hashchange', clearQuery);
    });

    async function getDownloads() {
      const url = `${base_url}${getDate()}`;
      const res = await fetch(url);
      const json = await res.json();
      const dbez = json['db-eazy'];
      state.downloads = Object.values(dbez).reduce((s,a) => s += a, 0);
    }

    function getDate() {
      const d = new Date();
      return d.toISOString().slice(0,10);
    }

    function copyToClipboard(id) {
      const range = document.createRange();
      range.selectNode(document.getElementById(id));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    }

    onUnmounted(() => window.removeEventListener('hashchange', clearQuery));

    function clearQuery() {
     state.query = '';
    }
    
    return {
      copyToClipboard,
      state
    }
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  font-family: Montserrat;
  color: #333;
}

.main{
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 100px;

  .header{
    .title {
      display: flex;
      h1{
        font-size: 40px;
        font-weight: 600;
        margin-right: 10px;
      }
      .tag{
        align-self: flex-start;
        right: 0;
        color: #fff;
        padding: 5px 10px;
        border-radius: 30px;
        background-color: rebeccapurple;
      }
    }
    
    .description{
      font-size: 24px;
      margin-top: 10px;
      color: rebeccapurple;
      p {
        &:nth-child(2) {
          margin-top: 5px;
          .gh-btn {
            margin-left: 10px;
          }
        }
      }
    }
  }

  .section{
    padding-top: 50px;
    h2{
      font-weight: normal;
      font-size: 36px;
      margin-bottom: 10px;
    }
    .description{
      font-size: 24px;
      margin-bottom: 10px;
      color: rebeccapurple;
    }
    .code {
      position: relative;
      padding: 20px;
      width: 100%;
      max-width: 700px;
      font-size: 20px;
      background-color: #F6F8FA;
      border-radius: 10px;
      box-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.3);
      &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
      }
      
      i {
        position: absolute;
        right: 20px;
        top: 20px;
        cursor: pointer;
        color: lightgrey;
        transition: color .2s ease;
        &:hover {
          color: rebeccapurple;
        }
      }

      .lang {
        color: #C678DD;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .prop {
        color: #E06C6B;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .string {
        color: #98C379;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .sign {
        color: #56B6C2;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .func {
        color: #61AFEF;
        &::selection {
          background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .const {
        color: #E5C07B;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
      .comment {
        color: #b1b0b0;
        &::selection {
        background-color: rgba($color: #E06C6B, $alpha: 0.2);
        }
      }
    }
  }
}
.footer {
  background-color: #333;
  padding: 30px 100px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: inset 0 10px 6px rgba($color: #000000, $alpha: 0.3);

  p{
    line-height: 30px;
    font-size: 18px;
    a{
      color: #fff;
    }
  }
}

@media screen and (max-width: 950px) {
  .main {
    padding: 50px 5px;

    .header {
      .title {
        flex-direction: column;
        h1 {
          font-size: 36px;
          text-align: center;
          margin-right: 0px;
        }
        .tag {
          margin-top: 5px;
          align-self: center
        }
      }
      .description {
        p {
          text-align: center;
        }
      }
    }

    .section {
      display: flex;
      flex-direction: column;
      align-items: center;
      
      h2 {
        font-size: 32px;
      }

      .description {
        text-align: center;
      }

      .code {
        overflow-x: auto;

        i {
          display: none;
        }
      }
    }
  }

  .footer {
    flex-direction: column;
    padding-right: 10px;
    padding-left: 10px;

    .links {
      padding-top: 10px;
    }
  }
}
</style>