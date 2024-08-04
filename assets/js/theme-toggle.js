document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.querySelector('#theme-switch');
  
    if (toggleSwitch) {
      toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        }
      });
  
      const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
  
      if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
  
        if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
        }
      }
    }
  });
  