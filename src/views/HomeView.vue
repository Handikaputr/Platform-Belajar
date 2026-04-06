<script setup lang="ts">
import { useRouter } from 'vue-router'
import { mataKuliah } from '../data/materi'

const router = useRouter()

const pilihMataKuliah = (matkul: string) => {
  router.push({
    name: 'pilih-materi',
    query: { matkul },
  })
}
</script>

<template>
  <main class="home">
    <section class="card">
      <h1 class="title">Daftar Mata Kuliah</h1>
      <p class="subtitle">Pilih mata kuliah yang ingin kamu pelajari</p>

      <div class="course-list">
        <button
          v-for="mataKuliahItem in mataKuliah"
          :key="mataKuliahItem"
          class="course-button"
          type="button"
          @click="pilihMataKuliah(mataKuliahItem)"
        >
          {{ mataKuliahItem }}
        </button>
        <p v-if="mataKuliah.length === 0" class="empty-state">
          Belum ada folder materi. Tambahkan file HTML di `src/materi/[matkul]/[materi].html`.
        </p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #f7f8fc 0%, #eef2ff 100%);
}

.card {
  width: min(680px, 100%);
  background-color: #ffffff;
  border: 1px solid #e6e8f3;
  border-radius: 18px;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(89, 109, 183, 0.12);
}

.title {
  margin: 0;
  color: #273469;
  font-size: clamp(1.45rem, 2vw, 1.8rem);
}

.subtitle {
  margin: 0.5rem 0 1.25rem;
  color: #6171a3;
  font-size: 0.95rem;
}

.course-list {
  display: grid;
  gap: 0.75rem;
}

.empty-state {
  margin: 0;
  color: #6f7fb6;
  font-size: 0.92rem;
}

.course-button {
  width: 100%;
  text-align: left;
  border: 1px solid #d9def3;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  background-color: #f5f7ff;
  color: #32427b;
  font-size: 0.97rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
}

.course-button:hover {
  background-color: #edf1ff;
  border-color: #c7d0f3;
  transform: translateY(-1px);
}

.course-button:focus-visible {
  outline: 3px solid #d6defa;
  outline-offset: 2px;
}

@media (max-width: 640px) {
  .home {
    padding: 1.25rem 0.9rem;
    align-items: flex-start;
  }

  .card {
    padding: 1.2rem;
  }
}
</style>
