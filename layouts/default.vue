<script>
export default {}
</script>

<template>
  <div class="layout">
    <header>
      <nav>
        <nuxt-link to="/">ru</nuxt-link>
        |
        <nuxt-link to="/en/">en</nuxt-link>
      </nav>
      <h1>{{$t('title')}}</h1>
    </header>
    <nuxt/>
  </div>
</template>
