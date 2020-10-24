import { reactive } from 'vue';

const state = reactive({
  query: '',
  results: [],
  functions: [
    {
      name: 'Installation',
      ref: '#installation',
      icon: 'fas fa-arrow-down'
    },
    {
      name: 'Quick Start',
      ref: '#quickstart',
      icon: 'fas fa-play-circle'
    },
    {
      name: 'Insert',
      ref: '#insert',
      icon: 'fas fa-plus'
    },
    {
      name: 'Query',
      ref: '#query',
      icon: 'fas fa-search'
    },
    {
      name: 'Update',
      ref: '#update',
      icon: 'fas fa-pen'
    },
    {
      name: 'Remove',
      ref: '#remove',
      icon: 'fas fa-minus'
    },
    {
      name: 'Unique Property',
      ref: '#uniqueproperty',
      icon: 'fas fa-fingerprint'
    },
  ]
});

export default state;