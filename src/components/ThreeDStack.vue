<template>
  <div class="three-d-container">
    <div class="three-d-stage">
      <div class="three-d-object">
        <div
          v-for="(layer, index) in layers"
          :key="index"
          :class="['three-d-layer', layer.visible ? 'is-visible' : 'is-hidden']"
          :style="{
            transform: `translateX(${layer.x}px) translateZ(${layer.z}px) rotateZ(-2deg)`,
            zIndex: Math.round(layer.z)
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const layers = [
  { x: -170.35, z: -250, visible: false },
  { x: -165.19, z: -242.01, visible: true },
  { x: -48.21, z: -48.22, visible: true },
  { x: -58.45, z: 227.57, visible: true },
  { x: 2.57, z: 392.43, visible: true },
  { x: 60.44, z: 208.22, visible: true },
  { x: 52.81, z: -67.99, visible: true },
  { x: -170.35, z: -250, visible: false },
  { x: -170.35, z: -250, visible: false },
  { x: -170.35, z: -250, visible: false },
]
</script>

<style scoped>
.three-d-container {
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
}
.three-d-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1350px;
}
.three-d-object {
  position: relative;
  width: 29px;
  height: 38px;
  transform-style: preserve-3d;
}
.three-d-layer {
  position: absolute;
  inset: 0;
  width: 29px;
  height: 38px;
  transform-style: preserve-3d;
  backface-visibility: visible;
  will-change: transform;
  opacity: 1;
  border-radius: 4px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition:
    transform 600ms ease,
    opacity 300ms ease;
}
.three-d-layer.is-hidden {
  visibility: hidden;
}
.three-d-layer.is-visible {
  visibility: visible;
}
</style>
