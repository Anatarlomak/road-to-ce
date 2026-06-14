<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verdant Wealth - Premium Finance & Growth Simulator</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Chart.js CDN -->
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <!-- Lucide Icons (UMD version) -->
  <script src="https://unpkg.com/lucide@latest"></script>
  
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            emerald: {
              950: '#04180F',
            },
            vibrantGreen: '#00cc00'
          }
        }
      }
    }
  </script>
  
  <style>
    /* Premium custom animation and styles */
    @keyframes slide-up {
      0% { transform: translateY(1rem); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes scale-up {
      0% { transform: scale(0.95); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-6px) rotate(1deg); }
    }
    @keyframes pulse-glowing {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 0.9; transform: scale(1.02); }
    }
    .animate-slide-up {
      animation: slide-up 0.3s ease-out forwards;
    }
    .animate-scale-up {
      animation: scale-up 0.25s ease-out forwards;
    }
    .animate-float {
      animation: float-slow 5s ease-in-out infinite;
    }
    .animate-glow {
      animation: pulse-glowing 3.5s ease-in-out infinite;
    }
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    /* Custom style override for vibrant green inputs */
    .vibrant-input:focus {
      border-color: #00cc00 !important;
      box-shadow: 0 0 10px rgba(0, 204, 0, 0.25);
    }
  </style>
</head>
<body class="min-h-screen bg-[#060D0A] text-slate-100 font-sans selection:bg-[#00cc00]/20 selection:text-[#00cc00]">

  <!-- Premium Gradient Top Header Accent -->
  <div class="h-1.5 w-full bg-gradient-to-r from-[#00cc00] via-[#E5C158] to-emerald-700"></div>

  <!-- Header Section -->
  <header class="sticky top-0 z-30 bg-[#060D0A]/85 backdrop-blur-md border-b border-emerald-950/40 px-4 py-3">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      
      <div class="flex items-center gap-3">
        <div class="h-10 w-10 rounded-xl bg-gradient-to-tr from-[#00cc00] to-[#E5C158] flex items-center justify-center shadow-lg shadow-[#00cc00]/20">
          <i data-lucide="sparkles" class="h-5 w-5 text-[#060D0A]"></i>
        </div>
        <div>
          <h1 class="text-xl font-bold tracking-tight bg-gradient-to-r from-[#00cc00] via-[#E5C158] to-emerald-300 bg-clip-text text-transparent">
            VERDANT WEALTH
          </h1>
          <p class="text-[10px] text-[#00cc00]/80 uppercase tracking-widest font-semibold">
            Premium Finance & Growth Simulator
          </p>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2">
        <button
          onclick="switchTab('dashboard')"
          id="btn-dashboard"
          class="px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all bg-gradient-to-r from-emerald-950/50 to-emerald-900/40 text-[#00cc00] border border-[#00cc00]/40"
        >
          แดชบอร์ด
        </button>
        <button
          onclick="switchTab('ledger')"
          id="btn-ledger"
          class="px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all text-slate-400 hover:text-slate-100 hover:bg-emerald-950/20"
        >
          สมุดบัญชี (<span id="ledger-count">0</span>)
        </button>
        <button
          onclick="switchTab('garden')"
          id="btn-garden"
          class="px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all relative text-slate-400 hover:text-slate-100 hover:bg-emerald-950/20"
        >
          สวนป่าจำลอง
          <span id="badge-drops" class="hidden absolute -top-1.5 -right-1.5 bg-sky-500 text-[#060D0A] text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-bounce">
            0
          </span>
        </button>
        <button
          onclick="openSettingsModal()"
          class="p-2 rounded-xl text-slate-400 hover:text-[#00cc00] hover:bg-emerald-950/20 transition-all"
          title="ตั้งค่าขั้นต่ำแจ้งเตือน"
        >
          <i data-lucide="settings" class="h-4.5 w-4.5"></i>
        </button>
      </div>
    </div>
  </header>

  <!-- Custom Success/Information Toast themed in #00cc00 -->
  <div id="toast" class="hidden fixed bottom-6 right-6 z-50 animate-slide-up">
    <div class="bg-[#0B1512]/95 backdrop-blur-md border border-[#00cc00] text-slate-100 px-5 py-3.5 rounded-2xl shadow-2xl shadow-[#00cc00]/10 flex items-center gap-3">
      <div class="p-1 rounded-full bg-[#00cc00]/20">
        <i data-lucide="check-circle" class="h-5 w-5 text-[#00cc00]"></i>
      </div>
      <p id="toast-msg" class="text-xs font-semibold tracking-wide"></p>
    </div>
  </div>

  <!-- Main Container -->
  <main class="max-w-7xl mx-auto px-4 py-6">

    <!-- Balance Warning Bar themed in #00cc00 style -->
    <div id="warning-bar" class="hidden mb-6 bg-emerald-950/20 backdrop-blur-md border border-[#00cc00]/50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 animate-pulse">
      <div class="flex items-center gap-3">
        <div class="p-2.5 rounded-xl bg-[#00cc00]/10 text-[#00cc00]">
          <i data-lucide="alert-triangle" class="h-5 w-5"></i>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-[#00cc00]">แจ้งเตือนระดับเงินในบัญชีต่ำกว่าเกณฑ์!</h4>
          <p class="text-xs text-slate-300 mt-0.5">
            ยอดเงินคงเหลือปัจจุบัน <span id="warn-current-balance" class="font-bold text-[#00cc00]">0</span> THB ต่ำกว่าระดับความปลอดภัยที่คุณตั้งไว้ (<span id="warn-min-balance">0</span> THB)
          </p>
        </div>
      </div>
      <button 
        onclick="openSettingsModal()"
        class="text-xs font-bold text-[#060D0A] bg-[#00cc00] hover:bg-[#00e600] px-4 py-2 rounded-xl transition-all shadow-md shadow-[#00cc00]/20 animate-none"
      >
        ปรับแต่งเกณฑ์แจ้งเตือน
      </button>
    </div>

    <!-- TAB: Dashboard -->
    <section id="tab-dashboard" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      <!-- Metric Panel (Left Columns) -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Core Financial Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          <!-- Balance Card -->
          <div class="relative overflow-hidden bg-gradient-to-br from-[#0B1512] to-[#0D1C17] border border-emerald-950/60 rounded-3xl p-5 shadow-xl">
            <div class="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5">
              <i data-lucide="wallet" class="h-32 w-32 text-[#00cc00]"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold tracking-wider text-[#00cc00]">ยอดเงินคงเหลือใช้จริง</span>
              <span class="p-1.5 rounded-lg bg-[#00cc00]/10 text-[#00cc00]">
                <i data-lucide="wallet" class="h-4 w-4"></i>
              </span>
            </div>
            <div class="mt-3">
              <p class="text-2xl font-bold tracking-tight text-white">
                <span id="metric-balance">0</span> <span class="text-xs font-medium text-[#00cc00]">THB</span>
              </p>
              <p class="text-[10px] text-slate-400 mt-1 flex items-center gap-1">
                <i data-lucide="info" class="h-3 w-3 text-slate-500"></i> (รายรับทั้งหมด - รายจ่ายจริง - เงินออม)
              </p>
            </div>
          </div>

          <!-- Safe To Spend Card -->
          <div class="relative overflow-hidden bg-gradient-to-br from-[#0B1512] to-[#0D1C17] border border-emerald-950/60 rounded-3xl p-5 shadow-xl">
            <div class="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5">
              <i data-lucide="coins" class="h-32 w-32 text-[#00cc00]"></i>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold tracking-wider text-[#E5C158]">วงเงินปลอดภัยสำหรับช้อป</span>
              <span class="p-1.5 rounded-lg bg-amber-500/10 text-amber-400">
                <i data-lucide="coins" class="h-4 w-4"></i>
              </span>
            </div>
            <div class="mt-3">
              <p class="text-2xl font-bold tracking-tight text-white">
                <span id="metric-safe-spend">0</span> <span class="text-xs font-medium text-[#E5C158]">THB</span>
              </p>
              <p class="text-[10px] text-slate-400 mt-1">
                หักงบจ่ายล่วงหน้าแล้ว (<span id="metric-future-total">0</span> THB)
              </p>
            </div>
          </div>

          <!-- Daily Allowance Card -->
          <div class="relative overflow-hidden bg-gradient-to-br from-[#0B1512] to-[#0D1C17] border border-[#E5C158]/20 rounded-3xl p-5 shadow-xl">
            <div class="absolute top-0 right-0 h-20 w-20 bg-[#00cc00]/5 rounded-full blur-2xl"></div>
            <div class="flex items-center justify-between">
              <span class="text-[10px] uppercase font-bold tracking-wider text-[#00cc00]">งบเฉลี่ยสำหรับกินใช้วันละ</span>
              <span class="p-1.5 rounded-lg bg-[#00cc00]/10 text-[#E5C158]">
                <i data-lucide="calendar" class="h-4 w-4"></i>
              </span>
            </div>
            <div class="mt-3">
              <p class="text-2xl font-bold tracking-tight text-[#E5C158] drop-shadow-sm">
                <span id="metric-daily-allowance">0</span> <span class="text-xs font-medium text-[#00cc00]">THB/วัน</span>
              </p>
              <p class="text-[10px] text-[#00cc00]/85 mt-1">
                คำนวณจากจำนวน <span id="metric-days-remaining">0</span> วันที่เหลือของเดือนนี้
              </p>
            </div>
          </div>

        </div>

        <!-- Quick Action Banner themed to #00cc00 -->
        <div class="bg-gradient-to-r from-[#0C1A14] to-[#0D241C] border border-[#00cc00]/30 rounded-3xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 class="text-sm font-semibold text-slate-200">บันทึกธุรกรรมเพื่อควบคุมการเงินของตัวคุณเอง</h3>
            <p class="text-xs text-slate-400 mt-0.5">การระบุรายจ่ายล่วงหน้า ช่วยป้องกันปัญหาเงินช็อตปลายเดือนได้อย่างแม่นยำ</p>
          </div>
          <button
            onclick="openAddModal('expense')"
            class="w-full md:w-auto bg-[#00cc00] hover:bg-[#00e600] text-[#060D0A] font-bold text-xs py-3 px-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#00cc00]/10 hover:scale-[1.02]"
          >
            <i data-lucide="plus" class="h-4 w-4"></i> เพิ่มธุรกรรมการเงิน
          </button>
        </div>

        <!-- Chart Section -->
        <div class="bg-gradient-to-b from-[#0B1512] to-[#080F0D] border border-emerald-950/50 rounded-3xl p-5">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 class="text-sm font-bold tracking-wide uppercase text-slate-300">สถิติทางการเงินประจำเดือน</h3>
              <p class="text-[11px] text-slate-500">สรุปภาพรวมรายรับ รายจ่ายสะสมจริง และยอดเงินออมของคุณ</p>
            </div>
            <div class="flex flex-wrap items-center gap-4 text-xs font-medium">
              <span class="flex items-center gap-1.5 text-[#00cc00]">
                <span class="h-2 w-2 rounded-full bg-[#00cc00]"></span> รายรับ
              </span>
              <span class="flex items-center gap-1.5 text-rose-400">
                <span class="h-2 w-2 rounded-full bg-rose-500"></span> รายจ่ายรวม
              </span>
              <span class="flex items-center gap-1.5 text-[#E5C158]">
                <span class="h-2 w-2 rounded-full bg-[#E5C158]"></span> เงินออม
              </span>
            </div>
          </div>

          <!-- Embedded Chart Canvas -->
          <div class="h-72 w-full relative">
            <canvas id="financialChart" class="w-full h-full"></canvas>
            <div id="no-chart-data" class="hidden absolute inset-0 flex flex-col items-center justify-center text-slate-500">
              <p class="text-xs">ไม่พบข้อมูลสถิติ กรุณาเพิ่มธุรกรรมเพื่อรับสถิติแรกของคุณ</p>
            </div>
          </div>
        </div>

      </div>

      <!-- Tree Sanctuary Column (Right Columns) -->
      <div class="lg:col-span-4 space-y-6">
        
        <!-- Plant Status Panel -->
        <div class="bg-gradient-to-b from-[#0B1512] to-[#0A1612] border border-emerald-950/60 rounded-3xl p-5 relative overflow-hidden shadow-xl">
          <!-- Elegant subtle grid backdrop -->
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#0e2017_1px,transparent_1px),linear-gradient(to_bottom,#0e2017_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>

          <div class="relative z-10">
            <div class="flex items-center justify-between mb-4">
              <span class="text-[10px] uppercase font-bold tracking-wider text-[#00cc00]">สวนป่าการเงินจำลอง</span>
              <div class="flex items-center gap-1 bg-sky-950/50 border border-sky-500/30 px-2.5 py-1.5 rounded-full text-xs text-sky-300 shadow-[0_2px_10px_rgba(56,189,248,0.15)]">
                <!-- Gorgeous dimensional droplet icon -->
                <div id="sidebar-droplet-icon" class="w-4 h-4 mr-0.5"></div>
                <span class="font-bold"><span id="sidebar-drops">0</span> หยด</span>
              </div>
            </div>

            <!-- SVG Container for Plant -->
            <div class="flex flex-col items-center justify-center my-4 h-52 relative">
              <div id="plant-graphic-container" class="transition-all duration-500 scale-100 flex items-center justify-center">
                <!-- SVG Will be dynamically loaded here by JS -->
              </div>
              <div id="watering-sparkle" class="hidden absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="absolute h-24 w-24 bg-sky-400/20 rounded-full animate-ping"></div>
                <!-- Flying Dimensional Droplet -->
                <div class="absolute animate-bounce scale-150">
                  <svg class="w-10 h-10 drop-shadow-[0_4px_12px_rgba(56,189,248,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 12 C50 12 82 45 82 66 C82 83.5 67.5 90 50 90 C32.5 90 18 83.5 18 66 C18 45 50 12 50 12 Z" fill="url(#dropGradWatering)" />
                    <ellipse cx="38" cy="45" rx="8" ry="14" transform="rotate(-30 38 45)" fill="url(#dropHighlightWatering)" />
                    <defs>
                      <linearGradient id="dropGradWatering" x1="30" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#38bdf8" />
                        <stop offset="100%" stop-color="#0369a1" />
                      </linearGradient>
                      <radialGradient id="dropHighlightWatering" cx="35" cy="30" r="18" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.8"/>
                        <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Level Details -->
            <div class="text-center space-y-2 mt-4">
              <span id="plant-stage-badge" class="inline-block px-3 py-1 rounded-full bg-emerald-950/70 border border-[#00cc00]/40 text-xs font-semibold text-[#00cc00]">
                สถานะ: เมล็ดวิเศษ
              </span>
              <p id="plant-stage-desc" class="text-[11px] text-slate-400 max-w-xs mx-auto">
                ต้องการรดน้ำอีกเพื่อเริ่มงอกเงย
              </p>
            </div>

            <!-- XP Progress Bar -->
            <div class="mt-5 space-y-1.5">
              <div class="flex items-center justify-between text-[10px] text-slate-400">
                <span>ความเจริญเติบโตของชีวิต</span>
                <span id="plant-xp-text">0 / 50 XP</span>
              </div>
              <div class="h-2 w-full bg-emerald-950/40 border border-emerald-900/30 rounded-full overflow-hidden">
                <div id="plant-xp-bar" class="h-full bg-gradient-to-r from-[#00cc00] to-amber-400 transition-all duration-500 rounded-full" style="width: 0%"></div>
              </div>
            </div>

            <!-- Watering Action Button with #00cc00 Hover shadow -->
            <div class="mt-5">
              <button
                id="btn-water-sidebar"
                onclick="waterPlant()"
                class="w-full py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2.5 text-xs font-bold transition-all bg-gradient-to-r from-sky-400 via-sky-500 to-[#00cc00] text-[#060D0A] hover:opacity-95 hover:shadow-[0_4px_15px_rgba(0,204,0,0.3)] active:scale-[0.98]"
              >
                <div id="sidebar-btn-drop-icon" class="w-4.5 h-4.5"></div>
                รดน้ำต้นไม้สะสมคะแนน (-1 หยด)
              </button>
              <p class="text-[9px] text-slate-500 text-center mt-2">
                💡 ทุกๆ การออมเงิน 100 บาท จะเปลี่ยนเป็นหยดน้ำวิเศษรดน้ำได้ 1 หยด 💧
              </p>
            </div>

          </div>
        </div>

        <!-- Tips & Rules -->
        <div class="bg-gradient-to-b from-[#0B1512] to-[#0A110F] border border-emerald-950/40 rounded-3xl p-5">
          <h4 class="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center gap-1.5 mb-3">
            <i data-lucide="info" class="h-3.5 w-3.5 text-[#00cc00]"></i>
            ทริคบริหารเงินวัยเรียน & วัยทำงาน
          </h4>
          <ul class="space-y-3 text-xs text-slate-400">
            <li class="flex items-start gap-2">
              <span class="text-[#00cc00] mt-0.5">•</span>
              <span><strong>แยกส่วนก่อนสปอยล์:</strong> กันเงินออมและค่าใช้จ่ายคงที่ออกไปทันทีก่อนใช้ส่วนที่เหลือเพื่อซื้อ Art Toy หรือของเล่น</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-[#E5C158] mt-0.5">•</span>
              <span><strong>สูตรความมั่นคง (50-30-20):</strong> ตระหนักอยู่เสมอว่าการออมในแอปนี้จะให้รางวัลเป็นต้นไม้จำลองที่ยิ่งโตขึ้นและเปลี่ยนสภาพเป็นป่าสีทองคำ</span>
            </li>
          </ul>
        </div>

      </div>

    </section>

    <!-- TAB: Ledger -->
    <section id="tab-ledger" class="hidden bg-[#0B1512] border border-emerald-950/50 rounded-3xl overflow-hidden shadow-xl">
      
      <!-- Ledger Header -->
      <div class="p-5 border-b border-emerald-950/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-base font-bold text-slate-200">ประวัติธุรกรรมการเงินทั้งหมดของคุณ</h2>
          <p class="text-xs text-slate-400 mt-0.5">ค้นหา ตรวจสอบความถูกต้อง และจัดการรายรับรายจ่ายล่วงหน้าได้ในที่เดียว</p>
        </div>
        <div class="flex flex-wrap gap-2">
          <!-- Clear LocalStorage / Reset to Defaults Button -->
          <button
            onclick="confirmResetData()"
            class="bg-rose-950/40 hover:bg-rose-900/40 border border-rose-800/40 text-rose-300 font-semibold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all"
            title="รีเซ็ตข้อมูลเดิมเพื่อทดสอบใหม่"
          >
            <i data-lucide="refresh-cw" class="h-4 w-4"></i> รีเซ็ตข้อมูลเริ่มต้น
          </button>
          <button
            onclick="openAddModal('expense')"
            class="bg-[#00cc00] hover:bg-[#00e600] text-[#060D0A] font-semibold text-xs py-2 px-4 rounded-xl flex items-center gap-1.5 transition-all"
          >
            <i data-lucide="plus" class="h-4 w-4"></i> เพิ่มรายการใหม่
          </button>
        </div>
      </div>

      <!-- Ledger Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse" id="ledger-table">
          <thead>
            <tr class="bg-[#07100D] border-b border-emerald-950/50 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
              <th class="py-4 px-6">วันที่ดำเนินการ</th>
              <th class="py-4 px-6">ประเภท</th>
              <th class="py-4 px-6">หมวดหมู่</th>
              <th class="py-4 px-6">รายละเอียด</th>
              <th class="py-4 px-6 text-right">จำนวนเงิน</th>
              <th class="py-4 px-6 text-center">จัดการ</th>
            </tr>
          </thead>
          <tbody id="ledger-tbody" class="divide-y divide-emerald-950/20 text-xs">
            <!-- Dynamic transactions go here -->
          </tbody>
        </table>
        <div id="no-ledger-data" class="hidden py-12 text-center text-slate-500 space-y-2">
          <p class="text-xs">ไม่พบรายการประวัติบันทึกทางการเงินของคุณ</p>
          <button onclick="openAddModal('expense')" class="text-xs text-[#00cc00] hover:underline">
            เริ่มป้อนรายการแรกของคุณทันที
          </button>
        </div>
      </div>

    </section>

    <!-- TAB: Garden -->
    <section id="tab-garden" class="hidden bg-[#0B1512] border border-emerald-950/50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-emerald-950/50 relative z-10">
        <div>
          <span class="text-[10px] text-[#00cc00] font-bold uppercase tracking-wider">Growth Playground</span>
          <h2 class="text-xl font-extrabold text-white mt-1">สรวงสวรรค์และสวนป่าจำลองอัจฉริยะ</h2>
          <p class="text-xs text-slate-400 mt-1 max-w-2xl">
            รางวัลสำหรับความทุ่มเทในการออมเงินของคุณ ทุกๆ ยอดเงินฝากสะสม 100 บาทที่ถูกป้อนในระบบ คุณจะได้รับหยดน้ำวิเศษคอยช่วยดูแลสวนป่าแห่งนี้ให้เติบโต เจริญรุ่งเรืองไปพร้อมกับยอดบัญชีจริงของคุณ!
          </p>
        </div>

        <div class="bg-gradient-to-r from-emerald-950 to-emerald-900 border border-emerald-800/60 rounded-2xl p-4 text-center min-w-[200px]">
          <p class="text-[10px] uppercase font-bold text-[#00cc00]">ระดับความมั่งคั่งในสวน</p>
          <p id="garden-stage-label" class="text-xl font-extrabold text-white mt-1">เมล็ดวิเศษ</p>
          <p id="garden-xp-label" class="text-[11px] text-[#E5C158] mt-0.5">รวมทั้งหมด 0 XP</p>
        </div>
      </div>

      <!-- Simulated Interactive Forest Map -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 relative z-10">
        
        <!-- Forest Simulator Viewer -->
        <div class="lg:col-span-7 bg-[#060D0A] rounded-2xl border border-emerald-950/50 p-6 flex flex-col items-center justify-center min-h-[380px] relative overflow-hidden">
          
          <!-- Weather particles -->
          <div class="absolute inset-0 bg-gradient-to-b from-sky-950/10 to-[#060D0A]"></div>
          
          <!-- Visual rendering backdrop representing garden map -->
          <div class="absolute bottom-0 w-full h-12 bg-[#00cc00]/5 rounded-full blur-xl"></div>

          <!-- Main Tree Node -->
          <div class="relative z-10 flex flex-col items-center">
            
            <!-- Decorative glowing halos -->
            <div class="absolute -top-12 h-44 w-44 bg-[#00cc00]/5 rounded-full blur-3xl animate-pulse"></div>

            <div id="garden-main-graphic" class="animate-float flex items-center justify-center">
              <!-- Dynamically populated via script -->
            </div>
          </div>

          <!-- Floating XP Tag -->
          <div class="absolute top-4 left-4 bg-emerald-950/70 border border-emerald-900/40 px-3 py-1.5 rounded-xl text-[10px] text-[#00cc00] font-semibold">
            สะสมทั้งหมด: <span id="garden-floating-xp">0</span> XP
          </div>
        </div>

        <!-- Watering Mechanism Information Card -->
        <div class="lg:col-span-5 space-y-6">
          
          <div class="bg-[#060D0A] rounded-2xl border border-emerald-950/50 p-5 space-y-4">
            <h3 class="text-sm font-bold text-slate-200">ทำอย่างไรให้สวนเติบโตขึ้น?</h3>
            
            <div class="space-y-4">
              
              <div class="flex gap-3">
                <div class="h-8 w-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                  <i data-lucide="coins" class="h-4 w-4"></i>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-300">ขั้นตอนที่ 1: ป้อนเงินออมลงในระบบ</h4>
                  <p class="text-[11px] text-slate-400 mt-0.5">ทุกครั้งที่คุณโอนเงินไปเก็บไว้ในบัญชีออม ให้มาบันทึกธุรกรรมเป็นประเภท "เงินออม" (Saving) ในระบบ</p>
                </div>
              </div>

              <div class="flex gap-3">
                <div class="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <div class="w-4 h-4 text-sky-400">
                    <!-- Dynamic micro droplet in step -->
                    <svg class="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M50 12 C50 12 82 45 82 66 C82 83.5 67.5 90 50 90 C32.5 90 18 83.5 18 66 C18 45 50 12 50 12 Z" fill="#38bdf8" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-300">ขั้นตอนที่ 2: รับน้ำวิเศษฟรี</h4>
                  <p class="text-[11px] text-slate-400 mt-0.5">ระบบจะคำนวณเงินออมสะสมของคุณ และแจกน้ำให้คุณทันที 1 หยด ต่อยอดเงินออมทุก ๆ 100 บาท</p>
                </div>
              </div>

              <div class="flex gap-3">
                <div class="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <i data-lucide="sparkles" class="h-4 w-4"></i>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-slate-300">ขั้นตอนที่ 3: รดน้ำเร่งการเติบโต</h4>
                  <p class="text-[11px] text-slate-400 mt-0.5">คลิกปุ่มรดน้ำต้นไม้จำลอง เพื่อเพิ่มระดับคะแนนอัพเวลสวนป่าของคุณไปสู่สถานะป่าทองคำสุดหรูหรา</p>
                </div>
              </div>

            </div>
          </div>

          <div class="bg-[#060D0A] rounded-2xl border border-emerald-950/50 p-5">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-xs font-bold text-slate-300">หยดน้ำสะสมปัจจุบัน</h4>
                <p class="text-xs text-slate-500 mt-0.5">นำไปรดน้ำในหน้าแรกหรือตรงหน้านี้ได้</p>
              </div>
              <div class="text-2xl font-black text-sky-400 flex items-center gap-2">
                <div id="garden-water-drops-icon" class="w-7 h-7"></div>
                <span id="garden-water-drops">0</span> หยด
              </div>
            </div>
            
            <div class="mt-4 flex gap-2">
              <button
                id="btn-water-garden"
                onclick="waterPlant()"
                class="w-full bg-gradient-to-r from-sky-500 to-[#00cc00] text-[#060D0A] font-bold py-3.5 px-4 rounded-xl text-xs transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90"
              >
                รดน้ำสวนป่าของคุณ (-1 หยด)
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>

  </main>

  <!-- MODAL: Add Transaction (Themed in #00cc00) -->
  <div id="add-modal" class="hidden fixed inset-0 z-50 bg-[#060D0A]/85 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#0B1512] border border-[#00cc00]/50 w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-scale-up">
      
      <!-- Modal Header -->
      <div class="px-6 py-4 bg-gradient-to-r from-emerald-950/50 to-[#0A1612] border-b border-[#00cc00]/30 flex items-center justify-between">
        <div>
          <h3 class="text-base font-bold text-white flex items-center gap-2">
            <i data-lucide="sparkles" class="h-4.5 w-4.5 text-[#00cc00]"></i>
            เพิ่มธุรกรรมทางการเงินใหม่
          </h3>
          <p class="text-[11px] text-slate-400">ควบคุมและบันทึกพฤติกรรมการใช้เงินอย่างสม่ำเสมอ</p>
        </div>
        <button 
          onclick="closeAddModal()"
          class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40"
        >
          <i data-lucide="x" class="h-4 w-4"></i>
        </button>
      </div>

      <!-- Form -->
      <form onsubmit="handleAddTransaction(event)" class="p-6 space-y-4">
        
        <!-- Transaction Type Tabs -->
        <div>
          <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-2">ประเภทรายการ</label>
          <div class="grid grid-cols-4 gap-1.5 bg-[#060D0A] p-1 rounded-2xl border border-emerald-950/60">
            <button
              type="button"
              id="tab-tx-income"
              onclick="setTxType('income')"
              class="py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all text-slate-400 hover:text-white"
            >
              รายรับ
            </button>
            <button
              type="button"
              id="tab-tx-expense"
              onclick="setTxType('expense')"
              class="py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all bg-rose-500 text-white"
            >
              รายจ่าย
            </button>
            <button
              type="button"
              id="tab-tx-future"
              onclick="setTxType('future_expense')"
              class="py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all text-slate-400 hover:text-white"
            >
              จ่ายล่วงหน้า
            </button>
            <button
              type="button"
              id="tab-tx-saving"
              onclick="setTxType('saving')"
              class="py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all text-slate-400 hover:text-white"
            >
              เงินออม
            </button>
          </div>
        </div>

        <!-- Amount -->
        <div>
          <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">จำนวนเงิน (THB) *</label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <span class="text-[#00cc00] font-bold text-sm">฿</span>
            </div>
            <input
              type="number"
              id="tx-amount"
              required
              min="1"
              placeholder="ป้อนตัวเลขยอดเงินบาท..."
              class="w-full bg-[#060D0A] border border-emerald-950/60 focus:border-[#00cc00] rounded-xl py-3 pl-8 pr-4 text-xs text-white placeholder-slate-600 outline-none transition-all vibrant-input"
            />
          </div>
        </div>

        <!-- Category and Date -->
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">หมวดหมู่</label>
            <input
              type="text"
              id="tx-category"
              required
              placeholder="เช่น อาหาร, บันเทิง, ค่าหอพัก"
              class="w-full bg-[#060D0A] border border-emerald-950/60 focus:border-[#00cc00] rounded-xl py-3 px-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all vibrant-input"
            />
          </div>
          <div>
            <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">วันที่ดำเนินการ</label>
            <input
              type="date"
              id="tx-date"
              required
              class="w-full bg-[#060D0A] border border-emerald-950/60 focus:border-[#00cc00] rounded-xl py-3 px-3.5 text-xs text-white outline-none transition-all vibrant-input"
            />
          </div>
        </div>

        <!-- Description -->
        <div>
          <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">คำอธิบายเพิ่มเติม (ชี้แจง)</label>
          <textarea
            id="tx-desc"
            placeholder="เขียนหมายเหตุสั้นๆ เพื่อเตือนความจำ..."
            rows="2"
            class="w-full bg-[#060D0A] border border-emerald-950/60 focus:border-[#00cc00] rounded-xl py-2 px-3.5 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none vibrant-input"
          ></textarea>
        </div>

        <!-- Actions -->
        <div class="pt-4 border-t border-emerald-950/30 flex gap-2">
          <button
            type="button"
            onclick="closeAddModal()"
            class="w-1/2 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs rounded-xl transition-all"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            class="w-1/2 py-3 bg-gradient-to-r from-[#00cc00] to-emerald-600 text-[#060D0A] font-bold text-xs rounded-xl transition-all shadow-md shadow-[#00cc00]/20 hover:opacity-90"
          >
            บันทึกรายการ
          </button>
        </div>

      </form>

    </div>
  </div>

  <!-- MODAL: Settings Safety Threshold (Themed in #00cc00) -->
  <div id="settings-modal" class="hidden fixed inset-0 z-50 bg-[#060D0A]/85 backdrop-blur-sm flex items-center justify-center p-4">
    <div class="bg-[#0B1512] border border-[#00cc00]/50 w-full max-w-md rounded-3xl overflow-hidden shadow-2xl relative animate-scale-up">
      
      <div class="px-6 py-4 bg-gradient-to-r from-emerald-950/50 to-[#0A1612] border-b border-[#00cc00]/30 flex items-center justify-between">
        <div>
          <h3 class="text-sm font-bold text-white flex items-center gap-2">
            <i data-lucide="bell" class="h-4.5 w-4.5 text-[#00cc00]"></i>
            ตั้งค่าความปลอดภัยบัญชี
          </h3>
          <p class="text-[11px] text-slate-400">ควบคุมยอดเงินขั้นต่ำเพื่อไม่ให้เงินหมดกระเป๋า</p>
        </div>
        <button 
          onclick="closeSettingsModal()"
          class="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/40"
        >
          <i data-lucide="x" class="h-4 w-4"></i>
        </button>
      </div>

      <div class="p-6 space-y-4">
        
        <div class="space-y-1">
          <label class="text-[10px] uppercase font-bold tracking-wider text-slate-400">ยอดเงินคงเหลือขั้นต่ำที่ต้องการเตือน (THB)</label>
          <p class="text-[11px] text-slate-500 leading-relaxed">
            หากระดับเงินสะสมสุทธิของคุณลดลงต่ำกว่ายอดที่กำหนดไว้ แบนเนอร์สัญญาณเตือนสีเหลืองทองระวังเหตุจะปรากฏขึ้นด่วน เพื่อเตือนสติไม่ให้คุณเพลิดเพลินกับการสปอยล์ตัวเองจนเงินช็อตปลายเดือน
          </p>
        </div>

        <div class="relative">
          <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <span class="text-[#00cc00] font-bold text-sm">฿</span>
          </div>
          <input
            type="number"
            id="settings-min-balance"
            class="w-full bg-[#060D0A] border border-[#00cc00]/40 focus:border-[#00cc00] rounded-xl py-3 pl-8 pr-4 text-xs text-white placeholder-slate-600 outline-none transition-all vibrant-input"
          />
        </div>

        <div class="pt-4 border-t border-emerald-950/20 flex gap-2">
          <button
            type="button"
            onclick="saveSettings()"
            class="w-full py-3 bg-gradient-to-r from-[#00cc00] to-emerald-600 text-[#060D0A] font-bold text-xs rounded-xl transition-all shadow-md shadow-[#00cc00]/20 hover:opacity-90"
          >
            ตกลงและบันทึก
          </button>
        </div>

      </div>

    </div>
  </div>

  <!-- Elegant Footer -->
  <footer class="border-t border-[#00cc00]/20 py-8 px-4 mt-12 bg-[#030605]">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
      <div>
        <p class="font-semibold text-[#00cc00]/80 uppercase tracking-widest text-[9px]">Verdant Wealth Tracker</p>
        <p class="mt-1">© 2026 Verdant Wealth Co. มอบความสวยงามพรีเมียมให้กับการบริหารการเงินของคนรุ่นใหม่</p>
      </div>
      <div class="flex gap-4">
        <span class="text-[#00cc00]/70 hover:underline cursor-pointer">เงื่อนไขการใช้งาน</span>
        <span class="text-[#00cc00]/70 hover:underline cursor-pointer">นโยบายความเป็นส่วนตัว</span>
      </div>
    </div>
  </footer>

  <!-- App Business Logic Implementation -->
  <script>
    // Highly Realistic Thai Gen-Z / First Jobber / Student June 2026 Mock Data
    const INITIAL_TRANSACTIONS = [
      { id: '1', type: 'income', amount: 18500, category: 'เงินเดือน', date: '2026-06-01', description: 'เงินเดือนเริ่มต้นเด็กจบใหม่ (First Jobber)' },
      { id: '2', type: 'saving', amount: 1850, category: 'เงินออม', date: '2026-06-02', description: 'ฝากเข้าบัญชีออมทรัพย์ดอกเบี้ยสูง 10%' },
      { id: '3', type: 'expense', amount: 5500, category: 'ค่าหอพัก', date: '2026-06-03', description: 'ค่าเช่าห้องพักรายเดือนรวมค่าส่วนกลาง' },
      { id: '4', type: 'expense', amount: 499, category: 'อาหาร', date: '2026-06-04', description: 'ชาบูหม้อไฟเยียวยาจิตใจหลังทำงานสัปดาห์แรก' },
      { id: '5', type: 'income', amount: 3000, category: 'งานเสริม', date: '2026-06-05', description: 'ฟรีแลนซ์รับออกแบบกราฟิกหน้าปกเพจเฟซบุ๊ก' },
      { id: '6', type: 'expense', amount: 350, category: 'เครื่องดื่ม', date: '2026-06-06', description: 'กาแฟสู้ชีวิตสัปดาห์แรกสำหรับยามเช้า' },
      { id: '7', type: 'expense', amount: 450, category: 'ช้อปปิ้ง', date: '2026-06-08', description: 'กล่องสุ่ม Crybaby นั่งหน้าโต๊ะทำงาน (ของมันต้องมี!)' },
      { id: '8', type: 'expense', amount: 500, category: 'เดินทาง', date: '2026-06-10', description: 'เติมเงินบัตรรถไฟฟ้า BTS รายสัปดาห์' },
      { id: '9', type: 'future_expense', amount: 1200, category: 'สาธารณูปโภค', date: '2026-06-25', description: 'ประมาณการค่าไฟและค่าเน็ตหอพักสิ้นเดือน' },
      { id: '10', type: 'future_expense', amount: 3500, category: 'บันเทิง', date: '2026-06-28', description: 'ค่าตั๋วคอนเสิร์ตวงโปรดล่วงหน้า' },
      { id: '11', type: 'saving', amount: 2000, category: 'ทริปเที่ยว', date: '2026-06-11', description: 'หยอดกระปุกสะสมไปเที่ยวญี่ปุ่นหน้าหนาว' }
    ];

    // Local Storage & Core State Variables
    let transactions = JSON.parse(localStorage.getItem('verdant_transactions')) || INITIAL_TRANSACTIONS;
    let minBalance = parseFloat(localStorage.getItem('verdant_min_balance')) || 3000;
    let waterDrops = parseInt(localStorage.getItem('verdant_water_drops')) || 38;
    let expPoints = parseInt(localStorage.getItem('verdant_exp_points')) || 240;

    let activeTab = 'dashboard';
    let currentTxType = 'expense'; // default modal transaction type
    let financialChart = null; // Chart.js instance holder

    // Premium High-Fidelity Dimensional Droplet SVG Template
    const DIM_DROPLET_HTML = (sizeClass = "w-full h-full") => `
      <svg class="${sizeClass} drop-shadow-[0_2px_10px_rgba(56,189,248,0.7)] transition-transform duration-300 hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="dropGrad" x1="30" y1="10" x2="70" y2="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="50%" stop-color="#0284c7" />
            <stop offset="100%" stop-color="#0369a1" />
          </linearGradient>
          <radialGradient id="dropHighlight" cx="35" cy="30" r="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="bottomShadow" cx="50" cy="85" r="25" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#0284c7" stop-opacity="0.7"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <!-- Soft Inner Shadow -->
        <path d="M50 12 C50 12 82 45 82 66 C82 83.5 67.5 90 50 90 C32.5 90 18 83.5 18 66 C18 45 50 12 50 12 Z" fill="url(#bottomShadow)" opacity="0.6"/>
        <!-- Main Body -->
        <path d="M50 12 C50 12 82 45 82 66 C82 83.5 67.5 90 50 90 C32.5 90 18 83.5 18 66 C18 45 50 12 50 12 Z" fill="url(#dropGrad)" />
        <!-- Glossy reflection accent stroke -->
        <path d="M48 15 C48 15 78 46 78 65 C78 79.5 65.5 83 48 83 C30.5 83 18 79.5 18 65" stroke="#bae6fd" stroke-width="1.8" stroke-linecap="round" opacity="0.5" />
        <!-- Main Highlight bubble -->
        <ellipse cx="36" cy="42" rx="10" ry="16" transform="rotate(-28 36 42)" fill="url(#dropHighlight)" />
        <!-- Bottom secondary glowing highlight -->
        <ellipse cx="62" cy="72" rx="6" ry="4" fill="#ffffff" opacity="0.45" />
      </svg>
    `;

    // High-Fidelity Realistic Biological Vector Plants (Non-cartoonish, with organic bark, highly detailed shading & vein-like accuracy)
    const PLANT_SVGS = {
      0: `
        <svg class="w-40 h-40 drop-shadow-[0_12px_28px_rgba(0,204,0,0.25)]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="soilDark" cx="60" cy="95" r="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#241107" />
              <stop offset="40%" stop-color="#140a04" />
              <stop offset="85%" stop-color="#080402" />
              <stop offset="100%" stop-color="#010000" />
            </radialGradient>
            <linearGradient id="realisticSeed" x1="45" y1="40" x2="75" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#d97706" />
              <stop offset="30%" stop-color="#b45309" />
              <stop offset="70%" stop-color="#78350F" />
              <stop offset="100%" stop-color="#451a03" />
            </linearGradient>
            <radialGradient id="auroraGreen" cx="60" cy="55" r="35" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#00cc00" stop-opacity="0.45" />
              <stop offset="100%" stop-color="#00cc00" stop-opacity="0" />
            </radialGradient>
          </defs>
          <!-- Rich realistic multi-layered soil bed with mineral specks -->
          <ellipse cx="60" cy="96" rx="52" ry="18" fill="url(#soilDark)" stroke="#3a1b0c" stroke-width="1.2" />
          <path d="M22 96 C28 92 48 94 60 92 C72 90 94 92 102 96 C94 100 70 102 60 102 C42 102 26 100 22 96 Z" fill="#1b0c05" />
          <ellipse cx="58" cy="93" rx="25" ry="8" fill="#120602" opacity="0.8" />
          
          <!-- Aurora glow -->
          <circle cx="60" cy="60" r="35" fill="url(#auroraGreen)" />

          <!-- A highly detailed organic seedling crack with fine realistic shoot emerging -->
          <!-- Fine bark textured lines under seedling -->
          <path d="M54 75 Q42 60 56 46" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" opacity="0.9" />
          <path d="M54 75 Q42 60 56 46" stroke="#86efac" stroke-width="0.8" stroke-linecap="round" opacity="0.4" />
          
          <!-- Sprouting miniature leaves with visible biological structural lines (Vibrant Green) -->
          <path d="M56 46 C56 46 44 38 42 26 C42 26 55 24 59 38 Z" fill="#00cc00" stroke="#166534" stroke-width="0.5" />
          <path d="M56 46 Q47 38 42 26" stroke="#adff2f" stroke-width="0.6" opacity="0.7" />
          
          <path d="M60 44 C60 44 72 38 74 26 C72 26 62 24 58 38 Z" fill="#22c55e" stroke="#14532d" stroke-width="0.5" />
          <path d="M60 44 Q68 38 74 26" stroke="#adff2f" stroke-width="0.6" opacity="0.7" />

          <!-- Biological Nut-shell (The Seed) with detailed texture mapping -->
          <path d="M60 42 C72 42 80 66 60 90 C40 66 48 42 60 42 Z" fill="url(#realisticSeed)" stroke="#3a1b0c" stroke-width="1" />
          <!-- Fiber-like realistic textures on the seed shell -->
          <path d="M60 42 Q66 62 60 90" stroke="#2a1204" stroke-width="1" opacity="0.6" />
          <path d="M52 48 Q58 66 58 84" stroke="#2a1204" stroke-width="0.8" opacity="0.5" />
          <path d="M68 48 Q62 66 62 84" stroke="#5c2c06" stroke-width="0.8" opacity="0.4" />
          
          <!-- Tiny high fidelity sparkles -->
          <circle cx="36" cy="40" r="1.5" fill="#00cc00" class="animate-ping" style="animation-duration: 2.5s;" />
          <circle cx="86" cy="48" r="1.2" fill="#FFE082" class="animate-pulse" />
        </svg>
      `,
      1: `
        <svg class="w-40 h-40 drop-shadow-[0_12px_28px_rgba(0,204,0,0.3)]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="realisticStem" x1="60" y1="100" x2="68" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#14532D" />
              <stop offset="30%" stop-color="#166534" />
              <stop offset="70%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#4ADE80" />
            </linearGradient>
            <!-- High-Fidelity Leaf Shading (Vibrant Green #00cc00 Base) -->
            <linearGradient id="leafLeft" x1="62" y1="62" x2="22" y2="48" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#166534" />
              <stop offset="50%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#86EFAC" />
            </linearGradient>
            <linearGradient id="leafRight" x1="70" y1="42" x2="108" y2="28" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#15803D" />
              <stop offset="50%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#a7f3d0" />
            </linearGradient>
          </defs>
          <!-- Ground Base -->
          <ellipse cx="60" cy="100" rx="44" ry="9" fill="#130804" />
          
          <!-- Curved tapered realistic stem with biological nodes -->
          <path d="M60 100 Q56 68 70 38 T73 22" stroke="url(#realisticStem)" stroke-width="4.5" stroke-linecap="round" />
          <path d="M58.5 98 Q54.5 68 68.2 38" stroke="#ffffff" stroke-width="0.8" opacity="0.25" />
          
          <!-- Detailed Left Leaf with organic curves, sharp points, and clear vein architecture -->
          <path d="M62 62 C42 52 22 55 22 55 C22 55 32 78 58 68 Z" fill="url(#leafLeft)" stroke="#14532D" stroke-width="0.75" />
          <!-- Primary & Secondary Leaf Veins -->
          <path d="M62 62 Q42 58 22 55" stroke="#052e16" stroke-width="1.2" opacity="0.65" />
          <path d="M50 60 Q42 66 38 72" stroke="#052e16" stroke-width="0.6" opacity="0.4" />
          <path d="M42 58 Q34 60 30 63" stroke="#052e16" stroke-width="0.6" opacity="0.4" />
          <path d="M56 62 Q48 55 45 50" stroke="#052e16" stroke-width="0.6" opacity="0.4" />

          <!-- Detailed Right Leaf -->
          <path d="M70 42 C88 28 108 30 108 30 C108 30 98 48 76 44 Z" fill="url(#leafRight)" stroke="#15803D" stroke-width="0.75" />
          <path d="M70 42 Q89 36 108 30" stroke="#052e16" stroke-width="1.2" opacity="0.65" />
          <path d="M82 41 Q92 42 98 45" stroke="#052e16" stroke-width="0.6" opacity="0.4" />
          <path d="M90 38 Q98 34 104 32" stroke="#052e16" stroke-width="0.6" opacity="0.4" />
          <path d="M78 42 Q82 48 85 52" stroke="#052e16" stroke-width="0.6" opacity="0.4" />

          <!-- Crystal clear realistic morning dew drop on leaf -->
          <circle cx="94" cy="31" r="3.2" fill="#E0F2FE" opacity="0.9" />
          <circle cx="92.5" cy="29.5" r="1" fill="#FFFFFF" />
          
          <circle cx="42" cy="58" r="2.2" fill="#E0F2FE" opacity="0.8" />
          <circle cx="41.2" cy="57" r="0.7" fill="#FFFFFF" />
        </svg>
      `,
      2: `
        <svg class="w-44 h-44 drop-shadow-[0_12px_32px_rgba(0,204,0,0.35)]" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Organic gnarled wood trunk gradient -->
            <linearGradient id="realisticTrunk" x1="60" y1="100" x2="60" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#1e0c03" />
              <stop offset="45%" stop-color="#3b1d11" />
              <stop offset="75%" stop-color="#5c2e1b" />
              <stop offset="100%" stop-color="#8f4f35" />
            </linearGradient>
            <!-- High density organic branch gradient -->
            <linearGradient id="foliageVibrantDark" x1="45" y1="35" x2="45" y2="65" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#00cc00" />
              <stop offset="60%" stop-color="#15803D" />
              <stop offset="100%" stop-color="#14532D" />
            </linearGradient>
            <linearGradient id="foliageVibrantLight" x1="76" y1="20" x2="76" y2="55" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#86EFAC" />
              <stop offset="60%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#166534" />
            </linearGradient>
          </defs>
          <!-- Ground shadows -->
          <ellipse cx="60" cy="100" rx="52" ry="11" fill="#0b0f0c" />
          
          <!-- Realistic gnarled trunk with separate growing branches & bark cleft textures -->
          <path d="M50 100 L56 65 C56 55 42 50 32 42 C44 45 53 50 56 48 C58 44 65 34 72 26 C68 34 63 42 59 48 L65 100 Z" fill="url(#realisticTrunk)" />
          <!-- Detailed bark crack strokes -->
          <path d="M57 95 Q54 75 58 65" stroke="#110500" stroke-width="1.8" opacity="0.8" />
          <path d="M60 98 Q59 80 62 70" stroke="#110500" stroke-width="1.5" opacity="0.8" />
          <path d="M53 88 Q56 78 55 60" stroke="#8f4f35" stroke-width="1" opacity="0.4" />
          
          <!-- Deep background shadows inside the foliage to represent organic mass -->
          <path d="M30 45 C20 30 48 15 55 28 C62 18 85 22 80 38 C92 38 88 58 72 52 C58 58 35 55 30 45 Z" fill="#064e3b" opacity="0.9" />

          <!-- Overlapping foliage shapes with detailed botanical outer cuts (Not cartoons circles) -->
          <!-- Left detailed organic canopy -->
          <path d="M22 42 C12 32 32 18 44 26 C44 14 68 18 62 34 C68 44 52 56 42 50 C30 54 24 48 22 42 Z" fill="url(#foliageVibrantDark)" stroke="#14532D" stroke-width="0.5" />
          
          <!-- Right detailed organic canopy -->
          <path d="M54 34 C50 20 74 8 84 22 C94 12 106 28 98 42 C92 50 78 50 72 40 C62 46 56 40 54 34 Z" fill="url(#foliageVibrantLight)" stroke="#166534" stroke-width="0.5" />
          
          <!-- Detailed leaf highlights (Vibrant Fresh Green #00cc00) -->
          <path d="M42 22 Q54 12 62 26" stroke="#4ade80" stroke-width="2" stroke-linecap="round" opacity="0.5" />
          <path d="M68 18 Q80 8 86 20" stroke="#86efac" stroke-width="2" stroke-linecap="round" opacity="0.6" />
          
          <!-- Red-orange botanical seed buds peeking through branches (realism detail) -->
          <circle cx="36" cy="40" r="3.5" fill="#f43f5e" stroke="#1e0c03" stroke-width="0.5" />
          <circle cx="34.5" cy="38.5" r="1" fill="#fff" />
          <circle cx="78" cy="44" r="3.2" fill="#f43f5e" stroke="#1e0c03" stroke-width="0.5" />
          <circle cx="76.8" cy="42.8" r="0.8" fill="#fff" />
        </svg>
      `,
      3: `
        <svg class="w-48 h-48 drop-shadow-[0_16px_36px_rgba(0,204,0,0.42)] animate-float" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <!-- Organic mossy soil base -->
            <linearGradient id="freshSoilGrad" x1="10" y1="100" x2="110" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#022c22" />
              <stop offset="45%" stop-color="#15803D" />
              <stop offset="55%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#022c22" />
            </linearGradient>
            <!-- High density organic leafy gradients -->
            <linearGradient id="canopyFreshLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#86EFAC" />
              <stop offset="50%" stop-color="#00cc00" />
              <stop offset="100%" stop-color="#16a34a" />
            </linearGradient>
            <linearGradient id="canopyFreshDark" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#00cc00" />
              <stop offset="60%" stop-color="#166534" />
              <stop offset="100%" stop-color="#022c22" />
            </linearGradient>
            <!-- Atmospheric sun god rays -->
            <linearGradient id="sunGodRays" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#FEF08A" stop-opacity="0.3" />
              <stop offset="40%" stop-color="#00cc00" stop-opacity="0.15" />
              <stop offset="100%" stop-color="#064e3b" stop-opacity="0" />
            </linearGradient>
            <!-- Biological Tree Trunk Textures -->
            <linearGradient id="realisticBark" x1="0" y1="100" x2="1" y2="100">
              <stop offset="0%" stop-color="#1e0c03" />
              <stop offset="50%" stop-color="#3f2212" />
              <stop offset="100%" stop-color="#1a0a02" />
            </linearGradient>
            <filter id="ultraSoftShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="5" stdDeviation="4" flood-color="#021c15" flood-opacity="0.5"/>
            </filter>
          </defs>
          
          <!-- Ground Terrain with realistic organic curvature -->
          <ellipse cx="60" cy="102" rx="56" ry="12" fill="url(#freshSoilGrad)" />
          <path d="M12 101 C30 96 60 97 78 96 C96 95 106 99 108 101 C98 105 75 106 60 106 C42 106 20 105 12 101 Z" fill="#14532D" opacity="0.6" />
          
          <!-- BACKGROUND LAYER: Distant realistic fir trees with high biological detail (Vibrant Green) -->
          <g filter="url(#ultraSoftShadow)">
            <!-- Left Background trunk & canopy -->
            <path d="M30 100 L30 75" stroke="#110500" stroke-width="2" />
            <!-- Detailed biological branch clusters (not circles) -->
            <path d="M10 74 C10 65 22 55 30 58 C35 48 48 56 44 65 C48 72 38 82 30 78 C18 82 10 78 10 74 Z" fill="url(#canopyFreshDark)" opacity="0.85" />
            
            <!-- Right Background tree -->
            <path d="M90 100 L90 70" stroke="#110500" stroke-width="2" />
            <path d="M72 68 C72 58 84 48 92 52 C98 42 110 50 106 60 C110 68 98 76 92 72 C80 76 72 72 72 68 Z" fill="url(#canopyFreshDark)" opacity="0.85" />
          </g>
          
          <!-- FOREGROUND LAYER: Detailed Centered Biological Tree -->
          <g filter="url(#ultraSoftShadow)">
            <!-- Curved organic trunk & branches structure -->
            <path d="M57 101 Q55 78 62 58 L52 48 L61 44 L63 32 L68 40 L65 58 Q61 78 64 101 Z" fill="url(#realisticBark)" />
            <!-- Realistic branch networks spreading underneath canopies -->
            <path d="M58 72 Q44 66 40 56" stroke="#2d1104" stroke-width="2.5" stroke-linecap="round" />
            <path d="M63 65 Q76 56 82 50" stroke="#2d1104" stroke-width="2.2" stroke-linecap="round" />
            
            <!-- Organic feathered foliage cloud masks representing millions of leaves -->
            <!-- Left mid canopy -->
            <path d="M24 54 C16 42 34 32 46 36 C52 26 68 36 62 46 C68 54 56 64 46 60 C34 64 24 58 24 54 Z" fill="url(#canopyFreshDark)" />
            <!-- Right mid canopy -->
            <path d="M54 44 C50 32 68 20 78 24 C84 14 100 24 94 34 C100 42 88 52 78 48 C68 52 54 46 54 44 Z" fill="url(#canopyFreshLight)" />
            <!-- Crown canopy -->
            <path d="M38 36 C34 26 50 14 58 18 C64 8 78 18 72 28 C78 36 68 44 58 40 C48 44 38 40 38 36 Z" fill="#86efac" opacity="0.9" />
          </g>

          <!-- Volumetric realistic light filtration beams (God Rays) -->
          <polygon points="12,0 68,0 98,110 32,110" fill="url(#sunGodRays)" style="mix-blend-mode: screen;" />
          <polygon points="42,0 84,0 120,110 72,110" fill="url(#sunGodRays)" style="mix-blend-mode: screen;" opacity="0.75" />

          <!-- Delicate magical spore particles & fireflies floating in the air -->
          <g>
            <circle cx="50" cy="42" r="2.2" fill="#00cc00" filter="drop-shadow(0 0 5px #00cc00)" class="animate-pulse" />
            <circle cx="85" cy="32" r="1.8" fill="#86EFAC" filter="drop-shadow(0 0 3px #86EFAC)" />
            <circle cx="28" cy="58" r="2.5" fill="#FFE082" filter="drop-shadow(0 0 4px #FFE082)" class="animate-ping" style="animation-duration: 4s;" />
            <circle cx="68" cy="70" r="1.5" fill="#4ADE80" />
            <circle cx="102" cy="46" r="2" fill="#00cc00" class="animate-pulse" />
          </g>
          
          <!-- Sun glares -->
          <circle cx="60" cy="24" r="1.2" fill="#fff" class="animate-ping" style="animation-duration: 2s;" />
          <circle cx="80" cy="38" r="1.5" fill="#fff" class="animate-ping" style="animation-duration: 3.5s;" />
        </svg>
      `,
      4: `
        <svg class="w-44 h-44 drop-shadow-[0_16px_40px_rgba(229,193,88,0.5)] animate-glow" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldTrunk" x1="0" y1="100" x2="0" y2="30" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#3b1500" />
              <stop offset="50%" stop-color="#d97706" />
              <stop offset="100%" stop-color="#fbbf24" />
            </linearGradient>
            <radialGradient id="goldLeafSovereign" cx="72" cy="32" r="32" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FFFDF5" />
              <stop offset="35%" stop-color="#FCD34D" />
              <stop offset="80%" stop-color="#D97706" />
              <stop offset="100%" stop-color="#78350F" />
            </radialGradient>
            <radialGradient id="goldLeafBG" cx="36" cy="40" r="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#FDE68A" />
              <stop offset="70%" stop-color="#B45309" />
              <stop offset="100%" stop-color="#451a03" />
            </radialGradient>
            <radialGradient id="crownGlow" cx="60" cy="50" r="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.35" />
              <stop offset="100%" stop-color="#fbbf24" stop-opacity="0" />
            </radialGradient>
          </defs>
          <!-- Divine Golden Glow -->
          <circle cx="60" cy="50" r="45" fill="url(#crownGlow)" />
          <ellipse cx="60" cy="102" rx="52" ry="11" fill="#130800" />
          <!-- Sacred Gold Stems -->
          <path d="M36 102 L36 65" stroke="url(#goldTrunk)" stroke-width="3" />
          <path d="M72 102 L72 55 L60 42 L72 38" stroke="url(#goldTrunk)" stroke-width="5" stroke-linecap="round" />
          <path d="M70 102 L70 58" stroke="#ffffff" stroke-width="1" opacity="0.3" />
          <!-- Overlapping Luxurious Golden Foliage -->
          <!-- BG Gold Tree -->
          <circle cx="36" cy="42" r="22" fill="url(#goldLeafBG)" />
          <circle cx="22" cy="48" r="14" fill="#78350F" opacity="0.8" />
          <!-- FG Celestial Tree -->
          <circle cx="72" cy="34" r="28" fill="url(#goldLeafSovereign)" />
          <circle cx="92" cy="40" r="18" fill="#FCD34D" opacity="0.9" />
          <circle cx="56" cy="38" r="16" fill="#D97706" opacity="0.95" />
          <!-- Shining Highlights (Gloss Elements) -->
          <circle cx="68" cy="22" r="10" fill="#FFFDF5" opacity="0.3" />
          <!-- Sparkling Wealth Dust Particles -->
          <path d="M50 20 L52 25 L57 25 L53 28 L55 33 L50 30 L45 33 L47 28 L43 25 L48 25 Z" fill="#FFE082" class="animate-pulse" />
          <circle cx="28" cy="28" r="2" fill="#fff" class="animate-ping" style="animation-duration: 1.5s;" />
          <circle cx="98" cy="26" r="1.5" fill="#FFFDF5" class="animate-pulse" />
          <circle cx="85" cy="58" r="2.5" fill="#FCD34D" class="animate-pulse" />
        </svg>
      `
    };

    // Helper: Trigger Custom Toast Message
    function triggerToast(msg) {
      const toast = document.getElementById('toast');
      const toastMsg = document.getElementById('toast-msg');
      toastMsg.innerText = msg;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }

    // Helper: Save current state variables to LocalStorage
    function saveStateToLocalStorage() {
      localStorage.setItem('verdant_transactions', JSON.stringify(transactions));
      localStorage.setItem('verdant_min_balance', minBalance.toString());
      localStorage.setItem('verdant_water_drops', waterDrops.toString());
      localStorage.setItem('verdant_exp_points', expPoints.toString());
    }

    // Reset Data Helper
    function confirmResetData() {
      if (confirm('คุณต้องการรีเซ็ตข้อมูลธุรกรรมและสถานะต้นไม้ทั้งหมดกลับเป็นค่าเริ่มต้น (Mock Data) หรือไม่?')) {
        localStorage.removeItem('verdant_transactions');
        localStorage.removeItem('verdant_min_balance');
        localStorage.removeItem('verdant_water_drops');
        localStorage.removeItem('verdant_exp_points');
        
        transactions = INITIAL_TRANSACTIONS;
        minBalance = 3000;
        waterDrops = 38;
        expPoints = 240;

        saveStateToLocalStorage();
        updateMetrics();
        
        if (activeTab === 'dashboard') {
          renderChart();
        } else if (activeTab === 'ledger') {
          renderLedgerTable();
        } else if (activeTab === 'garden') {
          renderGardenView();
        }
        
        triggerToast('รีเซ็ตข้อมูล Mock Data สำเร็จแล้ว!');
      }
    }

    // Tab Switching
    function switchTab(tabId) {
      activeTab = tabId;
      
      // Update UI Tabs Styles themed to #00cc00
      ['dashboard', 'ledger', 'garden'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        const view = document.getElementById(`tab-${t}`);
        
        if (t === tabId) {
          btn.className = "px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all bg-gradient-to-r from-emerald-950/50 to-emerald-900/40 text-[#00cc00] border border-[#00cc00]/40 shadow-[0_0_12px_rgba(0,204,0,0.1)]";
          view.classList.remove('hidden');
        } else {
          btn.className = "px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all text-slate-400 hover:text-slate-100 hover:bg-emerald-950/20";
          view.classList.add('hidden');
        }
      });

      // Special re-render triggers
      if (tabId === 'dashboard') {
        renderChart();
      } else if (tabId === 'ledger') {
        renderLedgerTable();
      } else if (tabId === 'garden') {
        renderGardenView();
      }
    }

    // Calculate all metrics & re-render values
    function updateMetrics() {
      let totalIncome = 0;
      let totalExpense = 0;
      let totalFutureExpense = 0;
      let totalSavings = 0;

      transactions.forEach(t => {
        const amount = parseFloat(t.amount) || 0;
        if (t.type === 'income') totalIncome += amount;
        else if (t.type === 'expense') totalExpense += amount;
        else if (t.type === 'future_expense') totalFutureExpense += amount;
        else if (t.type === 'saving') totalSavings += amount;
      });

      // Actual Balance = Income - Expenses - Savings
      const currentBalance = totalIncome - totalExpense - totalSavings;
      const safeToSpend = currentBalance - totalFutureExpense;

      // Days remaining calculation
      const today = new Date();
      const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      const totalDays = lastDayOfMonth.getDate();
      const currentDay = today.getDate();
      const daysRemaining = Math.max(1, totalDays - currentDay + 1);

      // Daily allowance
      const dailyAllowance = Math.max(0, safeToSpend / daysRemaining);

      // Update Header Badges & Ledger counter
      document.getElementById('ledger-count').innerText = transactions.length;
      const badgeDrops = document.getElementById('badge-drops');
      if (waterDrops > 0) {
        badgeDrops.innerText = waterDrops;
        badgeDrops.classList.remove('hidden');
      } else {
        badgeDrops.classList.add('hidden');
      }

      // Populate dashboard card metrics
      document.getElementById('metric-balance').innerText = currentBalance.toLocaleString();
      document.getElementById('metric-safe-spend').innerText = safeToSpend.toLocaleString();
      document.getElementById('metric-future-total').innerText = totalFutureExpense.toLocaleString();
      document.getElementById('metric-daily-allowance').innerText = dailyAllowance.toLocaleString(undefined, { maximumFractionDigits: 1 });
      document.getElementById('metric-days-remaining').innerText = daysRemaining;

      // Safety Threshold Alarm Warning check
      const warningBar = document.getElementById('warning-bar');
      if (currentBalance < minBalance) {
        document.getElementById('warn-current-balance').innerText = currentBalance.toLocaleString();
        document.getElementById('warn-min-balance').innerText = minBalance.toLocaleString();
        warningBar.classList.remove('hidden');
      } else {
        warningBar.classList.add('hidden');
      }

      // Populate Dimensional Droplets to designated dynamic slots
      document.getElementById('sidebar-droplet-icon').innerHTML = DIM_DROPLET_HTML('w-full h-full');
      document.getElementById('sidebar-btn-drop-icon').innerHTML = DIM_DROPLET_HTML('w-5 h-5');

      // Sync views
      renderPlantGrowthStats();
    }

    // Level Stages Definition logic based on XP
    function getPlantLevelData() {
      const xp = expPoints;
      if (xp < 50) {
        return { stage: 0, label: 'เมล็ดวิเศษ', desc: 'ต้องการรดน้ำอีกเพื่อเริ่มงอกเงย', threshold: 50, percent: (xp / 50) * 100, current: xp };
      } else if (xp < 150) {
        return { stage: 1, label: 'ต้นกล้าแห่งความหวัง', desc: 'เริ่มแตกกิ่งก้านใบสีเขียวขจี', threshold: 150, percent: ((xp - 50) / 100) * 100, current: xp - 50 };
      } else if (xp < 350) {
        return { stage: 2, label: 'ต้นไม้แห่งความมั่งคั่ง', desc: 'แผ่ร่มเงาคุ้มครองสุขภาพการเงินของคุณ', threshold: 350, percent: ((xp - 150) / 200) * 100, current: xp - 150 };
      } else if (xp < 700) {
        return { stage: 3, label: 'ผืนป่าอันสมบูรณ์', desc: 'ระบบนิเวศการเงินที่มั่นคงและยั่งยืน', threshold: 700, percent: ((xp - 350) / 350) * 100, current: xp - 350 };
      } else {
        return { stage: 4, label: 'ป่าทองคำจักรพรรดิ', desc: 'ป่าเรืองรองประกายทอง แหล่งขุมทรัพย์ที่ยอดเยี่ยมที่สุด!', threshold: 1000, percent: 100, current: xp };
      }
    }

    // Populate Sidebar plant growth elements
    function renderPlantGrowthStats() {
      const data = getPlantLevelData();
      document.getElementById('sidebar-drops').innerText = waterDrops;
      
      // Update Graphic
      document.getElementById('plant-graphic-container').innerHTML = PLANT_SVGS[data.stage];
      document.getElementById('plant-stage-badge').innerText = `สถานะ: ${data.label}`;
      document.getElementById('plant-stage-desc').innerText = data.desc;
      
      // Update XP Progress Bar
      if (data.stage === 4) {
        document.getElementById('plant-xp-text').innerText = `${expPoints} XP (ระดับสูงสุด)`;
      } else {
        document.getElementById('plant-xp-text').innerText = `${data.current} / ${data.threshold} XP`;
      }
      document.getElementById('plant-xp-bar').style.width = `${data.percent}%`;
    }

    // Premium Web Audio Droplet Sound Synthesis
    function playWateringSound() {
      try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5 Node
        osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.3); // C6 node
        
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } catch (e) {
        // Prevent interface audio errors
      }
    }

    // Watering Action
    function waterPlant() {
      if (waterDrops <= 0) {
        triggerToast('หยดน้ำไม่เพียงพอ! มาร่วมสะสมเงินออมเพิ่มเพื่อสะสมหยดน้ำรดน้ำต้นไม้นะครับ 💧');
        return;
      }

      waterDrops -= 1;
      playWateringSound();

      // Watering Animation Trigger
      const sparkle = document.getElementById('watering-sparkle');
      sparkle.classList.remove('hidden');
      const plantGraphic = document.getElementById('plant-graphic-container');
      plantGraphic.classList.add('scale-110', 'rotate-1');

      setTimeout(() => {
        sparkle.classList.add('hidden');
        plantGraphic.classList.remove('scale-110', 'rotate-1');
        expPoints += 10;
        
        saveStateToLocalStorage();
        updateMetrics();
        triggerToast('รดน้ำสำเร็จ! ต้นไม้ได้รับสารอาหารแสนหวาน เติบโตขึ้น 10 XP ✨🌱');

        // If currently in garden view, refresh it
        if (activeTab === 'garden') {
          renderGardenView();
        }
      }, 900);
    }

    // Modal Control: Open and preset transaction modal type
    function openAddModal(type) {
      currentTxType = type;
      setTxType(type);
      
      // Preset current date (Bangkok Local Time)
      document.getElementById('tx-date').value = new Date().toISOString().split('T')[0];
      
      const modal = document.getElementById('add-modal');
      modal.classList.remove('hidden');
    }

    function closeAddModal() {
      const modal = document.getElementById('add-modal');
      modal.classList.add('hidden');
      
      // Clean inputs
      document.getElementById('tx-amount').value = '';
      document.getElementById('tx-category').value = '';
      document.getElementById('tx-desc').value = '';
    }

    function setTxType(type) {
      currentTxType = type;
      const tabs = {
        income: document.getElementById('tab-tx-income'),
        expense: document.getElementById('tab-tx-expense'),
        future_expense: document.getElementById('tab-tx-future'),
        saving: document.getElementById('tab-tx-saving')
      };

      // Reset styles & select active themed with #00cc00
      Object.keys(tabs).forEach(k => {
        if (k === type) {
          if (k === 'expense') {
            tabs[k].className = "py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all bg-rose-500 text-white";
          } else if (k === 'income') {
            tabs[k].className = "py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all bg-[#00cc00] text-[#060D0A]";
          } else if (k === 'future_expense') {
            tabs[k].className = "py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all bg-amber-500 text-[#060D0A]";
          } else if (k === 'saving') {
            tabs[k].className = "py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all bg-sky-500 text-[#060D0A]";
          }
        } else {
          tabs[k].className = "py-2 rounded-xl text-[10px] font-bold tracking-wide transition-all text-slate-400 hover:text-white";
        }
      });
    }

    // Form Event: Handle Add Transaction
    function handleAddTransaction(event) {
      event.preventDefault();

      const amountVal = parseFloat(document.getElementById('tx-amount').value);
      const categoryVal = document.getElementById('tx-category').value || 'อื่นๆ';
      const dateVal = document.getElementById('tx-date').value;
      const descVal = document.getElementById('tx-desc').value || '-';

      if (!amountVal || amountVal <= 0) return;

      const newTx = {
        id: Date.now().toString(),
        type: currentTxType,
        amount: amountVal,
        category: categoryVal,
        date: dateVal,
        description: descVal
      };

      transactions.unshift(newTx);

      // Saving reward rule: 1 drop of water for every 100 THB saved
      if (currentTxType === 'saving') {
        const earnedDrops = Math.floor(amountVal / 100);
        if (earnedDrops > 0) {
          waterDrops += earnedDrops;
          triggerToast(`ฝากเงินออมสำเร็จ! ได้รับน้ำวิเศษเพื่อนำไปดูแลต้นไม้จำนวน ${earnedDrops} หยด 💧`);
        } else {
          triggerToast(`บันทึกรายการเงินออมเรียบร้อยแล้ว`);
        }
      } else {
        const typeLabels = {
          income: 'รายรับ',
          expense: 'รายจ่าย',
          future_expense: 'รายจ่ายล่วงหน้า'
        };
        triggerToast(`เพิ่มรายการ ${typeLabels[currentTxType]} เรียบร้อยแล้ว`);
      }

      saveStateToLocalStorage();
      updateMetrics();
      closeAddModal();
      
      // Update charts/lists dynamically if on relevant page
      if (activeTab === 'dashboard') {
        renderChart();
      } else if (activeTab === 'ledger') {
        renderLedgerTable();
      }
    }

    // Ledger Actions: Delete items
    function deleteTransaction(id) {
      const targetTx = transactions.find(t => t.id === id);
      if (!targetTx) return;

      // Saving deletion penalty
      if (targetTx.type === 'saving') {
        const dropReduction = Math.floor(targetTx.amount / 100);
        waterDrops = Math.max(0, waterDrops - dropReduction);
      }

      transactions = transactions.filter(t => t.id !== id);
      
      saveStateToLocalStorage();
      updateMetrics();
      renderLedgerTable();
      triggerToast('ลบรายการธุรกรรมออกเรียบร้อยแล้ว');
    }

    // Populate Ledger List Table
    function renderLedgerTable() {
      const tbody = document.getElementById('ledger-tbody');
      const table = document.getElementById('ledger-table');
      const noData = document.getElementById('no-ledger-data');
      
      tbody.innerHTML = '';

      if (transactions.length === 0) {
        table.classList.add('hidden');
        noData.classList.remove('hidden');
        return;
      }

      table.classList.remove('hidden');
      noData.classList.add('hidden');

      transactions.forEach(t => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-emerald-950/10 transition-colors";

        const formattedDate = new Date(t.date).toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
        
        let typeBadge = '';
        let amountStyle = '';
        let prefix = '-';

        if (t.type === 'income') {
          typeBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00cc00]/10 text-[#00cc00] font-semibold text-[10px]"><i data-lucide="trending-up" class="h-3 w-3"></i> รายรับ</span>`;
          amountStyle = "text-[#00cc00]";
          prefix = '+';
        } else if (t.type === 'expense') {
          typeBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-300 font-semibold text-[10px]"><i data-lucide="trending-down" class="h-3 w-3"></i> รายจ่าย</span>`;
          amountStyle = "text-rose-400";
        } else if (t.type === 'future_expense') {
          typeBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 font-semibold text-[10px]"><i data-lucide="calendar" class="h-3 w-3"></i> รายจ่ายล่วงหน้า</span>`;
          amountStyle = "text-rose-400";
        } else if (t.type === 'saving') {
          typeBadge = `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 font-semibold text-[10px]"><i data-lucide="coins" class="h-3 w-3"></i> เงินออม</span>`;
          amountStyle = "text-sky-400";
        }

        tr.innerHTML = `
          <td class="py-4 px-6 font-medium text-slate-300">${formattedDate}</td>
          <td class="py-4 px-6">${typeBadge}</td>
          <td class="py-4 px-6 text-slate-300 font-semibold">${t.category}</td>
          <td class="py-4 px-6 text-slate-400 max-w-xs truncate" title="${t.description}">${t.description}</td>
          <td class="py-4 px-6 text-right font-bold text-sm ${amountStyle}">
            ${prefix}${t.amount.toLocaleString()} <span class="text-[10px] font-normal">THB</span>
          </td>
          <td class="py-4 px-6 text-center">
            <button
              onclick="deleteTransaction('${t.id}')"
              class="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-all"
              title="ลบรายการ"
            >
              <i data-lucide="trash-2" class="h-4 w-4"></i>
            </button>
          </td>
        `;

        tbody.appendChild(tr);
      });

      // Refresh newly rendered icons
      lucide.createIcons();
    }

    // Populate Interactive Garden Section
    function renderGardenView() {
      const data = getPlantLevelData();
      
      document.getElementById('garden-stage-label').innerText = data.label;
      document.getElementById('garden-xp-label').innerText = `รวมทั้งหมด ${expPoints} XP`;
      document.getElementById('garden-floating-xp').innerText = expPoints;
      document.getElementById('garden-water-drops').innerText = waterDrops;

      // Populate Garden custom droplets
      document.getElementById('garden-water-drops-icon').innerHTML = DIM_DROPLET_HTML('w-full h-full');

      // Update button disabled state
      const btn = document.getElementById('btn-water-garden');
      if (waterDrops <= 0) {
        btn.setAttribute('disabled', 'true');
        btn.className = "w-full bg-slate-900 text-slate-500 border border-slate-800/40 cursor-not-allowed font-bold py-3.5 px-4 rounded-xl text-xs transition-all";
      } else {
        btn.removeAttribute('disabled');
        btn.className = "w-full bg-gradient-to-r from-sky-500 to-[#00cc00] text-[#060D0A] font-bold py-3.5 px-4 rounded-xl text-xs transition-all hover:opacity-90";
      }

      // Map SVG Rendering inside Simulator Window
      const targetG = document.getElementById('garden-main-graphic');
      targetG.innerHTML = PLANT_SVGS[data.stage];
    }

    // Modal Control: Safety Settings threshold update
    function openSettingsModal() {
      document.getElementById('settings-min-balance').value = minBalance;
      document.getElementById('settings-modal').classList.remove('hidden');
    }

    function closeSettingsModal() {
      document.getElementById('settings-modal').classList.add('hidden');
    }

    // Save Threshold Alert Configurations
    function saveSettings() {
      const val = parseFloat(document.getElementById('settings-min-balance').value);
      if (isNaN(val) || val < 0) return;

      minBalance = val;
      
      saveStateToLocalStorage();
      updateMetrics();
      closeSettingsModal();
      triggerToast('ตั้งค่าระดับปลอดภัยเรียบร้อยแล้ว');
    }

    // Chart.js Generation Logic with modern styling
    function renderChart() {
      // Dynamic Timeline Summary Map
      const timelineData = {};
      
      transactions.forEach(t => {
        const dateObj = new Date(t.date);
        const monthLabel = dateObj.toLocaleString('th-TH', { month: 'short' });
        
        if (!timelineData[monthLabel]) {
          timelineData[monthLabel] = { month: monthLabel, income: 0, expense: 0, saving: 0 };
        }
        
        if (t.type === 'income') {
          timelineData[monthLabel].income += parseFloat(t.amount);
        } else if (t.type === 'expense' || t.type === 'future_expense') {
          timelineData[monthLabel].expense += parseFloat(t.amount);
        } else if (t.type === 'saving') {
          timelineData[monthLabel].saving += parseFloat(t.amount);
        }
      });

      const months = Object.keys(timelineData);
      
      if (months.length === 0) {
        document.getElementById('financialChart').classList.add('hidden');
        document.getElementById('no-chart-data').classList.remove('hidden');
        return;
      }

      document.getElementById('financialChart').classList.remove('hidden');
      document.getElementById('no-chart-data').classList.add('hidden');

      const datasetIncome = [];
      const datasetExpense = [];
      const datasetSaving = [];

      months.forEach(m => {
        datasetIncome.push(timelineData[m].income);
        datasetExpense.push(timelineData[m].expense);
        datasetSaving.push(timelineData[m].saving);
      });

      // Destroy old instance if already generated to prevent rendering bugs
      if (financialChart) {
        financialChart.destroy();
      }

      const ctx = document.getElementById('financialChart').getContext('2d');
      financialChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            {
              label: 'รายรับ',
              data: datasetIncome,
              borderColor: '#00cc00', // Updated line color to `#00cc00`
              backgroundColor: 'rgba(0, 204, 0, 0.12)',
              tension: 0.3,
              fill: true,
              borderWidth: 2
            },
            {
              label: 'รายจ่ายรวม',
              data: datasetExpense,
              borderColor: '#f43f5e',
              backgroundColor: 'rgba(244, 63, 94, 0.05)',
              tension: 0.3,
              fill: true,
              borderWidth: 2
            },
            {
              label: 'เงินออม',
              data: datasetSaving,
              borderColor: '#E5C158',
              backgroundColor: 'transparent',
              borderDash: [5, 5],
              tension: 0.3,
              borderWidth: 1.5
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false // We use our custom HTML legend instead
            },
            tooltip: {
              backgroundColor: '#0B1512',
              titleColor: '#00cc00',
              bodyColor: '#cbd5e1',
              borderColor: '#00cc00',
              borderWidth: 1,
              cornerRadius: 12,
              padding: 10
            }
          },
          scales: {
            x: {
              grid: {
                color: '#0D221A'
              },
              ticks: {
                color: '#475569',
                font: {
                  size: 11
                }
              }
            },
            y: {
              grid: {
                color: '#0D221A'
              },
              ticks: {
                color: '#475569',
                font: {
                  size: 11
                }
              }
            }
          }
        }
      });
    }

    // Initializer Setup
    window.onload = function() {
      lucide.createIcons();
      updateMetrics();
      renderChart();
    };
  </script>
</body>
</html>