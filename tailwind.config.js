/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  options: {
    safelist: ['active'], // Tambahkan 'active' agar tidak dihapus
  },
  theme: {
    container :  {
      center : true,
      padding : '16px',
    },
    extend: {
      margin: {
        '15p': '15%',
      },
      width: {
        '50%': '50%',
        '80%' : '80%',
      },
      colors : {
        primary : '#14b8a6',
        gelap : '#0f172a',
        abu : '#aaa',
      },
      screens : {
        '2xl' : '1320px',
        'xs'  : '390px',
        'sl'  : '360px',
      },
      boxShadow: {  
        'xl-primary': '0 10px 20px 0 rgba(20, 184, 166, 0.8)',
      },
      keyframes: {
        borderAnimation: {
          '20%': { borderColor: '#1d4ed8' }, //biru 
          '40%': { borderColor: '#be185d' }, //pink
          '60%': { borderColor: '#6d28d9' }, //violet
          '80%': { borderColor: '#b91c1c' }, //red
          '100%' : { borderColor: '#374151' }, //gray
        },
      },
      animation: {
        'border-color': 'borderAnimation 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

