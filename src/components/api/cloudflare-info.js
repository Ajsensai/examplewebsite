// cloudflare-info.js

class TypewriterWidget extends HTMLElement {
  constructor() {
    super();
    this.i = 0;
    this.txt = "IP: Loading";
    this.speed = 55;

    this.attachShadow({ mode: 'open' });

    const typewriter = document.createElement('div');
    typewriter.setAttribute('id', 'typewriter');
    this.shadowRoot.appendChild(typewriter);
  }

  connectedCallback() {
    this.fetchCloudflareInfo();
  }

  typeWriter() {
    if (this.i < this.txt.length) {
      this.shadowRoot.getElementById('typewriter').textContent += this.txt.charAt(this.i);
      this.i++;
      setTimeout(() => this.typeWriter(), this.speed);
    }
  }

  fetchCloudflareInfo() {
    const url = "https://1.1.1.1/cdn-cgi/trace";

    fetch(url)
      .then(response => response.text())
      .then(data => {
        const lines = data.split('\n');
        const info = {};
        for (const line of lines) {
          const [key, value] = line.split('=');
          if (key && value) {
            info[key] = value;
          }
        }

        // Update the typewriter with the fetched Cloudflare information
        this.txt = `You are connecting from ${info['colo']}, ${info['loc']} using ${info['ip']}`;
        this.typeWriter();
      })
      .catch(error => {
        console.error("Error fetching Cloudflare information:", error);
      });
  }
}

customElements.define('typewriter-widget', TypewriterWidget);
