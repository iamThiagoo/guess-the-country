<template>
  <div id="map" class="w-full h-full" />
</template>

<script setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import mapboxgl from 'mapbox-gl'
  import 'mapbox-gl/dist/mapbox-gl.css'
  import { useGameStore } from '../../stores/game'
  import { useSystemStore } from '../../stores/system'
  import { useUserStore } from '../../stores/user'

  const game = useGameStore()
  const system = useSystemStore()
  const user = useUserStore()

  const map = ref(null)
  const mapIsReady = ref(false)
  const spinEnabled = ref(true)

  const isPlaying = computed(() => game.$state.status === 'playing')
  const currentCountry = computed(() => game.$state.currentCountry)
  const currentMapStyle = computed(() => system.$state.mapStyle)
  const username = computed(() => user.$state.name)

  onMounted(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN

    const secondsPerRevolution = 1000
    const maxSpinZoom = 10
    const slowSpinZoom = 3
    let userInteracting = false

    map.value = new mapboxgl.Map({
      container: 'map',
      style: currentMapStyle.value,
      center: [30, 15],
      zoom: 0.4,
      minZoom: 0,
      bearing: 0,
      antialias: true,
    })

    map.value.addControl(new mapboxgl.NavigationControl())

    function spinGlobe() {
      const zoom = map.value.getZoom()
      if (spinEnabled.value && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution

        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom)
          distancePerSecond *= zoomDif
        }

        const center = map.value.getCenter()
        center.lng -= distancePerSecond

        requestAnimationFrame(() => {
          map.value.easeTo({
            center,
            duration: 1000,
            easing: n => n,
            essential: true,
          })
        })
      }
    }

    map.value.on('styledata', () => {
      const layers = map.value?.getStyle().layers
      if (!layers) return

      for (const layer of layers) {
        const id = layer.id

        if (
          layer.type === 'symbol' &&
          layer.layout?.['text-field'] &&
          (id.includes('place') ||
            id.includes('settlement') ||
            id.includes('capital') ||
            id.includes('city'))
        ) {
          map.value?.setLayoutProperty(id, 'visibility', 'none')
        }

        if (
          id.includes('road') ||
          id.includes('street') ||
          id.includes('highway') ||
          id.includes('bridge') ||
          id.includes('tunnel') ||
          id.includes('rail') ||
          id.includes('path') ||
          id.includes('building') ||
          id.includes('waterway')
        ) {
          map.value?.setLayoutProperty(id, 'visibility', 'none')
        }

        if (id.includes('admin-1-boundary')) {
          map.value?.setLayoutProperty(id, 'visibility', 'none')
        }
      }
    })

    map.value.on('style.load', () => {
      map.value.setFog({})

      map.value.addSource('countries', {
        type: 'vector',
        url: 'mapbox://mapbox.country-boundaries-v1',
      })

      map.value.addLayer({
        id: 'country-highlight',
        type: 'fill',
        source: 'countries',
        'source-layer': 'country_boundaries',
        paint: {
          'fill-color': '#8B5CF6',
          'fill-opacity': 0.4,
        },
        filter: ['==', ['get', 'name_en'], ''],
      })

      map.value.getStyle().layers.forEach(layer => {
        if (layer.layout && layer.layout['text-field']) {
          map.value?.setLayoutProperty(layer.id, 'text-field', ['get', 'name_en'])
        }
      })

      if (currentCountry.value) {
        flyToCountry(currentCountry.value)
      }
    })

    map.value.on('load', () => {
      system.setLoading(false)
      mapIsReady.value = true
      flyToCountry(currentCountry.value)
    })

    spinGlobe()
  })

  const flyToCountry = country => {
    if (username.value && country && map.value && mapIsReady.value) {
      map.value.flyTo({ center: country.coordinates, zoom: 3.5, duration: 1500 })
      spinEnabled.value = false
      map.value.setFilter('country-highlight', ['==', ['get', 'name_en'], country.name_en])
      hideCountryLabel(country.name_en)
    }
  }

  const hideCountryLabel = countryNameToHide => {
    const layers = map.value.getStyle().layers

    layers.forEach(layer => {
      if (layer.layout && layer.layout['text-field']) {
        map.value.setLayoutProperty(layer.id, 'text-field', [
          'case',
          ['==', ['get', 'name_en'], countryNameToHide],
          '',
          ['get', 'name_pt'],
        ])
      }
    })
  }

  watch(isPlaying, playing => {
    if (playing && map.value) {
      map.value.zoomTo(3.5, { duration: 1000 })
    }
  })

  watch(currentMapStyle, mapStyle => {
    map.value.setStyle(mapStyle)
  })

  watch(
    () => game.$state.currentCountry,
    country => {
      flyToCountry(country)
    },
    { immediate: true, deep: true }
  )
</script>

<style scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
