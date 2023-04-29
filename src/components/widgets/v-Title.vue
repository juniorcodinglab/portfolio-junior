<script>

export default {
  props: ['number','title'],
  data: function () {
    return {
      number: this.number,
      title: this.title,
    }
  }
}
</script>

<template>
  <div class="title">
      <h4>
        <span class="number">{{ number <= 9 ? ("0" + number) : number }}.</span>
        <span class="text">{{ title }}</span>
      </h4>
  </div>
</template>
