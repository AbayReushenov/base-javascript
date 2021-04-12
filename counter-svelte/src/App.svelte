<script>
  export let name;
  export let initialCount;
  let count = initialCount;
</script>

<main>
  <h1>{name}</h1>
  <h1>{count}</h1>
  <button on:click={() => count++}>+</button>
  <button on:click={() => count--}>-</button>
  <button on:click={()=> count = initialCount}>сбросить</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
  button{
  background-color: #ad352d; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  margin: 2%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  }
button:hover{
 color:#cc17f0;
 background-color:#ecc1ba;
 }

@media all and (max-width:30em){
button{
  display:block;
  margin:0.4em auto;
}
}

</style>
