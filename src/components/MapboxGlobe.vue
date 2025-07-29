<template>
  <div id="map" class="w-full h-full" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

onMounted(() => {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [0, 20],
    zoom: 0.5,
    minZoom: 0,
    maxBounds: [
      [-180, -85],
      [180, 85],
    ],
    bearing: 0,
    antialias: true,
  })

  map.on('styledata', () => {
    const layers = map.getStyle().layers
    if (!layers) return

    for (const layer of layers) {
      if (
        layer.type === 'symbol' &&
        layer.layout &&
        layer.layout['text-field']
      ) {
        map.setLayoutProperty(layer.id, 'text-field', ['get', 'name_pt'])
      }
    }
  })

  const secondsPerRevolution = 1000
  const maxSpinZoom = 5
  const slowSpinZoom = 3

  let userInteracting = false
  let spinEnabled = true

  function spinGlobe() {
    const zoom = map.getZoom()
    if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
      let distancePerSecond = 360 / secondsPerRevolution
      if (zoom > slowSpinZoom) {
        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom)
        distancePerSecond *= zoomDif
      }
      const center = map.getCenter()
      center.lng -= distancePerSecond
      map.easeTo({ center, duration: 2000, easing: (n) => n })
    }
  }

  map.on('mousedown', () => (userInteracting = true))
  map.on('mouseup', () => {
    userInteracting = false
    spinGlobe()
  })
  map.on('dragend', () => {
    userInteracting = false
    spinGlobe()
  })
  map.on('pitchend', () => {
    userInteracting = false
    spinGlobe()
  })
  map.on('rotateend', () => {
    userInteracting = false
    spinGlobe()
  })
  map.on('moveend', () => {
    spinGlobe()
  })

  spinGlobe()
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
