<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-indigo-500/30">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800/50 transition-all duration-300" :class="{'shadow-sm': scrolled}">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 transform -rotate-2 hover:rotate-12 transition-transform duration-500">
            <img src="/logo.png" alt="KyroTask Logo" class="w-full h-full object-contain drop-shadow-md" />
          </div>
          <span class="text-xl font-black tracking-tight text-slate-900 dark:text-white">KyroTask</span>
        </div>
        <nav class="hidden md:flex items-center gap-8 text-sm font-bold text-slate-500 dark:text-slate-400">
          <a href="#features" class="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#ecosystem" class="hover:text-slate-900 dark:hover:text-white transition-colors">Ecosystem</a>
        </nav>
        <div class="flex items-center gap-4">
          <button @click="toggleTheme" class="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-50 dark:bg-slate-900 rounded-full transition-colors">
            <svg v-if="isDark" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          </button>
          <RouterLink to="/app" class="hidden md:flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-slate-200 dark:shadow-none">
            Demo Server
            <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          </RouterLink>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden px-6">
      <!-- Background Gradients -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent dark:from-indigo-500/20 dark:via-purple-500/10 dark:to-transparent rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-8 shadow-sm">
          <span class="flex h-2 w-2 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          KyroTask v2.0 is Live
        </div>

        <h1 class="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[1.1] mb-8">
          Master Your Focus.<br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500">Crush Your Goals.</span>
        </h1>

        <p class="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
          The ultimate all-in-one productivity suite combining deep-work Pomodoro timers, habit tracking, and advanced analytics into one beautiful experience.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink to="/app" class="group relative px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg tracking-wide transition-all overflow-hidden flex items-center justify-center gap-3 shadow-[0_12px_30px_-10px_rgba(99,102,241,0.6)] hover:shadow-[0_20px_40px_-12px_rgba(99,102,241,0.8)] hover:-translate-y-1 w-full sm:w-auto">
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
            <span class="relative z-10 text-xl">🚀</span>
            <span class="relative z-10">Try interactive demo</span>
            <svg class="w-5 h-5 relative z-10 fill-current group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </RouterLink>
          <a href="#features" class="px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center hover:bg-slate-50 dark:hover:bg-slate-800">
            Explore Features
          </a>
        </div>
        
        <p class="mt-8 text-sm text-slate-400 font-medium">✨ No signup required. Pre-loaded with demo data.</p>
      </div>

      <!-- Dashboard Preview Image -->
      <div class="max-w-6xl mx-auto mt-20 relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        <div class="rounded-t-3xl border border-b-0 border-slate-200/50 dark:border-slate-800 p-2 md:p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl overflow-hidden translate-y-8">
            <div class="rounded-t-2xl overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 aspect-video relative flex items-center justify-center">
                <img src="/Dashboard.png" alt="KyroTask Premium Dashboard Preview" class="w-full h-full object-cover object-top" />
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/10 mix-blend-overlay pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-12 border-y border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/20">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-sm font-bold tracking-widest uppercase text-slate-400 mb-8">Designed for hyper-productive individuals</p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <!-- Mock logos -->
           <div class="text-xl font-black flex items-center gap-2"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg> ACME Corp</div>
           <div class="text-xl font-black flex items-center gap-2"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg> Globex</div>
           <div class="text-xl font-black flex items-center gap-2"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/></svg> Soylent</div>
           <div class="text-xl font-black flex items-center gap-2"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l4.8 14.8H7.2L12 2z"/></svg> Initech</div>
        </div>
      </div>
    </section>

    <!-- Features Bento Grid -->
    <section id="features" class="py-24 md:py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16 md:mb-24">
          <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-6">Built for deep work.</h2>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Stop context switching between multiple apps. KyroTask brings your entire workflow into a single, cohesive ecosystem.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          <!-- Feature 1: Pomodoro -->
          <div class="md:col-span-2 group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 hover:border-rose-200 dark:hover:border-rose-900/50 transition-colors relative overflow-hidden flex flex-col justify-end">
            <div class="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div class="absolute -right-8 -top-8 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div class="relative z-10 w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-3xl mb-8 border border-slate-100 dark:border-slate-700">⏱️</div>
            <h3 class="relative z-10 text-3xl font-black text-slate-900 dark:text-white mb-4">Immersive Pomodoro</h3>
            <p class="relative z-10 text-slate-500 dark:text-slate-400 max-w-sm">Block out noise and enter the flow state. Our customizable timer dynamically changes phases, levels you up, and locks you in.</p>
          </div>

          <!-- Feature 2: Habits -->
          <div class="group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-900/50 transition-colors relative overflow-hidden flex flex-col justify-end">
             <div class="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div class="relative z-10 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-2xl mb-8 border border-slate-100 dark:border-slate-700">🌱</div>
             <h3 class="relative z-10 text-2xl font-black text-slate-900 dark:text-white mb-3">Atomic Habits</h3>
             <p class="relative z-10 text-slate-500 dark:text-slate-400 text-sm">Track your daily and weekly routines with satisfying visual streak multipliers.</p>
          </div>

          <!-- Feature 3: Analytics -->
          <div class="group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 transition-colors relative overflow-hidden flex flex-col justify-end">
             <div class="absolute left-0 bottom-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
             
             <div class="relative z-10 w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-2xl mb-8 border border-slate-100 dark:border-slate-700">📊</div>
             <h3 class="relative z-10 text-2xl font-black text-slate-900 dark:text-white mb-3">Deep Analytics</h3>
             <p class="relative z-10 text-slate-500 dark:text-slate-400 text-sm">Visualize your output over time to discover when you are most productive.</p>
          </div>

          <!-- Feature 4: Goals/Projects -->
          <div class="md:col-span-2 group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-800 hover:border-purple-200 dark:hover:border-purple-900/50 transition-colors relative overflow-hidden flex flex-col justify-end">
            <div class="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            <div class="relative z-10 flex gap-4 mb-8">
               <div class="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-3xl border border-slate-100 dark:border-slate-700">🎯</div>
               <div class="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-3xl border border-slate-100 dark:border-slate-700">📁</div>
            </div>
            
            <h3 class="relative z-10 text-3xl font-black text-slate-900 dark:text-white mb-4">Goals & Projects</h3>
            <p class="relative z-10 text-slate-500 dark:text-slate-400 max-w-sm">Tie everything together. Link your habits to goals, and tasks to projects, so every action has a clear purpose.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="py-24 px-6">
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
        <div class="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-50"></div>
        
        <h2 class="relative z-10 text-4xl md:text-6xl font-black text-white tracking-tight mb-8">Ready to transform<br/>your workflow?</h2>
        <p class="relative z-10 text-indigo-200 text-lg mb-12 max-w-xl mx-auto">Experience the full power of KyroTask right in your browser. No strings attached.</p>
        
        <RouterLink to="/app" class="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-indigo-900 hover:bg-indigo-50 rounded-full font-black text-lg tracking-wide transition-all shadow-xl hover:scale-105 active:scale-95">
          Open Demo App
          <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </RouterLink>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-100 dark:border-slate-800/50 bg-white dark:bg-slate-950 py-12 px-6">
       <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="flex items-center gap-2">
             <div class="w-6 h-6 grayscale opacity-50"><img src="/logo.png" alt="Logo" class="w-full h-full object-contain" /></div>
             <span class="font-bold text-slate-400">KyroTask © 2026</span>
          </div>
          <div class="flex gap-6 text-sm font-bold text-slate-400">
             <a href="#" class="hover:text-indigo-500 transition-colors">Privacy</a>
             <a href="#" class="hover:text-indigo-500 transition-colors">Terms</a>
             <a href="#" class="hover:text-indigo-500 transition-colors">Twitter</a>
             <a href="#" class="hover:text-indigo-500 transition-colors">GitHub</a>
          </div>
       </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isDark = ref(false);
const scrolled = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

function toggleTheme() {
  const root = document.documentElement;
  if (root.classList.contains('dark')) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    isDark.value = false;
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    isDark.value = true;
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  
  // Initialize theme visually
  const theme = localStorage.getItem('theme') || 'light';
  if (theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDark.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDark.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
