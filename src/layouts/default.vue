<script setup>
useHead({
  script: [
      {
          type: 'text/javascript',
          content: '@/assets/js/yandex.js'
      }
  ]
})
</script>

<template>
    <div h-full w-full>
        <slot />
        
        <img src="https://mc.yandex.ru/watch/88635425" style="position:absolute; left:-9999px;" alt="" />
    </div>
</template>