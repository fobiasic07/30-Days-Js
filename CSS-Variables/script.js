const inputs = document.querySelectorAll('.inputs input');

    function handleChange (){
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    };

    inputs.forEach(inputs => inputs.addEventListener('change', handleChange));
    inputs.forEach(inputs => inputs.addEventListener('mousemove', handleChange));