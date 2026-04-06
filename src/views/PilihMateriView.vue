<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getMateriByMatkul } from '../data/materi'

const route = useRoute()
const router = useRouter()

const mataKuliah = computed(() => {
  const queryValue = route.query.matkul
  return typeof queryValue === 'string' ? queryValue : 'Mata kuliah belum dipilih'
})

const daftarMateri = computed(() => {
  if (mataKuliah.value === 'Mata kuliah belum dipilih') {
    return []
  }

  return getMateriByMatkul(mataKuliah.value)
})

const bukaMateri = (url: string) => {
  window.location.assign(url)
}
</script>

<template>
  <main class="materi-page">
    <section class="card">
      <p class="label">Halaman Pilih Materi</p>
      <h1 class="title">{{ mataKuliah }}</h1>
      <p class="subtitle">Silakan pilih materi yang ingin dipelajari</p>

      <div class="materi-list">
        <button
          v-for="materi in daftarMateri"
          :key="materi.fileName"
          type="button"
          class="materi-button"
          @click="bukaMateri(materi.url)"
        >
          {{ materi.title }}
        </button>
        <p v-if="daftarMateri.length === 0" class="empty-state">
          Belum ada file materi HTML untuk mata kuliah ini.
        </p>
      </div>

      <button type="button" class="back-button" @click="router.push({ name: 'home' })">
        ← Kembali ke Daftar Mata Kuliah
      </button>
    </section>
  </main>
</template>

<style scoped>
.materi-page {
  min-height: 100vh;
  padding: 2rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #f8f9ff 0%, #eef3ff 100%);
}

.card {
  width: min(680px, 100%);
  background-color: #ffffff;
  border: 1px solid #e6e9f7;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(89, 109, 183, 0.1);
}

.label {
  margin: 0;
  color: #6f7fb6;
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.title {
  margin: 0.35rem 0 0;
  color: #273469;
  font-size: clamp(1.35rem, 2vw, 1.7rem);
}

.subtitle {
  margin: 0.6rem 0 1.25rem;
  color: #6270a0;
  font-size: 0.94rem;
}

.materi-list {
  display: grid;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.empty-state {
  margin: 0;
  color: #6f7fb6;
  font-size: 0.92rem;
}

.materi-button {
  width: 100%;
  text-align: left;
  border: 1px solid #d8def6;
  border-radius: 12px;
  padding: 0.78rem 0.95rem;
  background-color: #f6f8ff;
  color: #33417a;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
}

.back-button {
  border: none;
  background: transparent;
  color: #5c6ead;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.25rem 0;
}

.back-button:hover {
  color: #455a96;
}
</style>
