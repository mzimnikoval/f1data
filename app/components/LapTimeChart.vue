<template>
  <Card class="p-4 m-4">
    <template #title>Lap Times Chart</template>
    <template #content>
      <div class="flex flex-col gap-3 mb-4">
        <div class="flex gap-2">
          <Button label="Select All" @click="selectAllDrivers" />
          <Button label="Unselect All" @click="unselectAllDrivers" />
        </div>
        <MultiSelect
          v-model="selectedDrivers"
          :options="allDrivers"
          optionLabel="name"
          optionValue="code"
          placeholder="Select Drivers"
          class="w-full md:w-40rem"
          display="chip"
        />
      </div>

      <div v-if="chartData.datasets.length > 0">
        <Line :data="chartData" :options="chartOptions" />
      </div>
      <div v-else class="text-center text-gray-500 mt-4">
        No drivers selected. Please select drivers to display lap times.
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';
import Card from 'primevue/card';
import Button from 'primevue/button';
import MultiSelect from 'primevue/multiselect';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

const rawData = ref([]);
const allDrivers = ref([]);
const selectedDrivers = ref([]);

const chartData = computed(() => {
  const datasets = selectedDrivers.value.map((driverCode) => {
    const driverData = rawData.value.filter((item) => item.Driver === driverCode);
    if (driverData.length === 0) return null;

    const fastestLap = driverData.reduce((min, lap) =>
      lap.LapTimeSeconds < min.LapTimeSeconds ? lap : min
    );

    return {
      label: driverNames[driverCode] || driverCode,
      data: driverData.map((lap) => ({
        x: lap.LapNumber,
        y: lap.LapTimeSeconds,
      })),
      borderColor: driverColors[driverCode] || '#888888',
      pointRadius: driverData.map((lap) =>
        lap.LapNumber === fastestLap.LapNumber ? 8 : 3
      ),
      pointBackgroundColor: driverData.map((lap) =>
        lap.LapNumber === fastestLap.LapNumber ? '#FFD700' : (driverColors[driverCode] || '#888888')
      ),
      pointBorderColor: driverData.map((lap) =>
        lap.LapNumber === fastestLap.LapNumber ? '#FFD700' : (driverColors[driverCode] || '#888888')
      ),
      pointStyle: 'circle', // All circles
      tension: 0.2,
      fill: false,
    };
  }).filter(Boolean);

  return { datasets };
});

// 🟡 UNTOUCHED DRIVER COLORS
const driverColors = {
  VER: '#1E41FF', LAW: '#1E41FF',
  ANT: '#00D2BE', RUS: '#00D2BE',
  LEC: '#DC0000', HAM: '#DC0000',
  NOR: '#FF8700', PIA: '#FF8700',
  ALO: '#229971', STR: '#229971',
  DOO: '#FF87BC', GAS: '#FF87BC',
  BOR: '#00e701', HUL: '#00e701',
  BEA: '#FFFFFF', OCO: '#FFFFFF',
  TSU: '#6692FF', HAD: '#6692FF',
  SAI: '#64C4FF', ALB: '#64C4FF',
};

// 🟡 UNTOUCHED DRIVER NAMES
const driverNames = {
  VER: 'Max Verstappen',
  LAW: 'Liam Lawson',
  ANT: 'Kimi Antonelli',
  RUS: 'George Russell',
  LEC: 'Charles Leclerc',
  HAM: 'Lewis Hamilton',
  NOR: 'Lando Norris',
  PIA: 'Oscar Piastri',
  ALO: 'Fernando Alonso',
  STR: 'Lance Stroll',
  DOO: 'Jack Doohan',
  GAS: 'Pierre Gasly',
  BOR: 'Gabriel Bortoleto',
  HUL: 'Nico Hulkenberg',
  BEA: 'Oliver Bearman',
  OCO: 'Esteban Ocon',
  TSU: 'Yuki Tsunoda',
  HAD: 'Isaac Hadjar',
  SAI: 'Carlos Sainz',
  ALB: 'Alex Albon',
};

// Chart Options
const chartOptions = ref({
  responsive: true,
  parsing: false,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Lap Times per Driver (Fastest Lap Highlighted)' },
    tooltip: {
      callbacks: {
        label: function (context) {
          const secs = context.parsed.y;
          const isFastest = context.dataset.pointRadius[context.dataIndex] === 8;
          return `${context.dataset.label}: ${formatSeconds(secs)}${isFastest ? ' ★' : ''}`;
        },
      },
    },
  },
  scales: {
    x: {
      type: 'linear',
      title: { display: true, text: 'Lap Number' },
      ticks: { stepSize: 1 },
    },
    y: {
      title: { display: true, text: 'Lap Time' },
      ticks: {
        callback: function (value) {
          return formatSeconds(value);
        },
      },
    },
  },
});

// Format seconds to MM:SS.sss
function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toFixed(3).padStart(6, '0')}`;
}

// Select All
function selectAllDrivers() {
  selectedDrivers.value = allDrivers.value.map((d) => d.code);
}

// Unselect All
function unselectAllDrivers() {
  selectedDrivers.value = [];
}

// Load Data
onMounted(async () => {
  const response = await fetch('/lap_times.json');
  const data = await response.json();
  rawData.value = data;

  const uniqueDriverCodes = [...new Set(data.map((item) => item.Driver))];
  allDrivers.value = uniqueDriverCodes.map((code) => ({
    code,
    name: driverNames[code] || code,
  }));

  selectAllDrivers();
});
</script>
