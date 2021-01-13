<template>
  <div class="content-error-container">
    <div class="error-message-wrapper">
      <p class="error-title">Error! Not found (this page does not exist).</p>
      <p class="error-message">
        Please <a href="https://yts.mx/login">LOGIN</a> to gain access to other YIFY features
        <br>or <a href="https://yts.mx/register">Create a Free Account</a> to join YTS.LT (it takes 
        few seconds).
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.content-error-container {
  display: grid;
  place-items: center;

  .error-message-wrapper {
    text-align: center;
    margin: auto;
    
    .error-title {
      color: #6ac045;
      font-size: 1.4rem;
      font-weight: bold;
      margin: 0;
      margin-bottom: 2rem;
    }

    .error-message {
      font-weight: thin;
      font-style: italic;
      margin: 0;
    }

  }
}
</style>